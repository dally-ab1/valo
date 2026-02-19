import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#projects' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0F0F1A]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 desktop:h-24 px-5 tablet:px-10">
                {/* Left Side: Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 bg-[#2D1B69] rounded-lg flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3L4 14H11V21L20 10H13V3Z" /></svg>
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-[#2D1B69] dark:text-white font-sans uppercase">
                            VALO
                        </span>
                    </a>
                </div>

                {/* Center: Navigation Menu */}
                <nav className="hidden tablet:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold tracking-wide text-[#2D1B69] dark:text-white/80 hover:text-[#0E9F6E] transition-colors relative group font-['Inter']"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Side: Toggle & CTA */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4F4F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                        )}
                    </button>

                    <a
                        href="#contact"
                        className="bg-[#0E9F6E] text-[#0F0F1A] hover:bg-[#0E9F6E]/90 px-6 py-2.5 rounded-lg font-bold text-xs tracking-widest uppercase transition-all hidden tablet:block"
                    >
                        LET'S TALK
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="tablet:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-[#2D1B69] dark:text-white"
                        aria-label="Toggle Menu"
                    >
                        <span className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`fixed inset-0 top-[80px] bg-[#F6F4FF] dark:bg-[#0F0F1A] z-40 tablet:hidden transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col items-center gap-8 pt-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-bold text-[#2D1B69] dark:text-white hover:text-[#0E9F6E] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#0E9F6E] text-[#0F0F1A] px-10 py-4 rounded-lg font-bold text-sm tracking-widest uppercase mt-4"
                    >
                        LET'S TALK
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
