import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const Footer = () => (
  <footer className="bg-white dark:bg-dark-bg border-t border-black/5 dark:border-white/5 py-12 transition-colors duration-300">
    <div className="container mx-auto flex flex-col tablet:flex-row justify-between items-center gap-8">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Valo Logo"
          className="h-12 desktop:h-16 w-auto object-contain"
        />
      </div>
      <p className="text-black/40 dark:text-white/40 text-sm">
        © 2026 Valo Tech Agency. All rights reserved.
      </p>
      <div className="flex gap-6">
        {['Privacy', 'Terms', 'LinkedIn'].map(link => (
          <a key={link} href="#" className="text-sm font-medium hover:text-accent-green transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="bg-blob w-[500px] h-[500px] top-[-10%] left-[-10%] bg-accent-green" style={{ animationDelay: '0s' }} />
          <div className="bg-blob w-[600px] h-[600px] bottom-[-15%] right-[-5%] bg-primary-indigo" style={{ animationDelay: '2s' }} />
          <div className="bg-blob w-[400px] h-[400px] top-[40%] left-[60%] bg-accent-green/40" style={{ animationDelay: '4s' }} />
        </div>

        <div className="noise-overlay" />
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
