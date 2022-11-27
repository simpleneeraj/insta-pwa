import React from 'react';

interface FrameProps extends React.ComponentPropsWithoutRef<'div'> {
    title: string;
    message: string;
    notificationProps?: {
        appIcon: string;
        appName: string;
        timestamp: string;
    };
    lockScreenProps?: {
        hours: string;
        minutes: string;
        seconds: string;
        days: string;
        months: string;
        years: string;
        dayNumber: string
    },
    reminderProps?: {
        heading: string
    },
    tweetProps?: {
        userName: string;
        watermark: string;
        timestamp: string;
        userImage: string;
        contentImage: string;
        userName: string;
        userHandle: string;
    }
}