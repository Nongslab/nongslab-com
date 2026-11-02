import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import heroLogo from '../../assets/hero_logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setIsScrolled(currentY > 50);
            setIsHidden(currentY > lastScrollY && currentY > 200);
            setLastScrollY(currentY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const menuItems = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isHidden ? '-translate-y-full' : 'translate-y-0'
            } ${isScrolled ? 'py-2' : 'py-4'}`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <nav
                    className={`flex justify-between items-center rounded-2xl px-5 py-2.5 transition-all duration-500 ${
                        isScrolled ? 'glass' : ''
                    }`}
                >
                    <a href="#home" className="flex items-center">
                        <img src={heroLogo} alt="Nongslab" className="h-10 w-auto" />
                    </a>

                    <ul className="hidden md:flex items-center gap-1">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-body hover:text-ink transition-colors duration-300 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm magnetic-btn hover:shadow-lg hover:shadow-primary/25"
                    >
                        <BiMessageDetail className="text-lg" />
                        Start a Project
                    </a>

                    <button
                        className="md:hidden text-2xl text-ink p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </nav>

                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ${
                        isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="glass rounded-2xl p-6 space-y-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-body hover:text-primary transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <BiMessageDetail />
                            Start a Project
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
