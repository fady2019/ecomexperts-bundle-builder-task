import { create } from 'zustand';

import useUIStore from '@/store/ui';

import type { TSecuritySystemState, TSecuritySystemStore } from '@/types/store/shopper-system';

const useSecuritySystemStore = create<TSecuritySystemStore>((set, get) => ({
    cameras: {},
    plans: {},
    sensors: {},
    accessories: {},

    putSecuritySystemItem: (productKey, productId, variantId, quantity) => {
        variantId ||= '';

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
