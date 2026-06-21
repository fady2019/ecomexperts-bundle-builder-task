export type TQuantityStepperProps = {
    value: number;
    min: number;
    max: number;
    quantityChangeHandler?: (quantity: number) => void;
};
