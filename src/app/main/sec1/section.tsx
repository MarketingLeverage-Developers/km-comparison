'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { FormProvider } from '@/app/(components)/formProvider';
import MainForm from '@/app/(components)/common/mainForm';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';
import heroBg from '@/assets/images/hero-bg.webp';
import heroCar from '@/assets/images/hero-car.webp';
import shadow from '@/assets/images/hero-shadow.svg';
import checkIcon from '@/assets/images/check.svg';
import styles from './section.module.scss';

const CHECKS = ['딱 30초면 내 차 무료견적 신청', '전국 전산망 기준 최고가 매입', '당일 방문부터 즉시 입금까지'];

const Copy = ({ mobile }: { mobile: boolean }) => {
    const head = mobile ? 30 : 56;
    return (
        <Flex direction="column" gap={mobile ? 20 : 40} s={mobile} align={mobile ? 'center' : 'start'}>
            <Flex direction="column" gap={mobile ? 15 : 25} s={mobile} align={mobile ? 'center' : 'start'}>
                <Box
                    backgroundColor={PRIMARY}
                    radius={999}
                    padding={mobile ? undefined : { x: 20, y: 12 }}
                    style={mobile ? { padding: '8px 16px' } : undefined}
                >
                    <Text size={mobile ? 15 : 22} s={mobile} weight={700} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                        복잡한 견적 비교는 끝!
                    </Text>
                </Box>
                <Flex direction="column" gap={mobile ? 8 : 15} s={mobile} align={mobile ? 'center' : 'start'}>
                    {['내 차 팔 때', '부르는 게 값이 아니라'].map((line) => (
                        <Text
                            key={line}
                            size={head}
                            s={mobile}
                            weight={800}
                            color="#fff"
                            style={{ ...paperlogy, ...ls(), lineHeight: 1, whiteSpace: 'nowrap' }}
                        >
                            {line}
                        </Text>
                    ))}
                    <Text size={head} s={mobile} weight={800} color="#fff" style={{ ...paperlogy, ...ls(), lineHeight: 1 }}>
                        <span style={{ color: PRIMARY }}>&apos;제값&apos;</span>&nbsp; 받는 방법?!
                    </Text>
                </Flex>
            </Flex>
            <Flex direction="column" gap={mobile ? 10 : 15} s={mobile}>
                {CHECKS.map((c) => (
                    <Flex key={c} align="center" gap={10}>
                        <Image image={checkIcon.src} width={mobile ? '20px' : '24px'} height={mobile ? '20px' : '24px'} alt="" />
                        <Text size={mobile ? 16 : 20} s={mobile} weight={500} color="#fff" style={{ ...ls(), lineHeight: 1 }}>
                            {c}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

/** S1 히어로 + 상단 폼 (inquireLocation: 메인-상단) */
const Section1 = () => {
    return (
        <section id="hero" className={styles.hero} style={{ backgroundImage: `url(${heroBg.src})` }}>
            <div className={styles.gradient} />
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: '0 20px', position: 'relative' }}>
                    <div className={styles.desktopInner}>
                        <img src={shadow.src} alt="" className={styles.shadow} />
                        <img src={heroCar.src} alt="제네시스 G80" className={styles.car} />
                        <Flex align="center" justify="space-between" height="100%" style={{ position: 'relative' }}>
                            <Copy mobile={false} />
                            <div style={{ flexShrink: 0 }}>
                                <FormProvider inquireLocation="메인-상단">
                                    <MainForm />
                                </FormProvider>
                            </div>
                        </Flex>
                    </div>
                </MaxWidth>
            </Item>
            <Item mobile>
                <div className={styles.mobileInner}>
                    <Copy mobile />
                    <div className={styles.carMoWrap}>
                        <img src={heroCar.src} alt="제네시스 G80" className={styles.carMo} />
                    </div>
                    <FormProvider inquireLocation="메인-상단">
                        <MainForm />
                    </FormProvider>
                </div>
            </Item>
        </section>
    );
};

export default Section1;
