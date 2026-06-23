import React, { useMemo } from 'react';

import SecuritySystemReviewItem from '@/components/system-review/review-item';

import useProductsStore from '@/store/products';
import useSecuritySystemStore from '@/store/security-system';

import type { TSecuritySystemReviewSectionProps } from '@/types/system-review';

const SecuritySystemReviewSection: React.FC<TSecuritySystemReviewSectionProps> = (props) => {
    const { productKey, label } = props;

    const products = useProductsStore((state) => state[productKey]);
    const configs = useSecuritySystemStore((state) => state[productKey]);

    const productIdToProductMap = useMemo(() => {
        return new Map(products.map((product) => [product.id, product]));
    }, [products]);

    const reviewItems = useMemo(() => {
        return Object.entries(configs)
            .map(([productId, productConfigs]) => {
                const product = productIdToProductMap.get(productId);

                if (!product) {
                    return [];
                }

                return Object.entries(productConfigs).map(([variantId, quantity]) => {
                    return {
                        product: product,
                        variantIdx: product.variants.findIndex(({ id }) => id === variantId),
                        quantity,
                    };
                });
            })
            .flat();
    }, [productIdToProductMap, configs]);

    return (
        <div className="border-border-2 space-y-2 border-t pt-3.75">
            {label && (
                <h4 className="text-text-4 text-[12px] leading-4 font-normal tracking-[3%] uppercase">{label}</h4>
            )}

            <div className="space-y-3">
                {!reviewItems.length && (
                    <p className="text-text-4 text-center text-sm leading-[130%] tracking-[0.6px]">No {label} added</p>
                )}

                {reviewItems.map((reviewItem) => (
                    <SecuritySystemReviewItem
                        key={`${reviewItem.product.id}_${reviewItem.product.variants[reviewItem.variantIdx]?.id}`}
                        productKey={productKey}
                        {...reviewItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default SecuritySystemReviewSection;
