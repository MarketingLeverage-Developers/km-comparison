'use client';
import { useEffect, useMemo, useState } from 'react';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Grid from '@/ui-kit/src/components/layouts/Grid/Grid';
import BasicPagination from '@/headful/BasicPagination/BasicPagination';
import ReviewCardB from '@/headful/reviewCard/D/CardC';
import Modal from '@/headless/Modal/Modal';
import { useHomepageContentList } from '@/libs/mleverageClient';
import CaseModal from './reviewModal/caseModal';

const CaseList = () => {
    const [pagination, setPagination] = useState({ page: 1, size: 6, total: 0 });
    const { data, isLoading, error, refetch } = useHomepageContentList({
        type: 'CASE',
        page: pagination.page ?? 1,
        size: pagination.size,
    });
    const contentList: any[] = data?.body.contents ?? [];

    useEffect(() => {
        if (data?.total) {
            setPagination((prev) => ({ ...prev, total: Number(data?.total) }));
        }
    }, [data]);

    const paginatedItems = useMemo(() => {
        const start = (pagination.page - 1) * pagination.size;
        return contentList.slice(start, start + pagination.size);
    }, [pagination, contentList]);

    if (isLoading) {
        return (
            <Flex height={400} align="center" justify="center">
                리뷰를 불러오는 중입니다...
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex height={400} align="center" justify="center" gap={20} direction="column">
                리뷰를 불러오는 중 오류가 발생했습니다.
                <button
                    type="button"
                    onClick={refetch}
                    style={{
                        cursor: 'pointer',
                        background: '#fff',
                        border: '1px solid var(--primary-color)',
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                >
                    다시 시도
                </button>
            </Flex>
        );
    }

    if (!data || data.body.contents.length === 0) {
        return (
            <Flex height={400} align="center" justify="center">
                등록된 리뷰가 없습니다.
            </Flex>
        );
    }

    return (
        <Box padding={{ x: 40, b: 100 }}>
            <Flex justify="center" direction="column" align="center" gap={50}>
                <Grid gridTemplateColumns="repeat(3, 1fr)" mobileTeplateColumns="repeat(1, 1fr)" rowGap={50} gap={40}>
                    {paginatedItems.map((el: any, idx: number) => (
                        <Modal key={idx}>
                            <Modal.Trigger>
                                <div style={{ cursor: 'pointer' }}>
                                    <ReviewCardB
                                        radius={20}
                                        title={el.title}
                                        content={el.tag}
                                        image={el.thumbnails}
                                        buttonBackground="#1A1A1A"
                                        borderColor="#EEEEEE"
                                        borderWeight={1}
                                    />
                                </div>
                            </Modal.Trigger>
                            <Modal.Backdrop style={{ zIndex: 1000 }} />
                            <CaseModal
                                item={{
                                    title: el.title,
                                    content: {
                                        tag: el.tag,
                                        thumbnails: Array.isArray(el.thumbnails)
                                            ? el.thumbnails
                                            : el.thumbnails
                                              ? [el.thumbnails]
                                              : [],
                                    },
                                }}
                            />
                        </Modal>
                    ))}
                </Grid>
                <Flex>
                    <BasicPagination value={pagination} onChange={(newValue) => setPagination(newValue)} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default CaseList;
