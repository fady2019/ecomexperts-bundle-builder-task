export type TAccordionItemProps = {
    id: string;
    header: React.ReactNode | ((isOpened: boolean) => React.ReactNode);
    body: React.ReactNode | ((isOpened: boolean) => React.ReactNode);
    isOpened: boolean;
    onToggle?: (id: string) => void;
};

export type TAccordionProps = {
    items: Array<Omit<TAccordionItemProps, 'isOpened' | 'onToggle'>>;
    initOpened?: string[];
    onlyOneItemOpened?: boolean;
};
