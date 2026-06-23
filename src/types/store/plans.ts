import type { TPlans } from '@/types/plan';

export type TPlansState = TPlans;

export type TPlansActions = {
    setPlans: (plans?: Partial<TPlansState>) => void;
};

export type TPlansStore = TPlansState & TPlansActions;
