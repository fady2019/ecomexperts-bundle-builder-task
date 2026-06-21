export type TPriceCardProps = {
    price: number;
    salePrice: number;
    linedThroughClassName?: React.JSX.IntrinsicElements['span']['className'];
};

export type TPriceTagProps = React.JSX.IntrinsicElements['span'] & {
    priceLabel?: string;
    linedThrough?: boolean;
    linedThroughClassName?: React.JSX.IntrinsicElements['span']['className'];
};
