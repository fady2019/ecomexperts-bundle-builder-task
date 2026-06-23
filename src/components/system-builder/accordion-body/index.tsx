import { twJoin } from 'tailwind-merge';

import ProductList from '@/components/product';
import PlanList from '@/components/plan';
import Button from '@/components/ui/button';

import { isSystemProductType } from '@/utils/system-builder';

import type { TSystemBuilderAccordionBodyProps } from '@/types/system-builder';

const SystemBuilderAccordionBody: React.FC<TSystemBuilderAccordionBodyProps> = (props) => {
    const { systemItemType, nextStepBtnLabel, openNext } = props;

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            {isSystemProductType(systemItemType) ? <ProductList productType={systemItemType} /> : <PlanList />}

            {nextStepBtnLabel && (
                <Button
                    className={twJoin('text-highlighted-1 border', 'hover:bg-highlighted-1 hover:text-bg-1')}
                    onClick={openNext}
                >
                    Next: {nextStepBtnLabel}
                </Button>
            )}
        </div>
    );
};

export default SystemBuilderAccordionBody;
