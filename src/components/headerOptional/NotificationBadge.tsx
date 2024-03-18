import React from "react";

interface Props {
    count: number;
    notificationBadgeClassname?: string;
}

const NotificationBadge = ({ count, notificationBadgeClassname }: Props) => {
    return (
        <div
            className={`h-[15px] w-[15px] bg-blue-400 rounded-full flex justify-center items-center text-white absolute -top-2 -right-2 ${notificationBadgeClassname}`}
        >
            <p className="text-xs font-normal">{count}</p>
        </div>
    );
};

export default NotificationBadge;
