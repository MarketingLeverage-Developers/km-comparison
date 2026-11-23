'use client';
import { useEffect, useRef, useState } from 'react';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import ButtonB from '@/ui-kit/src/components/contents/Button/B/ButtonB';
import CustomInputA from '@/ui-kit/src/components/templates/customInput/A/InputA';
import PrivacyCheckBox from '@/headful/PrivacyCheckBox/PrivacyCheckBox';
import PrivacyAgreement from '@/headful/PrivacyAgreement/PrivacyAgreement';
import BlinkingDot from '@/headful/Blinkingdot/blinkingdot';
import { useSafeInput } from '@/libs/utils/security';
import { useForm } from '../formProvider';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';
import womanImg from '@/assets/images/form-woman.webp';
import styles from './mainForm.module.scss';

const inputStyle: React.CSSProperties = { backgroundColor: '#F5F5F3', border: 'none', color: DARK };

const Label = ({ children, mobile }: { children: React.ReactNode; mobile?: boolean }) => (
    <Box width={mobile ? '72px' : 95} style={{ flexShrink: 0 }}>
        <Text size={mobile ? 14 : 15} s={mobile} weight={600} color={DARK} style={ls()}>
            {children}
            <span style={{ color: '#F0A500' }}>*</span>
        </Text>
    </Box>
);

