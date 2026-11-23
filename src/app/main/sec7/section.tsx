'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import SwiperD from '@/headful/barSwiper/D/swiperD';
import SectionTitle from '@/app/(components)/common/sectionTitle';
import { DARK, ls } from '@/configs/site';
import styles from './section.module.scss';

const CARS = [
    '토레스 2022년식',
    '아우디 A6 2018년식',
    '그랜저 IG 6 2016년식',
    'Kia K8 2021년식',
    '레이 2019년식',
    '쏘렌토 2020년식',
    '팰리세이드 2021년식',
    'BMW 520d 2019년식',
    '아반떼 CN7 2022년식',
    '카니발 2020년식',
    '제네시스 G80 2021년식',
    '투싼 2019년식',
];

const LEFT = CARS.slice(0, 6);
const RIGHT = CARS.slice(6);

const Row = ({ car, mobile }: { car: string; mobile: boolean }) => (
    <div className={styles.row}>
        <span className={styles.badge}>
            <Text size={mobile ? 12 : 16} s={mobile} weight={700} color={DARK} style={{ ...ls(), lineHeight: 1 }}>
                New
            </Text>
        </span>
        <Text
            size={mobile ? 14 : 17}
            s={mobile}
            weight={600}
            color={DARK}
            style={{
                ...ls(),
                lineHeight: 1,
                flex: 1,
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }}
        >
            {car} 상담
        </Text>
        <span className={styles.status}>
            <Text size={mobile ? 12 : 16} s={mobile} weight={600} color="#9A6E00" style={{ ...ls(), lineHeight: 1 }}>
                상담완료
            </Text>
        </span>
    </div>
);

/** S7 실시간 상담 접수 현황 — headful barSwiper/D 세로 티커 (열마다 4줄 노출) */
const Section7 = () => {
    return (
        <section style={{ background: '#F5F5F3' }}>
            <Item desktop>
                <MaxWidth maxWidth={1240} style={{ padding: 'var(--space-120) 20px' }}>
                    <Flex direction="column" gap={40} align="center" width="100%">
                        <SectionTitle plain="실시간" accent="상담 접수 현황" />
                        <div className={styles.panel}>
                            {[LEFT, RIGHT].map((list, col) => (
                                <div key={col} className={col === 0 ? styles.colLeft : styles.colRight}>
                                    <SwiperD height="calc(var(--box-70) * 4)" spaceBetween={0} delay={1500}>
                                        {list.map((car) => (
                                            <Row key={car} car={car} mobile={false} />
                                        ))}
                                    </SwiperD>
                                </div>
                            ))}
                        </div>
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" gap={25} s align="center" style={{ padding: '60px 16px' }}>
                    <SectionTitle plain="실시간" accent="상담 접수 현황" />
                    <div className={styles.panel}>
                        <div className={styles.colLeft}>
                            <SwiperD height="270px" spaceBetween={0} delay={1500}>
                                {CARS.map((car) => (
                                    <Row key={car} car={car} mobile />
                                ))}
                            </SwiperD>
                        </div>
                    </div>
                </Flex>
            </Item>
        </section>
    );
};

export default Section7;
