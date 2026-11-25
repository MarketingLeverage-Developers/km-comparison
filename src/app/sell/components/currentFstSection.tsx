'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { useCountUpOnce } from '@/libs/utils/useCountUp';
import { COUNTS, DARK, SITE_NAME, ls, paperlogy } from '@/configs/site';

const data = [
    {
        title: '7 days',
        target: COUNTS.week,
        content: (
            <>
                최근 7일내의 {SITE_NAME}을
                <br />
                이용해주신 고객님 수입니다.
            </>
        ),
    },
    {
        title: 'total',
        target: COUNTS.total,
        content: (
            <>
                현재까지 {SITE_NAME}을
                <br />
                이용해주신 고객님 수입니다.
            </>
        ),
    },
    {
        title: 'success',
        target: COUNTS.success,
        content: (
            <>
                {SITE_NAME}을 이용해주신
                <br />
                소중한 분들의 거래 성사건 수입니다.
            </>
        ),
    },
];

const CountCard = ({ idx, mobile }: { idx: number; mobile: boolean }) => {
    const el = data[idx];
    const count = useCountUpOnce(el.target);
    const highlight = idx === 2;
    return (
        <Box
            width={mobile ? '100%' : 400}
            height={mobile ? '160px' : 200}
            padding={mobile ? undefined : 30}
            backgroundColor={highlight ? '#FFFAE6' : '#EEEEEE'}
            radius={20}
            style={mobile ? { padding: '24px', boxSizing: 'border-box' } : undefined}
        >
            <Flex direction="column" gap={mobile ? 10 : 15} s={mobile}>
                <Text color={DARK} size={18} s={mobile} weight={600}>
                    {el.title}
                </Text>
                <Text color={highlight ? '#E6AB0A' : DARK} size={mobile ? 34 : 60} s={mobile} weight={800}>
                    {count.toLocaleString()}
                </Text>
                <Text
                    color={highlight ? '#9A6E00' : '#777777'}
                    size={mobile ? 14 : 16}
                    s={mobile}
                    weight={400}
                    style={{ lineHeight: mobile ? '20px' : '22px' }}
                >
                    {el.content}
                </Text>
            </Flex>
        </Box>
    );
};

const SectionTitle = ({ mobile }: { mobile: boolean }) => (
    <Text color={DARK} size={mobile ? 22 : 28} s={mobile} weight={700} style={{ ...paperlogy, ...ls() }}>
        실시간 카운팅
    </Text>
);

const CurrentFstSection = () => (
    <>
        <Item desktop>
            <MaxWidth maxWidth={1280}>
                <Box padding={{ y: 100 }}>
                    <Flex width="100%" direction="column" gap={20}>
                        <SectionTitle mobile={false} />
                        <Flex justify="center" align="center" gap={20}>
                            {data.map((_, idx) => (
                                <CountCard key={idx} idx={idx} mobile={false} />
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </MaxWidth>
        </Item>
        <Item mobile>
            <Flex direction="column" gap={16} s padding={{ x: 20, y: 50 }}>
                <SectionTitle mobile />
                {data.map((_, idx) => (
                    <CountCard key={idx} idx={idx} mobile />
                ))}
            </Flex>
        </Item>
    </>
);

export default CurrentFstSection;
