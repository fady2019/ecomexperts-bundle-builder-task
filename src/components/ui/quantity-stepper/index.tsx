import React from 'react';

import StepperBtn from './stepper-btn';

import type { TQuantityStepperProps } from '@/types/quantity-stepper';

import Minus from '@/assets/icons/minus.svg?react';
import Add from '@/assets/icons/add.svg?react';

const QuantityStepper: React.FC<TQuantityStepperProps> = (props) => {
    const { value, min, max, stepperBtnClassName, quantityChangeHandler } = props;

    const handleQuantityChange = (changeBy: number) => {
        quantityChangeHandler?.(Math.min(Math.max(value + changeBy, min), max));
    };

    return (
        <div className="flex items-center justify-center gap-2.5 p-1">
            <StepperBtn
                className={stepperBtnClassName}
                disabled={value === min}
                onClick={handleQuantityChange.bind(null, -1)}
            >
                <Minus />
            </StepperBtn>

            <span className="text-[16px] leading-5 font-medium tracking-normal">{value}</span>

            <StepperBtn
                className={stepperBtnClassName}
                disabled={value === max}
                onClick={handleQuantityChange.bind(null, 1)}
            >
                <Add />
            </StepperBtn>
        </div>
    );
};

export default QuantityStepper;
