import React, { useEffect } from 'react';
import { twJoin } from 'tailwind-merge';

import ProductVariant from './variant';

import type { TProductVariantListProps } from '@/types/product';

const ProductVariantList: React.FC<TProductVariantListProps> = (props) => {
    const { activeVariantId, variants, variantPickingChangeHandler } = props;

    useEffect(() => {
        variantPickingChangeHandler?.(activeVariantId);
    }, [activeVariantId, variantPickingChangeHandler]);

    if (variants.length === 0) {
        return null;
    }

    return (
        <div className={twJoin('invisible-scrollbar flex gap-2 overflow-x-scroll', 'max-[1300px]:gap-0.5')}>
            {variants.map((variant) => (
                <ProductVariant
                    key={variant.id}
                    variant={variant}
                    isActive={activeVariantId === variant.id}
                    toggleVariantHandler={variantPickingChangeHandler}
                />
            ))}
        </div>
    );
};

export default ProductVariantList;
