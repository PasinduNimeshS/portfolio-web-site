import React from 'react';
import { Section } from '../types';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id={Section.ABOUT} className="py-24 bg-[#030305] relative min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Stats */}
          <div className="lg:col-span-5 space-y-8">
             <ScrollReveal>
               <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight text-center lg:text-left">
                 Crafting Digital <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">Excellence.</span>
               </h2>
             </ScrollReveal>
             
             <ScrollReveal delay={200}>
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-cyber-blue/30 transition-colors group">
                   <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors">3+</h3>
                   <p className="text-gray-400 text-sm">Years Experience</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-cyber-green/30 transition-colors group">
                   <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-cyber-green transition-colors">15+</h3>
                   <p className="text-gray-400 text-sm">Projects Completed</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-cyber-purple/30 transition-colors group">
                   <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:text-cyber-purple transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                      </svg>
                   </div>
                   <p className="text-white font-bold text-lg leading-tight">English & Sinhala</p>
                   <p className="text-gray-400 text-sm mt-1">Languages</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-cyber-blue/30 transition-colors group">
                   <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:text-cyber-blue transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                   </div>
                   <p className="text-white font-bold text-lg leading-tight">Colombo, Sri Lanka</p>
                   <p className="text-gray-400 text-sm mt-1">Location</p>
                 </div>
               </div>
             </ScrollReveal>
          </div>

          {/* Right Column: Bio Card */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={400}>
              <div className="relative group">
                 <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-700"></div>
                 <div className="relative bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="font-mono text-xs text-gray-500">user: pasindu</div>
                    </div>    
                    <div className="text-lg text-gray-300 leading-relaxed space-y-6 font-light">
                      <p>
                        I design and engineer digital experiences where strong software foundations meet thoughtful UI/UX design. Currently reading for a BSc (Hons) in Software Engineering at <span className="text-white font-medium">General Sir John Kotelawala Defence University</span>, I focus on building scalable, well-structured applications that balance technical excellence with human-centered design.
                      </p>

                      <p>
                        My work is driven by a deep interest in both how systems function and how users experience them. I enjoy shaping products from concept to interface, ensuring that underlying logic is reliable while every interaction feels clear, intuitive, and purposeful. I believe truly effective software is not only efficient and robust, but also engaging and easy to understand.
                      </p>

                      <p>
                        With a strong mindset for continuous learning and improvement, I thrive in collaborative environments that challenge me to think critically and creatively. I am passionate about crafting digital products that are refined in design, solid in engineering, and meaningful in the value they deliver to users.
                      </p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                       <span className="px-4 py-2 rounded-lg bg-cyber-blue/10 text-cyber-blue text-sm font-medium border border-cyber-blue/20">Software Engineering</span>
                       <span className="px-4 py-2 rounded-lg bg-cyber-green/10 text-cyber-green text-sm font-medium border border-cyber-green/20">UI/UX Design</span>
                       <span className="px-4 py-2 rounded-lg bg-cyber-purple/10 text-cyber-purple text-sm font-medium border border-cyber-purple/20">Full-Stack Dev</span>
                    </div>
                 </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;