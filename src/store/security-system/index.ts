import { create } from 'zustand';

import type { TSecuritySystemStore } from '@/types/store/shopper-system';

const useSecuritySystemStore = create<TSecuritySystemStore>((set) => ({
    cameras: {},
    plans: {},
    sensors: {},
    accessories: {},

    putSecuritySystemItem: (productKey, productId, variantId, quantity) => {
        set((state) => {
            const productGroup = state[productKey] || {};
            const product = productGroup[productId] || {};

            if (quantity > 0) {
                return {
                    [productKey]: {
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
                    [productKey]: {
                        ...productGroup,
                    },
                };
            }

            return {
                [productKey]: {
                    ...productGroup,
                    [productId]: {
                        ...product,
                    },
                },
            };
        });
    },
}));

export default useSecuritySystemStore;
