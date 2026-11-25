import React from 'react';
import classNames from 'classnames';
import styles from './hoverText.module.scss';
import { dimensionToString, toFont } from '@/ui-kit/src/utils';
import { FontSize, FontWeight } from '@/ui-kit/src/types';

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    size?: FontSize | number;
    weight?: FontWeight;
    color?: string;
    hoverColor?: string;
    align?: 'left' | 'center' | 'right';
    decoration?: 'none' | 'underline' | 'overline' | 'line-through';
    height?: FontSize | number;
    children: React.ReactNode;
    line?: number;
    p?: boolean;
    wbreak?: 'break-all' | 'keep-all' | 'break-word';
    whiteSpace?: 'wrap' | 'nowrap';
    s?: boolean;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number | undefined;
}

const HoverText = ({
    size = 14,
    weight = 400,
    color,
    hoverColor,
    align = 'left',
    decoration = 'none',
    height = size,
    line = 0,
    children,
    style,
    className,
    p,
    wbreak = 'break-word',
    whiteSpace = 'wrap',
    s,
    ...props
}: TextProps) => {
    const computedweight = weight;
    const computedColor = color;
    const computedTextAlign = align;

    const cssVariables: CSSPropertiesWithVars = {
        '--font-size': s ? dimensionToString(size) : toFont(size),
        '--font-weight': computedweight,
        '--color': computedColor,
        '--text-align': computedTextAlign,
        '--text-decoration': decoration,
        '--line-height': s ? dimensionToString(size) : toFont(size),
        '--line': line,
        '--hoverColor': hoverColor,
        '--word-break': wbreak,
        '--white-space': whiteSpace,
    };

    const combinedStyles = classNames(styles.Text, {
        [styles.Line]: line > 0,
    });

    return (
        <>
            {p ? (
                <p {...props} className={combinedStyles} style={{ ...cssVariables, ...style }}>
                    {children}
                </p>
            ) : (
                <span {...props} className={combinedStyles} style={{ ...cssVariables, ...style }}>
                    {children}
                </span>
            )}
        </>
    );
};

export default HoverText;
