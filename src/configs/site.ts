import type { CSSProperties } from 'react';

// 사이트 공통 정보 (전화번호·상호 등은 확정되면 여기만 수정)
export const SITE_NAME = '국민중고차비교견적';
export const PHONE = '050-0000-0000';
export const PHONE_TEL = PHONE.replace(/-/g, '');

export const PRIMARY = '#FFC800';
export const DARK = '#1A1A1A';

// Paperlogy 제목 폰트
export const paperlogy: CSSProperties = { fontFamily: 'var(--font-paperlogy)' };
export const ls = (em = -0.03): CSSProperties => ({ letterSpacing: `${em}em` });
