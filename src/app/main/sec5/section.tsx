'use client';
import { useEffect, useMemo, useState } from 'react';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import ModalA from '@/headful/modalA/A/ModalA';
import NextPortal from '@/headless/NextPortal/NextPortal';
import { useModal } from '@/headless/Modal/Modal';
import { IoClose } from 'react-icons/io5';
import SectionTitle from '@/app/(components)/common/sectionTitle';
import { getHomepageContentDetail, useHomepageContentList } from '@/libs/mleverageClient';
import { DARK, ls } from '@/configs/site';
import review1 from '@/assets/images/review1.png';
import review2 from '@/assets/images/review2.png';
import review3 from '@/assets/images/review3.png';
import badge from '@/assets/images/review-badge.png';
import chevron from '@/assets/images/chevron-right.svg';
import styles from './section.module.scss';

type Review = { key: string; uuid?: string; title: string; img: string; body: string };

// 관리자에 등록된 후기가 없거나 불러오지 못하면 시안 후기 3개를 보여준다
const FALLBACK: Review[] = [
    {
        key: 'f1',
        title: '산타페 판매',
        img: review1.src,
        body: '좋은 거래로 후기 남겨드립니다~~\n중고차로 구매하여 오랜기간 끌고다니던 싼타페 처분했습니다!!\n인터넷 보면 차량 가져간 후 가격을 깎는 다던데',
    },
    {
        key: 'f2',
        title: 'K9 판매',
        img: review2.src,
        body: '많은 중고차 플랫폼에서 견적을 받은 후 최종적으로\n연락한 국민중고차비교견적',
    },
    {
        key: 'f3',
        title: 'BMW3시리즈 판매',
        img: review3.src,
        body: '판매가 급해 이곳저곳 알아보던 와중 다른 플랫폼은 견적 받는 것만 굉장히\n오래 걸렸으나 국민중고차비교견적 사이트는',
    },
];

/** 관리자 에디터 HTML → 표시용 텍스트 (HTML 은 그대로 주입하지 않는다) */
const toText = (html: unknown) =>
    String(html ?? '')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

/** hyundai-joonggo / hiautocar 와 같은 방식: 관리자 REVIEW 컨텐츠 목록 */
const useReviews = (): Review[] => {
    const { data } = useHomepageContentList({ type: 'REVIEW', page: 1, size: 9 });
    return useMemo(() => {
        const list = (data?.body?.contents ?? []) as Record<string, unknown>[];
        const mapped = list
            .filter((c) => c.title && c.thumbnail_path)
            .map((c, i) => ({
                key: String(c.contentUuid ?? i),
                uuid: c.contentUuid ? String(c.contentUuid) : undefined,
                title: String(c.title),
                img: String(c.thumbnail_path),
                body: toText(c.description),
            }));
        return mapped.length > 0 ? mapped : FALLBACK;
    }, [data]);
};

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
        <div className={styles.detail}>
            <button type="button" className={styles.close} onClick={() => closeModal()} aria-label="닫기">
                <IoClose size={26} color="#fff" />
            </button>
            <img src={r.img} alt={r.title} className={styles.detailImg} />
            <div className={styles.detailBody}>
                <Text size={20} weight={600} color={DARK} style={ls(-0.02)}>
                    {r.title}
                </Text>
                <Text
                    size={16}
                    color="#555"
                    style={{ ...ls(-0.02), lineHeight: 1.6, whiteSpace: 'pre-line', display: 'block', marginTop: 10 }}
                >
                    {body}
                </Text>
            </div>
        </div>
    );
};

const ReviewCard = ({ r, mobile }: { r: Review; mobile: boolean }) => (
    <ModalA>
        <div className={styles.cardWrap}>
            <img src={badge.src} alt="최고가 판매" className={styles.badge} />
            <div className={styles.card}>
                <img src={r.img} alt={r.title} className={styles.photo} />
                <div className={styles.body}>
                    <Text
                        size={mobile ? 17 : 20}
                        s={mobile}
                        weight={500}
                        color={DARK}
                        style={{
                            ...ls(-0.02),
                            lineHeight: 1.4,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {r.title}
                    </Text>
                    <p className={styles.excerpt}>{r.body}</p>
                </div>
                <ModalA.Trigger>
                    <button type="button" className={styles.more}>
                        <Text size={mobile ? 16 : 18} s={mobile} weight={600} color={DARK} style={ls(-0.02)}>
                            자세히 보기
                        </Text>
                        <img src={chevron.src} alt="" width={24} height={24} />
                    </button>
                </ModalA.Trigger>
            </div>
        </div>
        <NextPortal>
            <ModalA.Backdrop />
            <ModalA.Content title={r.title} width="fit-content">
                <ReviewDetail r={r} />
            </ModalA.Content>
        </NextPortal>
    </ModalA>
);

/** S5 고객 후기 (#review) — PC 3개 / MO 가로 스크롤(최대 9개) */
const Section5 = () => {
    const reviews = useReviews();
    return (
        <section id="review" style={{ background: '#F5F5F3' }}>
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: 'var(--space-100) 20px var(--space-130)' }}>
                    <Flex direction="column" gap={50} align="center" width="100%">
                        <SectionTitle plain="고객 후기" accent="국민중고차비교견적" highlightFirst size={35} />
                        <div className={styles.grid}>
                            {reviews.slice(0, 3).map((r) => (
                                <ReviewCard key={r.key} r={r} mobile={false} />
                            ))}
                        </div>
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" gap={25} s align="center" style={{ padding: '60px 0' }}>
                    <SectionTitle plain="고객 후기" accent="국민중고차비교견적" highlightFirst />
                    <div className={styles.scroller}>
                        {reviews.map((r) => (
                            <ReviewCard key={r.key} r={r} mobile />
                        ))}
                    </div>
                </Flex>
            </Item>
        </section>
    );
};

export default Section5;
