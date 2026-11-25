import type { CSSProperties } from 'react';

// 사이트 공통 정보 (전화번호·상호 등은 확정되면 여기만 수정)
export const SITE_NAME = '국민중고차비교견적';
export const PHONE = '050-8201-0232';
export const PHONE_TEL = PHONE.replace(/-/g, '');

export const PRIMARY = '#FFC800';
export const DARK = '#1A1A1A';

export const COUNTS = { week: 542, total: 65610, success: 31840 };

export const CONSULT_CARS = [
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

// Paperlogy 제목 폰트
export const paperlogy: CSSProperties = { fontFamily: 'var(--font-paperlogy)' };
export const ls = (em = -0.03): CSSProperties => ({ letterSpacing: `${em}em` });
