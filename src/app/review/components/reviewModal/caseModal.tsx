import React from 'react';
import styles from './caseModal.module.scss';
import closeBtn from '@/assets/images/x-close.svg';
import Modal from '@/headless/Modal/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import prev from '@/assets/images/prev.svg';
import next from '@/assets/images/next.svg';

type CaseModalProps = {
    item: any;
};

const CaseModal: React.FC<CaseModalProps> = ({ item }) => {
    return (
        <Modal.Content style={{ overflow: 'auto', zIndex: 1001 }}>
            <div className={styles.ModalContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.ModalHeaderWrapper}>
                    {item.title}
                    <Modal.Close>
                        <img src={closeBtn.src} alt="close" />
                    </Modal.Close>
                </div>
                <div className={styles.ModalContent}>
                    {item.content.thumbnails && (
                        <div className={styles.SwiperWrapper}>
                            <img src={prev.src} className={styles.PrevButton} alt="prev icon" />
                            <img src={next.src} className={styles.NextButton} alt="next icon" />

                            <Swiper
                                modules={[Navigation]}
                                loop={true}
                                navigation={{
                                    prevEl: `.${styles.PrevButton}`,
                                    nextEl: `.${styles.NextButton}`,
                                }}
                                className={styles.ModalImageSwiperContainer}
                            >
                                {item.content.thumbnails.map((thumb: any, idx: number) => (
                                    <SwiperSlide className={styles.Slide} key={idx}>
                                        <img src={thumb} loading="lazy" alt={`slide-${idx}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}

                    <div className={styles.TextWrapper} dangerouslySetInnerHTML={{ __html: item.content.tag }} />
                </div>
            </div>
        </Modal.Content>
    );
};

export default CaseModal;
