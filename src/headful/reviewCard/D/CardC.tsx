'use client';
import { BoxSize, CSSPropertiesWithVars, FontSize, FontWeight, HexColor } from '@/ui-kit/src/types';
import styles from './CardC.module.scss';
import { dimensionToVariable } from '@/ui-kit/src/utils';
import { IoIosArrowForward } from 'react-icons/io';
import React from 'react';

export interface CardCProps {
    radius?: number;
    image?: string;
    title?: string | React.ReactNode;
    width?: BoxSize | string;
    height?: BoxSize | string;
    boxShadow?: string;
    imageWidth?: BoxSize;
    imageHeight?: BoxSize;
    borderWeight?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
    buttonBackground?: HexColor;
    buttonColor?: HexColor;
    content?: string | React.ReactNode;
    buttonText?: string;
}

const ReviewCardB: React.FC<CardCProps> = ({
    content,
    buttonText = 'buttonText',
    title,
    image,
    radius = 12,
    width = 300,
    height = 450,
    imageWidth = '100%',
    imageHeight = 240,
    borderWeight = 0,
    borderColor = '#E0E0E0',
    backgroundColor = 'inherit',
    boxShadow = 'none',
    buttonBackground = '#363636',
    buttonColor = '#ffffff',
    ...boxProps
}) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
        '--imageWidth': `${imageWidth}px`,
        '--imageHeight': `${imageHeight}px`,
        '--radius': `${radius}px`,
        '--backgroundColor': `${backgroundColor}`,
        '--border-color': borderColor,
        '--border-weight': `${borderWeight}px`,
        '--box-shadow': boxShadow,
        '--buttonBackground': buttonBackground,
    };
    return (
        <div className={styles.Wrapper} style={{ ...cssVariables }} {...boxProps}>
            <img src={image} alt="review-img" />
            <div className={styles.ContentWrapper}>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Content} dangerouslySetInnerHTML={{ __html: content! }}></div>
            </div>
            <div className={styles.Button}>
                자세히 보기
                <IoIosArrowForward />
            </div>
        </div>
    );
};
export default ReviewCardB;
