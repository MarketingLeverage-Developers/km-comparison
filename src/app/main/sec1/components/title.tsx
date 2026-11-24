import React from 'react';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';
import checkIcon from '@/assets/images/check.svg';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Box from '@/ui-kit/src/components/layouts/Box/Box';

const CHECKS = ['딱 30초면 내 차 무료견적 신청', '전국 전산망 기준 최고가 매입', '당일 방문부터 즉시 입금까지'];

const Title = ({ mobile = false }: { mobile?: boolean }) => {
    const head = mobile ? 30 : 56;
    return (
        <Flex direction="column" gap={mobile ? 20 : 40} s={mobile} align="start" style={{ zIndex: 2 }}>
            <Flex direction="column" gap={mobile ? 15 : 25} s={mobile} align="start">
                <Box backgroundColor={PRIMARY} radius={999} padding={mobile ? { y: 10, x: 30 } : { x: 20, y: 12 }}>
                    <Text
                        size={mobile ? 15 : 22}
                        s={mobile}
                        weight={700}
                        color={DARK}
                        style={{ ...ls(), lineHeight: 1 }}
                    >
                        복잡한 견적 비교는 끝!
                    </Text>
                </Box>
                <Text
                    size={head}
                    s={mobile}
                    weight={800}
                    color="#fff"
                    style={{ ...paperlogy, ...ls(), lineHeight: 1.2, whiteSpace: 'nowrap' }}
                >
                    내 차 팔 때 <br />
                    부르는 게 값이 아니라 <br />
                    <span style={{ color: PRIMARY }}>&apos;제값&apos;</span>&nbsp; 받는 방법?!
                </Text>
            </Flex>
            <Flex direction="column" gap={mobile ? 10 : 15} s={mobile}>
                {CHECKS.map((c) => (
                    <Flex key={c} align="center" gap={10} s={mobile}>
                        <Image
                            image={checkIcon.src}
                            width={mobile ? '20px' : 25}
                            height={mobile ? '20px' : 25}
                            alt=""
                        />
                        <Text
                            size={mobile ? 16 : 20}
                            s={mobile}
                            weight={500}
                            color="#fff"
                            style={{ ...ls(), lineHeight: 1 }}
                        >
                            {c}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default Title;
