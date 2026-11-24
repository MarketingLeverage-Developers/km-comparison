'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { scrollToId } from '@/app/(components)/common/header';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';
import icon1 from '@/assets/images/s6-icon1.webp';
import icon2 from '@/assets/images/s6-icon2.webp';
import arrow from '@/assets/images/arrow-small.svg';

const CARDS = [
    {
        title: '리얼 매입 후기',
        desc: ['먼저 판매하신 고객님들의', '생생한 거래 후기를 확인하세요.'],
        button: '생생 후기 확인하기',
        target: 'review',
        icon: icon1.src,
        iconW: 200,
    },
    {
        title: '30초 무료 견적',
        desc: ['번호판만 입력하면 끝!', '전문 평가사의 정확한 시세 안내.'],
        button: '내 차 시세 조회하기',
        target: 'top',
        icon: icon2.src,
        iconW: 216,
    },
] as const;

const InfoCard = ({ c, mobile }: { c: (typeof CARDS)[number]; mobile: boolean }) => (
    <Box
        backgroundColor="#FFFFFF"
        borderWeight={1}
        borderColor="#EAEAEA"
        radius={mobile ? 16 : 20}
        height={mobile ? '190px' : 'max(var(--box-240), 210px)'}
        padding={mobile ? undefined : 35}
        style={{ overflow: 'hidden', ...(mobile ? { padding: '24px 20px' } : {}) }}
    >
        <Flex direction="column" justify="space-between" height="100%" s={mobile} style={{ position: 'relative', zIndex: 1 }}>
            <Flex direction="column" gap={12} s={mobile}>
                <Text size={mobile ? 20 : 26} s={mobile} weight={700} color={DARK} style={{ ...paperlogy, ...ls(), lineHeight: 1 }}>
                    {c.title}
                </Text>
                <Text size={mobile ? 14 : 18} s={mobile} color="#6E6E6E" style={{ ...ls(), lineHeight: 1.4 }}>
                    {c.desc[0]}
                    <br />
                    {c.desc[1]}
                </Text>
            </Flex>
            <Box
                backgroundColor={PRIMARY}
                radius={999}
                width="fit-content"
                onClick={() => scrollToId(c.target)}
                style={{ cursor: 'pointer' }}
            >
                <Flex
                    align="center"
                    gap={4}
                    s={mobile}
                    padding={mobile ? { t: 10, b: 10, l: 18, r: 14 } : { t: 10, b: 10, l: 20, r: 15 }}
                >
                    <Text size={mobile ? 14 : 16} s={mobile} weight={600} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                        {c.button}
                    </Text>
                    <Image image={arrow.src} alt="" width="16px" height="16px" />
                </Flex>
            </Box>
        </Flex>
        <Image
            image={c.icon}
            alt=""
            width={`calc(${c.iconW} / 592 * 100%)`}
            style={{
                position: 'absolute',
                right: 'calc(33 / 592 * 100%)',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
            }}
        />
    </Box>
);

const Left = ({ mobile = false }: { mobile?: boolean }) => (
    <Flex direction="column" gap={mobile ? 12 : 30} s={mobile}>
        {CARDS.map((c) => (
            <InfoCard key={c.title} c={c} mobile={mobile} />
        ))}
    </Flex>
);

export default Left;
