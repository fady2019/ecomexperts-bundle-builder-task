import type { TProductKey } from '../product';

// cameras => cameraId => variantId => quantity
export type TSecuritySystemState = Record<TProductKey, Record<string, Record<string, number>>>;

export type TSecuritySystemActions = {
    putSecuritySystemItem: (productKey: TProductKey, productId: string, variantId: string, quantity: number) => void;
    saveSecuritySystem: () => void;
    loadSecuritySystem: () => void;
};

export type TSecuritySystemStore = TSecuritySystemState & TSecuritySystemActions;
