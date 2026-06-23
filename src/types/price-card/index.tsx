import type React from 'react';

export type TPriceCardProps = React.JSX.IntrinsicElements['div'] & {
    price: number;
    salePrice: number;
    suffix?: string;
    activePriceClassName?: React.JSX.IntrinsicElements['span']['className'];
    strikethroughPriceClassName?: React.JSX.IntrinsicElements['span']['className'];
    commonClassName?: React.JSX.IntrinsicElements['span']['className'];
};

export type TPriceTagProps = React.JSX.IntrinsicElements['span'] & {
    priceLabel?: string;
    strikethrough?: boolean;
};
