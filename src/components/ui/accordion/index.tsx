import React, { useState } from 'react';

import AccordionItem from './item';

import type { TAccordionProps } from '@/types/accordion';

const Accordion: React.FC<TAccordionProps> = (props) => {
    const { items, initOpened, onlyOneItemOpened } = props;

    const [openedItems, setOpenItems] = useState<Set<string>>(new Set(initOpened));

    const handleItemToggling = (id: string) => {
        setOpenItems((itemsIds) => {
            const newItemIds = new Set(onlyOneItemOpened ? [] : itemsIds);

            if (itemsIds.has(id)) {
                newItemIds.delete(id);
            } else {
                newItemIds.add(id);
            }

            return newItemIds;
        });
    };

    const handleOpenNext = (currItemIdx: number) => {
        if (currItemIdx === items.length - 1) {
            return;
        }

        setOpenItems(new Set([items[currItemIdx + 1].id]));
    };

    return (
        <div className="flex flex-col gap-1.25">
            {items.map((item, idx) => (
                <AccordionItem
                    key={item.id}
                    {...item}
                    isOpened={openedItems.has(item.id)}
                    openNextHandler={handleOpenNext.bind(null, idx)}
                    onToggle={handleItemToggling}
                />
            ))}
        </div>
    );
};

export default Accordion;
