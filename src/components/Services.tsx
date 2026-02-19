import React from 'react';

const services = [
    {
        title: 'Brand Identity',
        description: 'We craft timeless identities that resonate with your target audience and stand out in crowded markets.',
        items: ['Logo Design', 'Brand Strategy', 'Visual Guidelines'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
        )
    },
    {
        title: 'Web Development',
        description: 'We build high-performance, scalable web applications using the latest technologies and modern frameworks.',
        items: [
            'UI/UX Design – Plan & Prototype',
            'Tech Stack – Choose Tools & Frameworks',
            'Progressive Web App – Mobile & Desktop',
            'Animations & UI – Enhance Interaction'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="20" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
        )
    },
    {
        title: 'Growth Marketing',
        description: 'We drive measurable growth through data-driven marketing strategies and advanced automation tools.',
        items: ['Performance Ads', 'SEO Optimization', 'Email Automation'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16 8-4 4-4-4" /><path d="m12 12v8" /></svg>
        )
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-white dark:bg-[#0F0F1A] transition-colors duration-300 section-padding font-sans">
            <div className="max-w-[1440px] mx-auto px-5 tablet:px-10">
                <div className="text-center mb-16 desktop:mb-24">
                    <span className="text-[#0E9F6E] font-extrabold text-xs tracking-[0.3em] uppercase block mb-4">
                        WHAT WE DO
                    </span>
                    <h2 className="text-5xl desktop:text-6xl font-black tracking-tight text-white mb-6">
                        The Valo Method
                    </h2>
                </div>

                <div className="grid desktop:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#17172A] p-10 tablet:p-12 rounded-[20px] border border-white/5 flex flex-col items-start text-left"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-[#2D1B69] mb-10">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white whitespace-nowrap">
                                {service.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-[280px]">
                                {service.description}
                            </p>
                            <ul className="space-y-4">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/90">
                                        <span className="w-1.5 h-1.5 bg-[#0E9F6E] rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
