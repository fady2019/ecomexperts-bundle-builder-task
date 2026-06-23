export type TPlan = {
    id: string;
    title: string;
    description: string;
    benefits: string[];
    pricePerMonth: number;
    salePricePerMonth: number;
    provideFreeFastShipping: boolean;
};

export type TPlans = {
    plans: TPlan[];
    defaultPlanId: string;
    mostPopularPlanId: string;
    bestValuePlanId: string;
};

export type TPlanBenefitsProps = {
    plan: TPlan;
};

export type TPlanBenefitItemProps = {
    Icon: React.JSX.Element;
    title: string;
    price: number;
    salePrice: number;
};

export type TPlanCardProps = {
    plan: TPlan;
};
