import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button: React.FC<React.JSX.IntrinsicElements['button']> = (props) => {
    const { className, ...restProps } = props;

    return (
        <button
            className={twMerge(
                'flex cursor-pointer items-center justify-center gap-1 rounded-lg px-6 py-1.75 text-[18px] leading-6 font-semibold tracking-normal',
                'disabled:cursor-not-allowed disabled:opacity-75',
                className,
            )}
            {...restProps}
        />
    );
};

export default Button;
