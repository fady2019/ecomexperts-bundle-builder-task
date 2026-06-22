import React from 'react';

import Badge from '@/components/ui/badge';

import type { TProductDiscountBadgeProps } from '@/types/product';

const ProductDiscountBadge: React.FC<TProductDiscountBadgeProps> = (props) => {
    const { price, salePrice } = props;

    const diff = price - salePrice;

    if (diff <= 0) {
        return null;
    }

    const savingPercentage = Math.floor((diff / price) * 100);

    return <Badge>Save {savingPercentage}%</Badge>;
};

export default ProductDiscountBadge;
