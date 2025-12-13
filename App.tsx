import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Ref to track if we are manually scrolling (clicking nav)
  const isNavigating = useRef(false);
  
  // Cursor State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar Background
      setScrolled(window.scrollY > 50);

      // 2. Handle Active Section Detection
      if (isNavigating.current) return;

      const sections = Object.values(Section);
      let currentSection = Section.HERO;
      
      // Trigger Point: 30% down the screen.
      // The section that occupies this point is considered "Active".
      const triggerPoint = window.scrollY + (window.innerHeight * 0.3);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          // Check if the trigger point falls within this section's vertical bounds
          if (
            triggerPoint >= offsetTop && 
            triggerPoint < offsetTop + offsetHeight
          ) {
            currentSection = sectionId;
          }
        }
      }
      
      // Override: If at very top, always Hero
      if (window.scrollY < 50) {
        currentSection = Section.HERO;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: Section) => {
    isNavigating.current = true;
    setActiveSection(section); // Set immediately for UI feedback
    setIsMobileMenuOpen(false); 
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Unlock scroll spy after animation (approx 1000ms)
      setTimeout(() => {
        isNavigating.current = false;
      }, 1000);
    }
  };

  const navItems = [
    { id: Section.HERO, label: 'Home' },
    { id: Section.ABOUT, label: 'About' },
    { id: Section.SKILLS, label: 'Skills' },
    { id: Section.PROJECTS, label: 'Work' },
    { id: Section.GALLERY, label: 'Impact' },
    { id: Section.CONTACT, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-slate-200 font-sans selection:bg-cyber-green selection:text-black">
      {/* Custom Cursor Elements */}
      <div 
        className="cyber-cursor-dot"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div 
        className="cyber-cursor-ring"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030305]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold font-display text-white tracking-wider cursor-pointer z-50" onClick={() => scrollToSection(Section.HERO)}>
            PASINDU<span className="text-cyber-green">.DEV</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyber-green relative group ${activeSection === item.id ? 'text-cyber-green' : 'text-gray-400'}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-green transition-all duration-300 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="text-white p-2 focus:outline-none"
             >
               {isMobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyber-green">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
               )}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#030305]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-2xl font-display font-bold hover:text-cyber-green tracking-widest transition-colors ${activeSection === item.id ? 'text-cyber-green' : 'text-white'}`}
          >
            {item.label.toUpperCase()}
          </button>
        ))}
      </div>

      <main>
        <div id={Section.HERO}>
           <Hero scrollToSection={scrollToSection} />
        </div>
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#030305] py-8 border-t border-white/5 text-center relative z-10">
        <p className="text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} Pasindu Nimesh Subasingha. <span className="text-cyber-blue">System Online.</span>
        </p>
      </footer>

      {/* Floating AI Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;