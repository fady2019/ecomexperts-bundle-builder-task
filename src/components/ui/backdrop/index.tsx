import React from 'react';
import ReactDOM from 'react-dom';
import { twMerge } from 'tailwind-merge';

const Backdrop: React.FC<React.JSX.IntrinsicElements['div'] & { show: boolean }> = (props) => {
    const { className, show, ...restProps } = props;

    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div
            className={twMerge('bg-bg-1 fixed top-0 left-0 z-1000 h-dvh w-screen opacity-95', className)}
            {...restProps}
        ></div>,
        document.getElementById('backdrop')!,
    );
};

export default Backdrop;
