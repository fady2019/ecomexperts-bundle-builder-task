import type { TProduct, TProductKey } from '@/types/product';

export type TSecuritySystemReviewSectionProps = {
    productKey: TProductKey;
    label: string;
};

export type TSecuritySystemReviewItemProps = {
    productKey: TProductKey;
    product: TProduct;
    variantIdx: number;
    quantity: number;
};
