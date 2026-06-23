import { twMerge } from 'tailwind-merge';

import type { TPriceTagProps } from '@/types/price-card';

const PriceTag: React.FC<TPriceTagProps> = (props) => {
    const { priceLabel, linedThrough, className, ...restProps } = props;

    if (!priceLabel) {
        return null;
    }

    return (
        <span
            className={twMerge(
                'text-text-4',
                'text-[16px] leading-[100%] font-medium tracking-[0.6px]',
                'max-[575px]:text-[16px] max-[575px]:leading-4 max-[575px]:tracking-[0.5%]',
                linedThrough && 'text-highlighted-4 line-through',
                className,
            )}
            {...restProps}
        >
            {priceLabel}
        </span>
    );
};

export default PriceTag;
