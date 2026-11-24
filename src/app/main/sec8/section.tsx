'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { DARK, PHONE, PHONE_TEL, PRIMARY, ls, paperlogy } from '@/configs/site';
import phoneIcon from '@/assets/images/cs-phone.svg';

const PhonePill = ({ mobile }: { mobile: boolean }) => (
    <Box
        width="fit-content"
        backgroundColor="#F1F2F5"
        radius={100}
        onClick={() => {
            window.location.href = `tel:${PHONE_TEL}`;
        }}
        style={{ cursor: 'pointer' }}
    >
        <Flex
            align="center"
            gap={mobile ? 12 : 15}
            s={mobile}
            padding={mobile ? { t: 10, b: 10, l: 12, r: 22 } : { t: 12, b: 12, l: 20, r: 25 }}
        >
            <Box
                width={mobile ? '44px' : 55}
                height={mobile ? '44px' : 55}
                radius="50%"
                backgroundColor={PRIMARY}
                boxShadow="0px 3.4px 6.9px rgba(0,0,0,0.06)"
                style={{ flexShrink: 0 }}
            >
                <Flex justify="center" align="center" height="100%">
                    <Image image={phoneIcon.src} alt="" width="50%" height="50%" style={{ transform: 'scaleX(-1)' }} />
                </Flex>
            </Box>
            <Flex align="center" gap={15} s={mobile}>
                <Text size={mobile ? 17 : 24} s={mobile} weight={800} color={DARK} style={{ ...ls(-0.02), whiteSpace: 'nowrap' }}>
                    고객센터
                </Text>
                <Text size={mobile ? 20 : 28} s={mobile} weight={700} color={DARK} style={{ ...ls(-0.02), whiteSpace: 'nowrap' }}>
                    {PHONE}
                </Text>
            </Flex>
        </Flex>
    </Box>
);

/** S8 고객센터 */
const Section8 = () => {
    return (
        <Box backgroundColor="#FFFFFF" style={{ borderBottom: '1px solid #eee' }}>
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: 'var(--space-60) 20px' }}>
                    <Flex align="center" justify="space-between" width="100%">
                        <Text size={35} weight={700} color={DARK} style={{ ...paperlogy, ...ls(), lineHeight: 1.35 }}>
                            궁금하신 점,
                            <br />
                            지금 바로 물어보세요
                        </Text>
                        <PhonePill mobile={false} />
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" align="center" gap={20} s style={{ padding: '50px 16px' }}>
                    <Text size={24} s weight={700} color={DARK} align="center" style={{ ...paperlogy, ...ls(), lineHeight: 1.35 }}>
                        궁금하신 점,
                        <br />
                        지금 바로 물어보세요
                    </Text>
                    <PhonePill mobile />
                </Flex>
            </Item>
        </Box>
    );
};

export default Section8;
