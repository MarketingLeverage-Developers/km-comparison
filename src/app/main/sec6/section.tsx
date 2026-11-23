'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { scrollToId } from '@/app/(components)/common/header';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';
import bandBg from '@/assets/images/s6-bg.webp';
import car from '@/assets/images/s6-car.webp';
import icon1 from '@/assets/images/s6-icon1.webp';
import icon2 from '@/assets/images/s6-icon2.webp';
import person from '@/assets/images/s6-person.webp';
import arrow from '@/assets/images/arrow-small.svg';
import styles from './section.module.scss';

const CARDS = [
    {
        title: '리얼 매입 후기',
        desc: ['먼저 판매하신 고객님들의', '생생한 거래 후기를 확인하세요.'],
        button: '생생 후기 확인하기',
        target: 'review',
        icon: icon1.src,
        iconClass: 'icon1',
    },
    {
        title: '30초 무료 견적',
        desc: ['번호판만 입력하면 끝!', '전문 평가사의 정확한 시세 안내.'],
        button: '내 차 시세 조회하기',
        target: 'top',
        icon: icon2.src,
        iconClass: 'icon2',
    },
] as const;

const Band = ({ mobile }: { mobile: boolean }) => (
    <div className={styles.band} style={{ backgroundImage: `url(${bandBg.src})` }}>
        <div className={styles.bandShade} />
        <div className={styles.bandInner}>
            <Flex direction="column" gap={mobile ? 10 : 15} s={mobile} style={{ position: 'relative' }}>
                <Text size={mobile ? 15 : 24} s={mobile} weight={600} color="#fff" style={{ ...ls(), lineHeight: 1 }}>
                    감가 걱정 없는 투명한 최고가 매입
                </Text>
                <Text size={mobile ? 26 : 46} s={mobile} weight={800} color="#fff" style={{ ...paperlogy, ...ls(), lineHeight: 1.3 }}>
                    국민중고차비교견적에서
                    <br />내 차 <span style={{ color: PRIMARY }}>제값</span> 받으세요
                </Text>
            </Flex>
        </div>
        <img src={car.src} alt="쏘렌토" className={styles.car} />
    </div>
);

const InfoCard = ({ c, mobile }: { c: (typeof CARDS)[number]; mobile: boolean }) => (
    <div className={styles.infoCard}>
        <Flex direction="column" justify="space-between" height="100%" s={mobile} style={{ position: 'relative', zIndex: 1 }}>
            <Flex direction="column" gap={12} s={mobile}>
                <Text size={mobile ? 20 : 26} s={mobile} weight={700} color={DARK} style={{ ...paperlogy, ...ls(), lineHeight: 1 }}>
                    {c.title}
                </Text>
                <Text size={mobile ? 14 : 18} s={mobile} color="#6E6E6E" style={{ ...ls(), lineHeight: 1.4 }}>
                    {c.desc[0]}
                    <br />
                    {c.desc[1]}
                </Text>
            </Flex>
            <button type="button" className={styles.pill} onClick={() => scrollToId(c.target)}>
                <Text size={mobile ? 14 : 16} s={mobile} weight={600} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                    {c.button}
                </Text>
                <img src={arrow.src} alt="" width={16} height={16} />
            </button>
        </Flex>
        <img src={c.icon} alt="" className={`${styles.cardIcon} ${styles[c.iconClass]}`} />
    </div>
);

const PersonCard = ({ mobile }: { mobile: boolean }) => (
    <div className={styles.personCard}>
        <img src={person.src} alt="" className={styles.personImg} />
        <div className={styles.personShade} />
        <Flex direction="column" gap={10} s={mobile} className={styles.personText}>
            <Text size={mobile ? 22 : 32} s={mobile} weight={800} color="#fff" style={{ ...paperlogy, ...ls(), lineHeight: 1.1 }}>
                시세만 알아보셔도 충분합니다!
            </Text>
            <Text size={mobile ? 14 : 20} s={mobile} color="#fff" style={{ ...ls(), lineHeight: 1.4 }}>
                당장 판매 계획이 없으셔도 괜찮습니다.
                <br />
                현재 내 차의 정확한 가치만 먼저 확인해 보세요.
            </Text>
        </Flex>
    </div>
);

/** S6 제값 받기 (사진 띠 + 카드 3개) */
const Section6 = () => {
    return (
        <section style={{ background: '#fff', overflow: 'hidden' }}>
            <Item desktop>
                <Band mobile={false} />
                <MaxWidth maxWidth={1252} style={{ padding: 'var(--space-130) 20px' }}>
                    <div className={styles.grid}>
                        <div className={styles.leftCol}>
                            {CARDS.map((c) => (
                                <InfoCard key={c.title} c={c} mobile={false} />
                            ))}
                        </div>
                        <PersonCard mobile={false} />
                    </div>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Band mobile />
                <Flex direction="column" gap={12} s style={{ padding: '40px 16px 60px' }}>
                    {CARDS.map((c) => (
                        <InfoCard key={c.title} c={c} mobile />
                    ))}
                    <PersonCard mobile />
                </Flex>
            </Item>
        </section>
    );
};

export default Section6;