/** 메인 상담 폼 (히어로 우측 · 빠른문의 모달 공용) */
const MainForm = () => {
    const { form, updateForm, handleButtonClick, isSubmitting } = useForm();
    const { normalizePhone } = useSafeInput();
    const lastPhoneRef = useRef<HTMLInputElement>(null);
    const [todayCount, setTodayCount] = useState(25);
    const [nowCount, setNowCount] = useState(7);

    // 실시간 신청 현황 숫자 자동 변동
    useEffect(() => {
        setTodayCount(25 + Math.floor(Math.random() * 6));
        setNowCount(5 + Math.floor(Math.random() * 5));
        const timer = setInterval(() => {
            setTodayCount((v) => (Math.random() < 0.4 ? v + 1 : v));
            setNowCount(() => 5 + Math.floor(Math.random() * 5));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const renderFields = (mobile: boolean) => {
        const pad = mobile ? { x: 12, y: 12 } : { x: 15, y: 12 };
        const font = mobile ? 15 : 15;
        return (
            <Flex direction="column" gap={12} width="100%" s={mobile}>
                <Flex align="center" gap={12} width="100%" s={mobile}>
                    <Label mobile={mobile}>차량명</Label>
                    <CustomInputA
                        full
                        s={mobile}
                        padding={pad}
                        fontSize={font}
                        maxLength={20}
                        style={inputStyle}
                        placeholder="ex) K5"
                        value={form.carModel}
                        onChange={(e) => updateForm('carModel', e.target.value)}
                    />
                </Flex>
                <Flex align="center" gap={12} width="100%" s={mobile}>
                    <Label mobile={mobile}>연락처</Label>
                    <Flex align="center" gap={8} width="100%" s={mobile}>
                        <CustomInputA
                            full
                            s={mobile}
                            type="tel"
                            padding={pad}
                            fontSize={font}
                            maxLength={3}
                            style={{ ...inputStyle, textAlign: 'center' }}
                            value={form.firstPhone}
                            onChange={(e) => updateForm('firstPhone', normalizePhone(e.target.value))}
                        />
                        <Text size={15} color="#767676">
                            -
                        </Text>
                        <CustomInputA
                            full
                            s={mobile}
                            type="tel"
                            padding={pad}
                            fontSize={font}
                            maxLength={4}
                            style={{ ...inputStyle, textAlign: 'center' }}
                            value={form.middlePhone}
                            onChange={(e) => {
                                const v = normalizePhone(e.target.value);
                                updateForm('middlePhone', v);
                                if (v.length === 4) lastPhoneRef.current?.focus();
                            }}
                        />
                        <Text size={15} color="#767676">
                            -
                        </Text>
                        <CustomInputA
                            ref={lastPhoneRef}
                            full
                            s={mobile}
                            type="tel"
                            padding={pad}
                            fontSize={font}
                            maxLength={4}
                            style={{ ...inputStyle, textAlign: 'center' }}
                            value={form.lastPhone}
                            onChange={(e) => updateForm('lastPhone', normalizePhone(e.target.value))}
                        />
                    </Flex>
                </Flex>
            </Flex>
        );
    };

    const renderStatus = (mobile: boolean) => (
        <Box backgroundColor="#1A1A1A" radius={8} padding={mobile ? undefined : { x: 15, y: 15 }} width="100%">
            <Flex
                justify="center"
                align="center"
                gap={10}
                s={mobile}
                style={mobile ? { padding: '12px 10px' } : undefined}
            >
                <BlinkingDot />
                <Text size={mobile ? 14 : 16} s={mobile} weight={600} color="#fff" style={ls()}>
                    오늘 <span style={{ color: PRIMARY }}>{todayCount}명</span> 신청
                </Text>
                <span className={styles.divider} />
                <Text size={mobile ? 14 : 16} s={mobile} weight={600} color="#fff" style={ls()}>
                    현재 <span style={{ color: PRIMARY }}>{nowCount}명</span> 상담중
                </Text>
            </Flex>
        </Box>
    );

    const renderPrivacy = (mobile: boolean) => (
        <Flex justify="space-between" align="center" width="100%">
            <PrivacyCheckBox
                boxSize={18}
                size={14}
                color={DARK}
                checked={form.privacyValue}
                onChange={(checked) => updateForm('privacyValue', checked)}
            />
            <PrivacyAgreement text="전문보기" trigger={mobile ? undefined : 14} color="#767676" fixed />
        </Flex>
    );

    const renderButton = (mobile: boolean) => (
        <ButtonB
            full
            bgColor={PRIMARY}
            onClick={handleButtonClick}
            disabled={isSubmitting}
            style={{ borderRadius: 999, padding: mobile ? '16px 0' : 'var(--space-15) 0', border: 'none' }}
        >
            <Text size={18} s={mobile} weight={700} color={DARK} style={ls()}>
                최고가 견적 무료확인 &gt;&gt;
            </Text>
        </ButtonB>
    );

    return (
        <>
            <Item desktop>
                <Box
                    backgroundColor="#fff"
                    radius={20}
                    width={'392px'}
                    boxShadow="0px 24px 48px 0px rgba(0,0,0,0.28)"
                    style={{ overflow: 'hidden' }}
                >
                    <Box backgroundColor={PRIMARY} height={'112px'} style={{ position: 'relative', overflow: 'hidden' }}>
                        <Flex
                            direction="column"
                            justify="center"
                            gap={10}
                            height="100%"
                            padding={{ x: 30 }}
                            style={{ position: 'relative', zIndex: 1 }}
                        >
                            <Text size={26} weight={700} color={DARK} style={{ ...paperlogy, ...ls(), lineHeight: 1 }}>
                                내 차 팔기 무료 상담
                            </Text>
                            <Text
                                size={18}
                                weight={600}
                                color="#FF0606"
                                className={styles.blink}
                                style={{ ...paperlogy, ...ls(), lineHeight: 1 }}
                            >
                                전국 딜러 경쟁 입찰 시스템
                            </Text>
                        </Flex>
                        <img src={womanImg.src} alt="" className={styles.woman} />
                    </Box>
                    <Flex direction="column" gap={20} padding={25}>
                        {renderStatus(false)}
                        {renderFields(false)}
                        {renderPrivacy(false)}
                        {renderButton(false)}
                    </Flex>
                </Box>
            </Item>
            <Item mobile>
                <Box backgroundColor="#fff" radius={16} width="100%" style={{ overflow: 'hidden' }}>
                    <Box backgroundColor={PRIMARY} height="88px" style={{ position: 'relative', overflow: 'hidden' }}>
                        <Flex direction="column" justify="center" gap={8} height="100%" s style={{ padding: '0 20px', position: 'relative', zIndex: 1 }}>
                            <Text size={20} s weight={700} color={DARK} style={{ ...paperlogy, ...ls(), lineHeight: 1 }}>
                                내 차 팔기 무료 상담
                            </Text>
                            <Text
                                size={15}
                                s
                                weight={600}
                                color="#FF0606"
                                className={styles.blink}
                                style={{ ...paperlogy, ...ls(), lineHeight: 1 }}
                            >
                                전국 딜러 경쟁 입찰 시스템
                            </Text>
                        </Flex>
                        <img src={womanImg.src} alt="" className={styles.womanMo} />
                    </Box>
                    <Flex direction="column" gap={16} s style={{ padding: 18 }}>
                        {renderStatus(true)}
                        {renderFields(true)}
                        {renderPrivacy(true)}
                        {renderButton(true)}
                    </Flex>
                </Box>
            </Item>
        </>
    );
};

export default MainForm;
