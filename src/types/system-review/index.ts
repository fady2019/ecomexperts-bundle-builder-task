import type { TPlan } from '@/types/plan';
import type { TProduct } from '@/types/product';
import type { TSystemItemType, TSystemProductType } from '@/types/system-builder';

export type TSecuritySystemReviewSectionProps = {
    itemType: TSystemItemType;
    label: string;
};

export type TSecuritySystemProductReviewSectionProps = {
    productType: TSystemProductType;
    label: string;
};

export type TSecuritySystemProductReviewItemProps = {
    productType: TSystemProductType;
    product: TProduct;
    variantIdx: number;
    quantity: number;
};

export type TSecuritySystemPlanReviewItemProps = {
    plan: TPlan;
};
