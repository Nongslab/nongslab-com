import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';

const PROJECTS = [
    {
        title: 'FamilyStore',
        subtitle: 'Convenience Store Web & Order Portal',
        category: 'Web App',
        oneliner: 'Omnichannel web platform featuring real-time store locator, ready-to-eat menu catalog, and fast self-pickup ordering system.',
        problem: 'Traditional convenience stores face long checkout queues and lack a modern digital showcase for fresh ready-to-eat products.',
        solution: 'Built a mobile-first React application with dynamic store status, interactive catalog with category filters, and an express pickup ordering flow.',
        impact: 'Streamlined ready-to-eat discovery, demonstrated 0-queue pickup workflow, and created a cohesive retail design system.',
        liveUrl: 'https://nongslab-retail-store.vercel.app/',
        tags: ['React 19', 'Tailwind CSS', 'Lucide Icons'],
        color: '#F08733',
        bgLight: 'bg-orange-50',
        borderActive: 'border-orange-300',
    },
    {
        title: 'Jahaplast',
        subtitle: 'Industrial Piping E-Commerce',
        category: 'E-Commerce',
        oneliner: 'Company website and e-commerce platform for industrial piping and mining equipment.',
        problem: 'Manual order inquiries and lack of digital product visibility slowed down B2B sales and customer reach.',
        solution: 'Designed and built a responsive WordPress & WooCommerce catalog platform with clear category navigation and direct inquiry integration.',
        impact: 'Enhanced brand credibility, streamlined industrial product discovery, and expanded digital customer inquiries.',
        liveUrl: 'https://jahaplast.com',
        tags: ['WordPress', 'WooCommerce', 'SEO'],
        color: '#3B82F6',
        bgLight: 'bg-blue-50',
        borderActive: 'border-blue-300',
    },
    {
        title: 'WeddiN',
        subtitle: 'Digital Wedding Invitation Platform',
        category: 'SaaS Product',
        oneliner: 'Digital wedding invitation platform, built and run as an in-house Nongslab product line.',
        problem: 'Traditional paper invitations lack interactive RSVP tracking, location maps, and instant digital distribution.',
        solution: 'Developed a customizable digital invitation engine with interactive RSVPs, music players, and seamless WhatsApp share flows.',
        impact: 'Successfully launched as an active product line, enabling instant invitation creation with high engagement.',
        liveUrl: 'https://wedding.nongslab.com',
        tags: ['React', 'UI/UX Design', 'Animations'],
        color: '#8B5CF6',
        bgLight: 'bg-purple-50',
        borderActive: 'border-purple-300',
    },
];

const Work = () => {
    const sectionRef = useScrollReveal();
    const [expandedProject, setExpandedProject] = useState(null);

    return (
        <section id="work" ref={sectionRef} className="relative scroll-mt-16 py-20 md:py-28 overflow-hidden bg-white">
            <div className="orb orb-primary w-[400px] h-[400px] top-[10%] -right-[150px] opacity-40" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header with Number */}
                <div className="flex items-start gap-6 mb-14">
                    <div className="reveal-hidden reveal-left">
                        <span className="text-6xl md:text-8xl font-extrabold text-primary/10 font-mono leading-none select-none">04</span>
                    </div>
                    <div className="reveal-hidden reveal-right pt-2">
                        <span className="inline-flex items-center gap-2 text-primary text-sm font-mono font-medium mb-3">
                            <span className="w-8 h-px bg-primary" />
                            Selected Work
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                            Projects we have
                            <span className="gradient-text"> designed and built</span>
                        </h2>
                    </div>
                </div>

                <div className="space-y-4">
                    {PROJECTS.map((project, i) => (
                        <div key={project.title} className={`reveal-hidden reveal-stagger-${i + 1}`}>
                            <div
                                className={`rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-500 ${
                                    expandedProject === i
                                        ? `${project.bgLight} ${project.borderActive} shadow-lg`
                                        : 'bg-white border-border hover:border-primary/20 hover:shadow-md'
                                }`}
                                onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                            >
                                {/* Header */}
                                <div className="p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shrink-0"
                                            style={{ backgroundColor: project.color }}
                                        >
                                            {project.title.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-ink">{project.title}</h3>
                                            <p className="text-muted text-sm">{project.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="font-mono text-xs px-3 py-1.5 rounded-full font-medium text-white"
                                            style={{ backgroundColor: project.color }}
                                        >
                                            {project.category}
                                        </span>
                                        <div className={`w-9 h-9 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                                            expandedProject === i
                                                ? 'rotate-45 border-current'
                                                : 'border-border'
                                        }`} style={{ color: project.color }}>
                                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded */}
                                <div
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight: expandedProject === i ? '600px' : '0',
                                        opacity: expandedProject === i ? 1 : 0,
                                    }}
                                >
                                    <div className="px-6 md:px-7 pb-7 pt-2">
                                        <p className="text-body text-sm leading-relaxed mb-6 max-w-3xl">{project.oneliner}</p>
                                        <div className="grid md:grid-cols-3 gap-5 mb-6">
                                            {[
                                                { label: 'Problem', text: project.problem },
                                                { label: 'Solution', text: project.solution },
                                                { label: 'Impact', text: project.impact },
                                            ].map((s) => (
                                                <div key={s.label} className="bg-white/70 rounded-xl p-4">
                                                    <h5 className="font-mono text-xs font-bold uppercase tracking-widest mb-2" style={{ color: project.color }}>
                                                        {s.label}
                                                    </h5>
                                                    <p className="text-muted text-sm leading-relaxed">{s.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-lg bg-white/80 text-body border border-border">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 font-semibold text-sm ml-auto hover:underline"
                                                    style={{ color: project.color }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Live Demo <FiExternalLink />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
