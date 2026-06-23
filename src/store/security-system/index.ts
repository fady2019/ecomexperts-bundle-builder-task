import { create } from 'zustand';

import useUIStore from '@/store/ui';
import useProductsStore from '@/store/products';
import usePlansStore from '@/store/plans';

import type { TSecuritySystemState, TSecuritySystemStore } from '@/types/store/security-system';
import { SYSTEM_PRODUCT_TYPES } from '@/types/system-builder';

const useSecuritySystemStore = create<TSecuritySystemStore>((set, get) => ({
    cameras: {},
    sensors: {},
    accessories: {},
    plans: [],
    totalPrice: 0,
    totalDiscount: 0,

    putSecuritySystemProduct: (productType, productId, variantId, quantity) => {
        variantId ||= '';

        set((state) => {
            const productGroup = state[productType] || {};
            const product = productGroup[productId] || {};

            if (quantity > 0) {
                return {
                    [productType]: {
                        ...productGroup,
                        [productId]: {
                            ...product,
                            [variantId]: quantity,
                        },
                    },
                };
            }

            delete product[variantId];

            if (!Object.keys(product).length) {
                delete productGroup[productId];

                return {
                    [productType]: {
                        ...productGroup,
                    },
                };
            }

            return {
                [productType]: {
                    ...productGroup,
                    [productId]: {
                        ...product,
                    },
                },
            };
        });

        get().updateTotalPriceAndDiscount();
    },
    putSecuritySystemPlan: (planId) => {
        set({ plans: [planId] });

        get().updateTotalPriceAndDiscount();
    },
    saveSecuritySystem: () => {
        const setNotification = useUIStore.getState().setNotification;

        try {
            localStorage.setItem('security-system-store', JSON.stringify(get()));
            setNotification({ id: Date.now(), type: 'success', content: 'Your security system saved successfully!' });
        } catch (error) {
            setNotification({ id: Date.now(), type: 'error', content: (error as Error).message });
        }
    },
    loadSecuritySystem: () => {
        const setNotification = useUIStore.getState().setNotification;

        try {
            const stateAsString = localStorage.getItem('security-system-store');

            if (!stateAsString) {
                return;
            }

            set({ ...(JSON.parse(stateAsString) as TSecuritySystemState) });

            get().updateTotalPriceAndDiscount();

            setNotification({ id: Date.now(), type: 'success', content: 'Your security system loaded successfully!' });
        } catch (error) {
            setNotification({ id: Date.now(), type: 'error', content: (error as Error).message });
        }
    },
    updateTotalPriceAndDiscount: () => {
        let totalPrice = 0;
        let totalDiscount = 0;

        for (const productType of SYSTEM_PRODUCT_TYPES) {
            const idToProductMap = new Map(
                useProductsStore.getState()[productType].map((product) => [product.id, product]),
            );

            for (const [productId, productConfig] of Object.entries(get()[productType])) {
                const product = idToProductMap.get(productId);

                if (!product) {
                    continue;
                }

                for (const quantity of Object.values(productConfig)) {
                    totalPrice += product.price * quantity;
                    totalDiscount += (product.price - product.salePrice) * quantity;
                }
            }
        }

        const [selectedPlan] = get().plans;
        const place = usePlansStore.getState().plans.find((plan) => plan.id === selectedPlan);

        if (place) {
            totalPrice += place.pricePerMonth;
            totalDiscount += place.pricePerMonth - place.salePricePerMonth;
        }

        totalPrice = Number(totalPrice.toFixed(2));
        totalDiscount = Number(totalDiscount.toFixed(2));

        set({ totalPrice, totalDiscount });
    },
}));

export default useSecuritySystemStore;
