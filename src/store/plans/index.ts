import { create } from 'zustand';

import type { TPlansStore } from '@/types/store/plans';
import useSecuritySystemStore from '../security-system';

const usePlansStore = create<TPlansStore>((set) => ({
    plans: [],
    defaultPlanId: '',
    mostPopularPlanId: '',
    bestValuePlanId: '',

    setPlans: (plans) => {
        if (plans?.defaultPlanId) {
            useSecuritySystemStore
                .getState()
                .putSecuritySystemPlan(useSecuritySystemStore.getState().plans[0] || plans.defaultPlanId);
        }

        set({ ...plans });
    },
}));

export default usePlansStore;
