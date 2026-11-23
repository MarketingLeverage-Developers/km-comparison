import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { DARK, PHONE, PHONE_TEL, PRIMARY, ls, paperlogy } from '@/configs/site';
import phoneIcon from '@/assets/images/cs-phone.svg';

const PhonePill = ({ mobile }: { mobile: boolean }) => (
    <a
        href={`tel:${PHONE_TEL}`}
        style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: mobile ? 12 : 16,
            background: '#F1F2F5',
            borderRadius: 100,
            padding: mobile ? '10px 22px 10px 12px' : '12px 26px 12px 19px',
            textDecoration: 'none',
        }}
    >
        <span
            style={{
                width: mobile ? 44 : 56,
                height: mobile ? 44 : 56,
                borderRadius: '50%',
                background: PRIMARY,
                boxShadow: '0px 3.4px 6.9px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}
        >
            <img src={phoneIcon.src} alt="" style={{ width: '50%', height: '50%', transform: 'scaleX(-1)' }} />
        </span>
        <Flex align="center" gap={15} s={mobile}>
            <Text size={mobile ? 17 : 24} s={mobile} weight={800} color={DARK} style={{ ...ls(-0.02), whiteSpace: 'nowrap' }}>
                고객센터
            </Text>
            <Text size={mobile ? 20 : 28} s={mobile} weight={700} color={DARK} style={{ ...ls(-0.02), whiteSpace: 'nowrap' }}>
                {PHONE}
            </Text>
        </Flex>
    </a>
);

/** S8 고객센터 */
const Section8 = () => {
    return (
        <section style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: 'var(--space-60) 20px' }}>
                    <Flex align="center" justify="space-between" width="100%">
                        <Text size={35} weight={700} color={DARK} style={{ ...paperlogy, ...ls(), lineHeight: 1.35 }}>
                            궁금하신 점,
                            <br />
                            지금 바로 물어보세요
                        </Text>
                        <PhonePill mobile={false} />
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" align="center" gap={20} s style={{ padding: '50px 16px' }}>
                    <Text size={24} s weight={700} color={DARK} align="center" style={{ ...paperlogy, ...ls(), lineHeight: 1.35 }}>
                        궁금하신 점,
                        <br />
                        지금 바로 물어보세요
                    </Text>
                    <PhonePill mobile />
                </Flex>
            </Item>
        </section>
    );
};

export default Section8;
