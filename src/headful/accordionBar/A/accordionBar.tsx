'use client';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import styles from './accordionBar.module.scss';
import open from '@/assets/images/openIcon.svg';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import React, { useState } from 'react';
import classNames from 'classnames';

type Props = {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
};

const AccordionBar = ({ title, content, onToggle, isOpen }: Props) => {
    return (
        <div
            className={classNames(styles.container, {
                [styles.open]: isOpen,
            })}
            onClick={onToggle}
        >
            <div className={styles.TitleLine}>
                <div className={styles.title}>{title}</div>
                <Image image={open.src} alt="img" />
            </div>
            {isOpen && <div className={`${styles.AnswerWrapper} ${isOpen && styles.open}`}>{content}</div>}
        </div>
    );
};
export default AccordionBar;
