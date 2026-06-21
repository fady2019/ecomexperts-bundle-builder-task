export type TNotification = {
    id: string | number;
    content: string;
    type: 'info' | 'success' | 'warning' | 'error';
};
