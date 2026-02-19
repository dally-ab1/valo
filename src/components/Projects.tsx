import React from 'react';

const projects = [
    {
        title: 'Precision Systems',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200',
    },
    {
        title: 'Soul of Brand',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1518186239717-2e9b1132a900?auto=format&fit=crop&q=80&w=1200',
    },
    {
        title: 'Growth Strategy',
        category: 'Growth',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    },
    {
        title: 'Fluid Interfaces',
        category: 'UI/UX Design',
        image: '/uiux.jpg',
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
                    <h2 className="text-5xl desktop:text-6xl font-black tracking-tight text-primary-indigo dark:text-white mb-6">
                        Selected Works
                    </h2>
                </div>

                <div className="grid tablet:grid-cols-2 gap-8 desktop:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group glass-card overflow-hidden cursor-pointer"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 flex items-center justify-between">
                                <div>
                                    <span className="text-[#0E9F6E] font-bold text-xs tracking-widest uppercase mb-2 block font-sans">
                                        {project.category}
                                    </span>
                                    <h3 className="text-primary-indigo dark:text-white text-2xl font-bold tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="w-12 h-12 bg-white/10 dark:bg-white/5 rounded-full flex items-center justify-center text-primary-indigo dark:text-white transition-all group-hover:bg-accent-green group-hover:text-primary-indigo dark:group-hover:text-[#0F0F1A] pill-button-glow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
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
