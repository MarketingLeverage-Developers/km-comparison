'use client';
import { motion } from 'framer-motion';

type BlinkProps = {
    children: React.ReactNode;
    /** 가장 흐려질 때 투명도 */
    min?: number;
    duration?: number;
    style?: React.CSSProperties;
};

/** 깜빡임 효과 (scss keyframes 대신 framer-motion) */
const Blink = ({ children, min = 0.2, duration = 1.2, style }: BlinkProps) => (
    <motion.div
        style={style}
        animate={{ opacity: [1, min, 1] }}
        transition={{ duration, ease: 'easeInOut', repeat: Infinity }}
    >
        {children}
    </motion.div>
);

export default Blink;
