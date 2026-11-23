'use client';
import { useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import { processCompletionPage } from '@/libs/landingTracking';

const CompletePage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const alertShown = useRef(false);

    useEffect(() => {
        const token = searchParams.get('token');
        if (!token) return;
        if (sessionStorage.getItem(`conv_${token}`) === 'done') return;

        if (!alertShown.current) {
            alertShown.current = true;
            alert('문의가 완료되었습니다!');
        }

        let cancelled = false;
        let redirectTimer: ReturnType<typeof setTimeout> | undefined;
        void processCompletionPage().then(() => {
            if (cancelled) return;
            sessionStorage.setItem(`conv_${token}`, 'done');
            redirectTimer = setTimeout(() => router.push('/'), 500);
        });

        return () => {
            cancelled = true;
            if (redirectTimer) clearTimeout(redirectTimer);
        };
    }, [router, searchParams]);

    return <Box backgroundColor="#777777" width="100%" height="100vh" />;
};

export default CompletePage;
