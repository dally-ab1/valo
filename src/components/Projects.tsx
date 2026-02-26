import React from 'react';

const projects = [
    {
        title: 'Development — Precision Systems',
        description: 'We engineer high-performance, scalable digital systems tailored to business goals. From full-stack applications to custom platforms, we focus on clean architecture, security, and long-term maintainability to ensure reliable, production-ready solutions.',
        value: '90 000',
        bgGradient: 'from-[#e8f5e9]/60 to-[#f1f8e9]/60', // Soft Green
        icon1: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7986cb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        ),
        icon2: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64b5f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
        )
    },
    {
        title: 'Branding — Soul of Brand',
        description: 'We craft distinctive brand identities that communicate purpose and build emotional connection. Through strategy, visual identity, and messaging systems, we position brands to stand out clearly and consistently in competitive markets.',
        value: '30 000',
        bgGradient: 'from-[#e3f2fd]/60 to-[#e1f5fe]/60', // Soft Blue
        icon1: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>
        ),
        icon2: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbc02d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
        )
    },
    {
        title: 'Growth — Growth Strategy',
        description: 'We design data-driven growth frameworks that optimize acquisition, retention, and revenue. By combining analytics, experimentation, and strategic positioning, we help businesses scale efficiently and sustainably.',
        value: '20 000',
        bgGradient: 'from-[#f3e5f5]/60 to-[#fce4ec]/60', // Soft Purple/Pink
        icon1: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ce93d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>
        ),
        icon2: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#42a5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
        )
    },
    {
        title: 'UI/UX Design — Fluid Interfaces',
        description: 'We create intuitive, user-centered digital experiences that balance aesthetics with usability. Through research, interaction design, and visual systems, we deliver seamless interfaces that improve engagement and drive measurable results.',
        value: '20 000',
        bgGradient: 'from-[#e8eaf6]/60 to-[#ede7f6]/60', // Soft Indigo
        icon1: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5c6bc0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
        ),
        icon2: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#90a4ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
        )
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="relative premium-bg-dark transition-colors duration-300 section-padding overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_left,rgba(14,159,110,0.03)_0%,transparent_70%)] pointer-events-none" />
            <div className="max-w-[1440px] mx-auto px-5 tablet:px-10">
                <div className="text-center mb-16 desktop:mb-24">
                    <span className="text-[#0E9F6E] font-extrabold text-xs tracking-[0.3em] uppercase block mb-4">
                        OUR PORTFOLIO
                    </span>
                    <h2 className="text-3xl tablet:text-5xl desktop:text-6xl font-black tracking-tight text-primary-indigo dark:text-white mb-6">
                        Selected Works
                    </h2>
                </div>

                <div className="grid desktop:grid-cols-2 gap-6 tablet:gap-8 desktop:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group glass-card rounded-[32px] overflow-hidden cursor-pointer p-8 tablet:p-12 relative bg-gradient-to-br ${project.bgGradient} dark:bg-none flex flex-col justify-between min-h-[300px] desktop:min-h-[360px]`}
                        >
                            {/* Top Icons */}
                            <div className="flex justify-between items-start mb-12">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-white/60 dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-sm backdrop-blur-md border border-white/20">
                                        {project.icon1}
                                    </div>
                                    <div className="w-14 h-14 bg-white/60 dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-sm backdrop-blur-md border border-white/20">
                                        {project.icon2}
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-primary-indigo/10 dark:border-white/20 flex items-center justify-center">
                                    <div className="w-3 h-3 border-2 border-primary-indigo/30 dark:border-white/30 rounded-full"></div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-primary-indigo dark:text-[#f3f4f6] text-3xl tablet:text-4xl font-extrabold tracking-tight mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-primary-indigo/60 dark:text-[#f3f4f6]/60 text-sm tablet:text-base leading-relaxed max-w-sm font-medium">
                                    {project.description}
                                </p>
                            </div>

                            {/* Right Bottom Badge */}
                            <div className="absolute bottom-8 right-8 tablet:bottom-10 tablet:right-10">
                                <div className="bg-primary-indigo/40 dark:bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-sm">
                                    <div className="w-2 h-2 rounded-full border border-white/60"></div>
                                    <span className="text-xs font-bold tracking-wider">{project.value}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
