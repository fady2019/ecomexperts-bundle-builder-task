import ProductList from '@/components/product';

import Button from '@/components/ui/button';

import type { TProductAccordionBodyProps } from '@/types/products-accordion';
import { twJoin } from 'tailwind-merge';

const ProductAccordionBody: React.FC<TProductAccordionBodyProps> = (props) => {
    const { productKey, products, nextStepBtnLabel } = props;

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <ProductList productKey={productKey} products={products} />

            {nextStepBtnLabel && (
                <Button className={twJoin('text-highlighted-1 border', 'hover:bg-highlighted-1 hover:text-bg-1')}>
                    Next: {nextStepBtnLabel}
                </Button>
            )}
        </div>
    );
};

export default ProductAccordionBody;
