'use client';
import { useState } from 'react';
import { FormProvider } from '../(components)/formProvider';
import SellPageTitle from './components/title';
import SellForm from './components/sellForm';
import Tab from './components/Tab';
import CurrentFstSection from './components/currentFstSection';
import CurrentScdSection from './components/currentScdSection';
import ServiceFstSection from './components/serviceFstSection';
import ServiceScdSection from './components/serviceScdSection';
import ServiceTrdSection from './components/serviceTrdSection';

const SellPage = () => {
    const [service, setService] = useState(false);
    return (
        <main>
            <SellPageTitle />
            <FormProvider inquireLocation="서브-상단" conversionPage="서브">
                <SellForm />
            </FormProvider>
            <Tab service={service} setService={setService} />
            {!service ? (
                <>
                    <CurrentFstSection />
                    <CurrentScdSection />
                </>
            ) : (
                <>
                    <ServiceFstSection />
                    <ServiceScdSection />
                    <ServiceTrdSection />
                </>
            )}
        </main>
    );
};

export default SellPage;
