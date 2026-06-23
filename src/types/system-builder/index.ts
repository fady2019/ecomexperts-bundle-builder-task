import type { TProduct } from '@/types/product';
import type { TPlan } from '@/types/plan';

export const SYSTEM_PRODUCT_TYPES = ['cameras', 'sensors', 'accessories'] as const;

export type TSystemProductType = (typeof SYSTEM_PRODUCT_TYPES)[number];

export type TSystemItemType = TSystemProductType | 'plans';

export type TSystemItem = TProduct | TPlan;

export type TSystemBuilderStep = {
    systemItemType: TSystemItemType;
    title: string;
    TitleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    nextStepBtnLabel?: string;
};

export type TSystemBuilderAccordionHeaderProps = {
    systemItemType: TSystemItemType;
    title: string;
    TitleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    subtitle: string;
    isOpened: boolean;
};

export type TSystemBuilderAccordionBodyProps = {
    systemItemType: TSystemItemType;
    nextStepBtnLabel?: string;
    openNext: () => void;
};
