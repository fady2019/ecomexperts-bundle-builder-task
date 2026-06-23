import React from 'react';
import { twMerge } from 'tailwind-merge';

import PriceTag from './price-tag';

import type { TPriceCardProps } from '@/types/price-card';

const PriceCard: React.FC<TPriceCardProps> = (props) => {
    const {
        price,
        salePrice,
        suffix,
        commonClassName,
        activePriceClassName,
        strikethroughPriceClassName,
        className,
        ...restProps
    } = props;

    const strikethrough = salePrice < price;
    const priceLabel = `${price === 0 ? 'FREE' : '$' + price + (suffix || '')}`;
    const salePriceLabel =
        salePrice !== price ? (salePrice === 0 ? 'FREE' : `$${salePrice}${suffix || ''}`) : undefined;

    return (
        <div
            className={twMerge(
                'flex flex-col items-end gap-0.75',
                'max-custom-xl:flex-row max-custom-xl:gap-2',
                'max-custom-sm:flex-col max-custom-sm:gap-0.75',
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
