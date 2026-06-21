import React from 'react';
import { twMerge } from 'tailwind-merge';

const Badge: React.FC<React.JSX.IntrinsicElements['span']> = (props) => {
    const { className, ...restProps } = props;

    return (
        <span
            className={twMerge(
                'bg-bg-2 w-fit rounded-full px-1.5 py-1',
                'text-[12px] leading-[100%] font-semibold tracking-normal text-white',
                className,
            )}
            {...restProps}
        ></span>
    );
};

export default Badge;
