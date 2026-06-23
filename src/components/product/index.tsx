import React from 'react';

import ProductCard from './product-card';

import useProductsStore from '@/store/products';

import type { TProductListProps } from '@/types/product';

const ProductList: React.FC<TProductListProps> = (props) => {
    const { productType } = props;

    const products = useProductsStore((state) => state[productType]);

    return (
        <div className="flex w-full flex-wrap justify-center gap-3">
            {products.map((product) => (
                <ProductCard key={product.id} productType={productType} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
