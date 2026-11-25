'use client';
import BarA from '@/headful/bar/A/barA';
import SwiperD from '@/headful/barSwiper/D/swiperD';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { CONSULT_CARS, DARK, ls, paperlogy } from '@/configs/site';

const SectionTitle = ({ mobile }: { mobile: boolean }) => (
    <Text color={DARK} size={mobile ? 22 : 28} s={mobile} weight={700} style={{ ...paperlogy, ...ls() }}>
        실시간 상담 접수 현황
    </Text>
);

const Ticker = ({ height }: { height: string }) => (
    <SwiperD height={height}>
        {CONSULT_CARS.map((car) => (
            <BarA key={car} New="New" Content={`${car} 상담`} Status="상담완료" />
        ))}
    </SwiperD>
);

const CurrentScdSection = () => (
    <Box style={{ borderTop: '1px solid #EEEEEE' }}>
        <Item desktop>
            <MaxWidth maxWidth={1280}>
                <Box padding={{ y: 100 }}>
                    <Flex justify="center" gap={150}>
                        <Flex width="100%" justify="start">
                            <SectionTitle mobile={false} />
                        </Flex>
                        <Flex justify="center" width="100%">
                            <Box width={700} style={{ overflow: 'hidden' }}>
                                <Ticker height="393px" />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </MaxWidth>
        </Item>
        <Item mobile>
            <Flex direction="column" gap={24} s padding={{ x: 20, y: 50 }}>
                <SectionTitle mobile />
                <Box width="100%" style={{ overflow: 'hidden' }}>
                    <Ticker height="315px" />
                </Box>
            </Flex>
        </Item>
    </Box>
);

export default CurrentScdSection;
