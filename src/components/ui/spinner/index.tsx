import React from 'react';
import ReactDOM from 'react-dom';
import { HashLoader } from 'react-spinners';
import type { LengthType } from 'react-spinners/helpers/props';

import Backdrop from '@/components/ui/backdrop';

const Spinner: React.FC<{
    loading: boolean;
    size?: LengthType;
    color?: string;
    cssOverride?: React.CSSProperties;
    speedMultiplier?: number;
    darkTheme?: boolean;
}> = (props) => {
    const { darkTheme, ...restProps } = props;

    const color = darkTheme ? '#4e2fd2' : '#4e2fd2';

    return (
        <>
            <Backdrop show={props.loading} />

            {props.loading &&
                ReactDOM.createPortal(
                    <div className="fixed top-1/2 left-1/2 z-1001 -translate-x-1/2 -translate-y-1/2">
                        <HashLoader size="100px" color={color} {...restProps} />
                    </div>,
                    document.getElementById('spinner')!,
                )}
        </>
    );
};

export default Spinner;
