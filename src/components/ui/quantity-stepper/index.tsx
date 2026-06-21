import React, { useEffect, useRef, useState } from 'react';

import StepperBtn from './stepper-btn';

import type { TQuantityStepperProps } from '@/types/quantity-stepper';

import Minus from '@/assets/icons/minus.svg?react';
import Add from '@/assets/icons/add.svg?react';

const QuantityStepper: React.FC<TQuantityStepperProps> = (props) => {
    const { value, min, max, quantityChangeHandler } = props;

    const [quantity, setQuantity] = useState(value);
    const quantityChangeHandlerRef = useRef(quantityChangeHandler);

    useEffect(() => {
        setQuantity(value);
    }, [value]);

    useEffect(() => {
        quantityChangeHandlerRef.current = quantityChangeHandler;
    }, [quantityChangeHandler]);

    useEffect(() => {
        quantityChangeHandlerRef.current?.(quantity);
    }, [quantity]);

    const handleQuantityChange = (changeBy: number) => {
        setQuantity((curr) => Math.min(Math.max(curr + changeBy, min), max));
    };

    return (
        <div className="flex items-center justify-center gap-2.5 p-1">
            <StepperBtn disabled={quantity === min} onClick={handleQuantityChange.bind(null, -1)}>
                <Minus />
            </StepperBtn>

            <span className="text-[16px] leading-5 font-medium tracking-normal">{quantity}</span>

            <StepperBtn disabled={quantity === max} onClick={handleQuantityChange.bind(null, 1)}>
                <Add />
            </StepperBtn>
        </div>
    );
};

export default QuantityStepper;
