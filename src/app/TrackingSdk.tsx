'use client';

import { useEffect } from 'react';

type Props = {
    siteId: string;
    apiBaseUrl: string;
    environment: 'production' | 'staging';
};

export default function TrackingSdk({ siteId, apiBaseUrl, environment }: Props) {
    useEffect(() => {
        if (document.querySelector('script[data-landing-tracking-sdk]')) return;

        let absoluteApiBaseUrl: string;
        try {
            absoluteApiBaseUrl = new URL(apiBaseUrl, window.location.origin).href;
        } catch (error) {
            console.warn('Tracking API URL is invalid:', error);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://d35ql4xq9idbia.cloudfront.net/landing-tracking/sdk.js';
        script.dataset.landingTrackingSdk = '';
        script.dataset.siteId = siteId;
        script.dataset.apiBaseUrl = absoluteApiBaseUrl;
        script.dataset.environment = environment;
        script.async = true;
        document.head.appendChild(script);
    }, [siteId, apiBaseUrl, environment]);

    return null;
}
