import type { TProducts } from '../product';

export type TProductsState = TProducts;

export type TProductsActions = {
    setProducts: (products?: Partial<TProductsState>) => void;
};

export type TProductsStore = TProductsState & TProductsActions;
