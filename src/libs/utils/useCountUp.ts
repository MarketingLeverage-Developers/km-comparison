import { useEffect, useState } from 'react';

export const useCountUpOnce = (target: number): number => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let rafId: number;
        const duration = 3000; // 3초
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = progress * target;

            // 소수점 없는 정수 또는 소수 값
            setCount(Number.isInteger(target) ? Math.floor(value) : parseFloat(value.toFixed(2)));

            if (progress < 1) {
                rafId = requestAnimationFrame(animate);
            }
            // progress === 1 이면 종료, re-start 없음
        };

        rafId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(rafId);
    }, [target]);

    return count;
};
