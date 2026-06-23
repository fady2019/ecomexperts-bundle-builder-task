import type { TSystemProductType } from '@/types/system-builder';

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
    minRequiredQuantity?: number;
    maxAllowedQuantity?: number;
};

export type TProducts = Record<TSystemProductType, TProduct[]>;

export type TProductCardProps = {
    productType: TSystemProductType;
    product: TProduct;
};

export type TProductListProps = {
    productType: TSystemProductType;
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
