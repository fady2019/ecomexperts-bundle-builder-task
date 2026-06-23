import type { TSystemProductType } from '@/types/system-builder';

// cameras => cameraId => variantId => quantity
export type TSecuritySystemState = Record<TSystemProductType, Record<string, Record<string, number>>> & {
    plans: [string] | [];
    totalPrice: number;
    totalDiscount: number;
};

export type TSecuritySystemActions = {
    putSecuritySystemProduct: (
        productType: TSystemProductType,
        productId: string,
        variantId: string,
        quantity: number,
    ) => void;
    putSecuritySystemPlan: (planId: string) => void;
    saveSecuritySystem: () => void;
    loadSecuritySystem: () => void;
    updateTotalPriceAndDiscount: () => void;
};

export type TSecuritySystemStore = TSecuritySystemState & TSecuritySystemActions;
