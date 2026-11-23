'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './swiperD.module.scss';

// sk-comparison2 headful/barSwiper/D 기반 — 실시간 상담 현황 세로 티커
// height 를 받아 목록 영역 높이에 맞춤 (기본값은 원본과 동일)
type SwiperDProps = {
    children: React.ReactNode[];
    height?: string;
    spaceBetween?: number;
    delay?: number;
};

const SwiperD = ({ children, height, spaceBetween = 10, delay = 1000 }: SwiperDProps) => {
    return (
        <Swiper
            direction="vertical"
            speed={1500}
            allowTouchMove={false}
            autoplay={{
                delay,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className={height ? styles.SwiperCustom : styles.SwiperContainer}
            style={height ? { height } : undefined}
            slidesPerView="auto"
            spaceBetween={spaceBetween}
        >
            {React.Children.map(children, (child, idx) => (
                <SwiperSlide key={idx} className={styles.swiperSlide}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperD;
