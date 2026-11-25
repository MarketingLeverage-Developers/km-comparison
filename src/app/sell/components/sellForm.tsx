'use client';
import { useRef } from 'react';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import ButtonB from '@/ui-kit/src/components/contents/Button/B/ButtonB';
import CustomInputA from '@/ui-kit/src/components/templates/customInput/A/InputA';
import PrivacyCheckBox from '@/headful/PrivacyCheckBox/PrivacyCheckBox';
import PrivacyAgreement from '@/headful/PrivacyAgreement/PrivacyAgreement';
import { useSafeInput } from '@/libs/utils/security';
import { useForm } from '../../(components)/formProvider';
import { DARK, PRIMARY, ls } from '@/configs/site';

const inputStyle: React.CSSProperties = { backgroundColor: '#FBFBFB', border: '1px solid #E2E2E2', color: DARK };

const Label = ({ children, mobile }: { children: React.ReactNode; mobile: boolean }) => (
    <Flex s={mobile} style={{ flexShrink: 0 }}>
        <Text color="#121212" size={16} s={mobile} weight={500}>
            {children}
        </Text>
        <Text color="#E6AB0A" size={16} s={mobile} weight={500}>
            *
        </Text>
    </Flex>
);

const SellForm = () => {
    const { form, updateForm, handleButtonClick, isSubmitting } = useForm();
    const { normalizePhone } = useSafeInput();
    const lastPhoneRefPc = useRef<HTMLInputElement>(null);
    const lastPhoneRefMo = useRef<HTMLInputElement>(null);

    const renderCarModel = (mobile: boolean) => (
        <CustomInputA
            full
            s={mobile}
            padding={mobile ? { x: 12, y: 12 } : { x: 15, y: 12 }}
            fontSize={15}
            maxLength={20}
            style={inputStyle}
            placeholder="ex) K5"
            value={form.carModel}
            onChange={(e) => updateForm('carModel', e.target.value)}
        />
    );

    const renderPhone = (mobile: boolean) => {
        const lastRef = mobile ? lastPhoneRefMo : lastPhoneRefPc;
        const props = {
            full: true,
            s: mobile,
            type: 'tel',
            padding: mobile ? { x: 8, y: 12 } : { x: 10, y: 12 },
            fontSize: 15,
            style: { ...inputStyle, textAlign: 'center' as const },
        };
        return (
            <>
                <CustomInputA
                    {...props}
                    maxLength={3}
                    value={form.firstPhone}
                    onChange={(e) => updateForm('firstPhone', normalizePhone(e.target.value))}
                />
                <Text size={15} s={mobile} color="#767676">
                    -
                </Text>
                <CustomInputA
                    {...props}
                    maxLength={4}
                    value={form.middlePhone}
                    onChange={(e) => {
                        const v = normalizePhone(e.target.value);
                        updateForm('middlePhone', v);
                        if (v.length === 4) lastRef.current?.focus();
                    }}
                />
                <Text size={15} s={mobile} color="#767676">
                    -
                </Text>
                <CustomInputA
                    {...props}
                    ref={lastRef}
                    maxLength={4}
                    value={form.lastPhone}
                    onChange={(e) => updateForm('lastPhone', normalizePhone(e.target.value))}
                />
            </>
        );
    };

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
            style={{
                borderRadius: 999,
                padding: mobile ? '18px 0' : 'var(--space-15) 0',
                border: 'none',
                boxShadow: '0 0 8px 8px rgba(255, 200, 0, 0.35)',
            }}
        >
            <Text size={18} s={mobile} weight={700} color={DARK} style={ls()}>
                {isSubmitting ? '전송 중...' : '최고가 견적 무료확인 >>'}
            </Text>
        </ButtonB>
    );

    return (
        <>
            <Item desktop>
                <Flex justify="center" padding={{ b: 20 }}>
                    <Box
                        width={750}
                        borderColor="#E2E2E2"
                        borderWeight={1}
                        radius={20}
                        backgroundColor="#fff"
                        padding={25}
                    >
                        <Flex direction="column" gap={20}>
                            <Flex justify="space-between" align="center">
                                <Flex gap={10} align="center">
                                    <Label mobile={false}>차량명</Label>
                                    <Box width={250}>{renderCarModel(false)}</Box>
                                </Flex>
                                <Flex gap={10} align="center">
                                    <Label mobile={false}>연락처</Label>
                                    <Flex width={300} align="center" gap={7}>
                                        {renderPhone(false)}
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Box height="1px" backgroundColor="#E2E2E2" />
                            {renderPrivacy(false)}
                            {renderButton(false)}
                        </Flex>
                    </Box>
                </Flex>
            </Item>
            <Item mobile>
                <Box style={{ padding: '0 20px 40px' }}>
                    <Box borderColor="#E2E2E2" borderWeight={1} radius={20} backgroundColor="#fff">
                        <Flex direction="column" gap={16} s padding={{ x: 20, y: 22 }}>
                            <Flex justify="space-between" align="center" gap={10} s>
                                <Label mobile>차량명</Label>
                                <Box width="220px">{renderCarModel(true)}</Box>
                            </Flex>
                            <Flex justify="space-between" align="center" gap={10} s>
                                <Label mobile>연락처</Label>
                                <Flex width="220px" align="center" gap={5} s>
                                    {renderPhone(true)}
                                </Flex>
                            </Flex>
                            <Box height="1px" backgroundColor="#E2E2E2" />
                            {renderPrivacy(true)}
                            {renderButton(true)}
                        </Flex>
                    </Box>
                </Box>
            </Item>
        </>
    );
};

export default SellForm;
