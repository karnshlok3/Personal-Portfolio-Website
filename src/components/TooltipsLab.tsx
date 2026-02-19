import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Code2, Layers, Cpu, Box, Search, 
  Terminal, Activity, BookOpen, ChevronRight,
  Info, MessageCircle, AlertCircle, HelpCircle,
  Shapes, Zap, Braces, Settings, CheckCircle2,
  XCircle, AlertTriangle, Eye, Palette, MousePointer2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const TooltipsLab = ({ onBack, onOpenPaper }: { onBack: () => void, onOpenPaper: (id: string) => void }) => {
  const [activeTheme, setActiveTheme] = useState('glass');
  const [radius, setRadius] = useState(12);
  const [padding, setPadding] = useState(16);
  const [showCode, setShowCode] = useState(false);

  const researchPapers = [
    {
      id: 'utility-first-architectures',
      title: "Utility-First Architectures",
      author: "Adam W.",
      year: "2019",
      summary: "A critical analysis of Tailwind-style utility classes versus monolithic CSS components for scaling design systems.",
    },
    {
      id: 'accessibility-in-popovers',
      title: "Accessibility in Popovers",
      author: "Sara S.",
      year: "2023",
      summary: "Best practices for ARIA labels and focus management in ephemeral UI elements like tooltips and dropdowns.",
    }
  ];

  const analysis = {
    merits: [
      { title: 'Semantic Clarity', desc: 'Utility classes provide immediate context on visual behavior without switching files.' },
      { title: 'Zero CSS Growth', desc: 'The stylesheet reaches a maximum size regardless of project complexity.' },
      { title: 'Deterministic Styling', desc: 'Eliminates side-effects and specificity wars common in monolithic CSS.' }
    ],
    demerits: [
      { title: 'HTML Verbosity', desc: 'Markup can become cluttered with long strings of utility classes.' },
      { title: 'Abstraction Leakage', desc: 'Difficult to enforce strict design tokens without a pre-processing layer.' },
      { title: 'Initial Learning Curve', desc: 'Requires developers to memorize a proprietary class-based DSL.' }
    ],
    limitations: [
      { title: 'Dynamic Selectors', desc: 'Utility-first struggles with complex parent-child relationship selectors.' },
      { title: 'Compute Overhead', desc: 'Runtime JIT engines can add significant JS overhead to initial page loads.' },
      { title: 'Media Query Bloat', desc: 'Generating classes for every breakpoint can lead to massive unpurged files.' }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden"
    >
      {/* Animated Background Icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
         >
            <Braces size={800} />
         </motion.div>
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"
         >
            <Code2 size={600} />
         </motion.div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur-2xl border-b border-slate-100">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-400 hover:text-emerald-600 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Exit Laboratory
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Library: Stable v1.2.0
           </div>
           <button className="px-6 py-2 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all">
              npm install tooltips.css
           </button>
        </div>
      </nav>

      <main className="pt-40 pb-60 px-6 max-w-7xl mx-auto relative z-10">
        <header className="mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                 >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-50 rounded-full border border-emerald-100 mb-10">
                       <Code2 className="text-emerald-500" size={18} />
                       <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-600">Open Source Core // Tooltips.css</span>
                    </div>
                    <h1 className="text-8xl md:text-[160px] font-serif font-black tracking-tighter leading-[0.8] mb-12 text-slate-900">
                      Utility <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 italic">Architecture.</span>
                    </h1>
                    <p className="text-3xl text-slate-500 font-light leading-relaxed max-w-3xl">
                      An open-source CSS framework dedicated to the art of the humble tooltip. Lightweight, accessible, and high-performance.
                    </p>
                 </motion.div>
              </div>
              <div className="lg:col-span-4 sticky top-40">
                 <div className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 backdrop-blur-xl">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                       <Info size={20} className="text-emerald-500" /> Framework Note
                    </h3>
                    <p className="text-slate-500 leading-relaxed italic text-lg mb-8">
                       "Tooltips are the quietest part of the design system, yet they carry the weight of user confidence."
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                       <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                          <Braces size={20} />
                       </div>
                       <div>
                          <p className="text-[10px] font-mono text-slate-400 uppercase">CSS Strategy</p>
                          <p className="text-sm font-bold text-slate-800">Atomic Composition</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </header>

        {/* Interactive Workbench */}
        <section className="py-40 border-y border-slate-100 mb-60">
           <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-emerald-500 font-mono text-sm tracking-[0.4em] uppercase mb-4 block">// Interaction Workbench</span>
              <h2 className="text-6xl font-serif font-bold mb-8">Playground Studio.</h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                 Customize the component architecture in real-time. All properties map directly to CSS custom properties in the Tooltips.css core.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
              <div className="lg:col-span-8 bg-slate-50 rounded-[64px] border border-slate-200 overflow-hidden relative min-h-[600px] flex items-center justify-center group">
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                 
                 <div className="relative group/btn">
                    <button className="px-12 py-6 bg-white border border-slate-200 rounded-3xl font-black text-xl shadow-lg group-hover/btn:border-emerald-500 transition-all flex items-center gap-4">
                       <MousePointer2 className="text-emerald-500" />
                       Hover Over Me
                    </button>
                    
                    {/* Live Tooltip Rendering */}
                    <div 
                      className="absolute bottom-[calc(100%+20px)] left-1/2 -translate-x-1/2 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none"
                      style={{ 
                        padding: `${padding}px`, 
                        borderRadius: `${radius}px`,
                        backgroundColor: activeTheme === 'glass' ? 'rgba(255,255,255,0.8)' : '#0f172a',
                        color: activeTheme === 'glass' ? '#0f172a' : '#fff',
                        backdropFilter: activeTheme === 'glass' ? 'blur(12px)' : 'none',
                        border: activeTheme === 'glass' ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                        minWidth: '200px'
                      }}
                    >
                       <p className="text-sm font-bold mb-1">Architecture Active</p>
                       <p className="text-xs opacity-60">Radius: {radius}px | Padding: {padding}px</p>
                       <div 
                         className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
                         style={{ 
                           borderTopColor: activeTheme === 'glass' ? 'rgba(255,255,255,0.8)' : '#0f172a'
                         }}
                       />
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                 <div className="p-10 bg-white border border-slate-100 rounded-[48px] space-y-10 shadow-xl shadow-slate-100/50">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                       <Settings size={16} /> Tuning Parameters
                    </h4>
                    
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                             <span>Corner Radius</span>
                             <span className="text-emerald-600">{radius}px</span>
                          </div>
                          <input 
                             type="range" 
                             min="0" max="40" 
                             value={radius}
                             onChange={(e) => setRadius(parseInt(e.target.value))}
                             className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-500"
                          />
                       </div>
                       <div className="space-y-4">
                          <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                             <span>Internal Padding</span>
                             <span className="text-emerald-600">{padding}px</span>
                          </div>
                          <input 
                             type="range" 
                             min="8" max="48" 
                             value={padding}
                             onChange={(e) => setPadding(parseInt(e.target.value))}
                             className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-500"
                          />
                       </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100">
                       <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-6">Theme Engine</p>
                       <div className="grid grid-cols-2 gap-4">
                          {['glass', 'dark'].map(t => (
                             <button 
                                key={t}
                                onClick={() => setActiveTheme(t)}
                                className={`px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTheme === t ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                             >
                                {t}
                             </button>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div 
                   onClick={() => setShowCode(!showCode)}
                   className="p-10 bg-slate-900 rounded-[48px] text-white group cursor-pointer overflow-hidden relative transition-all hover:bg-black"
                 >
                    <div className="absolute -right-8 -top-8 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform">
                       <Terminal size={120} />
                    </div>
                    <h4 className="text-2xl font-black mb-4">{showCode ? 'Close Source.' : 'View Source.'}</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-80 mb-8">
                       Inspect the atomic utility classes generated for this configuration.
                    </p>
                    <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                       {showCode ? 'Hide Implementation' : 'Expand Codebase'} <ChevronRight size={18} />
                    </div>
                 </div>
              </div>
           </div>

           <AnimatePresence>
             {showCode && (
               <motion.div 
                 initial={{ height: 0, opacity: 0 }}
                 animate={{ height: 'auto', opacity: 1 }}
                 exit={{ height: 0, opacity: 0 }}
                 className="mt-12 overflow-hidden"
               >
                  <div className="p-10 bg-slate-950 rounded-[48px] border border-white/5 font-mono text-sm leading-relaxed text-emerald-400">
                    {`.tt-custom {\n  --tt-radius: ${radius}px;\n  --tt-padding: ${padding}px;\n  --tt-bg: ${activeTheme === 'glass' ? 'rgba(255,255,255,0.8)' : '#0f172a'};\n  --tt-blur: ${activeTheme === 'glass' ? '12px' : '0px'};\n}\n\n<div class="tt tt-custom tt-top"> ... </div>`}
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </section>

        {/* Efficiency Audit: Merits / Demerits / Limitations */}
        <section className="mb-60">
           <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-emerald-500 font-mono text-sm tracking-[0.4em] uppercase mb-4 block">// Framework Audit</span>
              <h2 className="text-6xl font-serif font-bold mb-8 text-slate-900">Architecture Analysis.</h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                 Utility-first CSS is a trade-off between initial development velocity and long-term codebase maintenance.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-xl shadow-slate-100/30 space-y-12 transition-all hover:scale-[1.02]">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                       <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">Merits</h3>
                 </div>
                 <div className="space-y-10">
                    {analysis.merits.map((item, i) => (
                      <div key={i} className="space-y-3">
                         <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                         <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-xl shadow-slate-100/30 space-y-12 transition-all hover:scale-[1.02]">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500">
                       <XCircle size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">Demerits</h3>
                 </div>
                 <div className="space-y-10">
                    {analysis.demerits.map((item, i) => (
                      <div key={i} className="space-y-3">
                         <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                         <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-xl shadow-slate-100/30 space-y-12 transition-all hover:scale-[1.02]">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                       <AlertTriangle size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">Limitations</h3>
                 </div>
                 <div className="space-y-10">
                    {analysis.limitations.map((item, i) => (
                      <div key={i} className="space-y-3">
                         <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                         <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Research Library */}
        <section className="mb-40">
           <div className="flex items-center gap-4 mb-16">
              <BookOpen className="text-emerald-500" size={32} />
              <h2 className="text-4xl font-serif font-bold">Research Library</h2>
              <div className="flex-1 h-[1px] bg-slate-100 ml-4" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchPapers.map((paper, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  onClick={() => onOpenPaper(paper.id)}
                  className="p-16 rounded-[64px] border border-slate-100 bg-white shadow-lg hover:shadow-2xl hover:border-emerald-500/30 transition-all cursor-pointer group flex flex-col justify-between min-h-[500px]"
                >
                   <div>
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                            <Layers size={40} />
                         </div>
                         <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Library ID: {paper.id.toUpperCase()}</span>
                      </div>
                      <h3 className="text-5xl font-serif font-bold mb-8 group-hover:text-emerald-600 transition-colors leading-tight">{paper.title}</h3>
                      <p className="text-xl text-slate-500 leading-relaxed">"{paper.summary}"</p>
                   </div>
                   
                   <div className="pt-12 border-t border-slate-100 flex items-center justify-between font-bold text-xs tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors uppercase">
                      <span>OPEN FULL MANUSCRIPT</span>
                      <ChevronRight size={20} />
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        <footer className="py-40 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full -z-10" />
           <h3 className="text-4xl font-serif font-bold mb-12 text-slate-900">Back to Creative Labs?</h3>
           <button onClick={onBack} className="px-16 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-emerald-500/10">
              Return to Laboratory
           </button>
        </footer>
      </main>
    </motion.div>
  );
};

export default TooltipsLab;
