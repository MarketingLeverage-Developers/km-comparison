import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import SectionTitle from '@/app/(components)/common/sectionTitle';
import { DARK, PRIMARY, ls } from '@/configs/site';
import step1 from '@/assets/images/step1.webp';
import step2 from '@/assets/images/step2.webp';
import step3 from '@/assets/images/step3.webp';
import step4 from '@/assets/images/step4.webp';
import step5 from '@/assets/images/step5.webp';
import styles from './section.module.scss';

// imgW / imgTop: 시안(360 카드) 기준 아이콘 폭·상단 위치 비율
const STEPS = [
    { no: '01', title: '차량 정보 등록', img: step1.src, imgW: 44.7, imgTop: 34 },
    { no: '02', title: '실시간 비교 견적', img: step2.src, imgW: 66.7, imgTop: 30 },
    { no: '03', title: '최고가 딜러 선택', sub: '(수수료 없이 최고가 선택)', img: step3.src, imgW: 41.4, imgTop: 37 },
    { no: '04', title: '안심 방문 탁송', sub: '(계신 곳으로 직접 방문 인수)', img: step4.src, imgW: 84, imgTop: 36.5 },
    { no: '05', title: '당일 정산 완료', sub: '(입금 확인 후 차량 인계)', img: step5.src, imgW: 60.3, imgTop: 37.6 },
];

const StepCard = ({ s, mobile }: { s: (typeof STEPS)[number]; mobile: boolean }) => (
    <div className={styles.card}>
        <Flex direction="column" align="center" gap={mobile ? 8 : 12} s={mobile} style={{ paddingTop: mobile ? 14 : 'var(--space-25)' }}>
            <span className={styles.badge}>
                <Text size={mobile ? 12 : 16} s={mobile} weight={700} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                    STEP {s.no}
                </Text>
            </span>
            <Text size={mobile ? 15 : 20} s={mobile} weight={700} color={DARK} align="center" style={{ ...ls(), lineHeight: 1 }}>
                {s.title}
            </Text>
            {s.sub && (
                <Text size={mobile ? 11 : 16} s={mobile} color="#777" align="center" style={{ ...ls(), lineHeight: 1.1 }}>
                    {s.sub}
                </Text>
            )}
        </Flex>
        <img src={s.img} alt="" className={styles.icon} style={{ width: `${s.imgW}%`, top: `${s.imgTop}%` }} />
    </div>
);

/** S4 5단계 절차 (#steps) */
const Section4 = () => {
    return (
        <section id="steps" style={{ background: '#fff' }}>
            <Item desktop>
                <MaxWidth maxWidth={1160} style={{ padding: 'var(--space-100) 20px' }}>
                    <Flex direction="column" gap={45} align="center" width="100%">
                        <SectionTitle plain="스마트 내 차 팔기" accent="흥정 스트레스 없는" highlightFirst />
                        <div className={styles.grid}>
                            <div className={`${styles.card} ${styles.intro}`}>
                                <Text size={28} weight={500} color={DARK} align="center" style={{ ...ls(), lineHeight: 1.35 }}>
                                    흥정 스트레스 없는
                                    <br />
                                    스마트 내 차 팔기
                                </Text>
                                <Text size={46} weight={700} color={DARK} align="center" style={{ ...ls(-0.02), lineHeight: 1.3 }}>
                                    5 STEPS
                                </Text>
                            </div>
                            {STEPS.map((s) => (
                                <StepCard key={s.no} s={s} mobile={false} />
                            ))}
                        </div>
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" gap={25} s align="center" style={{ padding: '60px 16px' }}>
                    <SectionTitle plain="스마트 내 차 팔기" accent="흥정 스트레스 없는" highlightFirst />
                    <div className={styles.grid}>
                        <div className={`${styles.card} ${styles.intro}`}>
                            <Text size={16} s weight={500} color={DARK} align="center" style={{ ...ls(), lineHeight: 1.35 }}>
                                흥정 스트레스 없는
                                <br />
                                스마트 내 차 팔기
                            </Text>
                            <Text size={26} s weight={700} color={DARK} align="center" style={{ ...ls(-0.02), lineHeight: 1.3 }}>
                                5 STEPS
                            </Text>
                        </div>
                        {STEPS.map((s) => (
                            <StepCard key={s.no} s={s} mobile />
                        ))}
                    </div>
                </Flex>
            </Item>
        </section>
    );
};

export default Section4;
