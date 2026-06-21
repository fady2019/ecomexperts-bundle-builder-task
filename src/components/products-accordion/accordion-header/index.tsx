import React from 'react';
import { twJoin } from 'tailwind-merge';

import type { TProductAccordionHeaderProps } from '@/types/products-accordion';

import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import useSecuritySystemStore from '@/store/security-system';

const ProductAccordionHeader: React.FC<TProductAccordionHeaderProps> = (props) => {
    const { productKey, title, TitleIcon, subtitle, isOpened } = props;

    const configs = useSecuritySystemStore((state) => state[productKey]);
    const selectedCount = Object.keys(configs).length || 0;

    return (
        <div className={twJoin(isOpened && 'pt-1.25')}>
            <span
                className={twJoin(
                    'text-text-3',
                    'px-3.75',
                    'leading-[100%] font-medium',
                    isOpened ? 'text-[12px]' : 'text-[10px]',
                )}
            >
                {subtitle}
            </span>

            <div
                className={twJoin(
                    'text-text-2 px-3.75 py-5',
                    'border-border-1 border-y-[0.5px]',
                    'flex items-center justify-between',
                    'text-[22px] leading-[100%] font-semibold tracking-normal',
                    'max-[575px]:text-[18px]',
                    isOpened && 'border-b-0 pb-0',
                )}
            >
                <div className="flex items-center gap-2">
                    <TitleIcon className="text-icon-1" />
                    <span>{title}</span>
                </div>

                <div className="flex items-center gap-1">
                    {selectedCount > 0 && (
                        <span className="text-highlighted-1 text-[14px] leading-4 font-medium tracking-normal">
                            {selectedCount} selected
                        </span>
                    )}

                    <ArrowDown className={twJoin('text-icon-3', isOpened && 'rotate-180')} />
                </div>
            </div>
        </div>
    );
};

export default ProductAccordionHeader;
