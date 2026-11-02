import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';

const services = [
    {
        id: '01',
        title: 'Web Development',
        desc: 'High-performance websites and custom web applications. We work with React, WordPress, and Laravel, and pick the stack that fits the job.',
        tags: ['React', 'WordPress', 'Laravel'],
        image: '/images/service-webdev.jpg',
        accent: 'from-blue-500/20 to-blue-600/10',
        tagColor: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
        id: '02',
        title: 'UI/UX Design',
        desc: 'Interfaces designed in Figma around how people actually use them. From wireframes to interactive prototypes you can test before writing code.',
        tags: ['Figma', 'Wireframes', 'Prototypes'],
        image: '/images/service-uiux.jpg',
        accent: 'from-purple-500/20 to-purple-600/10',
        tagColor: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
        id: '03',
        title: 'Digital Workflow Optimization',
        desc: 'We map how your work runs, then automate and streamline the repetitive parts: internal tools, integrations, and process fixes.',
        tags: ['Automation', 'Integrations', 'Internal tools'],
        image: '/images/service-workflow.jpg',
        accent: 'from-emerald-500/20 to-emerald-600/10',
        tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
];

const ServicesSection = () => {
    const sectionRef = useScrollReveal();
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <section id="services" ref={sectionRef} className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden bg-white">
            <div className="orb orb-secondary w-[350px] h-[350px] top-[10%] -left-[150px] opacity-50" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header with Number */}
                <div className="flex items-start gap-6 mb-14">
                    <div className="reveal-hidden reveal-left">
                        <span className="text-6xl md:text-8xl font-extrabold text-primary/10 font-mono leading-none select-none">02</span>
                    </div>
                    <div className="reveal-hidden reveal-right pt-2">
                        <span className="inline-flex items-center gap-2 text-primary text-sm font-mono font-medium mb-3">
                            <span className="w-8 h-px bg-primary" />
                            Our Services
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                            Web development, UI/UX design, and workflow
                            <span className="gradient-text"> solutions we build for clients</span>
                        </h2>
                    </div>
                </div>

                {/* Service Cards — horizontal on desktop */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className={`reveal-hidden reveal-stagger-${i + 1}`}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            <div className={`rounded-3xl overflow-hidden border transition-all duration-500 h-full flex flex-col group ${
                                hoveredIdx === i
                                    ? 'border-primary/30 shadow-xl shadow-primary/10 -translate-y-2'
                                    : 'border-border shadow-sm'
                            }`}>
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${
                                            hoveredIdx === i ? 'scale-110' : 'scale-100'
                                        }`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${service.accent}`} />
                                    {/* Number badge */}
                                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center font-mono font-bold text-ink text-sm shadow-sm">
                                        {service.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                                        {service.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className={`font-mono text-xs px-2.5 py-1 rounded-full border ${service.tagColor}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reveal-hidden reveal-stagger-4">
                    <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold text-base group">
                        Discuss your project
                        <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
