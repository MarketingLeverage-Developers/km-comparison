'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { generateToken } from '@/libs/utils/token';
import { registerInquirySuccess } from '@/libs/landingTracking';
import {
    useInquiryForm,
    normalizeKoreanText,
    normalizePhoneNumber,
    sanitizeHtml,
    formatPhoneNumber,
    buildPhoneOverrides,
} from '@/libs/mleverageClient';

type FormState = {
    name: string;
    firstPhone: string;
    middlePhone: string;
    lastPhone: string;
    // [추가] 담보물 소재지, 신청 금액
    location: string;
    loanAmount: string;
    privacyValue: boolean;
};

type FormContextType = {
    form: FormState;
    updateForm: (key: keyof FormState, value: string | boolean) => void;
    handleButtonClick: () => Promise<void>;
    isSubmitting: boolean;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

type FormProviderProps = {
    children: ReactNode;
    inquireLocation?: string;
};

export const FormProvider = ({ children, inquireLocation = '메인-상단' }: FormProviderProps) => {
    const router = useRouter();
    const [privacyValue, setPrivacyValue] = useState(true);

    const fields = [
        {
            key: 'name',
            label: '이름',
            required: true,
            normalize: (raw: string) => sanitizeHtml(normalizeKoreanText(raw)),
            validators: [(v: string) => (v.length < 2 ? '성함을 2글자 이상 입력해주세요.' : null)],
        },
        {
            key: 'firstPhone',
            label: '연락처 앞자리',
            required: true,
            defaultValue: '010',
            normalize: (raw: string) => normalizePhoneNumber(raw),
        },
        {
            key: 'middlePhone',
            label: '연락처 중간자리',
            required: true,
            normalize: (raw: string) => normalizePhoneNumber(raw),
            validators: [(v: string) => (v.length < 3 ? '중간자리를 입력해주세요.' : null)],
        },
        {
            key: 'lastPhone',
            label: '연락처 끝자리',
            required: true,
            normalize: (raw: string) => normalizePhoneNumber(raw),
            validators: [(v: string) => (v.length < 4 ? '끝자리를 입력해주세요.' : null)],
        },
        // [추가] 담보물 소재지 필드 설정
        {
            key: 'location',
            label: '담보물 소재지',
            required: true,
            defaultValue: '',
        },
        // [추가] 신청 금액 필드 설정
        {
            key: 'loanAmount',
            label: '신청 금액',
            required: true,
            defaultValue: '',
        },
    ];

    const { values, isSubmitting, handleSubmit, setFieldValue } = useInquiryForm({
        inquiryType: 'MESSAGE',
        conversionPage: '메인',
        conversionPosition: inquireLocation.includes('상단') ? '상단' : '하단',
        fields,
        transformPayload: (currentValues) => {
            const overrides = buildPhoneOverrides(currentValues, formatPhoneNumber);
            return { ...overrides, inquireLocation };
        },
        onSuccess: () => {
            const isProd = process.env.NEXT_PUBLIC_ENV === 'prod';
            const trackingEnabled = Boolean(process.env.NEXT_PUBLIC_TRACKING_SITE_ID && process.env.NEXT_PUBLIC_API_URL);
            const useCompletionPage = isProd || trackingEnabled;
            const token = generateToken();
            if (trackingEnabled) registerInquirySuccess(token);
            if (!useCompletionPage) alert('상담 신청이 완료되었습니다!');

            setFieldValue('name', '');
            setFieldValue('middlePhone', '');
            setFieldValue('lastPhone', '');
            // [추가] 전송 성공 시 초기화
            setFieldValue('location', '');
            setFieldValue('loanAmount', '');

            setPrivacyValue(true);
            if (useCompletionPage) router.push(`/complete?token=${token}`);
        },
        onError: (error: any) => {
            alert(error?.response?.data?.result?.message ?? '상담 신청에 실패했습니다!');
        },
    });

    const form: FormState = {
        name: values.name ?? '',
        firstPhone: values.firstPhone ?? '010',
        middlePhone: values.middlePhone ?? '',
        lastPhone: values.lastPhone ?? '',
        // [추가] 상태 연결
        location: values.location ?? '',
        loanAmount: values.loanAmount ?? '',

        privacyValue,
    };

    const updateForm = (key: keyof FormState, value: string | boolean) => {
        if (key === 'privacyValue') {
            setPrivacyValue(Boolean(value));
            return;
        }
        setFieldValue(key as any, String(value));
    };

    const handleButtonClick = useCallback(async () => {
        if (isSubmitting) return;

        // [추가] 필수값 검증 로직에 location, loanAmount 추가
        if (!form.name.trim() || !form.middlePhone || !form.lastPhone || !form.location || !form.loanAmount) {
            alert('모든 필수 항목을 입력해 주세요.');
            return;
        }
        if (!form.privacyValue) {
            alert('개인정보 수집 및 이용에 동의해 주세요.');
            return;
        }
        await handleSubmit();
    }, [form, isSubmitting, handleSubmit]);

    return (
        <FormContext.Provider value={{ form, updateForm, handleButtonClick, isSubmitting }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => {
    const ctx = useContext(FormContext);
    if (!ctx) throw new Error('useForm must be used within FormProvider');
    return ctx;
};
