'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Grid from '@/ui-kit/src/components/layouts/Grid/Grid';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import ServiceCardB from '@/headful/serviceCard/B/serviceCard';
import { DARK, SITE_NAME, ls, paperlogy } from '@/configs/site';
import img1 from '@/assets/images/SellServiceImg1.png';
import img2 from '@/assets/images/SellServiceImg2.png';
import img3 from '@/assets/images/SellServiceImg3.png';
import img4 from '@/assets/images/SellServiceImg4.png';
import img5 from '@/assets/images/SellServiceImg5.png';
import img6 from '@/assets/images/SellServiceImg6.png';

const data = [
    {
        title: '상담신청',
        content: (
            <>
                {SITE_NAME} 홈페이지를 통해 의뢰하는 차량의
                <br /> 정보를 입력 후 신청하기 버튼을 눌러주세요.
            </>
        ),
        image: img1.src,
    },
    {
        title: '상담접수 후 카매니저 배정',
        content: (
            <>
                상담원이 차량의 상세 정보를 접수한 후<br /> 최고가를 제시한 매입 전문 카매니저 선정하여
                <br /> 배정해드립니다.
            </>
        ),
        image: img2.src,
    },
    {
        title: '전문 카매니저 방문, 견적 상담',
        content: (
            <>
                고객이 원하는 시간과 장소로 매입 전문
                <br /> 카매니저가 방문하여 차량의 상태를
                <br /> 평가하고 견적 상담을 진행합니다.
            </>
        ),
        image: img3.src,
    },
    {
        title: '계약서 작성 · 차량대금 송금',
        content: (
            <>
                원하는 가격을 제시한 카매니저와
                <br /> 계약서 작성 후 차량 매각 금액이 입금됩니다.
            </>
        ),
        image: img4.src,
    },
    {
        title: '서류 제출 · 차량 탁송',
        content: (
            <>
                차량대금 송금 후 준비된 구비서류와 함께
                <br /> 차량 탁송이 진행됩니다.
            </>
        ),
        image: img5.src,
    },
    {
        title: '차량 명의 이전 진행',
        content: <>명의이전은 당일 이전을 원칙으로 합니다.</>,
        highlight: (
            <>
                (단, 명의이전 시 필요 서류가 준비되어 있어야 하며,
                <br /> 차량등록사업소의 업무시간이 지나면
                <br /> 명의이전 익일 진행)
            </>
        ),
        image: img6.src,
    },
];

const Cards = ({ mobile }: { mobile: boolean }) => (
    <>
        {data.map((el, idx) => (
            <ServiceCardB
                key={idx}
                number={String(idx + 1)}
                index={idx}
                image={el.image}
                title={
                    <Text color={DARK} size={mobile ? 18 : 22} s={mobile} weight={600} style={paperlogy}>
                        {el.title}
                    </Text>
                }
                content={
                    <Text
                        color="#777777"
                        size={mobile ? 14 : 16}
                        s={mobile}
                        weight={400}
                        style={{ lineHeight: mobile ? '20px' : '22px' }}
                    >
                        {el.content}
                    </Text>
                }
                hightlight={
                    el.highlight && (
                        <Text
                            color="#E6AB0A"
                            size={mobile ? 13 : 14}
                            s={mobile}
                            weight={400}
                            style={{ lineHeight: mobile ? '18px' : '20px' }}
                        >
                            {el.highlight}
                        </Text>
                    )
                }
            />
        ))}
    </>
);

const SectionTitle = ({ mobile }: { mobile: boolean }) => (
    <Text color={DARK} size={mobile ? 22 : 28} s={mobile} weight={700} style={{ ...paperlogy, ...ls() }}>
        서비스 이용 절차
    </Text>
);

const ServiceFstSection = () => (
    <>
        <Item desktop>
            <MaxWidth maxWidth={1180}>
                <Box padding={{ y: 100 }}>
                    <Flex direction="column" align="center" gap={20}>
                        <SectionTitle mobile={false} />
                        <Grid gridTemplateColumns="repeat(3, 1fr)" gap={20} rowGap={30}>
                            <Cards mobile={false} />
                        </Grid>
                    </Flex>
                </Box>
            </MaxWidth>
        </Item>
        <Item mobile>
            <Flex direction="column" align="center" gap={20} s padding={{ x: 20, y: 50 }}>
                <SectionTitle mobile />
                <Cards mobile />
            </Flex>
        </Item>
    </>
);

export default ServiceFstSection;
