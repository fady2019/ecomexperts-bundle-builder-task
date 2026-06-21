import React from 'react';

import Badge from '@/components/ui/badge';

import type { TProductDiscountBadgeProps } from '@/types/product';

const ProductDiscountBadge: React.FC<TProductDiscountBadgeProps> = (props) => {
    const { price, salePrice } = props;

    if (salePrice <= 0) {
        return null;
    }

    const diff = price - salePrice;
    const savingPercentage = Math.floor((diff / price) * 100);

    return <Badge>Save {savingPercentage}%</Badge>;
};

export default ProductDiscountBadge;
