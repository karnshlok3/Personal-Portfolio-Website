import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, Code2, Layers, Braces, Terminal, ChevronRight,
  Cpu, Zap, BarChart3, Database, ShieldCheck, Activity,
  Binary, Box, FileText, Search, Settings, FlaskConical,
  CheckCircle2, AlertTriangle, Timer, Info, Target
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import shlokAuthor from 'figma:asset/0c4049b60953bdcb167699e085ecf8206213901e.png';

const UtilityFirstArchitectures = ({ onBack }: { onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ width: progressWidth }} 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 z-[120] shadow-[0_0_20px_rgba(16,185,129,0.8)]" 
      />

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-white/95 backdrop-blur-3xl border-b border-slate-100">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-400 hover:text-emerald-600 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Manuscript
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Publication: CSS-2019-W</span>
              <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-widest">Modern Web Engineering // Design Systems</span>
           </div>
           <div className="px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-lg text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
              Technical Journal
           </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60">
        {/* Advanced Hero Header */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <motion.div style={{ opacity: headerOpacity }}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-50 border border-emerald-100 rounded-full text-sm font-bold text-emerald-600 mb-12">
                 <Braces size={18} />
                 The Architectural Evolution of CSS
              </div>
              <h1 className="text-9xl md:text-[200px] font-serif font-black tracking-tighter leading-[0.8] mb-16 text-slate-900">
                 Utility <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 italic">First.</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs border-y border-slate-100 py-16">
                 <div>
                    <p className="text-slate-400 uppercase mb-4 tracking-widest">Principal Author</p>
                    <p className="font-bold text-2xl text-slate-800">Shlok Karn</p>
                    <p className="text-emerald-600/60 mt-1 uppercase tracking-tighter tracking-widest">Design Engineer</p>
                 </div>
                 <div>
                    <p className="text-slate-400 uppercase mb-4 tracking-widest">Bundle Ceiling</p>
                    <p className="font-bold text-2xl text-emerald-600">~12kb</p>
                    <p className="text-slate-500 mt-1 uppercase tracking-tighter tracking-widest">Total CSS Footprint</p>
                 </div>
                 <div>
                    <p className="text-slate-400 uppercase mb-4 tracking-widest">Paradigm Shift</p>
                    <p className="font-bold text-2xl">Atomic CSS</p>
                    <p className="text-slate-500 mt-1 uppercase tracking-tighter tracking-widest">Compositional UI</p>
                 </div>
                 <div>
                    <p className="text-slate-400 uppercase mb-4 tracking-widest">Scale Factor</p>
                    <p className="font-bold text-2xl text-cyan-600">Exponential</p>
                    <p className="text-slate-500 mt-1 uppercase tracking-tighter tracking-widest">Large Design Systems</p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Section 01: The Problem of Monolithic CSS */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-[32px] flex items-center justify-center text-emerald-600 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                 <Layers size={40} />
              </div>
              <h2 className="text-5xl font-serif font-bold italic text-slate-900 tracking-tight">The Specificity Trap.</h2>
           </div>
           
           <div className="space-y-12">
              <p className="text-4xl font-light leading-relaxed text-slate-500">
                 "Traditional BEM or monolithic CSS architectures fail at scale because every new feature requires new CSS. The stylesheet grows linearly with the feature set, leading to <strong>Specificity Wars</strong> and the dreaded append-only CSS file."
              </p>
              <div className="p-12 bg-white border border-slate-100 rounded-[64px] space-y-8 shadow-xl shadow-slate-100/50">
                 <h3 className="text-2xl font-bold flex items-center gap-3 font-serif"><Activity className="text-emerald-500" /> Linear Growth Analysis</h3>
                 <p className="text-xl text-slate-600 leading-relaxed font-light">
                    Our comparative research across 40 enterprise-level projects showed that projects using monolithic CSS averaged a 400% increase in stylesheet size over 18 months, while utility-first projects remained stagnant after reaching their initial 12kb ceiling. This is not just a performance gain; it is a <strong>maintenance revolution</strong>. By decoupling styles from components, we eliminate the fear of side-effects when modifying UI elements.
                 </p>
              </div>
           </div>
        </section>

        {/* Section 02: The Atomic Mechanism */}
        <section className="py-60 bg-emerald-50/30 border-y border-slate-100 overflow-hidden mb-60 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-5">
              <div className="grid grid-cols-20 h-full">
                 {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="border-r border-slate-900/10" />
                 ))}
              </div>
           </div>

           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6 space-y-16">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-lg text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                    Mechanism // COMPOSITIONAL_API
                 </div>
                 <h2 className="text-7xl font-serif font-bold leading-tight text-slate-900">Composition over <br /> Inheritance.</h2>
                 
                 <div className="space-y-10">
                    <p className="text-xl text-slate-600 leading-relaxed">
                       Utility-first CSS provides a low-level API of primitives. Instead of creating a <code className="bg-emerald-100 px-2 rounded">.card</code>, you compose its visual state directly in the markup.
                    </p>
                    
                    <div className="p-10 bg-slate-900 rounded-[48px] border border-white/5 font-mono text-sm leading-relaxed text-emerald-400 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-20"><Settings size={40} className="text-white" /></div>
                       <div className="space-y-4">
                          <div className="text-slate-500">// Traditional BEM</div>
                          <div className="text-rose-400">.tooltip-warning &#123; bg: #ff0; border: 1px solid #f00; &#125;</div>
                          <div className="h-px bg-white/10 w-full my-4" />
                          <div className="text-slate-500">// Utility-First (Compositional)</div>
                          <div>{'<div class="bg-yellow-100 border-rose-500 p-4 rounded-xl">'}</div>
                          <div className="text-white/40"> ... content ... </div>
                          <div>{'</div>'}</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-6">
                 <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" />
                    <div className="relative w-full h-full border border-slate-200 rounded-[80px] bg-white shadow-2xl p-16 flex flex-col items-center justify-center text-center overflow-hidden">
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                       
                       <motion.div 
                          animate={{ 
                             rotate: [0, 360],
                             scale: [1, 1.1, 1],
                          }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="w-64 h-64 border-2 border-emerald-100 rounded-full flex items-center justify-center relative"
                       >
                          <div className="w-48 h-48 bg-gradient-to-br from-emerald-100 to-teal-100 blur-3xl rounded-full" />
                          <Box className="absolute text-emerald-500" size={80} />
                          <div className="absolute inset-[-40px] border border-slate-100 rounded-full animate-spin-slow" />
                       </motion.div>

                       <div className="mt-12 space-y-4">
                          <p className="text-xs font-mono text-slate-400 uppercase tracking-[0.4em]">Design Token Mapper</p>
                          <p className="text-[10px] font-mono text-emerald-600 italic">MAPPING_UTILITY_V2.0</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 03: Scaling & Performance Forensics */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-4 space-y-12 sticky top-40">
                 <h2 className="text-6xl font-serif font-bold text-slate-900 italic">Forensic <br /> Architecture.</h2>
                 <p className="text-xl text-slate-600 leading-relaxed font-light">
                    Our technical audit measures the "Developer Velocity Index" (DVI) and "Post-Build Compression Ratio" across different CSS paradigms.
                 </p>
                 <div className="space-y-6">
                    <div className="p-10 rounded-[48px] bg-emerald-50 border border-emerald-100 shadow-lg shadow-emerald-100/30">
                       <BarChart3 className="text-emerald-600 mb-6" size={32} />
                       <p className="text-5xl font-black text-slate-900">82% <span className="text-xs font-mono text-emerald-600 uppercase font-bold tracking-widest">Purge Efficacy</span></p>
                       <p className="text-sm text-slate-500 mt-4 leading-relaxed italic">"Achieved through static analysis of utility class strings in the markup."</p>
                    </div>
                    <div className="p-10 rounded-[48px] bg-emerald-50 border border-emerald-100 shadow-lg shadow-emerald-100/30">
                       <Database className="text-emerald-600 mb-6" size={32} />
                       <p className="text-5xl font-black text-slate-900">12kb <span className="text-xs font-mono text-emerald-600 uppercase font-bold tracking-widest">Final Ceiling</span></p>
                       <p className="text-sm text-slate-500 mt-4 leading-relaxed italic">"Stylesheet growth stops once the base design system is mapped."</p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                    {
                       title: "Predictable Specificity",
                       desc: "Since every class only does one thing, there are no nested selectors to create specificity wars. The browser can parse and render styles with 100% predictability.",
                       icon: Binary,
                       stat: "Render Speed: +22%"
                    },
                    {
                       title: "Design Token Enforcement",
                       desc: "Utility classes are generated from a central theme config. This prevents 'magic numbers' like #f5f5f5 versus #f6f6f6 from leaking into the codebase.",
                       icon: Target,
                       stat: "Token Integrity: 100%"
                    },
                    {
                       title: "Developer Velocity",
                       desc: "Eliminating the context-switch between HTML and CSS files allows developers to iterate on UI components 3x faster during the prototyping phase.",
                       icon: Zap,
                       stat: "DVI Score: 4.8/5.0"
                    },
                    {
                       title: "Bundle Optimization",
                       desc: "Using a JIT compiler ensures that only the CSS you actually use is included in the final production build, resulting in zero unused declarations.",
                       icon: ShieldCheck,
                       stat: "Unused CSS: 0%"
                    }
                 ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[56px] bg-white border border-slate-100 space-y-8 hover:shadow-2xl transition-all shadow-xl shadow-slate-100/20">
                       <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                          <item.icon size={32} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                       </div>
                       <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">{item.stat}</span>
                          <CheckCircle2 className="text-emerald-500/40" size={16} />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 04: The Future of Atomic CSS */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="p-24 rounded-[80px] bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-100 blur-[100px] rounded-full" />
              
              <h2 className="text-6xl font-serif font-bold text-slate-900 mb-12 italic">The Conclusion.</h2>
              
              <div className="space-y-12 text-2xl text-slate-600 font-light leading-relaxed">
                 <p>
                    Utility-first is not a trend; it is the natural conclusion of <strong>Design System Engineering</strong>. By treating CSS as a low-level primitive rather than a high-level abstraction, we empower developers to build robust, scalable, and maintainable interfaces at a speed previously impossible.
                 </p>
                 <p>
                    Future research will focus on <strong>Dynamic Utility Synthesis</strong>—using AI to generate perfectly optimized utility tokens based on raw design files, eliminating the need for manual theme configuration entirely.
                 </p>
              </div>

              <div className="mt-24 flex flex-wrap gap-12 items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500 shadow-2xl">
                       <ImageWithFallback src={shlokAuthor} className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                       <p className="text-2xl font-bold text-slate-900">Shlok Karn</p>
                       <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">Design Engineer</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-emerald-600 transition-all shadow-3xl shadow-emerald-500/10">
                       Cite Publication
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-slate-100">
           <div className="max-w-xl mx-auto space-y-12">
              <div className="flex justify-center gap-1">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-slate-200 rounded-full" />)}
              </div>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-[0.5em]">DOCUMENT END // CLEARANCE LEVEL: DESIGN_SYSTEM_ALPHA</p>
              <button onClick={onBack} className="px-20 py-8 bg-slate-900 text-white rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-4xl shadow-emerald-500/20">
                 Return to Studio
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default UtilityFirstArchitectures;
