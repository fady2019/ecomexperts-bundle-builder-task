import React from 'react';

import PriceTag from './price-tag';

import type { TPriceCardProps } from '@/types/price-card';

const PriceCard: React.FC<TPriceCardProps> = (props) => {
    const { price, salePrice, linedThroughClassName } = props;

    const priceLabel = `$${price}`;
    const salePriceLabel = !!salePrice ? (salePrice === price ? 'FREE' : `$${salePrice}`) : undefined;

    return (
        <div className="flex flex-col items-end gap-0.75">
            <PriceTag
                priceLabel={priceLabel}
                linedThrough={!!salePrice}
                linedThroughClassName={linedThroughClassName}
            />

            <PriceTag priceLabel={salePriceLabel} />
        </div>
    );
};

export default PriceCard;
