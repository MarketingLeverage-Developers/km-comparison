'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import SwiperD from '@/headful/barSwiper/D/swiperD';
import { DARK, PRIMARY, ls } from '@/configs/site';

const CARS = [
    '토레스 2022년식',
    '아우디 A6 2018년식',
    '그랜저 IG 6 2016년식',
    'Kia K8 2021년식',
    '레이 2019년식',
    '쏘렌토 2020년식',
    '팰리세이드 2021년식',
    'BMW 520d 2019년식',
    '아반떼 CN7 2022년식',
    '카니발 2020년식',
    '제네시스 G80 2021년식',
    '투싼 2019년식',
];

const LEFT = CARS.slice(0, 6);
const RIGHT = CARS.slice(6);

const Row = ({ car, mobile }: { car: string; mobile: boolean }) => (
    <Flex
        align="center"
        gap={mobile ? 10 : 12}
        s={mobile}
        height={mobile ? '54px' : 70}
        style={{ borderBottom: '1px solid #EDEDEA', boxSizing: 'border-box' }}
    >
        <Box backgroundColor={PRIMARY} radius={6} width="fit-content" padding={mobile ? undefined : { x: 8, y: 4 }} style={mobile ? { padding: '4px 8px' } : undefined}>
            <Text size={mobile ? 12 : 16} s={mobile} weight={700} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                New
            </Text>
        </Box>
        <Text
            size={mobile ? 14 : 17}
            s={mobile}
            weight={600}
            color={DARK}
            line={1}
            style={{ ...ls(), lineHeight: 1, flex: 1, minWidth: 0 }}
        >
            {car} 상담
        </Text>
        <Box
            backgroundColor="#FFF4CC"
            radius={999}
            width="fit-content"
            padding={mobile ? undefined : { x: 15, y: 7 }}
            style={{ flexShrink: 0, ...(mobile ? { padding: '6px 10px' } : {}) }}
        >
            <Text size={mobile ? 12 : 16} s={mobile} weight={600} color="#9A6E00" style={{ ...ls(), lineHeight: 1 }}>
                상담완료
            </Text>
        </Box>
    </Flex>
);

const colStyle = (col: number): React.CSSProperties =>
    col === 0
        ? { flex: 1, minWidth: 0, paddingRight: 'var(--space-40)' }
        : { flex: 1, minWidth: 0, paddingLeft: 'var(--space-40)', borderLeft: '1px solid #EEEEEA' };

const Content = ({ mobile = false }: { mobile?: boolean }) =>
    mobile ? (
        <Box backgroundColor="#FFFFFF" radius={16} width="100%" style={{ padding: '4px 16px' }}>
            <SwiperD height="270px" spaceBetween={0} delay={1500}>
                {CARS.map((car) => (
                    <Row key={car} car={car} mobile />
                ))}
            </SwiperD>
        </Box>
    ) : (
        <Box backgroundColor="#FFFFFF" radius={24} width="100%" padding={{ x: 40, y: 8 }}>
            <Flex>
                {[LEFT, RIGHT].map((list, col) => (
                    <Box key={col} style={colStyle(col)}>
                        <SwiperD height="calc(var(--box-70) * 4)" spaceBetween={0} delay={1500}>
                            {list.map((car) => (
                                <Row key={car} car={car} mobile={false} />
                            ))}
                        </SwiperD>
                    </Box>
                ))}
            </Flex>
        </Box>
    );

export default Content;
