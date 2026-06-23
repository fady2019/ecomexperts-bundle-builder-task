import { twMerge } from 'tailwind-merge';

import type { TPriceTagProps } from '@/types/price-card';

const PriceTag: React.FC<TPriceTagProps> = (props) => {
    const { priceLabel, strikethrough, className, ...restProps } = props;

    if (!priceLabel) {
        return null;
    }

    return (
        <span
            className={twMerge(
                'text-highlighted-1',
                'text-[16px] leading-[100%] font-medium tracking-[0.6px]',
                'max-[575px]:text-[16px] max-[575px]:leading-4 max-[575px]:tracking-[0.5%]',
                strikethrough && 'text-highlighted-2 line-through',
                className,
            )}
            {...restProps}
        >
            {priceLabel}
        </span>
    );
};

export default PriceTag;
