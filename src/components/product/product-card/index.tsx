import React, { useCallback, useState } from 'react';
import { twJoin } from 'tailwind-merge';

import ProductCardInfo from './card-info';
import VariantList from '@/components/product/variant-list';
import DiscountBadge from '@/components/product/product-card/discount-badge';
import QuantityStepper from '@/components/ui/quantity-stepper';
import PriceCard from '@/components/ui/price-card';

import useSecuritySystemStore from '@/store/security-system';

import type { TProductCardProps } from '@/types/product';

const ProductCard: React.FC<TProductCardProps> = (props) => {
    const { product, productType } = props;

    const [activeVariantId, setActiveVariantId] = useState<string>(product.variants[0]?.id || '');

    const minQuantity = product.requiresOnlyOne ? 1 : 0;

    const quantity =
        useSecuritySystemStore((state) => state[productType]?.[product.id]?.[activeVariantId]) || minQuantity || 0;

    const productConfigs = useSecuritySystemStore((state) => state[productType]?.[product.id]) || {};
    const putSecuritySystemProduct = useSecuritySystemStore((state) => state.putSecuritySystemProduct);

    const handleQuantityChange = useCallback(
        (quantity: number) => {
            putSecuritySystemProduct(productType, product.id, activeVariantId, quantity);
        },
        [productType, product, activeVariantId, putSecuritySystemProduct],
    );

    const highlighted = Object.keys(productConfigs).length > 0;

    return (
        <div
            className={twJoin(
                'bg-bg-1 flex min-h-40 max-w-90.5 items-center gap-5 rounded-lg border-2 p-3',
                'max-[1300px]:max-w-56.25 max-[1300px]:flex-col max-[1300px]:px-2.75 max-[1300px]:py-5',
                'max-[575px]:max-w-66',
                highlighted ? 'border-border-4/70' : 'border-transparent',
            )}
        >
            <div
                className={twJoin(
                    'flex items-center justify-center',
                    'relative h-full w-25 shrink-0',
                    'max-[1300px]:max-h-30 max-[1300px]:w-full',
                )}
            >
                <div className={twJoin('flex h-3/5 items-center', 'max-[1300px]:h-[90%]')}>
                    <img className="h-full" src={product.imgUrl} alt={product.title} />
                </div>

                <div className="absolute top-0 left-0">
                    <DiscountBadge price={product.price} salePrice={product.salePrice} />
                </div>
            </div>

            <div className={twJoin('flex grow flex-col gap-2.5 overflow-hidden', 'max-[1300px]:w-full')}>
                <div className={twJoin('w-55 space-y-2', 'max-[1300px]:w-full')}>
                    <ProductCardInfo title={product.title} description={product.description} />

                    <VariantList
                        variants={product.variants}
                        activeVariantId={activeVariantId}
                        variantPickingChangeHandler={setActiveVariantId}
                    />
                </div>

                <div className={twJoin('flex items-center justify-between gap-2.5', 'max-[1300px]:w-full')}>
                    <QuantityStepper
                        value={quantity}
                        min={minQuantity}
                        max={product.requiresOnlyOne ? 1 : Infinity}
                        quantityChangeHandler={handleQuantityChange}
                    />

                    <PriceCard
                        price={product.price}
                        salePrice={product.salePrice}
                        commonClassName="text-text-4 font-normal"
                        strikethroughPriceClassName="text-highlighted-4!"
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductCard);
