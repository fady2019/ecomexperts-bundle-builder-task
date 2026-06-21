import React from 'react';
import { twJoin } from 'tailwind-merge';

import type { TAccordionItemProps } from '@/types/accordion';

const AccordionItem: React.FC<TAccordionItemProps> = (props) => {
    const { id, header, body, isOpened, onToggle } = props;

    return (
        <div className={twJoin(isOpened && 'bg-bg-3 rounded-[10px]')}>
            <div
                className={'cursor-pointer select-none'}
                tabIndex={-1}
                role="button"
                onClick={onToggle?.bind(null, id)}
            >
                {typeof header === 'function' ? header(isOpened) : header}
            </div>

            {isOpened && <div>{typeof body === 'function' ? body(isOpened) : body}</div>}
        </div>
    );
};

export default AccordionItem;
