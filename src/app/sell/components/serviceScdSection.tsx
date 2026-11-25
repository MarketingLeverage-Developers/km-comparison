'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { DARK, ls, paperlogy } from '@/configs/site';

const personal = [
    { key: '신분증', value: '주민등록증, 운전면허증, 여권' },
    { key: '자동차 등록증 원본', value: '주민센터 or 인터넷발급' },
    { key: '자동차 매도용 인감증명서', value: '주민센터' },
    { key: '인감도장', value: '' },
    { key: '자동차세 완납증명서', value: '1월, 7월에만 해당' },
];

const corporate = [
    { key: '사업자등록증 사본', value: '해당직장' },
    { key: '법인 자동차 등록증 원본', value: '차량등록사업소' },
    { key: '법인 등기부등본 사본(15일 이내)', value: '해당직장' },
    { key: '법인 인감증명서', value: '해당직장' },
    { key: '법인 인감도장', value: '해당직장' },
    { key: '자동차세 완납증명서', value: '1월, 7월에만 해당' },
];

const DocsCard = ({
    title,
    list,
    mobile,
}: {
    title: string;
    list: { key: string; value: string }[];
    mobile: boolean;
}) => (
    <Box
        width={mobile ? '100%' : 600}
        height={mobile ? undefined : 500}
        boxShadow="0px 4px 8px 0px #0000001A"
        backgroundColor="#fff"
        padding={mobile ? undefined : { x: 50, y: 40 }}
        radius={16}
        style={mobile ? { padding: '28px 20px', boxSizing: 'border-box' } : undefined}
    >
        <Flex direction="column" align="center" gap={mobile ? 12 : 25} s={mobile}>
            <Text color="#E6AB0A" size={22} s={mobile} weight={700}>
                {title}
            </Text>
            <Flex direction="column" width="100%">
                {list.map((el, idx) => (
                    <Box
                        key={idx}
                        padding={mobile ? undefined : { y: 20 }}
                        style={{ borderBottom: '1px solid #EEEEEE', ...(mobile ? { padding: '14px 0' } : {}) }}
                    >
                        <Flex width="100%" justify="space-between" gap={10} s={mobile}>
                            <Text color={DARK} size={mobile ? 14 : 18} s={mobile} weight={500}>
                                {el.key}
                            </Text>
                            <Text color="#777777" size={mobile ? 14 : 18} s={mobile} weight={400} align="right">
                                {el.value}
                            </Text>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Flex>
    </Box>
);

const SectionTitle = ({ mobile }: { mobile: boolean }) => (
    <Text color={DARK} size={mobile ? 22 : 28} s={mobile} weight={700} style={{ ...paperlogy, ...ls() }}>
        계약 시 필요서류
    </Text>
);

const ServiceScdSection = () => (
    <Box backgroundColor="#FFFAE6">
        <Item desktop>
            <Box padding={{ y: 100 }}>
                <Flex direction="column" align="center" gap={20}>
                    <SectionTitle mobile={false} />
                    <Flex justify="center" align="center" gap={20}>
                        <DocsCard title="개인 구비서류" list={personal} mobile={false} />
                        <DocsCard title="법인 구비서류" list={corporate} mobile={false} />
                    </Flex>
                </Flex>
            </Box>
        </Item>
        <Item mobile>
            <Flex direction="column" align="center" gap={20} s padding={{ x: 20, y: 50 }}>
                <SectionTitle mobile />
                <DocsCard title="개인 구비서류" list={personal} mobile />
                <DocsCard title="법인 구비서류" list={corporate} mobile />
            </Flex>
        </Item>
    </Box>
);

export default ServiceScdSection;
