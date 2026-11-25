'use client';
import { usePathname } from 'next/navigation';
import Page from '@/ui-kit/src/components/layouts/Page/Page';
import Header from './(components)/common/header';
import Footer from './(components)/common/footer';
import Floating from './(components)/common/floating';
import FixedBanner from './(components)/common/FixedBanner';
import { FormProvider } from './(components)/formProvider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isCompletePage = pathname.startsWith('/complete');

    return (
        <>
            {!isCompletePage && (
                <Page.Header>
                    <Header />
                </Page.Header>
            )}
            {children}
            {!isCompletePage && (
                <>
                    <Footer />
                    <Floating />
                    <FormProvider inquireLocation="하단-고정" conversionPage={pathname === '/' ? '메인' : '서브'}>
                        <FixedBanner />
                    </FormProvider>
                </>
            )}
        </>
    );
}
