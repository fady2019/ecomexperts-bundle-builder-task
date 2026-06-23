import React from 'react';
import { twMerge } from 'tailwind-merge';

import PriceTag from './price-tag';

import type { TPriceCardProps } from '@/types/price-card';

const PriceCard: React.FC<TPriceCardProps> = (props) => {
    const {
        price,
        salePrice,
        commonClassName,
        activePriceClassName,
        strikethroughPriceClassName,
        className,
        ...restProps
    } = props;

    const strikethrough = salePrice < price;
    const priceLabel = `${price === 0 ? 'FREE' : '$' + price}`;
    const salePriceLabel = salePrice !== price ? (salePrice === 0 ? 'FREE' : `$${salePrice}`) : undefined;

    return (
        <div
            className={twMerge(
                'flex flex-col items-end gap-0.75',
                'max-[1300px]:flex-row max-[1300px]:gap-2',
                'max-[575px]:flex-col max-[575px]:gap-0.75',
                className,
            )}
            {...restProps}
        >
            <PriceTag
                className={twMerge(commonClassName, strikethrough ? strikethroughPriceClassName : activePriceClassName)}
                priceLabel={priceLabel}
                strikethrough={strikethrough}
            />

            <PriceTag className={twMerge(commonClassName, activePriceClassName)} priceLabel={salePriceLabel} />
        </div>
    );
};

export default PriceCard;
