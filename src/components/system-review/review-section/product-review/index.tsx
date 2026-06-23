import React, { useMemo } from 'react';

import SecuritySystemProductReviewItem from './review-item';

import useProductsStore from '@/store/products';
import useSecuritySystemStore from '@/store/security-system';

import type { TSecuritySystemProductReviewSectionProps } from '@/types/system-review';

const SecuritySystemProductReviewSection: React.FC<TSecuritySystemProductReviewSectionProps> = (props) => {
    const { productType, label } = props;

    const products = useProductsStore((state) => state[productType]);
    const configs = useSecuritySystemStore((state) => state[productType]);

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
        <div className="space-y-3">
            {!reviewItems.length && (
                <p className="text-text-4 text-center text-sm leading-[130%] tracking-[0.6px]">No {label} added</p>
            )}

            {reviewItems.map((reviewItem) => (
                <SecuritySystemProductReviewItem
                    key={`${reviewItem.product.id}_${reviewItem.product.variants[reviewItem.variantIdx]?.id}`}
                    productType={productType}
                    {...reviewItem}
                />
            ))}
        </div>
    );
};

export default SecuritySystemProductReviewSection;
