'use client';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import ModalA from '@/headful/modalA/A/ModalA';
import NextPortal from '@/headless/NextPortal/NextPortal';
import { DARK, PRIMARY, ls } from '@/configs/site';
import badge from '@/assets/images/review-badge.png';
import chevron from '@/assets/images/chevron-right.svg';
import ReviewDetail, { photoStyle } from './reviewDetail';
import { Review } from './reviews';

const ReviewCard = ({ r, mobile }: { r: Review; mobile: boolean }) => (
    <ModalA>
        <Box>
            <Image
                image={badge.src}
                alt="최고가 판매"
                width="calc(152 / 392 * 100%)"
                style={{
                    position: 'absolute',
                    left: 'calc(-25 / 392 * 100%)',
                    top: 'calc(-7 / 392 * 100%)',
                    zIndex: 2,
                    pointerEvents: 'none',
                }}
            />
            <Box
                backgroundColor="#FFFFFF"
                borderWeight={1}
                borderColor="#EEEEEE"
                radius={20}
                style={{ overflow: 'hidden' }}
            >
                <Image image={r.img} alt={r.title} width="100%" fit="cover" style={photoStyle} />
                <Flex direction="column" gap={4} s={mobile} padding={mobile ? 18 : 25}>
                    <Text
                        size={mobile ? 17 : 20}
                        s={mobile}
                        weight={500}
                        color={DARK}
                        line={1}
                        style={{ ...ls(-0.02), lineHeight: 1.4 }}
                    >
                        {r.title}
                    </Text>
                    <Text
                        size={mobile ? 14 : 16}
                        s={mobile}
                        color="#777"
                        line={2}
                        style={{ ...ls(-0.02), lineHeight: 1.4, whiteSpace: 'pre-line', minHeight: '2.8em' }}
                    >
                        {r.body}
                    </Text>
                </Flex>
                <ModalA.Trigger>
                    <Box backgroundColor={PRIMARY} style={{ cursor: 'pointer' }}>
                        <Flex
                            justify="center"
                            align="center"
                            gap={4}
                            s={mobile}
                            padding={mobile ? { y: 14 } : { y: 15 }}
                        >
                            <Text size={mobile ? 16 : 18} s={mobile} weight={600} color={DARK} style={ls(-0.02)}>
                                자세히 보기
                            </Text>
                            <Image image={chevron.src} alt="" width="24px" height="24px" />
                        </Flex>
                    </Box>
                </ModalA.Trigger>
            </Box>
        </Box>
        <NextPortal>
            <ModalA.Backdrop />
            <ModalA.Content title={r.title} width="min(500px, 90vw)" height="min(650px, 85vh)">
                <ReviewDetail r={r} />
            </ModalA.Content>
        </NextPortal>
    </ModalA>
);

export default ReviewCard;
