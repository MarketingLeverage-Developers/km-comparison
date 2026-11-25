import FooterAp from '@/ui-kit/src/components/layouts/Footer_ap/footerAp';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { PHONE, SITE_NAME } from '@/configs/site';
import footerPc from '@/assets/images/footerPc.png';
import footerMo from '@/assets/images/footerMo.png';

// TODO: 사업자 정보 확정되면 채우기 (시안은 '-' 플레이스홀더)
const COMPANY_INFO = [
    '대표자 : 권석준',
    `대표번호 : ${PHONE}`,
    '주소 : 인천광역시 남동구 선수촌공원로 5, c동 7층',
    '사업자번호 : 707-65-00774',
];

const T = ({
    children,
    color = '#CDCDCD',
    mobile,
}: {
    children: React.ReactNode;
    color?: string;
    mobile?: boolean;
}) => (
    <Text color={color} size={mobile ? 13 : 15} s={mobile} style={{ lineHeight: 1.5, letterSpacing: '-0.02em' }}>
        {children}
    </Text>
);

const Footer = () => {
    return (
        <FooterAp
            imgPc={footerPc.src}
            imgMo={footerMo.src}
            bgColor="#272727"
            maxWidth={1320}
            bottomPaddingPc={85}
            bottomPaddingMo={120}
        >
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
                </Flex>
            </Item>
        </FooterAp>
    );
};

export default Footer;
