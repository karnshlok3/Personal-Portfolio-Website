import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, Mail, Github, Linkedin, MapPin, ExternalLink, FileText } from 'lucide-react';

export default function ResumePage({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="fixed inset-0 z-[200] bg-[#f8f7f4] overflow-y-auto selection:bg-orange-100"
    >
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-[#f8f7f4]/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-mono uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-slate-900/10"
          >
            <Download size={14} />
            Download PDF
          </button>
        </div>
      </nav>

      {/* Main Resume Content - "The Paper" */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 rounded-[2px] p-8 md:p-16 min-h-[1100px] relative overflow-hidden"
        >
          {/* Subtle paper texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

          {/* Header */}
          <header className="border-b-2 border-slate-900 pb-10 mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <h1 className="text-5xl font-serif font-black text-slate-900 tracking-tighter mb-2">Shlok Karn</h1>
                <p className="text-xl font-serif italic text-orange-600">Product Designer & Creative Technologist</p>
              </div>
              <div className="grid grid-cols-1 gap-2 text-sm font-medium text-slate-500">
                <a href="mailto:karnshlok3@gmail.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors"><Mail size={14} /> karnshlok3@gmail.com</a>
                <span className="flex items-center gap-2"><MapPin size={14} /> Seattle, WA // Remote</span>
                <div className="flex gap-4 pt-2">
                  <a href="https://github.com/24bk1a05d0-cmyk" className="hover:text-slate-900"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/in/shlok-karn-809993360" className="hover:text-slate-900"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Sidebar */}
            <div className="space-y-10">
              <section>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4 font-bold">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">University of Washington</h3>
                    <p className="text-xs text-slate-500 italic">B.S. in Human Centered Design & Engineering</p>
                    <p className="text-xs text-slate-400 mt-1 italic">Expected 2027</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4 font-bold">The Toolkit</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Design</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Product Strategy, UX Research, Motion Design, Spatial UI, Typography, Figma.</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Engineering</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">React, TypeScript, Three.js, GLSL, Framer Motion, Node.js, Python.</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Tools</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">VS Code, Git, Adobe CC, Blender, Linear, Raycast.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4 font-bold">Interests</h2>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  Street Photography, Lo-fi Hip Hop, Generative Art, Mechanical Keyboards, Urbanism.
                </p>
              </section>
            </div>

            {/* Main Column */}
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 font-bold">Experience</h2>
                <div className="space-y-10">
                  <div className="relative pl-6 border-l border-slate-100">
                    <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-orange-500" />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">Creative Engineering Intern</h3>
                      <span className="font-mono text-[10px] text-slate-400 pt-1">Spring 2026 — Present</span>
                    </div>
                    <p className="text-sm font-serif italic text-slate-500 mb-3">Stealth Startup // Remote</p>
                    <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 marker:text-orange-500">
                      <li>Building a design system focused on motion and kinetic interactions using React and Motion.</li>
                      <li>Collaborating with founders to define the core visual language for a next-gen spatial OS.</li>
                      <li>Optimizing shader performance for complex WebGL background interactions.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l border-slate-100">
                    <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-slate-200" />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">Lead Product Designer</h3>
                      <span className="font-mono text-[10px] text-slate-400 pt-1">2024 — 2025</span>
                    </div>
                    <p className="text-sm font-serif italic text-slate-500 mb-3">UW Hackers // Seattle, WA</p>
                    <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 marker:text-slate-300">
                      <li>Led a team of 4 designers to create the visual identity for the Pacific Northwest's largest student hackathon.</li>
                      <li>Increased participant engagement by 40% through a custom-built gamified registration portal.</li>
                      <li>Designed and shipped 50+ unique assets including web platforms, social media, and physical swag.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l border-slate-100">
                    <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-slate-200" />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">Freelance Designer</h3>
                      <span className="font-mono text-[10px] text-slate-400 pt-1">2023 — 2024</span>
                    </div>
                    <p className="text-sm font-serif italic text-slate-500 mb-3">Various Early Stage Startups</p>
                    <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 marker:text-slate-300">
                      <li>Executed end-to-end design for 3 MVPs in the EdTech and FinTech sectors.</li>
                      <li>Translated complex data requirements into intuitive dashboards and visual systems.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 font-bold">Recent Projects</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                      Zenith OS <ExternalLink size={14} className="text-slate-300" />
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">A spatial exploration of radial menus and physics-based window management. Built with Next.js and Matter.js.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                      Pulse Audio <ExternalLink size={14} className="text-slate-300" />
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">Real-time Web Audio visualization using Three.js and custom GLSL shaders.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer of the Paper */}
          <footer className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center text-center">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.5em]">Handcrafted with Soul • Last Updated Feb 2026</p>
          </footer>
        </motion.div>
      </main>
    </motion.div>
  );
}
