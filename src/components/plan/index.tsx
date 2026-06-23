import PlanCard from './plan-card';

import usePlansStore from '@/store/plans';

const PlanList = () => {
    const plans = usePlansStore((state) => state.plans);

    return (
        <div className="flex w-full flex-wrap justify-center gap-3">
            {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
            ))}
        </div>
    );
};

export default PlanList;
