import { useMemo } from 'react';
import { useHomepageContentList } from '@/libs/mleverageClient';
import review1 from '@/assets/images/review1.png';
import review2 from '@/assets/images/review2.png';
import review3 from '@/assets/images/review3.png';

export type Review = { key: string; uuid?: string; title: string; img: string; body: string };

// 관리자에 등록된 후기가 없거나 불러오지 못하면 시안 후기 3개를 보여준다
const FALLBACK: Review[] = [
    {
        key: 'f1',
        title: '산타페 판매',
        img: review1.src,
        body: '좋은 거래로 후기 남겨드립니다~~\n중고차로 구매하여 오랜기간 끌고다니던 싼타페 처분했습니다!!\n인터넷 보면 차량 가져간 후 가격을 깎는 다던데',
    },
    {
        key: 'f2',
        title: 'K9 판매',
        img: review2.src,
        body: '많은 중고차 플랫폼에서 견적을 받은 후 최종적으로\n연락한 국민중고차비교견적',
    },
    {
        key: 'f3',
        title: 'BMW3시리즈 판매',
        img: review3.src,
        body: '판매가 급해 이곳저곳 알아보던 와중 다른 플랫폼은 견적 받는 것만 굉장히\n오래 걸렸으나 국민중고차비교견적 사이트는',
    },
];

/** 관리자 에디터 HTML → 표시용 텍스트 (HTML 은 그대로 주입하지 않는다) */
export const toText = (html: unknown) =>
    String(html ?? '')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

/** hyundai-joonggo / hiautocar 와 같은 방식: 관리자 REVIEW 컨텐츠 목록 */
export const useReviews = (): Review[] => {
    const { data } = useHomepageContentList({ type: 'REVIEW', page: 1, size: 9 });
    return useMemo(() => {
        const list = (data?.body?.contents ?? []) as Record<string, unknown>[];
        const mapped = list
            .filter((c) => c.title && c.thumbnail_path)
            .map((c, i) => ({
                key: String(c.contentUuid ?? i),
                uuid: c.contentUuid ? String(c.contentUuid) : undefined,
                title: String(c.title),
                img: String(c.thumbnail_path),
                body: toText(c.description),
            }));
        return mapped.length > 0 ? mapped : FALLBACK;
    }, [data]);
};
