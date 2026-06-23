import { create } from 'zustand';

import useUIStore from '@/store/ui';

import type { TSecuritySystemState, TSecuritySystemStore } from '@/types/store/security-system';

const useSecuritySystemStore = create<TSecuritySystemStore>((set, get) => ({
    cameras: {},
    sensors: {},
    accessories: {},
    plans: [],

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
    },
    putSecuritySystemPlan: (planId) => {
        set({ plans: [planId] });
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

            setNotification({ id: Date.now(), type: 'success', content: 'Your security system loaded successfully!' });
        } catch (error) {
            setNotification({ id: Date.now(), type: 'error', content: (error as Error).message });
        }
    },
}));

export default useSecuritySystemStore;
