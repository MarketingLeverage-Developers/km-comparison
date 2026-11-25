import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import { ThemeProvider } from '@/ui-kit/src/components/ThemeProvider';
import ClientLayout from './ClientLayout';
import TrackingSdk from './TrackingSdk';
import Script from 'next/script';

const LocalFont = localFont({
    src: [
        {
            path: '../assets/fonts/pretendard/Pretendard-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../assets/fonts/pretendard/Pretendard-Black.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-pretendard',
});

const Paperlogy = localFont({
    src: [
        { path: '../assets/fonts/Paperlogy/Paperlogy-6SemiBold.woff2', weight: '600', style: 'normal' },
        { path: '../assets/fonts/Paperlogy/Paperlogy-7Bold.woff2', weight: '700', style: 'normal' },
        { path: '../assets/fonts/Paperlogy/Paperlogy-8ExtraBold.woff2', weight: '800', style: 'normal' },
    ],
    variable: '--font-paperlogy',
});

export const metadata: Metadata = {
    title: '국민중고차비교견적',
    description: '내 차 팔 때 제값 받는 방법! 전국 딜러 경쟁 입찰로 최고가 견적을 무료로 확인하세요.',
    keywords: [],
    icons: {
        icon: '/favicon.ico', // public 폴더에 있는 favicon.ico 파일을 사용
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const trackingSiteId = process.env.NEXT_PUBLIC_TRACKING_SITE_ID;
    const trackingApiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const environment = process.env.NEXT_PUBLIC_ENV === 'prod' ? 'production' : 'staging';
    const src = process.env.NEXT_PUBLIC_API_URL;
    return (
        <html lang="kr" suppressHydrationWarning id="root">
            <head>
                <Script>{`window.MLeverageConfig = {apiBase: '${src}'};`}</Script>
                <Script src={`https://cdn.mleverage.co.kr/mleverage.client.js`} defer></Script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xpressengine/XEIcon/xeicon.min.css" />
            </head>
            <body
                suppressHydrationWarning
                className={`${LocalFont.className} ${LocalFont.variable} ${Paperlogy.variable}`}
            >
                {trackingSiteId && trackingApiBaseUrl && (
                    <TrackingSdk siteId={trackingSiteId} apiBaseUrl={trackingApiBaseUrl} environment={environment} />
                )}
                <ThemeProvider
                    theme={{
                        '--primary-color': '#FFC800',
                        '--text-color': '#1A1A1A',
                        '--focus-color': '#FFC800',
                    }}
                >
                    <ClientLayout>{children}</ClientLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
