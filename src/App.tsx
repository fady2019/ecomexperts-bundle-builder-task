import { useEffect } from 'react';
import { twJoin } from 'tailwind-merge';

import Spinner from '@/components/ui/spinner';
import Notification from '@/components/ui/notification';
import ProductsAccordion from '@/components/products-accordion';
import SecuritySystemReview from '@/components/system-review';

import useUIStore from '@/store/ui';
import useProductsStore from '@/store/products';
import useReactQuery from '@/hooks/react-query/useReactQuery';
import useSecuritySystemStore from './store/security-system';

import type { TProducts } from '@/types/product';

function App() {
    const { isLoading, notification, isDarkTheme } = useUIStore();

    const setProducts = useProductsStore((state) => state.setProducts);
    const loadSecuritySystem = useSecuritySystemStore((state) => state.loadSecuritySystem);

    const { data } = useReactQuery<TProducts>({ queryKey: ['products'] }, { url: 'src/data/products.json' });

    useEffect(() => {
        loadSecuritySystem();
    }, [loadSecuritySystem]);

    useEffect(() => {
        setProducts(data);
    }, [data, setProducts]);

    return (
        <>
            <Spinner loading={isLoading} darkTheme={isDarkTheme} />
            <Notification notification={notification} darkTheme={isDarkTheme} />

            <main className={twJoin('mx-auto max-w-325 p-8', 'max-[1300px]:max-w-full', 'max-[575px]:p-4')}>
                <div className={twJoin('grid grid-cols-[auto_400px] items-start gap-10', 'max-[1300px]:grid-cols-1')}>
                    <ProductsAccordion />
                    <SecuritySystemReview />
                </div>
            </main>
        </>
    );
}

export default App;
