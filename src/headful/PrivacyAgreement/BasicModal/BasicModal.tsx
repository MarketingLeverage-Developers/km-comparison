'use client';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './BasicModal.module.scss';
import closeIcon from '@/ui-kit/src/assets/images/x.svg';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

const BasicModal = ({ isOpen, onClose, title, children }: Props) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={styles.ModalOverlay} onClick={handleBackdropClick}>
            <div className={styles.ModalContainer}>
                <div className={styles.ModalHeaderContent}>
                    <p>{title}</p>
                    <img onClick={onClose} src={closeIcon.src} alt="닫기 버튼" />
                </div>
                <div className={styles.ModalContent}>{children}</div>
            </div>
        </div>,
        typeof window !== 'undefined' ? document.body : document.createElement('div')
    );
};

export default BasicModal;
