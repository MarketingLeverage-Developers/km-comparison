import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { PRIMARY, ls, paperlogy } from '@/configs/site';
import bgBandPc from '@/assets/images/bg-band-pc.webp';
import bgBandMo from '@/assets/images/bg-band-mo.webp';
import car from '@/assets/images/s6-car.png';

const Band = ({ mobile = false }: { mobile?: boolean }) => (
    <Box
        backgroundImage={mobile ? bgBandMo.src : bgBandPc.src}
        backgroundColor="#1A1A1A"
        height={mobile ? '300px' : 'max(300px, min(384px, calc(384 / 1600 * 100vw)))'}
    >
        <MaxWidth
            maxWidth={1260}
            style={{ height: '100%', padding: mobile ? '50px 16px 0' : '0 20px', boxSizing: 'border-box' }}
        >
            <Flex
                direction="column"
                justify={mobile ? 'start' : 'center'}
                gap={mobile ? 10 : 15}
                s={mobile}
                height="100%"
            >
                <Text size={mobile ? 15 : 24} s={mobile} weight={600} color="#fff" style={{ ...ls(), lineHeight: 1 }}>
                    감가 걱정 없는 투명한 최고가 매입
                </Text>
                <Text
                    size={mobile ? 26 : 46}
                    s={mobile}
                    weight={800}
                    color="#fff"
                    style={{ ...paperlogy, ...ls(), lineHeight: 1.3 }}
                >
                    국민중고차비교견적에서
                    <br />내 차{' '}
                    <Text
                        size={mobile ? 26 : 46}
                        s={mobile}
                        weight={800}
                        color={PRIMARY}
                        style={{ lineHeight: 'inherit' }}
                    >
                        제값
                    </Text>{' '}
                    받으세요
                </Text>
            </Flex>
        </MaxWidth>
        <Image
            image={car.src}
            alt="쏘렌토"
            width={mobile ? '65%' : 400}
            style={{
                position: 'absolute',
                zIndex: 1,
                pointerEvents: 'none',
                ...(mobile
                    ? { right: '-6%', bottom: '6%', maxWidth: 300 }
                    : { right: '4%', bottom: '5%', maxWidth: 462 }),
            }}
        />
    </Box>
);

export default Band;
