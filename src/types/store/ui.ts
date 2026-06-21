import type { TNotification } from '@/types/notification';

export type TUIState = {
    isLoading: boolean;
    notification: TNotification | null;
    isDarkTheme: boolean;
};

export type TUIActions = {
    setIsLoading: (isLoading: boolean) => void;
    setNotification: (notification: TNotification | null) => void;
    toggleTheme: () => void;
};

export type TUIStore = TUIState & TUIActions;
