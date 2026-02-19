import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="container mx-auto section-padding min-h-[90vh] flex items-center">
            <div className="grid desktop:grid-cols-2 gap-12 desktop:gap-20 items-center w-full">
                {/* Text Content */}
                <div className="text-center desktop:text-left order-2 desktop:order-1">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-accent-green/10 text-accent-green font-bold text-sm mb-6 animate-fade-in">
                        New Era of Digital Solutions
                    </div>
                    <h1 className="mb-6 tracking-tight leading-tight">
                        Building Intelligent <span className="text-accent-green">Digital Experiences</span> for the Future
                    </h1>
                    <p className="max-w-xl mx-auto desktop:mx-0 text-black/60 dark:text-white/60 mb-10 text-lg desktop:text-xl leading-relaxed">
                        We partner with ambitious tech agencies to create sleek, high-end digital products that feel intelligent, minimal, and premium.
                    </p>
                    <div className="flex flex-col tablet:flex-row items-center gap-4 justify-center desktop:justify-start">
                        <a href="#projects" className="pill-button-primary w-full tablet:w-auto text-lg">
                            Explore Our Work
                        </a>
                        <a href="#contact" className="pill-button-outline w-full tablet:w-auto text-lg">
                            Start a Project
                        </a>
                    </div>
                </div>

                {/* Image / Visual Container */}
                <div className="order-1 desktop:order-2 relative">
                    <div className="aspect-square desktop:aspect-[4/3] rounded-[30px] overflow-hidden card-shadow relative z-10 animate-float">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                            alt="Digital Solution Dashboard"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-indigo/20 to-transparent"></div>
                    </div>

                    {/* Background Decorative Shapes */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-green/20 rounded-full blur-3xl -z-0 opacity-50 desktop:opacity-100"></div>
                    <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary-indigo/10 rounded-full blur-3xl -z-0 opacity-50 desktop:opacity-100"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
