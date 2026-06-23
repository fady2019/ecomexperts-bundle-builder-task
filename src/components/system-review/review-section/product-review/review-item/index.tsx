import React, { useCallback } from 'react';
import { twJoin } from 'tailwind-merge';

import QuantityStepper from '@/components/ui/quantity-stepper';
import PriceCard from '@/components/ui/price-card';

import useSecuritySystemStore from '@/store/security-system';

import type { TSecuritySystemProductReviewItemProps } from '@/types/system-review';

const SecuritySystemProductReviewItem: React.FC<TSecuritySystemProductReviewItemProps> = (props) => {
    const { productType, product, variantIdx, quantity } = props;

    const putSecuritySystemItem = useSecuritySystemStore((state) => state.putSecuritySystemProduct);

    const { name: variantName, id: variantId } = product.variants[variantIdx] || {};

    const handleQuantityChange = useCallback(
        (quantity: number) => {
            putSecuritySystemItem(productType, product.id, variantId, quantity);
        },
        [productType, product, variantIdx, putSecuritySystemItem],
    );

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex grow items-center justify-between gap-3">
                <div className="bg-bg-1 aspect-square w-10.25 shrink-0 rounded-[5px] p-1">
                    <img src={product.imgUrl} alt={product.title} />
                </div>

                <h5
                    className={twJoin(
                        'text-text-2 grow text-[14px] leading-4 font-medium tracking-[0.5%]',
                        'max-[575px]:text-[12px]',
                    )}
                >
                    {product.title} {variantName && `(${variantName})`}
                </h5>

                <div className="shrink-0">
                    <QuantityStepper
                        stepperBtnClassName="bg-bg-1 disabled:border disabled:bg-bg-6 disabled:text-text-4 disabled:border-border-2"
                        value={quantity}
                        min={product.minRequiredQuantity || 0}
                        max={product.maxAllowedQuantity || Infinity}
                        quantityChangeHandler={handleQuantityChange}
                    />
                </div>
            </div>

            <div className="shrink-0">
                <PriceCard
                    price={product.price}
                    salePrice={product.salePrice}
                    commonClassName="text-[14px] leading-4 font-medium tracking-[0.5%]"
                    priceClassName="text-highlighted-2"
                    salePriceClassName="text-highlighted-1"
                />
            </div>
        </div>
    );
};

export default SecuritySystemProductReviewItem;
