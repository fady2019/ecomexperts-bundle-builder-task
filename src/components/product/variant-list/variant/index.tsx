import React from 'react';
import { twJoin } from 'tailwind-merge';

import type { TProductVariantProps } from '@/types/product';

const ProductVariant: React.FC<TProductVariantProps> = (props) => {
    const { variant, isActive, toggleVariantHandler } = props;

    return (
        <div
            className={twJoin(
                'flex shrink-0 items-center justify-center',
                'h-6.5 w-16.25',
                'border-border-3 rounded border',
                'px-0.75 py-px',
                'cursor-pointer select-none',
                isActive && 'bg-bg-5/5 border-border-6',
            )}
            tabIndex={-1}
            role="button"
            onClick={toggleVariantHandler?.bind(null, variant.id)}
        >
            <div className="h-full">
                <img className="h-full" src={variant.imgUrl} alt={variant.name} />
            </div>

            <span className="text-[10px] leading-[100%] font-medium tracking-[0.6px]">{variant.name}</span>
        </div>
    );
};

export default ProductVariant;
