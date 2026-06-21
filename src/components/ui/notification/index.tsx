import React, { useEffect, useRef, useId } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast, type Id } from 'react-toastify';

import type { TNotification } from '@/types/notification';

const Notification: React.FC<{
    notification: TNotification | null;
    darkTheme: boolean;
}> = (props) => {
    const toastContainerId = useId();
    const lastNotificationId = useRef<Id>(undefined);
    const { darkTheme, notification } = props;

    useEffect(() => {
        if (!notification?.content) {
            return;
        }

        toast.dismiss(lastNotificationId.current);

        lastNotificationId.current = toast(notification.content, {
            containerId: toastContainerId,
            toastId: notification.id,
            autoClose: 10000,
            position: 'bottom-right',
            closeOnClick: false,
            theme: darkTheme ? 'dark' : 'light',
            type: notification.type,
        });
    }, [notification, lastNotificationId, toastContainerId, darkTheme]);

    toast.onChange((toastItem) => {
        if (toastItem.status === 'removed') {
            toast.clearWaitingQueue({ containerId: toastContainerId });
        }
    });

    return ReactDOM.createPortal(
        <ToastContainer
            containerId={toastContainerId}
            style={{ maxWidth: '100%', width: '500px', right: 0, bottom: 0, padding: '1rem' }}
            position="bottom-right"
            limit={1}
        />,
        document.getElementById('notification')!,
    );
};

export default Notification;
