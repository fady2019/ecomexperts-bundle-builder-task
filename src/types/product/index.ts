export type TProductVariant = {
    id: string;
    name: string;
    imgUrl: string;
};

export type TProduct = {
    id: string;
    title: string;
    description: string;
    imgUrl: string;
    variants: TProductVariant[];
    price: number;
    salePrice: number;
};

export type TProductKey = 'cameras' | 'plans' | 'sensors' | 'accessories';

export type TProducts = Record<TProductKey, TProduct[]>;

export type TProductCardProps = {
    product: TProduct;
    productKey: TProductKey;
};

export type TProductListProps = {
    productKey: TProductKey;
    products: TProduct[];
};

export type TProductVariantListProps = {
    variants: TProductVariant[];
    variantPickingChangeHandler?: (id: string) => void;
};

export type TProductVariantProps = {
    variant: TProductVariant;
    isActive: boolean;
    toggleVariantHandler: (id: string) => void;
};

export type TProductCardInfo = {
    title: string;
    description: string;
};

export type TProductDiscountBadgeProps = {
    price: number;
    salePrice: number;
};
