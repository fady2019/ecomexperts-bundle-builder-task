import React from 'react';
import { twJoin } from 'tailwind-merge';

import PriceCard from '@/components/ui/price-card';
import HighlightedText from '@/components/ui/highlighted-text';

import type { TSecuritySystemPlanReviewItemProps } from '@/types/system-review';

import PlanIcon from '@/assets/icons/review-plan.svg?react';

const SecuritySystemPlanReviewItem: React.FC<TSecuritySystemPlanReviewItemProps> = (props) => {
    const { plan } = props;

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex grow items-center justify-between gap-1.5">
                <PlanIcon className="text-icon-7" />

                <h5
                    className={twJoin(
                        'grow text-[16px] leading-[100%] font-bold tracking-[-0.2%] text-black',
                        'max-[1300px]:text-[20px]',
                        'max-[575px]:text-[14px]',
                    )}
                >
                    <HighlightedText text={plan.title} />
                </h5>
            </div>

            <div className="shrink-0">
                <PriceCard
                    price={plan.pricePerMonth}
                    salePrice={plan.salePricePerMonth}
                    commonClassName="text-[14px] leading-4 font-medium tracking-[0.5%]"
                />
            </div>
        </div>
    );
};

export default SecuritySystemPlanReviewItem;
