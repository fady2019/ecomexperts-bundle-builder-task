import type React from 'react';

import PlanBenefitItem from './benefit-item';

import type { TPlanBenefitsProps } from '@/types/plan';

import CarbonDelivery from '@/assets/icons/carbon-delivery.svg?react';

const PlanBenefits: React.FC<TPlanBenefitsProps> = (props) => {
    const { plan } = props;

    return (
        <div className="border-border-2 space-y-2 border-t pt-3.75">
            {plan?.provideFreeFastShipping && (
                <PlanBenefitItem
                    Icon={<CarbonDelivery className="text-icon-6" />}
                    title="Fast Shipping"
                    price={5.99}
                    salePrice={0}
                />
            )}
        </div>
    );
};

export default PlanBenefits;
