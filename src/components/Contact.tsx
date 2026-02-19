import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container mx-auto">
                <div className="rounded-[40px] overflow-hidden grid desktop:grid-cols-2 bg-white dark:bg-dark-card card-shadow">
                    {/* Indigo Info Block */}
                    <div className="bg-primary-indigo p-12 desktop:p-20 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-white text-4xl desktop:text-6xl mb-8">Ready to <span className="text-accent-green">Scale</span>?</h2>
                            <p className="text-white/70 text-lg mb-12 max-w-sm">
                                Let's collaborate on your next digital breakthrough. Our team is ready to build your vision.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <span className="text-lg">+1 (234) 567-890</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <span className="text-lg">hello@valo.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10 flex gap-6">
                            {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                                <a key={social} href="#" className="text-white/50 hover:text-accent-green transition-colors font-medium">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form Block */}
                    <div className="p-12 desktop:p-20 bg-white dark:bg-dark-card">
                        <form className="space-y-8">
                            <div className="grid desktop:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input type="text" id="name" required placeholder=" " className="peer w-full border-b border-black/10 dark:border-white/10 bg-transparent py-4 focus:outline-none focus:border-accent-green transition-colors text-lg" />
                                    <label htmlFor="name" className="absolute left-0 top-4 text-black/40 dark:text-white/40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-accent-green peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Full Name</label>
                                </div>
                                <div className="relative">
                                    <input type="email" id="email" required placeholder=" " className="peer w-full border-b border-black/10 dark:border-white/10 bg-transparent py-4 focus:outline-none focus:border-accent-green transition-colors text-lg" />
                                    <label htmlFor="email" className="absolute left-0 top-4 text-black/40 dark:text-white/40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-accent-green peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Email Address</label>
                                </div>
                            </div>

                            <div className="relative">
                                <select id="service" className="peer w-full border-b border-black/10 dark:border-white/10 bg-transparent py-4 focus:outline-none focus:border-accent-green transition-colors text-lg appearance-none">
                                    <option value="" disabled selected>Select Service</option>
                                    <option value="brand">Brand Identity</option>
                                    <option value="web">Web Development</option>
                                    <option value="marketing">Digital Marketing</option>
                                </select>
                                <div className="absolute right-0 top-6 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>

                            <div className="relative">
                                <textarea id="message" rows={4} placeholder=" " className="peer w-full border-b border-black/10 dark:border-white/10 bg-transparent py-4 focus:outline-none focus:border-accent-green transition-colors text-lg resize-none"></textarea>
                                <label htmlFor="message" className="absolute left-0 top-4 text-black/40 dark:text-white/40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-accent-green peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">About the project</label>
                            </div>

                            <button type="submit" className="pill-button-primary w-full text-lg shadow-indigo-500/20 shadow-xl">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
