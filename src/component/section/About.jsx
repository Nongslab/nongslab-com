import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';

const studioFacts = [
    {
        title: 'Independent Studio',
        desc: 'Built on modern tech standards, free from agency overhead.',
        color: 'bg-orange-100 text-orange-600',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a4 4 0 018 0v2" />
            </svg>
        ),
    },
    {
        title: 'Direct Execution',
        desc: 'You collaborate directly with the creators. No unnecessary layers, just clear communication and technical focus from concept to launch.',
        color: 'bg-blue-100 text-blue-600',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Design and code in-house',
        desc: 'No outsourcing, no handoff gaps between design and development.',
        color: 'bg-emerald-100 text-emerald-600',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
                <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 4l-4 16" strokeLinecap="round" />
            </svg>
        ),
    },
];

const About = () => {
    const sectionRef = useScrollReveal();

    return (
        <section id="about" ref={sectionRef} className="relative scroll-mt-16 py-20 md:py-28 overflow-hidden bg-surface-warm">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border-2 border-primary/10 animate-float" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header with Number */}
                <div className="flex items-start gap-6 mb-14">
                    <div className="reveal-hidden reveal-left">
                        <span className="text-6xl md:text-8xl font-extrabold text-primary/10 font-mono leading-none select-none">01</span>
                    </div>
                    <div className="reveal-hidden reveal-right pt-2">
                        <span className="inline-flex items-center gap-2 text-primary text-sm font-mono font-medium mb-3">
                            <span className="w-8 h-px bg-primary" />
                            About Nongslab
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-tight max-w-xl">
                            An independent studio crafting high-performance websites and intuitive digital experiences.
                        </h2>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-5 gap-6 mb-14">
                    {/* Left: Photo Card (spans 3 cols) */}
                    <div className="reveal-hidden reveal-left reveal-stagger-1 lg:col-span-3">
                        <div className="relative rounded-3xl overflow-hidden group card-lift h-full min-h-[400px]">
                            <img
                                src="/images/about-studio.jpg"
                                alt="Nongslab studio"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                                    Design and code,
                                    <br />
                                    <span className="text-primary-light">under one roof</span>
                                </h3>
                                <p className="text-white/70 text-base max-w-md mb-6">
                                    Fewer handoffs mean faster decisions and work that ships.
                                </p>
                                <a
                                    href="#contact"
                                    className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm w-fit group/btn hover:shadow-lg hover:shadow-primary/30"
                                >
                                    Discuss Your Project
                                    <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Fact Cards (spans 2 cols) */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        {studioFacts.map((fact, i) => (
                            <div key={fact.title} className={`reveal-hidden reveal-right reveal-stagger-${i + 2}`}>
                                <div className="bg-white rounded-2xl p-6 card-lift group cursor-default border border-border hover:border-primary/20 hover:shadow-md">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${fact.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            {fact.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-ink mb-1.5">{fact.title}</h4>
                                            <p className="text-muted text-sm leading-relaxed">{fact.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <div className="reveal-hidden reveal-scale reveal-stagger-3">
                    <div className="relative rounded-3xl overflow-hidden group">
                        <img
                            src="/images/cta-project.jpg"
                            alt="Start a project"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80" />
                        <div className="relative z-10 px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white max-w-xl leading-relaxed">
                                Have a project in mind? Tell us the goal, and we will tell you how we would get there.
                            </h3>
                            <a
                                href="#contact"
                                className="magnetic-btn shrink-0 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-base hover:shadow-xl flex items-center gap-2 group/cta"
                            >
                                Let's Talk
                                <FiArrowRight className="group-hover/cta:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
