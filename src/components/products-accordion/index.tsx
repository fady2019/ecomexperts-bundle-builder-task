import Accordion from '@/components/ui/accordion';
import ProductAccordionHeader from './accordion-header';
import ProductAccordionBody from './accordion-body';

import useProductsStore from '@/store/products';

import type { TProductAccordionStep } from '@/types/products-accordion';

import Cameras from '@/assets/icons/cameras.svg?react';
import Plan from '@/assets/icons/plan.svg?react';
import Sensors from '@/assets/icons/sensors.svg?react';
import Protection from '@/assets/icons/protection.svg?react';

const ProductsAccordion = () => {
    const { cameras, plans, sensors, accessories } = useProductsStore();

    const PRODUCTS_ACCORDION_STEPS: TProductAccordionStep[] = [
        {
            id: 'cameras',
            title: 'Choose your cameras',
            TitleIcon: Cameras,
            products: cameras,
            nextStepBtnLabel: 'Choose your sensors',
        },
        { id: 'plans', title: 'Choose your plan', TitleIcon: Plan, products: plans, nextStepBtnLabel: '' },
        { id: 'sensors', title: 'Choose your sensors', TitleIcon: Sensors, products: sensors, nextStepBtnLabel: '' },
        {
            id: 'accessories',
            title: 'Add extra protection',
            TitleIcon: Protection,
            products: accessories,
            nextStepBtnLabel: '',
        },
    ];

    return (
        <Accordion
            onlyOneItemOpened={true}
            initOpened={['cameras']}
            items={PRODUCTS_ACCORDION_STEPS.map(({ id, title, TitleIcon, products, nextStepBtnLabel }, idx) => ({
                id,
                header: (isOpened) => (
                    <ProductAccordionHeader
                        key={id}
                        productKey={id}
                        title={title}
                        TitleIcon={TitleIcon}
                        subtitle={`STEP ${idx + 1} OF ${PRODUCTS_ACCORDION_STEPS.length}`}
                        isOpened={isOpened}
                    />
                ),
                body: <ProductAccordionBody productKey={id} products={products} nextStepBtnLabel={nextStepBtnLabel} />,
            }))}
        />
    );
};

export default ProductsAccordion;
