import { useEffect } from 'react';

import Spinner from '@/components/ui/spinner';
import Notification from '@/components/ui/notification';
import ProductsAccordion from './components/products-accordion';

import useUIStore from './store/ui';
import useProductsStore from './store/products';
import useReactQuery from './hooks/react-query/useReactQuery';

import type { TProducts } from './types/product';
import { twJoin } from 'tailwind-merge';

function App() {
    const { isLoading, notification, isDarkTheme } = useUIStore();
    const { setProducts } = useProductsStore();

    const { data } = useReactQuery<TProducts>({ queryKey: ['products'] }, { url: 'src/data/products.json' });

    useEffect(() => {
        setProducts(data);
    }, [data, setProducts]);

    return (
        <>
            <Spinner loading={isLoading} darkTheme={isDarkTheme} />
            <Notification notification={notification} darkTheme={isDarkTheme} />

            <main className={twJoin('mx-auto max-w-325 p-8', 'max-[1300px]:max-w-full')}>
                <div className={twJoin('grid grid-cols-[auto_400px] gap-10', 'max-[1300px]:grid-cols-1')}>
                    <ProductsAccordion />

                    <div className="bg-bg-3 rounded-[10px] p-4 text-2xl font-bold">Review</div>
                </div>
            </main>
        </>
    );
}

export default App;
