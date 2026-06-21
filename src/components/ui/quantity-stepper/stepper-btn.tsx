import React from 'react';
import { twMerge } from 'tailwind-merge';

const StepperBtn: React.FC<React.JSX.IntrinsicElements['button']> = (props) => {
    const { className, ...restProps } = props;

    return (
        <button
            className={twMerge(
                'flex items-center justify-center',
                'bg-bg-4 text-icon-4',
                'aspect-square w-5 cursor-pointer rounded-sm',
                'disabled:text-icon-5 disabled:bg-bg-1 disabled:cursor-not-allowed disabled:border-2',
                className,
            )}
            {...restProps}
        />
    );
};

export default StepperBtn;
