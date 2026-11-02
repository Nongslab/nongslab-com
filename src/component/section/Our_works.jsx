import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const steps = [
    {
        id: '01',
        title: 'Discover',
        desc: 'We learn your goals, users, and constraints before anything else.',
        color: 'bg-amber-100 text-amber-600 border-amber-200',
        numColor: 'bg-amber-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: '02',
        title: 'Strategize',
        desc: 'We plan the work and agree on scope so there are no surprises later.',
        color: 'bg-blue-100 text-blue-600 border-blue-200',
        numColor: 'bg-blue-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
    },
    {
        id: '03',
        title: 'Execute',
        desc: 'We design and build, keeping you in the loop at every step.',
        color: 'bg-emerald-100 text-emerald-600 border-emerald-200',
        numColor: 'bg-emerald-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: '04',
        title: 'Optimize',
        desc: 'After launch we measure, fix, and improve what needs it.',
        color: 'bg-purple-100 text-purple-600 border-purple-200',
        numColor: 'bg-purple-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const WorkProcess = () => {
    const sectionRef = useScrollReveal();

    return (
        <section id="process" ref={sectionRef} className="relative scroll-mt-12 py-20 md:py-28 overflow-hidden bg-surface-warm">
            {/* Decorative */}
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-primary/8 animate-float" />
            <div className="absolute bottom-20 left-10 w-20 h-20 rounded-xl border border-primary/10 rotate-12 animate-float-delayed" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header with Number */}
                <div className="flex items-start gap-6 mb-14 justify-center text-center">
                    <div className="reveal-hidden">
                        <span className="text-6xl md:text-8xl font-extrabold text-primary/10 font-mono leading-none select-none">05</span>
                    </div>
                    <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-primary text-sm font-mono font-medium mb-3">
                            <span className="w-8 h-px bg-primary" />
                            Work Process
                            <span className="w-8 h-px bg-primary" />
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-ink leading-snug">
                            A clear, collaborative process from
                            <span className="gradient-text"> idea to launch</span>
                        </h2>
                    </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-5 mb-16">
                    {steps.map((step, i) => (
                        <div key={step.id} className={`reveal-hidden reveal-scale reveal-stagger-${i + 1}`}>
                            <div className="bg-white rounded-3xl p-6 md:p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-500 group text-center h-full flex flex-col items-center">
                                {/* Connector line (desktop) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-primary/20 z-10" />
                                )}

                                {/* Icon */}
                                <div className={`relative w-18 h-18 md:w-20 md:h-20 rounded-2xl ${step.color} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    {step.icon}
                                    <span className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-lg ${step.numColor} text-white text-xs font-bold flex items-center justify-center font-mono shadow-sm`}>
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className="text-base md:text-lg font-bold text-ink mb-2 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Card with photo */}
                <div className="reveal-hidden reveal-scale reveal-stagger-3">
                    <div className="relative rounded-3xl overflow-hidden group">
                        <img
                            src="/images/cta-project.jpg"
                            alt="Start a project"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary-light/85" />

                        <div className="relative z-10 px-8 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                                    Have a project in mind?
                                </h2>
                                <p className="text-white/80 max-w-md text-base md:text-lg">
                                    Tell us what you want to build. We will come back with a plan, a scope, and a straight answer.
                                </p>
                            </div>
                            <a
                                href="#contact"
                                className="magnetic-btn shrink-0 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl flex items-center gap-3 group/cta"
                            >
                                Start a Project
                                <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
