import React, { createContext, useContext } from 'react';
import { notification, NotificationArgsProps } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface IopenNotification {
    type: NotificationType
    message: string
    description?: string
    showProgress?: boolean
    pauseHover?: boolean
    placement?: NotificationArgsProps["placement"]
}

interface NotificationContextType {
    openNotification: (props: IopenNotification) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (props: IopenNotification) => {
        api[props.type]({
            message: props.message,
            description: props.description,
            showProgress: props.showProgress,
            pauseOnHover: props.pauseHover,
            placement: props.placement ?? "topRight"
        });
    };

    return (
        <NotificationContext.Provider value={{ openNotification }}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
