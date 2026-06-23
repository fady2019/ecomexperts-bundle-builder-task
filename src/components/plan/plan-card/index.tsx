import type React from 'react';
import { twJoin } from 'tailwind-merge';

import PriceCard from '@/components/ui/price-card';
import HighlightedText from '@/components/ui/highlighted-text';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';

import useSecuritySystemStore from '@/store/security-system';
import usePlansStore from '@/store/plans';

import type { TPlanCardProps } from '@/types/plan';

import CheckMark from '@/assets/icons/check-mark.svg?react';

const PlanCard: React.FC<TPlanCardProps> = (props) => {
    const { plan } = props;

    const putSecuritySystemPlan = useSecuritySystemStore((state) => state.putSecuritySystemPlan);
    const [selectedPlanId] = useSecuritySystemStore((state) => state.plans);
    const bestValuePlanId = usePlansStore((state) => state.bestValuePlanId);
    const mostPopularPlanId = usePlansStore((state) => state.mostPopularPlanId);

    const selected = selectedPlanId === plan.id;
    const bestValuePlan = bestValuePlanId === plan.id;
    const mostPopularPlan = mostPopularPlanId === plan.id;

    return (
        <div
            className={twJoin(
                'bg-bg-1 w-61.5 space-y-4 rounded-lg border-2 p-3',
                selected ? 'border-border-4/70' : 'border-transparent',
            )}
        >
            <div className="flex min-h-12 items-center justify-between">
                <PriceCard
                    className="flex-col! items-start! gap-1.5!"
                    price={plan.pricePerMonth}
                    salePrice={plan.salePricePerMonth}
                    priceClassName="text-highlighted-2 text-[18px]! font-medium!"
                    salePriceClassName="text-highlighted-1 text-[24px]! font-bold!"
                />

                {mostPopularPlan && <Badge>Most Popular</Badge>}
                {bestValuePlan && <Badge className="bg-highlighted-3">Best Value</Badge>}
            </div>

            <div className="space-y-2">
                <h3 className="text-[18px] leading-[100%] font-bold tracking-[0.6px]">
                    <HighlightedText text={plan.title} />
                </h3>

                <p
                    className={twJoin(
                        'text-text-1/75 text-[12px] leading-[130%] font-medium tracking-[0.6px]',
                        'max-[1300px]:text-[13px]',
                    )}
                >
                    <HighlightedText text={plan.description} />
                </p>
            </div>

            <Button
                className={twJoin(
                    'font-tt-norms-pro w-full rounded-2xl p-2 text-[14px] leading-[100%] font-bold',
                    'text-highlighted-1 border-2',
                    'hover:bg-bg-2 hover:border-highlighted-1 hover:text-white',
                    selected && 'bg-bg-2 border-highlighted-1 text-white',
                )}
                onClick={putSecuritySystemPlan.bind(null, plan.id)}
            >
                {selected ? 'Selected' : 'Select'}
            </Button>

            <ul
                className={twJoin(
                    'text-text-1/75 space-y-1.5 text-[14px] leading-[130%] font-medium tracking-[0.6px]',
                    'border-border-3 border-t pt-4',
                    'max-[1300px]:text-[13px]',
                )}
            >
                {plan.benefits.map((benefit) => (
                    <li className="flex gap-1">
                        <CheckMark className="text-highlighted-1" />

                        <span>
                            <HighlightedText text={benefit} />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanCard;
