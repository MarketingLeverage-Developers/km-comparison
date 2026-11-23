'use client';
import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ButtonB from '@/ui-kit/src/components/contents/Button/B/ButtonB';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Fixed from '@/ui-kit/src/components/layouts/Fixed/Fixed';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import CustomInputA from '@/ui-kit/src/components/templates/customInput/A/InputA';
import PrivacyCheckBox from '@/headful/PrivacyCheckBox/PrivacyCheckBox';
import PrivacyAgreement from '@/headful/PrivacyAgreement/PrivacyAgreement';
import { useSafeInput } from '@/libs/utils/security';
import { FaPen } from 'react-icons/fa6';
import { MdCall } from 'react-icons/md';
import { useForm } from '../formProvider';
import { DARK, PHONE_TEL, ls } from '@/configs/site';
import styles from './FixedBanner.module.scss';

const BAR_COLOR = '#E6AB0A';
const inputStyle: React.CSSProperties = { border: 'none', borderRadius: 5, color: '#171717' };

const FixedBanner = () => {
    const { form, updateForm, handleButtonClick, isSubmitting } = useForm();
    const { normalizePhone } = useSafeInput();
    const lastPhoneRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    const goForm = () => {
        if (pathname !== '/') router.push('/');
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Fixed left={0} bottom={0} right={0}>
            <Item desktop>
                <Box backgroundColor={BAR_COLOR}>
                    <MaxWidth maxWidth={1320} style={{ padding: '0 20px' }}>
                        <Flex height={'84px'} align="center" justify="space-between" width="100%">
                            <Text size={22} color={DARK} style={{ lineHeight: 1.3, ...ls(-0.02), whiteSpace: 'nowrap' }}>
                                내 차 빠르게
                                <br />
                                <b style={{ fontWeight: 700 }}>무료견적 받기</b>
                            </Text>
                            <Flex align="center" gap={15}>
                                <Box width={250}>
                                    <CustomInputA
                                        full
                                        height={45}
                                        padding={{ x: 20 }}
                                        fontSize={18}
                                        style={inputStyle}
                                        placeholder="차량명(ex : K5)"
                                        value={form.carModel}
                                        onChange={(e) => updateForm('carModel', e.target.value)}
                                    />
                                </Box>
                                <Flex align="center" gap={4} width={300}>
                                    <CustomInputA
                                        full
                                        type="tel"
                                        height={45}
                                        fontSize={18}
                                        maxLength={3}
                                        style={{ ...inputStyle, textAlign: 'center' }}
                                        value={form.firstPhone}
                                        onChange={(e) => updateForm('firstPhone', normalizePhone(e.target.value))}
                                    />
                                    <Text size={16} color={DARK}>
                                        -
                                    </Text>
                                    <CustomInputA
                                        full
                                        type="tel"
                                        height={45}
                                        fontSize={18}
                                        maxLength={4}
                                        style={{ ...inputStyle, textAlign: 'center' }}
                                        value={form.middlePhone}
                                        onChange={(e) => {
                                            const v = normalizePhone(e.target.value);
                                            updateForm('middlePhone', v);
                                            if (v.length === 4) lastPhoneRef.current?.focus();
                                        }}
                                    />
                                    <Text size={16} color={DARK}>
                                        -
                                    </Text>
                                    <CustomInputA
                                        ref={lastPhoneRef}
                                        full
                                        type="tel"
                                        height={45}
                                        fontSize={18}
                                        maxLength={4}
                                        style={{ ...inputStyle, textAlign: 'center' }}
                                        value={form.lastPhone}
                                        onChange={(e) => updateForm('lastPhone', normalizePhone(e.target.value))}
                                    />
                                </Flex>
                                <Flex align="center" gap={15} className={styles.privacy}>
                                    <PrivacyCheckBox
                                        color={DARK}
                                        fixed
                                        size={18}
                                        boxSize={20}
                                        checked={form.privacyValue}
                                        onChange={(checked) => updateForm('privacyValue', checked)}
                                    />
                                    <PrivacyAgreement color={DARK} trigger={16} fixed />
                                </Flex>
                            </Flex>
                            <ButtonB
                                bgColor={DARK}
                                onClick={handleButtonClick}
                                disabled={isSubmitting}
                                style={{ borderRadius: 6, padding: 'var(--space-10) var(--space-35)', border: 'none' }}
                            >
                                <Text size={20} weight={700} color={BAR_COLOR} style={{ lineHeight: 1.6, ...ls(-0.02) }}>
                                    무료견적 받기
                                </Text>
                            </ButtonB>
                        </Flex>
                    </MaxWidth>
                </Box>
            </Item>
            <Item mobile>
                <Flex height={'60px'} width="100%">
                    <Box width="50%" height="100%" backgroundColor={DARK} onClick={goForm} style={{ cursor: 'pointer' }}>
                        <Flex height="100%" justify="center" align="center" gap={8} s>
                            <Text size={18} s color="#FFC800">
                                <FaPen />
                            </Text>
                            <Text size={18} s weight={700} color="#FFC800">
                                빠른 상담
                            </Text>
                        </Flex>
                    </Box>
                    <a href={`tel:${PHONE_TEL}`} style={{ width: '50%', height: '100%', textDecoration: 'none' }}>
                        <Box width="100%" height="100%" backgroundColor={BAR_COLOR}>
                            <Flex height="100%" justify="center" align="center" gap={8} s className={styles.blink}>
                                <Text size={20} s color={DARK}>
                                    <MdCall />
                                </Text>
                                <Text size={18} s weight={700} color={DARK}>
                                    전화상담
                                </Text>
                            </Flex>
                        </Box>
                    </a>
                </Flex>
            </Item>
        </Fixed>
    );
};

export default FixedBanner;
