import React from 'react';

import type { TProductCardInfo } from '@/types/product';
import { twJoin } from 'tailwind-merge';

const ProductCardInfo: React.FC<TProductCardInfo> = (props) => {
    const { title, description } = props;

    return (
        <div className={'flex max-w-51.25 flex-col gap-2'}>
            <h3 className="text-[16px] leading-[100%] font-semibold tracking-[0.6px]">{title}</h3>

            <p
                className={twJoin(
                    'text-text-1/75 text-[12px] leading-[130%] font-medium tracking-[0.6px]',
                    'max-custom-xl:text-[13px]',
                )}
            >
                {description}{' '}
                <a href="#" className="text-highlighted-5 underline">
                    Learn More
                </a>
            </p>
        </div>
    );
};

export default ProductCardInfo;
