import React, { useState, useRef, useEffect } from 'react';
import { Section } from '../types';
import { PROFILE_IMAGE } from '../constants';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [activeRole, setActiveRole] = useState<'default' | 'engineer' | 'designer'>('default');
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [typingText, setTypingText] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const fullText = "SYSTEM ONLINE. READY TO SCROLL DOWN";
    const shortText = "SYSTEM ONLINE";
    
    let currentIndex = 0;
    let isDeleting = false;

    const type = () => {
      // Determine text based on current state
      
      if (!isDeleting) {
        // Typing forward
        setTypingText(fullText.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === fullText.length) {
          // Finished typing full text, pause then delete
          isDeleting = true;
          timeoutId = setTimeout(type, 2000); // Wait 2s before deleting
          return;
        }
      } else {
        // Deleting back to shortText
        if (currentIndex > shortText.length) {
           currentIndex--;
           setTypingText(fullText.slice(0, currentIndex));
        } else {
           // Finished deleting, stop
           return; 
        }
      }
      
      const speed = isDeleting ? 30 : 50;
      timeoutId = setTimeout(type, speed);
    };

    // Start delay
    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleDownloadCV = () => {
    const cvUrl = '/assets/Pasindu_Nimesh_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Pasindu_Nimesh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Downloading Pasindu_Nimesh_CV.pdf...");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber-black pt-28 pb-12">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0 opacity-50"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyber-blue/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyber-green/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block relative">
               <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-green blur-lg opacity-40"></div>
               <div className="relative px-4 py-1.5 rounded-full bg-cyber-dark border border-white/10 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
                 <span className="text-xs font-mono text-cyber-green tracking-widest uppercase">
                   {typingText}
                   <span className="animate-pulse">_</span>
                 </span>
               </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-none">
              <span className="text-gray-500 text-2xl md:text-3xl font-light block mb-2">Hello, I am</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                Pasindu Nimesh
              </span>
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">
                Subasingha
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 text-lg text-gray-400 font-light">
              <div 
                onMouseEnter={() => setActiveRole('engineer')}
                onMouseLeave={() => setActiveRole('default')}
                className={`transition-all duration-300 border-b border-transparent hover:border-cyber-blue pb-1 ${activeRole === 'engineer' ? 'text-cyber-blue scale-105' : 'hover:text-white'}`}
              >
                Software Engineer
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700 hidden md:block"></span>
              <div 
                onMouseEnter={() => setActiveRole('designer')}
                onMouseLeave={() => setActiveRole('default')}
                className={`transition-all duration-300 border-b border-transparent hover:border-cyber-green pb-1 ${activeRole === 'designer' ? 'text-cyber-green scale-105' : 'hover:text-white'}`}
              >
                UI/UX Designer
              </div>
            </div>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed text-lg">
              I build high-performance digital ecosystems. Merging <span className="text-cyber-blue font-medium">clean code</span> with <span className="text-cyber-green font-medium">immersive design</span> to create software that feels alive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-white text-black font-bold font-display tracking-wide overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                  DOWNLOAD RESUME 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-y-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-cyber-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection(Section.PROJECTS)}
                className="px-8 py-4 border border-white/20 text-white font-display font-medium hover:bg-white/5 hover:border-cyber-blue transition-all w-full sm:w-auto"
              >
                VIEW WORK
              </button>
            </div>
          </div>

          {/* Interactive 3D Image (Static Content, Dynamic Tilt) */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="relative w-80 h-96 md:w-[420px] md:h-[500px] preserve-3d cursor-pointer group"
            >
              {/* Card Layers for Parallax */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl overflow-hidden transform translate-z-0">
                 {/* Image */}
                 <img 
                   src={PROFILE_IMAGE} 
                   alt="Pasindu Nimesh" 
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105"
                 />
                 
                 {/* Digital Overlay Effect */}
                 <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent"></div>
                 
                 {/* Glitch/Scanline Animation */}
                 <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,159,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
              </div>

              {/* Floating Elements (Translate Z for depth) */}
              <div 
                className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-cyber-blue rounded-tr-3xl opacity-60 transition-transform duration-300"
                style={{ transform: 'translateZ(40px)' }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-cyber-green rounded-bl-3xl opacity-60 transition-transform duration-300"
                style={{ transform: 'translateZ(40px)' }}
              ></div>

              {/* Holographic Badge */}
              <div 
                className="absolute bottom-8 left-8 right-8 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl transform transition-transform duration-300 group-hover:translate-z-12"
                style={{ transform: 'translateZ(60px)' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-cyber-blue font-mono mb-1">CURRENT STATUS</p>
                    <p className="text-white font-bold tracking-wide">AVAILABLE FOR WORK</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-cyber-green animate-ping"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;