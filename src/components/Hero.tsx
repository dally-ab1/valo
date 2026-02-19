import React, { useState } from 'react';

const Hero: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    React.useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === '#why-us') {
                setShowPopup(true);
            }
        };
        checkHash();
        window.addEventListener('hashchange', checkHash);
        return () => window.removeEventListener('hashchange', checkHash);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
        if (window.location.hash === '#why-us') {
            window.history.pushState('', document.title, window.location.pathname + window.location.search);
        }
    };

    return (
        <section className="container mx-auto section-padding min-h-[90vh] flex items-center relative">
            {/* Mission Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0F0F1A]/40 backdrop-blur-sm animate-fade-in" onClick={closePopup}>
                    <div className="glass-card max-w-lg p-10 relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 text-primary-indigo/40 dark:text-white/40 hover:text-primary-indigo dark:hover:text-white transition-colors"
                            onClick={closePopup}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <h3 className="text-accent-green font-bold text-sm tracking-widest uppercase mb-4">Why Valo?</h3>
                        <p className="text-primary-indigo dark:text-white text-xl leading-relaxed">
                            We combine strategy, creativity, and technology to deliver high-impact solutions that convert visitors into loyal customers.
                        </p>
                    </div>
                </div>
            )}

            <div className="grid desktop:grid-cols-2 gap-12 desktop:gap-20 items-center w-full">
                {/* Text Content */}
                <div className="text-center desktop:text-left order-2 desktop:order-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent-green/10 text-accent-green font-bold text-xs mb-5 animate-fade-in">
                        New Era of Digital Solutions
                    </div>
                    <h1 className="mb-5 tracking-tight leading-tight text-3xl tablet:text-4xl desktop:text-5xl">
                        Building Intelligent <span className="text-accent-green">Digital Experiences</span> for the Future
                    </h1>
                    <p className="max-w-xl mx-auto desktop:mx-0 text-inherit opacity-70 mb-8 text-base tablet:text-lg desktop:text-xl leading-relaxed">
                        We partner with ambitious tech agencies to create sleek, high-end digital products that feel intelligent, minimal, and premium.
                    </p>
                    <div className="flex flex-col tablet:flex-row items-center gap-3 justify-center desktop:justify-start">
                        <a href="#projects" className="pill-button-primary pill-button-glow w-full tablet:w-auto text-base tablet:text-lg">
                            Explore Our Work
                        </a>
                        <button
                            onClick={() => setShowPopup(true)}
                            className="pill-button-outline w-full tablet:w-auto text-base tablet:text-lg"
                        >
                            Why Us?
                        </button>
                    </div>
                </div>

                {/* Image / Visual Container */}
                <div className="order-1 desktop:order-2 relative">
                    <div className="aspect-square desktop:aspect-[4/3] rounded-[30px] overflow-hidden glass-card relative z-10 animate-float">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                            alt="Digital Solution Dashboard"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-indigo/20 to-transparent"></div>
                    </div>

                    {/* Background Decorative Shapes */}
                    <div className="absolute -top-10 -right-10 w-96 h-96 bg-accent-green/20 rounded-full blur-[100px] -z-0 opacity-50 desktop:opacity-70 animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] bg-primary-indigo/30 rounded-full blur-[120px] -z-0 opacity-50 desktop:opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
