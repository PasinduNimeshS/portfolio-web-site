import React, { useState } from 'react';
import { Section } from '../types';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b5496c50-4976-4fad-99d0-ec184554d52b",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('idle');
        alert("Transmission failed. Please try again.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id={Section.CONTACT} className="py-24 bg-[#030305] relative overflow-hidden">
      {/* Matrix Rain Effect Placeholder (CSS Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050510] to-[#030305] z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
           
           {/* Left: Info Grid */}
           <div className="lg:w-1/2 space-y-8">
              <ScrollReveal>
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    INITIATE <br/><span className="text-cyber-blue">COLLABORATION</span>
                  </h2>
                  <p className="text-gray-400 font-mono text-sm mt-4">
                    /// SELECT_COMMUNICATION_CHANNEL
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                
                {/* Email Card (Full Width) */}
                <ScrollReveal delay={100} className="sm:col-span-2">
                  <div className="p-3 sm:p-5 bg-[#0a0a0f] border border-white/5 rounded-xl flex items-start gap-3 sm:gap-4 group hover:border-cyber-green/50 hover:shadow-[0_0_20px_rgba(0,255,159,0.1)] transition-all duration-300 relative overflow-hidden">
                     <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyber-green/10 flex-shrink-0 flex items-center justify-center rounded-lg text-cyber-green group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                     </div>
                     <div className="relative z-10 min-w-0 flex flex-col justify-center h-full">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase mb-0.5 sm:mb-1">Primary Frequency</p>
                        <a href="mailto:subasinghapasindunimesh@gmail.com" className="text-white text-sm sm:text-base font-medium break-all hover:text-cyber-green transition-colors">
                          subasinghapasindunimesh@gmail.com
                        </a>
                     </div>
                  </div>
                </ScrollReveal>

                {/* Phone Card */}
                <ScrollReveal delay={200} className="h-full">
                  <div className="p-3 sm:p-5 bg-[#0a0a0f] border border-white/5 rounded-xl flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4 group hover:border-cyber-blue/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300 relative overflow-hidden h-full">
                     <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyber-blue/10 flex items-center justify-center rounded-lg text-cyber-blue group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase mb-0.5 sm:mb-1">Direct Line</p>
                        <a href="https://wa.me/94702618113" className="text-white text-sm sm:text-base font-medium hover:text-cyber-blue transition-colors">
                          +94 70 26 18 113
                        </a>
                     </div>
                  </div>
                </ScrollReveal>

                {/* GitHub Card */}
                <ScrollReveal delay={300} className="h-full">
                  <a href="https://github.com/PasinduNimeshS" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-5 bg-[#0a0a0f] border border-white/5 rounded-xl flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4 group hover:border-gray-400/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 relative overflow-hidden h-full">
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 flex items-center justify-center rounded-lg text-white group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase mb-0.5 sm:mb-1">Codebase</p>
                        <span className="text-white text-sm sm:text-base font-medium group-hover:text-white transition-colors">GitHub</span>
                     </div>
                  </a>
                </ScrollReveal>

                {/* LinkedIn Card */}
                <ScrollReveal delay={400} className="h-full">
                  <a href="https://www.linkedin.com/in/pasindu-nimesh-/" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-5 bg-[#0a0a0f] border border-white/5 rounded-xl flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4 group hover:border-[#0077b5]/50 hover:shadow-[0_0_20px_rgba(0,119,181,0.1)] transition-all duration-300 relative overflow-hidden h-full">
                     <div className="absolute inset-0 bg-[#0077b5]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0077b5]/10 flex items-center justify-center rounded-lg text-[#0077b5] group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase mb-0.5 sm:mb-1">Network</p>
                        <span className="text-white text-sm sm:text-base font-medium group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
                     </div>
                  </a>
                </ScrollReveal>

                {/* Behance Card */}
                <ScrollReveal delay={500} className="h-full">
                  <a href="https://www.behance.net/pasindunimesh1" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-5 bg-[#0a0a0f] border border-white/5 rounded-xl flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4 group hover:border-[#1769ff]/50 hover:shadow-[0_0_20px_rgba(23,105,255,0.1)] transition-all duration-300 relative overflow-hidden h-full">
                     <div className="absolute inset-0 bg-[#1769ff]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1769ff]/10 flex-shrink-0 flex items-center justify-center rounded-lg text-[#1769ff] group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                           <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 1.439h-7.375c.045 2.567 1.892 3.811 4.035 3.811 1.754 0 2.779-.756 2.923-1.081h.146zM6.102 6.092v3.077h2.321c2.422 0 3.47.891 3.47 2.424 0 1.967-1.312 2.737-2.853 2.737h-2.938v-8.238h-6.102v11.908h7.174c3.163 0 6.027-1.943 6.027-5.549 0-2.844-1.928-4.306-3.834-4.757 1.487-.669 2.158-2.039 2.158-3.669 0-2.73-2.152-4.148-5.385-4.148h-6.041z"/>
                        </svg>
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase mb-0.5 sm:mb-1">Portfolio</p>
                        <span className="text-white text-sm sm:text-base font-medium group-hover:text-[#1769ff] transition-colors">Behance</span>
                     </div>
                  </a>
                </ScrollReveal>

                {/* Facebook Card */}
                <ScrollReveal delay={600} className="h-full">
                  <a href="https://www.facebook.com/pasindu.nimesh.483984" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-5 bg-[#0a0a0f] border border-white/5 rounded-xl flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4 group hover:border-[#1877f2]/50 hover:shadow-[0_0_20px_rgba(24,119,242,0.1)] transition-all duration-300 relative overflow-hidden h-full">
                     <div className="absolute inset-0 bg-[#1877f2]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1877f2]/10 flex items-center justify-center rounded-lg text-[#1877f2] group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase mb-0.5 sm:mb-1">Social</p>
                        <span className="text-white text-sm sm:text-base font-medium group-hover:text-[#1877f2] transition-colors">Facebook</span>
                     </div>
                  </a>
                </ScrollReveal>

                {/* Instagram Card */}
                <ScrollReveal delay={700} className="h-full">
                  <a href="https://www.instagram.com/_pasindu_nimesh_/" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-5 bg-[#0a0a0f] border border-white/5 rounded-xl flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4 group hover:border-[#E4405F]/50 hover:shadow-[0_0_20px_rgba(228,64,95,0.1)] transition-all duration-300 relative overflow-hidden h-full">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E4405F]/10 flex items-center justify-center rounded-lg text-[#E4405F] group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase mb-0.5 sm:mb-1">Social</p>
                        <span className="text-white text-sm sm:text-base font-medium group-hover:text-[#E4405F] transition-colors">Instagram</span>
                     </div>
                  </a>
                </ScrollReveal>

              </div>
           </div>

           {/* Right: Terminal Form */}
           <div className="lg:w-1/2">
             <ScrollReveal delay={200} className="h-full">
               <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl overflow-hidden shadow-2xl relative h-full flex flex-col">
                  {/* Terminal Header */}
                  <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                     <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                     <span className="ml-2 text-xs text-gray-500 font-mono">root@pasindu-portfolio:~/contact-form</span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-center">
                    {status === 'success' ? (
                       <div className="flex flex-col items-center justify-center py-12 text-center animate-pulse">
                          <div className="text-cyber-green font-mono text-xl mb-2">TRANSMISSION SUCCESSFUL</div>
                          <p className="text-gray-400">Message received. Stand by for response.</p>
                       </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-cyber-blue font-mono text-xs uppercase block">&gt;&gt; Input Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white font-mono focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-all placeholder:text-gray-700"
                            placeholder="ENTER_NAME"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-cyber-blue font-mono text-xs uppercase block">&gt;&gt; Input Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white font-mono focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-all placeholder:text-gray-700"
                            placeholder="ENTER_EMAIL"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-cyber-blue font-mono text-xs uppercase block">&gt;&gt; Input Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white font-mono focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-all placeholder:text-gray-700"
                            placeholder="ENTER_SUBJECT"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-cyber-blue font-mono text-xs uppercase block">&gt;&gt; Input Message Payload</label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white font-mono focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-all placeholder:text-gray-700"
                            placeholder="ENTER_MESSAGE_DATA"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full bg-cyber-green/10 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green hover:text-black font-mono font-bold py-4 rounded transition-all uppercase tracking-wider relative overflow-hidden group"
                        >
                          <span className="relative z-10">{status === 'submitting' ? 'TRANSMITTING...' : 'EXECUTE_SEND_COMMAND'}</span>
                          <div className="absolute inset-0 bg-cyber-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </button>
                      </form>
                    )}
                  </div>
               </div>
             </ScrollReveal>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;