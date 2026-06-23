import Accordion from '@/components/ui/accordion';
import SystemBuilderAccordionHeader from './accordion-header';
import SystemBuilderAccordionBody from './accordion-body';

import type { TSystemBuilderStep } from '@/types/system-builder';

import Cameras from '@/assets/icons/cameras.svg?react';
import Plan from '@/assets/icons/plan.svg?react';
import Sensors from '@/assets/icons/sensors.svg?react';
import Protection from '@/assets/icons/protection.svg?react';

const SecuritySystemBuilder = () => {
    const PRODUCTS_ACCORDION_STEPS: TSystemBuilderStep[] = [
        {
            systemItemType: 'cameras',
            title: 'Choose your cameras',
            TitleIcon: Cameras,
            nextStepBtnLabel: 'Choose your plan',
        },
        {
            systemItemType: 'plans',
            title: 'Choose your plan',
            TitleIcon: Plan,
            nextStepBtnLabel: 'Choose your sensors',
        },
        {
            systemItemType: 'sensors',
            title: 'Choose your sensors',
            TitleIcon: Sensors,
            nextStepBtnLabel: 'Add extra protection',
        },
        {
            systemItemType: 'accessories',
            title: 'Add extra protection',
            TitleIcon: Protection,
        },
    ];

    return (
        <Accordion
            onlyOneItemOpened={true}
            initOpened={['cameras']}
            items={PRODUCTS_ACCORDION_STEPS.map(({ systemItemType, title, TitleIcon, nextStepBtnLabel }, idx) => ({
                id: systemItemType,
                header: (isOpened) => (
                    <SystemBuilderAccordionHeader
                        key={systemItemType}
                        systemItemType={systemItemType}
                        title={title}
                        TitleIcon={TitleIcon}
                        subtitle={`STEP ${idx + 1} OF ${PRODUCTS_ACCORDION_STEPS.length}`}
                        isOpened={isOpened}
                    />
                ),
                body: (_, openNext) => (
                    <SystemBuilderAccordionBody
                        systemItemType={systemItemType}
                        nextStepBtnLabel={nextStepBtnLabel}
                        openNext={openNext}
                    />
                ),
            }))}
        />
    );
};

export default SecuritySystemBuilder;
