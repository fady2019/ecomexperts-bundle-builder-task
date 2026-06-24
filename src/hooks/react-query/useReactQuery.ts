import { useEffect } from 'react';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

import AxiosUtil from '@/utils/axios';
import useUIStore from '@/store/ui';

const useReactQuery = <TResponseData>(
    options: Omit<UseQueryOptions<TResponseData>, 'queryFn'>,
    queryFnOptions: Omit<AxiosRequestConfig, 'method'>,
) => {
    const { setIsLoading, setNotification } = useUIStore();

    const { data, isPending, isError, error } = useQuery<TResponseData>({
        ...options,
        queryFn: () =>
            AxiosUtil.request<TResponseData>({
                ...queryFnOptions,
                method: 'GET',
            }),
    });

    useEffect(() => {
        setIsLoading(isPending);
    }, [isPending, setIsLoading]);

    useEffect(() => {
        if (!isError) {
            return setNotification(null);
        }

        const errorMessage = (error as any)?.response?.data?.message || error?.message || 'An error occurred';

        setNotification({
            id: Date.now(),
            content: errorMessage,
            type: 'error',
        });
    }, [isError, error, setNotification]);

    return { data };
};

export default useReactQuery;
