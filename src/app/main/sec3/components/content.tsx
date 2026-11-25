'use client';
import { useEffect, useState } from 'react';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { useCountUpOnce } from '@/libs/utils/useCountUp';
import { COUNTS, DARK, PRIMARY, ls, paperlogy } from '@/configs/site';

const COUNTERS = [
    { label: '7 days', value: COUNTS.week, color: DARK },
    { label: 'total', value: COUNTS.total, color: DARK },
    { label: 'success', value: COUNTS.success, color: PRIMARY },
];

/** 화면에 처음 보일 때 true (한 번만) */
const useInViewOnce = (id: string) => {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = document.getElementById(id);
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
    }, [id, inView]);
    return inView;
};

const Counter = ({ c, mobile, first }: { c: (typeof COUNTERS)[number]; mobile: boolean; first: boolean }) => {
    const id = `counter-${COUNTERS.indexOf(c)}-${mobile ? 'mo' : 'pc'}`;
    const inView = useInViewOnce(id);
    const count = useCountUpOnce(inView ? c.value : 0);
    return (
        <Box id={id} style={{ flex: 1, minWidth: 0 }}>
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
        </Box>
    );
};

const Content = () => (
    <Box backgroundColor="#FFFAE6" radius={24} width="100%" padding={{ y: 35 }}>
        <Item desktop>
            <Flex>
                {COUNTERS.map((c, i) => (
                    <Counter key={c.label} c={c} mobile={false} first={i === 0} />
                ))}
            </Flex>
        </Item>
        <Item mobile>
            <Flex>
                {COUNTERS.map((c, i) => (
                    <Counter key={c.label} c={c} mobile first={i === 0} />
                ))}
            </Flex>
        </Item>
    </Box>
);

export default Content;
