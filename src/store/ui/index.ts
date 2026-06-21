import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { isSystemThemeDark } from './utils';

import type { TUIStore } from '@/types/store/ui';

const useUIStore = create<TUIStore>()(
    persist(
        (set) => ({
            isLoading: false,
            notification: null,
            isDarkTheme: isSystemThemeDark(),

            setIsLoading: (isLoading) => set({ isLoading }),
            setNotification: (notification) => set({ notification }),
            toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
        }),
        {
            name: 'ui-store',
            partialize: (state) => ({ isDarkTheme: state.isDarkTheme }),
        },
    ),
);

export default useUIStore;
