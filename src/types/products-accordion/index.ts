import type { TProduct, TProductKey } from '../product';

export type TProductAccordionStep = {
    id: TProductKey;
    title: string;
    TitleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    products: TProduct[];
    nextStepBtnLabel: string;
};

export type TProductAccordionHeaderProps = {
    productKey: TProductKey;
    title: string;
    TitleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    subtitle: string;
    isOpened: boolean;
};

export type TProductAccordionBodyProps = {
    productKey: TProductKey;
    products: TProduct[];
    nextStepBtnLabel: string;
};
