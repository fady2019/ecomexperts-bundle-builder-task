import type React from 'react';
import { twJoin } from 'tailwind-merge';

import PriceCard from '@/components/ui/price-card';

import type { TPlanBenefitItemProps } from '@/types/plan';

const PlanBenefitItem: React.FC<TPlanBenefitItemProps> = (props) => {
    const { Icon, title, price, salePrice } = props;

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex grow items-center justify-between gap-3">
                <div className="bg-bg-1 aspect-square w-10.25 shrink-0 rounded-[5px] p-1">{Icon}</div>

                <h5
                    className={twJoin(
                        'text-text-2 grow text-[14px] leading-4 font-medium tracking-[0.5%]',
                        'max-custom-sm:text-[12px]',
                    )}
                >
                    {title}
                </h5>
            </div>

            <div className="shrink-0">
                <PriceCard
                    price={price}
                    salePrice={salePrice}
                    commonClassName="text-[14px] leading-4 font-medium tracking-[0.5%]"
                />
            </div>
        </div>
    );
};

export default PlanBenefitItem;
