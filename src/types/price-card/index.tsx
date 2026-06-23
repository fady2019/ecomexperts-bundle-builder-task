import type React from 'react';

export type TPriceCardProps = React.JSX.IntrinsicElements['div'] & {
    price: number;
    salePrice: number;
    commonClassName?: React.JSX.IntrinsicElements['span']['className'];
    priceClassName?: React.JSX.IntrinsicElements['span']['className'];
    salePriceClassName?: React.JSX.IntrinsicElements['span']['className'];
};

export type TPriceTagProps = React.JSX.IntrinsicElements['span'] & {
    priceLabel?: string;
    linedThrough?: boolean;
};
