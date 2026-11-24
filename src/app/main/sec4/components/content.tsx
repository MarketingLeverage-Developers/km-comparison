import Image from '@/ui-kit/src/components/contents/Image/Image';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Grid from '@/ui-kit/src/components/layouts/Grid/Grid';
import { DARK, PRIMARY, ls } from '@/configs/site';
import step1 from '@/assets/images/step1.png';
import step2 from '@/assets/images/step2.png';
import step3 from '@/assets/images/step3.png';
import step4 from '@/assets/images/step4.png';
import step5 from '@/assets/images/step5.png';

// imgW / imgTop: 시안(360 카드) 기준 아이콘 폭·상단 위치 비율
const STEPS = [
    { no: '01', title: '차량 정보 등록', img: step1.src },
    { no: '02', title: '실시간 비교 견적', img: step2.src },
    { no: '03', title: '최고가 딜러 선택', sub: '(수수료 없이 최고가 선택)', img: step3.src },
    { no: '04', title: '안심 방문 탁송', sub: '(계신 곳으로 직접 방문 인수)', img: step4.src, flush: true },
    { no: '05', title: '당일 정산 완료', sub: '(입금 확인 후 차량 인계)', img: step5.src },
];

const cardStyle: React.CSSProperties = { aspectRatio: '1 / 1', overflow: 'hidden' };

const StepCard = ({ s, mobile }: { s: (typeof STEPS)[number]; mobile: boolean }) => (
    <Box backgroundColor="#F4F4F4" radius={mobile ? 14 : 19} borderWeight={1.2} borderColor="#EEEEEE" style={cardStyle}>
        <Flex
            direction="column"
            align="center"
            gap={mobile ? 8 : 12}
            s={mobile}
            style={{ paddingTop: mobile ? 14 : 'var(--space-25)' }}
        >
            <Box
                backgroundColor={PRIMARY}
                radius={120}
                width="fit-content"
                padding={mobile ? undefined : { x: 15, y: 8 }}
                style={mobile ? { padding: '6px 10px' } : undefined}
            >
                <Text size={mobile ? 12 : 16} s={mobile} weight={700} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                    STEP {s.no}
                </Text>
            </Box>
            <Text
                size={mobile ? 15 : 20}
                s={mobile}
                weight={700}
                color={DARK}
                align="center"
                style={{ ...ls(), lineHeight: 1 }}
            >
                {s.title}
            </Text>
            {s.sub && (
                <Text
                    size={mobile ? 11 : 16}
                    s={mobile}
                    color="#777"
                    align="center"
                    style={{ ...ls(), lineHeight: 1.1 }}
                >
                    {s.sub}
                </Text>
            )}
        </Flex>
        <Image
            image={s.img}
            alt=""
            height={mobile ? '48%' : 'calc(220 / 360 * 100%)'}
            style={{
                position: 'absolute',
                left: '50%',
                bottom: 'flush' in s && s.flush ? 0 : mobile ? '4%' : 'calc(18 / 360 * 100%)',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
            }}
        />
    </Box>
);

const MobileStepCard = ({ s }: { s: (typeof STEPS)[number] }) => (
    <Box backgroundColor="#F4F4F4" radius={16} height="130px" style={{ overflow: 'hidden' }}>
        <Flex direction="column" justify="center" gap={10} s height="100%" style={{ padding: '0 20px', width: '62%' }}>
            <Box backgroundColor={PRIMARY} radius={120} width="fit-content" style={{ padding: '7px 12px' }}>
                <Text size={14} s weight={800} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                    STEP {s.no}
                </Text>
            </Box>
            <Flex direction="column" gap={4} s>
                <Text size={17} s weight={800} color={DARK} wbreak="keep-all" style={{ ...ls(), lineHeight: 1.25 }}>
                    {s.title}
                </Text>
                {s.sub && (
                    <Text size={13} s color="#777" wbreak="keep-all" style={{ ...ls(), lineHeight: 1.25 }}>
                        {s.sub}
                    </Text>
                )}
            </Flex>
        </Flex>
        <Image
            image={s.img}
            alt=""
            height="104px"
            style={{
                position: 'absolute',
                right: 16,
                bottom: 'flush' in s && s.flush ? 0 : 10,
                pointerEvents: 'none',
            }}
        />
    </Box>
);

const IntroCard = ({ mobile }: { mobile: boolean }) => (
    <Box backgroundColor={PRIMARY} radius={mobile ? 14 : 19} borderWeight={1.2} borderColor={PRIMARY} style={cardStyle}>
        <Flex direction="column" align="center" justify="center" gap={mobile ? 6 : 12} s={mobile} height="100%">
            <Text
                size={mobile ? 16 : 28}
                s={mobile}
                weight={500}
                color={DARK}
                align="center"
                style={{ ...ls(), lineHeight: 1.35 }}
            >
                흥정 스트레스 없는
                <br />
                스마트 내 차 팔기
            </Text>
            <Text
                size={mobile ? 26 : 46}
                s={mobile}
                weight={700}
                color={DARK}
                align="center"
                style={{ ...ls(-0.02), lineHeight: 1.3 }}
            >
                5 STEPS
            </Text>
        </Flex>
    </Box>
);

const Content = ({ mobile = false }: { mobile?: boolean }) =>
    mobile ? (
        <Flex direction="column" gap={12} s width="100%">
            {STEPS.map((s) => (
                <MobileStepCard key={s.no} s={s} />
            ))}
        </Flex>
    ) : (
        <Grid gridTemplateColumns="repeat(3, 1fr)" columnGap={20} rowGap={30} width="100%" align="stretch">
            <IntroCard mobile={false} />
            {STEPS.map((s) => (
                <StepCard key={s.no} s={s} mobile={false} />
            ))}
        </Grid>
    );

export default Content;
