import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations using Intersection Observer.
 * Observes all .reveal-hidden children and reveals them when they enter the viewport.
 */
const useScrollReveal = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -30px 0px',
            }
        );

        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            const revealElements = element.querySelectorAll('.reveal-hidden');
            revealElements.forEach((el) => observer.observe(el));

            if (element.classList.contains('reveal-hidden')) {
                observer.observe(element);
            }
        }, 50);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [options.threshold, options.rootMargin]);

    return ref;
};

export default useScrollReveal;
