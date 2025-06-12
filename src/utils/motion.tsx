// src/utils/motion.ts
import type { Variant } from "framer-motion";

export const staggerContainer = (
    staggerChildren?: number,
    delayChildren?: number
) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: staggerChildren || 0.1,
            delayChildren: delayChildren || 0,
        },
    },
});

export const fadeIn = (
    direction: 'up' | 'down' | 'left' | 'right',
    type: string,
    delay: number,
    duration: number
): Variant => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: 'easeOut',
        },
    },
});

export const textVariant = (delay: number): Variant => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay: delay,
        },
    },
});