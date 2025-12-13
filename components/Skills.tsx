import React, { useState } from 'react';
import { Section } from '../types';
import { SKILL_CATEGORIES } from '../constants';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id={Section.SKILLS} className="py-32 bg-[#030305] relative overflow-hidden flex flex-col justify-center min-h-[80vh]">
      {/* Background Circuitry */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff9f" strokeWidth="0.5"/>
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
               TECHNICAL <span className="text-cyber-green">SKILLS</span>
             </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto rounded-full"></div>
             <p className="text-gray-400 font-mono text-sm mt-4 tracking-widest">/// INITIALIZING_SKILL_MATRIX</p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
              {SKILL_CATEGORIES.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full text-sm font-display tracking-widest uppercase transition-all duration-300 border backdrop-blur-md relative overflow-hidden group ${
                    activeTab === index
                      ? 'bg-cyber-green/10 border-cyber-green text-cyber-green shadow-[0_0_20px_rgba(0,255,159,0.2)]'
                      : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/30 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{category.title}</span>
                  {activeTab === index && (
                    <div className="absolute inset-0 bg-cyber-green/5 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Category Content */}
          <ScrollReveal delay={200}>
            <div className="bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px] shadow-2xl">
               
               {/* Digital Decoration Lines */}
               <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-white/10 rounded-tl-3xl"></div>
               <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-white/10 rounded-br-3xl"></div>
               
               {/* Category Watermark */}
               <div className="absolute -top-6 -right-6 pointer-events-none select-none opacity-5">
                  <span className="text-9xl font-display font-bold text-white">
                    0{activeTab + 1}
                  </span>
               </div>

               {/* Skills Grid - Using key to trigger animation on tab change */}
               <div key={activeTab} className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-items-center animate-fadeIn">
                 {SKILL_CATEGORIES[activeTab].skills.map((skill, i) => (
                   <div 
                     key={i} 
                     className="group flex flex-col items-center gap-4 w-full"
                     style={{ animation: `fadeIn 0.5s ease-out forwards ${i * 0.05}s`, opacity: 0 }}
                   >
                     <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl flex items-center justify-center border border-white/5 shadow-lg group-hover:border-cyber-blue/50 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] group-hover:-translate-y-2 transition-all duration-300">
                       <img 
                         src={skill.icon} 
                         alt={skill.name} 
                         className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                         loading="lazy"
                       />
                       
                       {/* Corner Accents */}
                       <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 rounded-full group-hover:bg-cyber-blue transition-colors"></div>
                       <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/20 rounded-full group-hover:bg-cyber-green transition-colors"></div>
                     </div>
                     
                     <span className="text-xs sm:text-sm font-mono text-gray-400 group-hover:text-white transition-colors tracking-wide text-center">
                       {skill.name}
                     </span>
                   </div>
                 ))}
               </div>

               {/* Empty State / Coming Soon logic could go here if a category has no skills */}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;