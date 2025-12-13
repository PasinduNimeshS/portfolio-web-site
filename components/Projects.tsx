import React, { useState } from 'react';
import { Section, Project } from '../types';
import { INITIAL_PROJECTS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'design'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeTab === 'all' 
    ? INITIAL_PROJECTS 
    : INITIAL_PROJECTS.filter(p => p.category === activeTab);

  // Show first 6 projects, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'software', label: 'Engineering' },
    { id: 'design', label: 'UI/UX Design' }
  ] as const;

  return (
    <section id={Section.PROJECTS} className="py-24 bg-[#050510] relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
               FEATURED <span className="text-cyber-blue">WORKS</span>
             </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto rounded-full"></div>
             <p className="text-gray-400 font-mono text-sm mt-4 tracking-widest">/// PROJECT_DATABASE_ACCESS</p>
          </div>
        </ScrollReveal>
          
        {/* Navigation Tabs - Centered */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setShowAll(false); }}
                  className={`group relative px-6 py-2 text-sm font-display tracking-widest uppercase transition-all duration-300 outline-none ${
                    activeTab === tab.id 
                      ? 'text-cyber-green' 
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {/* Cyber Brackets on Hover/Active */}
                  <span className={`absolute left-0 top-0 h-full w-[2px] bg-cyber-green transition-all duration-300 ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></span>
                  <span className={`absolute right-0 top-0 h-full w-[2px] bg-cyber-green transition-all duration-300 ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></span>
                  
                  {/* Text Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    {activeTab === tab.id && <span className="w-1.5 h-1.5 bg-cyber-green rounded-full shadow-[0_0_10px_#00ff9f]"></span>}
                    {tab.label}
                  </span>

                  {/* Bottom Glow Line */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent shadow-[0_0_15px_#00ff9f]"></div>
                  )}
                </button>
              ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100} className="h-full">
               <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <ScrollReveal delay={200}>
            <div className="mt-16 text-center">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="group relative px-8 py-3 bg-transparent border border-white/20 text-white font-mono uppercase tracking-widest hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300"
              >
                <span className="relative z-10">
                  {showAll ? 'Collapse_Database' : 'Load_More_Projects'}
                </span>
                <div className="absolute inset-0 bg-cyber-blue/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group rounded-2xl bg-slate-900 overflow-hidden border border-white/5 hover:border-cyber-blue/30 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] flex flex-col h-full relative">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
           <span className={`px-3 py-1 rounded border backdrop-blur-md text-xs font-mono font-bold uppercase tracking-wider ${
             project.category === 'software' 
               ? 'bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue' 
               : 'bg-cyber-green/10 border-cyber-green/20 text-cyber-green'
           }`}>
             {project.category === 'software' ? 'Engineering' : 'UI/UX'}
           </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 bg-[#0a0a0f]">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors font-display">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-md border border-white/5 font-mono">
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-cyber-blue/10 hover:border-cyber-blue/30 hover:text-cyber-blue transition-all group/btn"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;