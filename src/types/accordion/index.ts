export type TAccordionItemProps = {
    id: string;
    header: React.ReactNode | ((isOpened: boolean) => React.ReactNode);
    body: React.ReactNode | ((isOpened: boolean, openNext: () => void) => React.ReactNode);
    isOpened: boolean;
    openNextHandler: () => void;
    onToggle?: (id: string) => void;
};

export type TAccordionProps = {
    items: Array<Omit<TAccordionItemProps, 'isOpened' | 'onToggle' | 'openNextHandler'>>;
    initOpened?: string[];
    onlyOneItemOpened?: boolean;
};
