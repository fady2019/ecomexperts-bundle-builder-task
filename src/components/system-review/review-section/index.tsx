import React from 'react';

import SecuritySystemProductReviewSection from './product-review';
import SecuritySystemPlanReviewSection from './plan-review';

import { isSystemProductType } from '@/utils/system-builder';

import type { TSecuritySystemReviewSectionProps } from '@/types/system-review';

const SecuritySystemReviewSection: React.FC<TSecuritySystemReviewSectionProps> = (props) => {
    const { itemType, label } = props;

    return (
        <div className="border-border-2 space-y-2 border-t pt-3.75">
            {label && (
                <h4 className="text-text-4 text-[12px] leading-4 font-normal tracking-[3%] uppercase">{label}</h4>
            )}

            {isSystemProductType(itemType) ? (
                <SecuritySystemProductReviewSection productType={itemType} label={label} />
            ) : (
                <SecuritySystemPlanReviewSection />
            )}
        </div>
    );
};

export default SecuritySystemReviewSection;
