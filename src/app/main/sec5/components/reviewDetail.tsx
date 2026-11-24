'use client';
import { useEffect, useState } from 'react';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { getHomepageContentDetail } from '@/libs/mleverageClient';
import { DARK, PRIMARY, ls } from '@/configs/site';
import { useModal } from '@/headless/Modal/Modal';
import { IoClose } from 'react-icons/io5';
import { Review, toText } from './useReviews';

const ReviewDetail = ({ r }: { r: Review }) => {
    const { closeModal } = useModal();
    const [body, setBody] = useState(r.body);

    // 목록 설명이 잘려 있을 수 있어 상세를 한 번 더 조회 (실패하면 목록 값 유지)
    useEffect(() => {
        if (!r.uuid) return;
        let alive = true;
        getHomepageContentDetail({ type: 'REVIEW', contentUuid: r.uuid })
            .then((res) => {
                const content = res?.body?.content as unknown as Record<string, unknown> | undefined;
                const text = toText(content?.description);
                if (alive && text) setBody(text);
            })
            .catch(() => {});
        return () => {
            alive = false;
        };
    }, [r.uuid]);

    return (
        <Flex direction="column" width="100%" height="100%">
            <Box backgroundColor={PRIMARY} style={{ flexShrink: 0 }}>
                <Flex justify="space-between" align="center" gap={10} s style={{ padding: '14px 16px 14px 20px' }}>
                    <Text size={18} s weight={700} color={DARK} line={1} style={{ ...ls(-0.02), lineHeight: 1.3 }}>
                        {r.title}
                    </Text>
                    <Flex
                        justify="center"
                        align="center"
                        onClick={() => closeModal()}
                        aria-label="닫기"
                        style={{ cursor: 'pointer', flexShrink: 0 }}
                    >
                        <IoClose size={30} color={DARK} />
                    </Flex>
                </Flex>
            </Box>
            <Box style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
                <Flex justify="center" s style={{ padding: '20px 20px 24px' }}>
                    <Image image={r.img} alt={r.title} width="min(288px, 70%)" fit="cover" style={photoStyle} />
                </Flex>
                <Box width="auto" height="1px" backgroundColor="#E5E5E5" style={{ margin: '0 10px' }} />
                <Box style={{ padding: '24px 30px 30px' }}>
                    <Text
                        size={15}
                        s
                        color="#333"
                        wbreak="keep-all"
                        style={{ ...ls(-0.02), lineHeight: 1.6, whiteSpace: 'pre-line', display: 'block' }}
                    >
                        {body}
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

export const photoStyle: React.CSSProperties = { display: 'block', aspectRatio: '392 / 306' };

export default ReviewDetail;
