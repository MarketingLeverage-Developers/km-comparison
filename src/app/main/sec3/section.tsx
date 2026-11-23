'use client';
import { useEffect, useRef, useState } from 'react';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import SectionTitle from '@/app/(components)/common/sectionTitle';
import { useCountUpOnce } from '@/libs/utils/useCountUp';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';

const COUNTERS = [
    { label: '7 days', value: 542, color: DARK },
    { label: 'total', value: 65610, color: DARK },
    { label: 'success', value: 31840, color: PRIMARY },
];

/** 화면에 처음 보일 때 true (한 번만) */
const useInViewOnce = <T extends Element>() => {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el || inView) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [inView]);
    return [ref, inView] as const;
};

const Counter = ({ c, mobile, first }: { c: (typeof COUNTERS)[number]; mobile: boolean; first: boolean }) => {
    const [ref, inView] = useInViewOnce<HTMLDivElement>();
    const count = useCountUpOnce(inView ? c.value : 0);
    return (
        <div ref={ref} style={{ flex: 1, minWidth: 0 }}>
            <Flex
                direction="column"
                gap={mobile ? 8 : 15}
                s={mobile}
                align={mobile ? 'center' : 'start'}
                style={{
                    padding: mobile ? '0 6px' : '0 var(--space-40)',
                    borderLeft: first ? 'none' : '1px solid #E4E4E0',
                }}
            >
                <Text
                    size={mobile ? 13 : 20}
                    s={mobile}
                    weight={500}
                    color="#8A8A8A"
                    style={{ ...ls(), textTransform: 'uppercase', lineHeight: 1 }}
                >
                    {c.label}
                </Text>
                <Text
                    size={mobile ? 20 : 46}
                    s={mobile}
                    weight={800}
                    color={c.color}
                    style={{ ...paperlogy, ...ls(), lineHeight: 1 }}
                >
                    {count.toLocaleString()}
                </Text>
            </Flex>
        </div>
    );
};

/** S3 실시간 카운팅 */
const Section3 = () => {
    return (
        <section style={{ background: '#fff' }}>
            <Item desktop>
                <MaxWidth maxWidth={1240} style={{ padding: 'var(--space-120) 20px var(--space-20)' }}>
                    <Flex direction="column" gap={30} align="center" width="100%">
                        <SectionTitle plain="실시간" accent="카운팅" />
                        <Box backgroundColor="#FFFAE6" radius={24} width="100%" padding={{ y: 35 }}>
                            <Flex>
                                {COUNTERS.map((c, i) => (
                                    <Counter key={c.label} c={c} mobile={false} first={i === 0} />
                                ))}
                            </Flex>
                        </Box>
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" gap={20} s align="center" style={{ padding: '60px 16px 0' }}>
                    <SectionTitle plain="실시간" accent="카운팅" />
                    <Box backgroundColor="#FFFAE6" radius={16} width="100%" style={{ padding: '22px 0' }}>
                        <Flex>
                            {COUNTERS.map((c, i) => (
                                <Counter key={c.label} c={c} mobile first={i === 0} />
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Item>
        </section>
    );
};

export default Section3;
