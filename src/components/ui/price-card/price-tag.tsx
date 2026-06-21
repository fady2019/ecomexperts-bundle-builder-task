import { twMerge } from 'tailwind-merge';

import type { TPriceTagProps } from '@/types/price-card';

const PriceTag: React.FC<TPriceTagProps> = (props) => {
    const { priceLabel, linedThrough, linedThroughClassName, className, ...restProps } = props;

    if (!priceLabel) {
        return null;
    }

    return (
        <span
            className={twMerge(
                'text-text-4',
                'text-[16px] leading-[100%] font-normal tracking-[0.6px]',
                linedThrough && 'line-through',
                linedThrough && (linedThroughClassName || 'text-highlighted-4'),
                className,
            )}
            {...restProps}
        >
            {priceLabel}
        </span>
    );
};

export default PriceTag;
