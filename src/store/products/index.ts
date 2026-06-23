import { create } from 'zustand';

import useSecuritySystemStore from '../security-system';

import type { TSystemProductType } from '@/types/system-builder';
import type { TProductsStore } from '@/types/store/products';
import type { TProduct } from '@/types/product';

const useProductsStore = create<TProductsStore>((set) => ({
    cameras: [],
    sensors: [],
    accessories: [],

    setProducts: (products) => {
        set({ ...products });

        if (!products) {
            return;
        }

        for (const [productType, productList] of Object.entries(products) as [TSystemProductType, TProduct[]][]) {
            for (const product of productList) {
                if (!product.requiresOnlyOne) {
                    continue;
                }

                const variantId = product.variants[0]?.id || '';

                useSecuritySystemStore.getState().putSecuritySystemProduct(productType, product.id, variantId, 1);
            }
        }
    },
}));

export default useProductsStore;
