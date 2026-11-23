import Text from '@/ui-kit/src/components/contents/Text/Text';
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
        iconBg: 'transparent',
    },
    {
        icon: icon2.src,
        title: '팔까 말까 고민될 땐,',
        accent: '시세 먼저 확인하기',
        desc: ['강요 없는 100% 무료 상담,', '현재 내 차 가치만 쏙 확인하세요'],
        iconBg: '#FFFFFF',
    },
];

const Benefit = ({ b, mobile }: { b: (typeof BENEFITS)[number]; mobile: boolean }) => {
    const circle = mobile ? 110 : 175;
    return (
        <Flex align="center" gap={mobile ? 20 : 35} s={mobile}>
            <div
                style={{
                    width: mobile ? circle : `var(--box-${circle})`,
                    height: mobile ? circle : `var(--box-${circle})`,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: b.iconBg,
                    flexShrink: 0,
                }}
            >
                <img src={b.icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <Flex direction="column" gap={mobile ? 10 : 20} s={mobile} style={{ flexShrink: 0 }}>
                <Flex direction="column" gap={8} s={mobile}>
                    <Text size={mobile ? 20 : 28} s={mobile} weight={800} color={DARK} style={{ ...paperlogy, ...ls(), lineHeight: 1, whiteSpace: 'nowrap' }}>
                        {b.title}
                    </Text>
                    <Text size={mobile ? 20 : 28} s={mobile} weight={800} color={PRIMARY} style={{ ...paperlogy, ...ls(), lineHeight: 1, whiteSpace: 'nowrap' }}>
                        {b.accent}
                    </Text>
                </Flex>
                <Text size={mobile ? 15 : 18} s={mobile} color="#555" style={{ ...ls(), lineHeight: 1.4 }}>
                    {b.desc.map((d, i) => (
                        <span key={d}>
                            {i > 0 && <br />}
                            {d}
                        </span>
                    ))}
                </Text>
            </Flex>
        </Flex>
    );
};

/** S2 혜택 패널 */
const Section2 = () => {
    return (
        <section style={{ background: '#fff' }}>
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: 'var(--space-100) 20px 0' }}>
                    <Box backgroundColor="#F7F7F5" radius={24} height={300} width="100%">
                        <Flex align="center" justify="space-around" height="100%" style={{ padding: '0 var(--space-80)' }}>
                            {BENEFITS.map((b) => (
                                <Benefit key={b.accent} b={b} mobile={false} />
                            ))}
                        </Flex>
                    </Box>
                </MaxWidth>
            </Item>
            <Item mobile>
                <div style={{ padding: '50px 16px 0' }}>
                    <Box backgroundColor="#F7F7F5" radius={20}>
                        <Flex direction="column" gap={30} s style={{ padding: '30px 20px' }}>
                            {BENEFITS.map((b) => (
                                <Benefit key={b.accent} b={b} mobile />
                            ))}
                        </Flex>
                    </Box>
                </div>
            </Item>
        </section>
    );
};

export default Section2;
