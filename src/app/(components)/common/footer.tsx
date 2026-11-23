import FooterAp from '@/ui-kit/src/components/layouts/Footer_ap/footerAp';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { SITE_NAME } from '@/configs/site';

// TODO: 사업자 정보 확정되면 채우기 (시안은 '-' 플레이스홀더)
const COMPANY_INFO = [
    `사이트명 : ${SITE_NAME}`,
    '상호명 : -',
    '대표자 : -',
    '사업자등록번호 : -',
    '주소 : -',
    '대표번호 : -',
];
const AD_PHONE = '050-8201-0181';

const T = ({ children, color = '#CDCDCD', mobile }: { children: React.ReactNode; color?: string; mobile?: boolean }) => (
    <Text color={color} size={mobile ? 13 : 15} s={mobile} weight={400} style={{ lineHeight: 1.5, letterSpacing: '-0.02em' }}>
        {children}
    </Text>
);

const AdNotice = ({ mobile }: { mobile?: boolean }) => (
    <Flex direction="column" gap={4} s={mobile}>
        <T color="#fff" mobile={mobile}>
            광고 제휴 전용 번호 : {AD_PHONE}
        </T>
        <T color="#FFD632" mobile={mobile}>
            *저희는 광고 제휴 관련 전화 문의를 받지 않습니다. 제휴 문의는 <b style={{ fontWeight: 600 }}>광고 제휴 전용 번호</b>로
            연락해 주시기 바랍니다.
        </T>
    </Flex>
);

const Footer = () => {
    return (
        <FooterAp imgPc="" imgMo="" bgColor="#272727" maxWidth={1320} bottomPaddingPc={85} bottomPaddingMo={80}>
            <Item desktop>
                <Flex direction="column" gap={35} style={{ padding: 'var(--space-20) 0' }}>
                    <Flex direction="column" gap={15}>
                        <Flex direction="column">
                            {COMPANY_INFO.map((line) => (
                                <T key={line}>{line}</T>
                            ))}
                        </Flex>
                        <T>ⓒ2026 {SITE_NAME}. All Rights Reserved. Designed by mleverage.co.kr</T>
                    </Flex>
                    <AdNotice />
                </Flex>
            </Item>
            <Item mobile>
                <Flex direction="column" gap={20} s>
                    <Flex direction="column" gap={4} s>
                        {COMPANY_INFO.map((line) => (
                            <T key={line} mobile>
                                {line}
                            </T>
                        ))}
                    </Flex>
                    <T mobile>
                        ⓒ2026 {SITE_NAME}. All Rights Reserved.
                        <br />
                        Designed by mleverage.co.kr
                    </T>
                    <AdNotice mobile />
                </Flex>
            </Item>
        </FooterAp>
    );
};

export default Footer;
