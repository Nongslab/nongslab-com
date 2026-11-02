import React from 'react';
import footerLogo from '../../assets/footer_logo.svg';

const Footer = () => {
    return (
        <footer className="relative border-t border-border overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="orb orb-primary w-[250px] h-[250px] -bottom-[80px] left-[30%] opacity-30" />

            <div className="container mx-auto px-4 lg:px-8 py-14 md:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-10">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="inline-block mb-5">
                            <img src={footerLogo} alt="Nongslab" className="h-12 w-auto" />
                        </a>
                        <p className="text-muted text-sm leading-relaxed max-w-sm">
                            Nongslab is a digital production studio founded in 2024. We build high-performance websites, UI/UX design, custom web applications, and digital workflow solutions, from design to launch.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-ink font-semibold text-xs font-mono uppercase tracking-wider mb-4">Main Services</h3>
                        <ul className="space-y-2 text-muted text-sm">
                            <li className="hover:text-primary transition-colors cursor-default">Web Development</li>
                            <li className="hover:text-primary transition-colors cursor-default">UI/UX Design</li>
                            <li className="hover:text-primary transition-colors cursor-default">Digital Workflow Optimization</li>
                        </ul>
                        <h3 className="text-ink font-semibold text-xs font-mono uppercase tracking-wider mt-5 mb-4">Support</h3>
                        <ul className="space-y-2 text-muted text-sm">
                            <li className="hover:text-primary transition-colors cursor-default">Digitalization Consulting</li>
                            <li className="hover:text-primary transition-colors cursor-default">Data Entry & Management</li>
                        </ul>
                    </div>

                    {/* Nav */}
                    <div>
                        <h3 className="text-ink font-semibold text-xs font-mono uppercase tracking-wider mb-4">Navigation</h3>
                        <ul className="space-y-2 text-muted text-sm">
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Services', href: '#services' },
                                { name: 'Work', href: '#work' },
                                { name: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <p className="text-muted text-sm">
                        &copy; {new Date().getFullYear()} <span className="text-ink font-medium">Nongslab</span>. All rights reserved.
                    </p>
                    <a href="mailto:nlabs.asia@gmail.com" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                        nlabs.asia@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
