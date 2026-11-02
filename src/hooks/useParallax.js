import { useEffect, useRef } from 'react';

/**
 * Custom hook for parallax scrolling effect.
 * @param {number} speed - Parallax speed multiplier (negative = opposite direction)
 * @param {string} direction - 'vertical' or 'horizontal'
 * @returns {React.RefObject} ref to attach to the element
 */
const useParallax = (speed = 0.5, direction = 'vertical') => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.scrollY;

            if (direction === 'vertical') {
                element.style.transform = `translateY(${-scrolled * speed}px)`;
            } else {
                element.style.transform = `translateX(${-scrolled * speed}px)`;
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateParallax();

        return () => window.removeEventListener('scroll', onScroll);
    }, [speed, direction]);

    return ref;
};

export default useParallax;