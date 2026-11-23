'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import ModalA from '@/headful/modalA/A/ModalA';
import NextPortal from '@/headless/NextPortal/NextPortal';
import { useModal } from '@/headless/Modal/Modal';
import { IoClose } from 'react-icons/io5';
import SectionTitle from '@/app/(components)/common/sectionTitle';
import { DARK, PRIMARY, ls } from '@/configs/site';
import review1 from '@/assets/images/review1.png';
import review2 from '@/assets/images/review2.png';
import review3 from '@/assets/images/review3.png';
import badge from '@/assets/images/review-badge.png';
import chevron from '@/assets/images/chevron-right.svg';
import styles from './section.module.scss';

const REVIEWS = [
    {
        title: '산타페 판매',
        img: review1.src,
        body: '좋은 거래로 후기 남겨드립니다~~\n중고차로 구매하여 오랜기간 끌고다니던 싼타페 처분했습니다!!\n인터넷 보면 차량 가져간 후 가격을 깎는 다던데',
    },
    {
        title: 'K9 판매',
        img: review2.src,
        body: '많은 중고차 플랫폼에서 견적을 받은 후 최종적으로\n연락한 국민중고차비교견적',
    },
    {
        title: 'BMW3시리즈 판매',
        img: review3.src,
        body: '판매가 급해 이곳저곳 알아보던 와중 다른 플랫폼은 견적 받는 것만 굉장히\n오래 걸렸으나 국민중고차비교견적 사이트는',
    },
];

type Review = (typeof REVIEWS)[number];

const ReviewDetail = ({ r }: { r: Review }) => {
    const { closeModal } = useModal();
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
                <Text size={16} color="#555" style={{ ...ls(-0.02), lineHeight: 1.6, whiteSpace: 'pre-line', display: 'block', marginTop: 10 }}>
                    {r.body}
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
                    <Text size={mobile ? 17 : 20} s={mobile} weight={500} color={DARK} style={{ ...ls(-0.02), lineHeight: 1.4 }}>
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

/** S5 고객 후기 (#review) */
const Section5 = () => {
    return (
        <section id="review" style={{ background: '#F5F5F3' }}>
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: 'var(--space-100) 20px var(--space-130)' }}>
                    <Flex direction="column" gap={50} align="center" width="100%">
                        <SectionTitle plain="고객 후기" accent="국민중고차비교견적" highlightFirst size={35} />
                        <div className={styles.grid}>
                            {REVIEWS.map((r) => (
                                <ReviewCard key={r.title} r={r} mobile={false} />
                            ))}
                        </div>
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" gap={25} s align="center" style={{ padding: '60px 0' }}>
                    <SectionTitle plain="고객 후기" accent="국민중고차비교견적" highlightFirst />
                    <div className={styles.scroller}>
                        {REVIEWS.map((r) => (
                            <ReviewCard key={r.title} r={r} mobile />
                        ))}
                    </div>
                </Flex>
            </Item>
        </section>
    );
};

export default Section5;
