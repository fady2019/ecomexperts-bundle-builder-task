import { SYSTEM_PRODUCT_TYPES, type TSystemProductType } from '@/types/system-builder';

export const isSystemProductType = (value: string): value is TSystemProductType => {
    return SYSTEM_PRODUCT_TYPES.includes(value as TSystemProductType);
};
