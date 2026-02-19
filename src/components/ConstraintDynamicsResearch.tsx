import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Activity, Link as LinkIcon, Cpu, Zap, Binary, BookOpen, ScrollText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ConstraintDynamicsResearch = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="min-h-screen bg-[#0A0B10] text-slate-100 font-sans p-6 md:p-12 lg:p-20 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors mb-20 font-bold group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Research Module
        </button>

        <header className="mb-40">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-10">
              <ScrollText className="text-blue-400" size={18} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400">Doctoral Thesis Publication</span>
           </div>
           <h1 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.85] mb-12">
              Constraint- <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">Based</span> <br /> Dynamics.
           </h1>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
              <div className="space-y-4">
                 <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Author</p>
                 <p className="text-xl font-bold">Claude Lacoursière</p>
                 <p className="text-sm text-slate-400 italic">Department of Computing Science, Umeå University</p>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Domain</p>
                 <p className="text-xl font-bold">Rigid Body Systems</p>
                 <p className="text-sm text-slate-400 italic">Computational Multibody Dynamics</p>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Release</p>
                 <p className="text-xl font-bold">Year 2007</p>
                 <p className="text-sm text-slate-400 italic">Peer Reviewed Publication</p>
              </div>
           </div>
        </header>

        {/* The SPOOK Solver Section */}
        <section className="mb-40">
           <div className="p-12 md:p-24 bg-white/[0.03] border border-white/5 rounded-[80px] backdrop-blur-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                       <Cpu size={40} className="text-white" />
                    </div>
                    <h2 className="text-5xl font-black leading-tight">The SPOOK Stepper</h2>
                    <p className="text-xl text-slate-400 leading-relaxed">
                       Lacoursière's breakthrough research introduced a new class of numerical integrators specifically designed to handle the mass-ratio problem in rigid body physics.
                    </p>
                    <div className="space-y-6">
                       <div className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                          <Activity className="text-emerald-400" size={24} />
                          <span className="text-sm font-mono text-emerald-400">Stable at High Integration Steps</span>
                       </div>
                       <div className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                          <Zap className="text-yellow-400" size={24} />
                          <span className="text-sm font-mono text-yellow-400">Implicit Energy Dissipation</span>
                       </div>
                    </div>
                 </div>
                 <div className="relative">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1727522974735-44251dfe61b3?q=80&w=1200" className="rounded-[48px] grayscale opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                       <div className="text-[120px] font-black text-white/5 select-none font-mono">LCP</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Core Mathematical Explanations */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="p-16 bg-white/[0.02] border border-white/5 rounded-[64px] space-y-8">
              <h3 className="text-3xl font-black flex items-center gap-4">
                 <LinkIcon className="text-blue-500" />
                 LCP Systems
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                 The research formalizes the <strong>Linear Complementarity Problem</strong>. Instead of treating every object separately, the LCP solver looks at the <em>entire system</em> of contacts and solves them as a single mathematical matrix.
              </p>
              <div className="p-8 bg-black/50 rounded-3xl font-mono text-blue-400 border border-blue-500/20 text-sm">
                 {`Minimize: q'z + 1/2 z'Mz\nSubject to: Mz + q >= 0, z >= 0`}
              </div>
              <p className="text-sm text-slate-500 italic">
                 "This ensures that objects do not move through each other even when crushed under massive weight."
              </p>
           </div>

           <div className="p-16 bg-white/[0.02] border border-white/5 rounded-[64px] space-y-8">
              <h3 className="text-3xl font-black flex items-center gap-4">
                 <Binary className="text-purple-500" />
                 Mass-Ratio Stability
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                 Traditional solvers fail when a heavy object rests on a light one (like a tank on a cardboard box). SPOOK's research introduces a "softening" parameter that allows the simulation to remain stable by distributing the impulse forces over several frames.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white/5 rounded-3xl text-center border border-white/5">
                    <p className="text-xs text-slate-500 mb-2">Stability Gain</p>
                    <p className="text-3xl font-black text-purple-400">+400%</p>
                 </div>
                 <div className="p-6 bg-white/5 rounded-3xl text-center border border-white/5">
                    <p className="text-xs text-slate-500 mb-2">Precision</p>
                    <p className="text-3xl font-black text-blue-400">Iterative</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Real World Implication */}
        <section className="mb-40">
           <div className="max-w-3xl space-y-8">
              <h2 className="text-5xl font-black">Legacy & Future.</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500" />
              <p className="text-2xl text-slate-400 leading-relaxed font-light">
                 Today, the principles outlined in Lacoursière's research power high-end industrial simulators, medical robotic training platforms, and the physics engines of next-generation digital twins.
              </p>
           </div>
        </section>

        <footer className="flex justify-center pt-20 border-t border-white/5">
           <button onClick={onBack} className="px-16 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl shadow-blue-500/10">
              Complete Module Review
           </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default ConstraintDynamicsResearch;
