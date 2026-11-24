'use client';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { FormProvider } from '@/app/(components)/formProvider';
import MainForm from '@/app/(components)/common/mainForm';
import bgHeroPc from '@/assets/images/bg-hero-pc.webp';
import bgHeroMo from '@/assets/images/bg-hero-mo.webp';
import heroCar from '@/assets/images/s1-car.png';
import Title from './components/title';

const Section1 = () => {
    return (
        <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <Item desktop>
                <Box backgroundImage={bgHeroPc.src} padding={{ y: 120 }} style={{ position: 'relative' }}>
                    <MaxWidth maxWidth={1260} style={{ padding: '0 20px' }}>
                        <Flex align="center" justify="space-between" height="100%" style={{ zIndex: 2 }}>
                            <Title />
                            <Box style={{ flexShrink: 0, zIndex: 2 }} width={'392px'}>
                                <FormProvider inquireLocation="메인-상단">
                                    <MainForm />
                                </FormProvider>
                            </Box>
                        </Flex>
                        <Image
                            image={heroCar.src}
                            alt="제네시스 G80"
                            height={300}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: '58%',
                                transform: 'translateX(-50%)',
                                zIndex: 1,
                            }}
                        />
                    </MaxWidth>
                </Box>
            </Item>
            <Item mobile>
                <Box backgroundImage={bgHeroMo.src}>
                    <Flex direction="column" align="center" gap={30} s style={{ padding: '40px 16px 30px' }}>
                        <Box width={'320px'}>
                            <Title mobile />
                        </Box>

                        <FormProvider inquireLocation="메인-상단">
                            <MainForm />
                        </FormProvider>
                    </Flex>
                </Box>
            </Item>
        </section>
    );
};

export default Section1;
