import { useMemo } from 'react';

import SecuritySystemPlanReviewItem from './review-item';
import PlanBenefits from './plan-benefits';

import usePlansStore from '@/store/plans';
import useSecuritySystemStore from '@/store/security-system';

const SecuritySystemPlanReviewSection = () => {
    const plans = usePlansStore((state) => state.plans);
    const [selectedPlanId] = useSecuritySystemStore((state) => state.plans);

    const plan = useMemo(() => {
        return plans.find(({ id }) => id === selectedPlanId);
    }, [plans, selectedPlanId]);

    return (
        <div className="space-y-3">
            {!plan && (
                <p className="text-text-4 text-center text-sm leading-[130%] tracking-[0.6px]">No plan selected</p>
            )}

            {plan && <SecuritySystemPlanReviewItem plan={plan} />}

            {plan && <PlanBenefits plan={plan} />}
        </div>
    );
};

export default SecuritySystemPlanReviewSection;
