'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useRef } from 'react';
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
    carModel: string;
    firstPhone: string;
    middlePhone: string;
    lastPhone: string;
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
    defaultCarModel?: string;
};

export const FormProvider = ({ children, inquireLocation = '메인-상단', defaultCarModel = '' }: FormProviderProps) => {
    const router = useRouter();
    const [privacyValue, setPrivacyValue] = useState(true);
    const isLocalPending = useRef(false);

    const conversionPosition = inquireLocation.includes('모달')
        ? '모달'
        : inquireLocation.includes('상단')
          ? '상단'
          : '하단';

    const fields = [
        {
            key: 'carModel',
            label: '차량명',
            required: true,
            defaultValue: defaultCarModel,
            normalize: (raw: string) => sanitizeHtml(normalizeKoreanText(raw)),
            validators: [(v: string) => (v.length < 2 ? '차량명을 2글자 이상 입력해주세요.' : null)],
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
            validators: [(v: string) => (v.length < 3 ? '연락처 중간자리를 입력해주세요.' : null)],
        },
        {
            key: 'lastPhone',
            label: '연락처 끝자리',
            required: true,
            normalize: (raw: string) => normalizePhoneNumber(raw),
            validators: [(v: string) => (v.length < 4 ? '연락처 끝자리를 입력해주세요.' : null)],
        },
    ];

    const { values, isSubmitting, handleSubmit, setFieldValue } = useInquiryForm({
        inquiryType: 'MESSAGE',
        conversionPage: '메인',
        conversionPosition,
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

            setFieldValue('carModel', defaultCarModel);
            setFieldValue('middlePhone', '');
            setFieldValue('lastPhone', '');
            setPrivacyValue(true);
            if (useCompletionPage) router.push(`/complete?token=${token}`);
        },
        onError: (error: any) => {
            alert(error?.response?.data?.result?.message ?? '상담 신청을 실패하였습니다!');
        },
    });

    const form: FormState = {
        carModel: values.carModel ?? '',
        firstPhone: values.firstPhone ?? '010',
        middlePhone: values.middlePhone ?? '',
        lastPhone: values.lastPhone ?? '',
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
        if (isSubmitting || isLocalPending.current) return;

        // 검증 순서: 차량명 → 전화번호 → 개인정보 동의
        if (form.carModel.trim().length < 2) {
            alert('차량명을 2글자 이상 입력해주세요.');
            return;
        }
        if (form.firstPhone.length < 3 || form.middlePhone.length < 3 || form.lastPhone.length < 4) {
            alert('연락처를 정확히 입력해주세요.');
            return;
        }
        if (!form.privacyValue) {
            alert('개인정보취급방침에 동의하셔야 합니다.');
            return;
        }

        isLocalPending.current = true;
        try {
            await handleSubmit();
        } finally {
            isLocalPending.current = false;
        }
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
