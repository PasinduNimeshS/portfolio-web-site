import React, { useState, useEffect, useRef } from 'react';
import { Section, VolunteeringEvent } from '../types';
import { VOLUNTEERING_EVENTS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Gallery: React.FC = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);

  const displayedEvents = VOLUNTEERING_EVENTS.slice(0, visibleEvents);

  const loadMore = () => {
    setVisibleEvents(prev => prev + 2);
  };

  return (
    <section id={Section.GALLERY} className="bg-cyber-dark py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              IMPACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">& COMMUNITY</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A timeline of leadership, competition, and volunteering.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {displayedEvents.map((event, index) => (
             <StickyEvent key={event.id} event={event} index={index} />
          ))}
        </div>

        {visibleEvents < VOLUNTEERING_EVENTS.length && (
          <ScrollReveal>
            <div className="mt-20 text-center">
              <button 
                onClick={loadMore}
                className="group relative px-8 py-3 bg-transparent border border-white/20 text-white font-mono uppercase tracking-widest hover:border-cyber-purple hover:text-cyber-purple transition-all duration-300"
              >
                <span className="relative z-10">Load_More_Impact</span>
                <div className="absolute inset-0 bg-cyber-purple/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

const StickyEvent: React.FC<{ event: VolunteeringEvent; index: number }> = ({ event }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const INITIAL_IMAGE_LIMIT = 4;
  
  const displayedImages = showAllImages ? event.images : event.images.slice(0, INITIAL_IMAGE_LIMIT);
  const remainingCount = event.images.length - INITIAL_IMAGE_LIMIT;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-l border-white/5 pl-6 lg:pl-0 lg:border-l-0">
      
      {/* Content - Left Side (or Top on mobile) */}
      <div className="lg:w-1/3 lg:text-right">
         <ScrollReveal className="flex flex-col lg:items-end gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono rounded w-fit">
              {event.period}
            </span>
         </ScrollReveal>
         
         <ScrollReveal delay={100}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{event.role}</h3>
            <h4 className="text-lg text-cyber-green mb-4 font-display">{event.organization}</h4>
         </ScrollReveal>
         
         {event.description && (
           <ScrollReveal delay={200}>
             <p className="text-gray-400 leading-relaxed text-sm md:text-base">
               {event.description}
             </p>
           </ScrollReveal>
         )}
      </div>

      {/* Decorative Line for Desktop */}
      <div className="hidden lg:flex flex-col items-center relative">
        <div className="w-3 h-3 bg-cyber-purple rounded-full z-10"></div>
        <div className="flex-1 w-px bg-white/10 -mt-1"></div>
      </div>

      {/* Gallery - Right Side */}
      <div className="lg:w-2/3">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedImages.map((img, i) => (
              <ScrollRevealImage key={i} src={img} alt={`${event.role} ${i+1}`} index={i} />
            ))}
         </div>

         {/* See More Button */}
         {event.images.length > INITIAL_IMAGE_LIMIT && (
            <div className="mt-6 flex justify-center md:justify-start">
               <button 
                 onClick={() => setShowAllImages(!showAllImages)}
                 className="group flex items-center gap-2 text-sm font-mono text-cyber-purple hover:text-white transition-colors"
               >
                 <span className="relative">
                    {showAllImages ? '[-] COLLAPSE_ARCHIVE' : `[+] REVEAL_${remainingCount}_MORE_FILES`}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-cyber-purple transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                 </span>
               </button>
            </div>
         )}
      </div>
    </div>
  );
};

const ScrollRevealImage: React.FC<{ src: string; alt: string; index: number }> = ({ src, alt, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection state (bidirectional)
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef}
      className={`group relative rounded-xl overflow-hidden border border-white/5 bg-cyber-black aspect-video transition-all duration-1000 transform ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-none' 
          : 'opacity-0 translate-y-12 scale-95 blur-sm'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
       <div className="absolute inset-0 bg-cyber-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
       <img 
         src={src} 
         alt={alt}
         className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
       />
       
       {/* Decorative Corner */}
       <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
       </div>
    </div>
  );
};

export default Gallery;