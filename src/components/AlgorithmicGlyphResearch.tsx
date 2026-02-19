import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BrainCircuit, PenTool, Network, Binary, Code, Activity, Sparkles, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AlgorithmicGlyphResearch = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="min-h-screen bg-[#050505] text-[#FAFAFA] font-mono p-6 md:p-12 lg:p-20 relative overflow-hidden"
    >
      {/* Decorative Binary Background */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-5 flex flex-wrap gap-4 p-8">
         {Array.from({ length: 400 }).map((_, i) => (
           <span key={i} className="text-[10px]">{Math.random() > 0.5 ? '1' : '0'}</span>
         ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-orange-400 transition-colors mb-20 font-bold group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Research Module
        </button>

        <header className="mb-40">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-md mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">Algorithmic Thesis #T-2008</span>
           </div>
           <h1 className="text-5xl md:text-[120px] font-black tracking-tighter leading-none mb-12">
              Glyph <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Generation</span>.
           </h1>
           
           <div className="flex flex-col md:flex-row gap-12 font-sans border-t border-white/10 pt-12">
              <div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Lead Researcher</p>
                 <p className="text-xl font-bold">Erik van Blokland</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Project</p>
                 <p className="text-xl font-bold">RoboFab / Letterror</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Era</p>
                 <p className="text-xl font-bold">2008 - Present</p>
              </div>
           </div>
        </header>

        {/* The Generative Concept */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
           <div className="space-y-12 font-sans">
              <div className="p-10 bg-white/5 rounded-[40px] border border-white/5 backdrop-blur-3xl">
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <BrainCircuit className="text-orange-400" /> Procedural Geometry
                 </h2>
                 <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    Blokland’s research focuses on <strong>"Parametric Design Systems"</strong>—where a font is not drawn, but coded. Every glyph is a function of its parameters.
                 </p>
                 <div className="p-6 bg-black/50 rounded-2xl font-mono text-sm text-emerald-400 border border-emerald-500/10">
                    {`def create_glyph(weight, ink_bleed):\n  point = calculate_center()\n  path = draw_bezier(point, weight)\n  return apply_noise(path, ink_bleed)`}
                 </div>
              </div>

              <div className="space-y-6">
                 <h3 className="text-xl font-bold flex items-center gap-2">
                    <Sparkles size={20} className="text-rose-400" /> The "Letterror" Effect
                 </h3>
                 <p className="text-slate-500 leading-relaxed">
                    The research introduced the first font that "changes as you type." By introducing a random seed based on keystroke timing, the font can simulate the natural variations found in letterpress printing.
                 </p>
              </div>
           </div>

           <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full" />
              <div className="relative w-full h-full bg-white/5 border border-white/10 rounded-[64px] p-12 overflow-hidden group">
                 <div className="flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start font-mono text-[10px] text-slate-600">
                       <span>ALGO_GLYPH_v2.0</span>
                       <span>STATUS: COMPILING</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative">
                       <motion.div 
                         animate={{ 
                           borderRadius: ["64px", "100px", "40px", "64px"],
                           scale: [1, 1.1, 0.9, 1]
                         }}
                         transition={{ duration: 3, repeat: Infinity }}
                         className="w-40 h-40 border-2 border-orange-400/50 flex items-center justify-center"
                       >
                          <motion.span 
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-9xl font-bold text-white"
                          >
                            G
                          </motion.span>
                       </motion.div>
                       {/* Floating points */}
                       {[1,2,3,4].map(i => (
                         <motion.div 
                           key={i}
                           animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
                           transition={{ duration: 2 + i, repeat: Infinity }}
                           className="absolute w-2 h-2 bg-rose-500 rounded-full"
                           style={{ top: `${20*i}%`, left: `${20*i}%` }}
                         />
                       ))}
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">
                       "Bezier handles are recalculated at 60Hz to simulate fluid ink dynamics."
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-40 space-y-12">
           <h2 className="text-4xl font-black text-center mb-16">System Architecture</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-[32px] hover:bg-white/5 transition-colors">
                 <Binary className="text-orange-400 mb-6" size={32} />
                 <h4 className="text-lg font-bold mb-4 font-sans">UFO Specification</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-sans">The Unified Font Object format allows for XML-based glyph storage that can be manipulated by external scripts.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-[32px] hover:bg-white/5 transition-colors">
                 <Network className="text-rose-400 mb-6" size={32} />
                 <h4 className="text-lg font-bold mb-4 font-sans">Bezier Topology</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-sans">Formalizing how path points must be structured to allow for glitch-free algorithmic deformation.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-[32px] hover:bg-white/5 transition-colors">
                 <Code className="text-blue-400 mb-6" size={32} />
                 <h4 className="text-lg font-bold mb-4 font-sans">Python RoboFab</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-sans">A toolkit that exposes font data as a Python object model for high-speed procedural generation.</p>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-white/10">
           <button onClick={onBack} className="px-16 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-orange-500 hover:text-white transition-all">
              Return to Laboratory
           </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default AlgorithmicGlyphResearch;
