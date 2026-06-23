import { useEffect } from 'react';
import { twJoin } from 'tailwind-merge';

import Spinner from '@/components/ui/spinner';
import Notification from '@/components/ui/notification';
import SecuritySystemBuilder from '@/components/system-builder';
import SecuritySystemReview from '@/components/system-review';

import useUIStore from '@/store/ui';
import useReactQuery from '@/hooks/react-query/useReactQuery';
import useProductsStore from '@/store/products';
import usePlansStore from '@/store/plans';
import useSecuritySystemStore from '@/store/security-system';

import type { TProducts } from '@/types/product';
import type { TPlans } from '@/types/plan';

function App() {
    const { isLoading, notification, isDarkTheme } = useUIStore();

    const setProducts = useProductsStore((state) => state.setProducts);
    const setPlans = usePlansStore((state) => state.setPlans);
    const loadSecuritySystem = useSecuritySystemStore((state) => state.loadSecuritySystem);

    const { data: products } = useReactQuery<TProducts>({ queryKey: ['products'] }, { url: 'src/data/products.json' });
    const { data: plans } = useReactQuery<TPlans>({ queryKey: ['plans'] }, { url: 'src/data/plans.json' });

    useEffect(() => {
        loadSecuritySystem();
    }, [loadSecuritySystem]);

    useEffect(() => {
        setProducts(products);
    }, [products, setProducts]);

    useEffect(() => {
        setPlans(plans);
    }, [plans, setPlans]);

    return (
        <>
            <Spinner loading={isLoading} darkTheme={isDarkTheme} />
            <Notification notification={notification} darkTheme={isDarkTheme} />

            <main className={twJoin('mx-auto max-w-325 p-8', 'max-custom-xl:max-w-full', 'max-custom-sm:p-2')}>
                <h1
                    className={twJoin(
                        'hidden px-2.5 py-5 text-center text-[32px] leading-[110%] font-bold tracking-[-0.06px]',
                        'max-md:block',
                    )}
                >
                    Let’s get started!
                </h1>

                <div className={twJoin('grid grid-cols-[auto_400px] items-start gap-10', 'max-custom-xl:grid-cols-1')}>
                    <SecuritySystemBuilder />
                    <SecuritySystemReview />
                </div>
            </main>
        </>
    );
}

export default App;
