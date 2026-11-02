import React, { useEffect, useRef } from 'react';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
    const shapesRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!shapesRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 18;
            const y = (e.clientY / window.innerHeight - 0.5) * 18;
            shapesRef.current.querySelectorAll('[data-depth]').forEach((el) => {
                const d = parseFloat(el.dataset.depth);
                el.style.transform = `translate(${x * d}px, ${y * d}px)`;
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return;
            const s = window.scrollY;
            textRef.current.style.transform = `translateY(${s * 0.2}px)`;
            textRef.current.style.opacity = Math.max(0, 1 - s / 500);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 grid-bg" />
            <div className="orb orb-primary w-[600px] h-[600px] -top-[200px] -right-[200px] animate-pulse-soft" />
            <div className="orb orb-secondary w-[400px] h-[400px] bottom-[0%] -left-[150px] animate-pulse-soft" style={{ animationDelay: '2s' }} />

            {/* Floating shapes */}
            <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
                <div data-depth="0.4" className="absolute top-[10%] left-[5%] w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-primary/10 animate-float" />
                <div data-depth="0.7" className="absolute bottom-[20%] right-[8%] w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary-light/15 animate-float-delayed" />
                <div data-depth="0.3" className="absolute top-[25%] right-[5%] w-12 h-12 border-2 border-primary/8 rounded-xl rotate-45 animate-float-slow" />
                <div data-depth="0.6" className="absolute bottom-[30%] left-[10%] grid grid-cols-3 gap-2 animate-float-delayed">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary/15" />
                    ))}
                </div>
                <div data-depth="0.5" className="absolute top-[15%] right-[20%] text-primary/15 text-5xl font-extralight animate-float select-none">+</div>
                <div data-depth="0.8" className="absolute bottom-[35%] left-[20%] text-primary-light/10 text-4xl font-extralight animate-float-slow select-none">+</div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text */}
                    <div ref={textRef}>
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 text-sm text-primary font-medium">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Digital Production Studio
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6 text-ink">
                            Nongslab builds
                            <br />
                            <span className="gradient-text">high-performance</span>
                            <br />
                            websites and{' '}
                            <span className="gradient-text">web apps</span>{' '}
                            <span className="text-ink">that work</span>
                        </h1>

                        <p className="text-base md:text-lg text-muted max-w-md mb-8 leading-relaxed">
                            A digital production studio for high-performance websites,
                            UI/UX design, and custom web applications, from design to launch.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a href="#contact" className="magnetic-btn bg-primary text-white px-7 py-3.5 rounded-2xl font-semibold text-base hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2 group">
                                Start a Project
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#services" className="magnetic-btn bg-white border-2 border-ink/10 text-ink px-7 py-3.5 rounded-2xl font-semibold text-base hover:border-primary/40 hover:text-primary transition-colors">
                                View Services
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
                            <div>
                                <div className="text-2xl font-extrabold text-ink">2024</div>
                                <div className="text-xs text-muted font-mono">Founded</div>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div>
                                <div className="text-2xl font-extrabold text-primary">100%</div>
                                <div className="text-xs text-muted font-mono">In-house</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image composition */}
                    <div className="relative hidden lg:block">
                        {/* Main image card */}
                        <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-primary/10 group">
                            <img
                                src="/images/hero-team.jpg"
                                alt="Two web developers working together on code"
                                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>

                        {/* Floating card top-left */}
                        <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-lg animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-ink">Fast Delivery</div>
                                    <div className="text-xs text-muted">Design to launch</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating card bottom-right */}
                        <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-lg animate-float-delayed">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-600" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-ink">Pixel Perfect</div>
                                    <div className="text-xs text-muted">Every detail matters</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative ring */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-primary/15 animate-spin-slow" />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted animate-bounce-slow">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
                <FiArrowDown className="text-primary" />
            </div>
        </section>
    );
};

export default Hero;
