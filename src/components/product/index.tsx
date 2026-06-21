import React from 'react';

import ProductCard from './product-card';

import type { TProductListProps } from '@/types/product';

const ProductList: React.FC<TProductListProps> = (props) => {
    const { productKey, products } = props;

    return (
        <div className="flex w-full flex-wrap justify-center gap-3">
            {products.map((product) => (
                <ProductCard key={product.id} productKey={productKey} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
