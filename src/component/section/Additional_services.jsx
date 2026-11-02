import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const AdditionalServices = () => {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#FFF3EC' }}>
            {/* Decorative shapes */}
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full border-2 border-primary/10 animate-float" />
            <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-primary/8 animate-float-delayed" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header with Number */}
                <div className="flex items-start gap-6 mb-6">
                    <div className="reveal-hidden reveal-left">
                        <span className="text-6xl md:text-8xl font-extrabold text-primary/10 font-mono leading-none select-none">03</span>
                    </div>
                    <div className="reveal-hidden reveal-right pt-2">
                        <span className="inline-flex items-center gap-2 text-primary text-sm font-mono font-medium mb-3">
                            <span className="w-8 h-px bg-primary" />
                            Support Services
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-tight max-w-lg">
                            Beyond web development,
                            <span className="gradient-text"> complete digital solutions</span>
                        </h2>
                    </div>
                </div>

                <p className="reveal-hidden text-muted text-base max-w-lg mb-14 ml-[calc(4rem+1.5rem)] md:ml-[calc(6rem+1.5rem)]">
                    Support services that complete our end-to-end digital solutions.
                </p>

                <div className="space-y-16 md:space-y-20">
                    {/* Service 1: Digitalization Consultant */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="reveal-hidden reveal-left order-1">
                            <div className="relative group">
                                <div className="relative rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                                    <img
                                        src="/images/support-consult.jpg"
                                        alt="Digitalization Consultant"
                                        className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                                    {/* Floating label */}
                                    <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2">
                                        <span className="text-sm font-semibold text-ink">Consulting</span>
                                    </div>
                                </div>
                                {/* Decorative element */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="reveal-hidden reveal-right order-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-ink">Digitalization Consultant</h3>
                            </div>
                            <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
                                We help your business go digital with the right IT and SEO solutions, from hardware setup to system optimization.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    { label: 'IT Hardware Setup', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                                    { label: 'SEO Strategy', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                                    { label: 'Copywriter', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
                                ].map((item) => (
                                    <div key={item.label} className="bg-white rounded-2xl p-4 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 group/item">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary mb-2 group-hover/item:scale-110 transition-transform" stroke="currentColor" strokeWidth="1.5">
                                            <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-ink font-medium text-xs">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Service 2: Data Entry & Management */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="reveal-hidden reveal-left order-2 md:order-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary" stroke="currentColor" strokeWidth="2">
                                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-ink">Data Entry & Management</h3>
                            </div>
                            <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
                                We organize and manage your data so it is accurate, searchable, and ready to support business decisions.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    { label: 'Data Cleaning', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
                                    { label: 'Entry Support', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
                                    { label: 'Reporting', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                                ].map((item) => (
                                    <div key={item.label} className="bg-white rounded-2xl p-4 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 group/item">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary mb-2 group-hover/item:scale-110 transition-transform" stroke="currentColor" strokeWidth="1.5">
                                            <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-ink font-medium text-xs">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-hidden reveal-right order-1 md:order-2">
                            <div className="relative group">
                                <div className="relative rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                                    <img
                                        src="/images/support-data.jpg"
                                        alt="Data Entry & Management"
                                        className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                                    <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2">
                                        <span className="text-sm font-semibold text-ink">Data Management</span>
                                    </div>
                                </div>
                                <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices;
