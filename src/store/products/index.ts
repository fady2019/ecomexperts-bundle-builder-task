import { create } from 'zustand';

import type { TProductsStore } from '@/types/store/products';

const useProductsStore = create<TProductsStore>((set) => ({
    cameras: [],
    plans: [],
    sensors: [],
    accessories: [],

    setProducts: (products) => set({ ...products }),
}));

export default useProductsStore;
