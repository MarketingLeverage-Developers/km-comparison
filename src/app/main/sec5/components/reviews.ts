import review1 from '@/assets/images/review1.png';
import review2 from '@/assets/images/review2.png';
import review3 from '@/assets/images/review3.png';

export type Review = { key: string; title: string; img: string; body: string };

export const REVIEWS: Review[] = [
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
