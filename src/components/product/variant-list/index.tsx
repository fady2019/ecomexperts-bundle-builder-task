import React, { useCallback, useEffect, useState } from 'react';
import { twJoin } from 'tailwind-merge';

import ProductVariant from './variant';

import type { TProductVariantListProps } from '@/types/product';

const ProductVariantList: React.FC<TProductVariantListProps> = (props) => {
    const { variants, variantPickingChangeHandler } = props;
    const [activeVariantId, setActiveVariantId] = useState<string>(variants[0]?.id || '');

    useEffect(() => {
        variantPickingChangeHandler?.(activeVariantId);
    }, [activeVariantId, variantPickingChangeHandler]);

    const handleVariantToggling = useCallback(
        (id: string) => {
            setActiveVariantId(id);
        },
        [setActiveVariantId],
    );

    if (variants.length === 0) {
        return null;
    }

    return (
        <div className={twJoin('invisible-scrollbar flex gap-2 overflow-x-scroll', 'max-[1300px]:gap-0.75')}>
            {variants.map((variant) => (
                <ProductVariant
                    key={variant.id}
                    variant={variant}
                    isActive={activeVariantId === variant.id}
                    toggleVariantHandler={handleVariantToggling}
                />
            ))}
        </div>
    );
};

export default ProductVariantList;
