import { Fragment } from 'react';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';
import icon1 from '@/assets/images/s2-icon1.webp';
import icon2 from '@/assets/images/s2-icon2.webp';

const BENEFITS = [
    {
        icon: icon1.src,
        title: '부당 감가 없는 최고가,',
        accent: '당일 즉시 정산',
        desc: ['약속한 견적 그대로!', '방문 평가 후 현장에서', '바로 송금해 드립니다.'],
        iconBg: 'transparent' as const,
    },
    {
        icon: icon2.src,
        title: '팔까 말까 고민될 땐,',
        accent: '시세 먼저 확인하기',
        desc: ['강요 없는 100% 무료 상담,', '현재 내 차 가치만 \n쏙 확인하세요'],
        iconBg: '#FFFFFF' as const,
    },
];

const Benefit = ({ b, mobile }: { b: (typeof BENEFITS)[number]; mobile: boolean }) => {
    const circle = mobile ? 110 : 175;
    return (
        <Flex align="center" gap={mobile ? 20 : 35} s={mobile}>
            <Box
                width={mobile ? `${circle}px` : circle}
                height={mobile ? `${circle}px` : circle}
                radius="50%"
                backgroundColor={b.iconBg}
                style={{ overflow: 'hidden', flexShrink: 0 }}
            >
                <Image image={b.icon} alt="" width="100%" height="100%" fit="cover" style={{ display: 'block' }} />
            </Box>
            <Flex direction="column" gap={mobile ? 10 : 20} s={mobile} style={{ flexShrink: 0 }}>
                <Flex direction="column" gap={8} s={mobile}>
                    <Text
                        size={mobile ? 18 : 28}
                        s={mobile}
                        weight={800}
                        color={DARK}
                        style={{ ...paperlogy, ...ls(), lineHeight: 1, whiteSpace: 'nowrap' }}
                    >
                        {b.title}
                    </Text>
                    <Text
                        size={mobile ? 18 : 28}
                        s={mobile}
                        weight={800}
                        color={PRIMARY}
                        style={{ ...paperlogy, ...ls(), lineHeight: 1 }}
                    >
                        {b.accent}
                    </Text>
                </Flex>
                <Text
                    size={mobile ? 14 : 18}
                    s={mobile}
                    color="#555"
                    style={{ ...ls(), lineHeight: 1.4, whiteSpace: mobile ? 'pre-line' : 'nowrap' }}
                >
                    {b.desc.map((d, i) => (
                        <Fragment key={d}>
                            {i > 0 && <br />}
                            {d}
                        </Fragment>
                    ))}
                </Text>
            </Flex>
        </Flex>
    );
};

/** S2 혜택 패널 */
const Section2 = () => {
    return (
        <Box backgroundColor="#FFFFFF" padding={{ t: 100 }}>
            <MaxWidth maxWidth={1260} style={{ padding: '0 20px' }}>
                <Item desktop>
                    <Box backgroundColor="#F7F7F5" radius={24} height={300} width="100%" padding={{ x: 110 }}>
                        <Flex align="center" justify="center" gap={110} height="100%">
                            {BENEFITS.map((b) => (
                                <Benefit key={b.accent} b={b} mobile={false} />
                            ))}
                        </Flex>
                    </Box>
                </Item>
                <Item mobile width={'100%'}>
                    <Flex width={'100%'} justify="center">
                        <Box backgroundColor="#F7F7F5" radius={20} style={{ maxWidth: 320 }}>
                            <Flex direction="column" align="center" gap={30} s style={{ padding: '30px 20px' }}>
                                {BENEFITS.map((b) => (
                                    <Benefit key={b.accent} b={b} mobile />
                                ))}
                            </Flex>
                        </Box>
                    </Flex>
                </Item>
            </MaxWidth>
        </Box>
    );
};

export default Section2;
