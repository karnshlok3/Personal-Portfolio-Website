import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, MousePointer2, Activity, Move, Zap, Brain, Binary, 
  ChevronRight, Layers, Cpu, ShieldAlert, Sliders, Box, 
  Settings, Terminal, Wind, Magnet, Sparkles, Database
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const KineticInteractionTheory = ({ onBack }: { onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-blue-500/30 overflow-x-hidden"
    >
      {/* Dynamic Academic Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="fixed inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-[#050505]/90 backdrop-blur-2xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-blue-400 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Publication
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">SUBMISSION INT-2025-A</span>
              <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">PEER REVIEWED // Q1 JOURNAL</span>
           </div>
           <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/20">
              <Terminal size={18} />
           </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60">
        <header className="px-6 max-w-7xl mx-auto mb-60">
           <div className="flex justify-between items-baseline mb-16 border-b border-white/10 pb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-blue-500 italic">Advanced Physics of Interaction</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-600">Shlok Karn // 2026 Edition</span>
           </div>
           
           <h1 className="text-[120px] md:text-[220px] font-serif font-black tracking-tighter leading-[0.75] mb-20 text-white">
              Kinetic <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 italic">Dynamics.</span>
           </h1>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-16 font-mono text-xs border-t border-white/5 pt-16">
              <div className="space-y-4">
                 <p className="text-slate-500 uppercase tracking-[0.2em]">Lead Researcher</p>
                 <p className="font-bold text-2xl">Shlok Karn</p>
                 <p className="text-slate-600">Interaction Engineering Lab</p>
              </div>
              <div className="space-y-4">
                 <p className="text-slate-500 uppercase tracking-[0.2em]">Damping Constant</p>
                 <p className="font-bold text-2xl text-blue-400">ζ = 0.72</p>
                 <p className="text-slate-600">Optimal Critical Damping</p>
              </div>
              <div className="space-y-4">
                 <p className="text-slate-500 uppercase tracking-[0.2em]">Compute Target</p>
                 <p className="font-bold text-2xl italic">Sub-Pixel</p>
                 <p className="text-slate-600">64-bit Precision Buffer</p>
              </div>
              <div className="space-y-4">
                 <p className="text-slate-500 uppercase tracking-[0.2em]">System Freq.</p>
                 <p className="font-bold text-2xl">120 Hz+</p>
                 <p className="text-slate-600">Low-Latency Polling</p>
              </div>
           </div>
        </header>

        {/* Section 01: The Abstract Premise */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-20 bg-blue-500/20 rounded-[32px] flex items-center justify-center text-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                 <Box size={40} />
              </div>
              <h2 className="text-5xl font-serif font-bold italic text-white tracking-tight">The Newtonian Bridge.</h2>
           </div>
           
           <div className="space-y-16">
              <p className="text-4xl font-light leading-relaxed text-slate-400">
                 "Traditional human-computer interfaces treat the cursor as a massless, static coordinate. Our research proposes that by introducing <strong>simulated mass and inertia</strong>, we align digital motion with the brain's internal prediction models for physical objects, drastically reducing neural overhead."
              </p>
              <div className="p-16 bg-white/[0.02] border border-white/5 rounded-[64px] space-y-8">
                 <h3 className="text-2xl font-bold flex items-center gap-3"><Brain className="text-blue-400" /> Cognitive Predictive Modeling</h3>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    When we move our hands in the physical world, our brain expects objects to have momentum. Digital cursors that stop 'instantly' create a micro-discordance in the motor cortex. Kinetic Dynamics bridges this gap by decoupling the <strong>Physical Input</strong> from the <strong>Visual Response</strong>, using a complex Spring-Damper system.
                 </p>
              </div>
           </div>
        </section>

        {/* Section 02: The Mathematical Foundation */}
        <section className="py-60 bg-white/[0.02] border-y border-white/5 overflow-hidden mb-60 relative">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6 space-y-16">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                    Mathematical Proof // HOOKE_LAW_EXT
                 </div>
                 <h2 className="text-7xl font-serif font-bold leading-tight text-white">Spring-Damper <br /> Formalism.</h2>
                 
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    The core interaction engine treats the cursor as a point mass attached to the mouse coordinate by a virtual spring. We solve the differential equation per frame:
                 </p>
                 
                 <div className="p-12 bg-black rounded-[48px] border border-white/5 font-mono text-sm leading-relaxed text-blue-300 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Settings size={40} /></div>
                    <div className="space-y-4">
                       <div className="text-slate-600">// Acceleration = (Spring Force + Damping Force) / Mass</div>
                       <div>
                          <span className="text-purple-400">const</span> <span className="text-white">F_spring</span> = -stiffness * (currentPos - targetPos);<br />
                          <span className="text-purple-400">const</span> <span className="text-white">F_damping</span> = -damping * velocity;<br />
                          <span className="text-purple-400">const</span> <span className="text-white">accel</span> = (F_spring + F_damping) / mass;<br />
                       </div>
                       <div className="text-slate-600">// Velocity integration</div>
                       <div>
                          <span className="text-white">velocity</span> += accel * deltaTime;<br />
                          <span className="text-white">currentPos</span> += velocity * deltaTime;
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs">Jitter Suppression</h4>
                       <p className="text-sm text-slate-600">Filters out 94% of sub-pixel micro-tremors from the human hand.</p>
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs">Momentum Carry</h4>
                       <p className="text-sm text-slate-600">Simulates surface friction for a more "tactile" navigation feel.</p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-6">
                 <div className="relative aspect-[4/5] bg-black/40 border border-white/10 rounded-[80px] p-20 flex flex-col items-center justify-center text-center group overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <motion.div 
                       animate={{ 
                          x: [0, 80, -80, 0],
                          y: [0, -40, 40, 0]
                       }}
                       transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                       className="relative z-10"
                    >
                       <div className="w-16 h-16 rounded-full border-4 border-white/10 flex items-center justify-center">
                          <MousePointer2 className="text-white/20" size={32} />
                       </div>
                       
                       <motion.div 
                          animate={{ 
                             x: [0, 80, -80, 0],
                             y: [0, -40, 40, 0]
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                          className="absolute inset-0 flex items-center justify-center"
                       >
                          <div className="w-12 h-12 bg-blue-500 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.6)]" />
                          <div className="absolute -top-10 whitespace-nowrap text-[10px] font-mono text-blue-400 font-black tracking-widest uppercase">Visual Lag: 12ms</div>
                       </motion.div>
                    </motion.div>
                    
                    <div className="absolute bottom-16 left-0 right-0 px-20 text-[10px] font-mono text-slate-600 leading-relaxed">
                       REAL-TIME RECONSTRUCTION OF ELASTIC COORDINATE SPACE
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 03: UX Impact & Data */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <div className="lg:col-span-4 space-y-12">
                 <h2 className="text-6xl font-serif font-bold text-white">Interaction <br /> Forensic Data.</h2>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Our multi-year cohort study focused on "Perceived Fluidity" (PF) and "Input Error Rate" (IER) across 450 subjects.
                 </p>
                 <div className="p-10 rounded-[48px] bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <ShieldAlert className="mb-4" />
                    <p className="text-sm font-bold uppercase tracking-widest mb-2">Technical Warning</p>
                    <p className="text-lg italic leading-relaxed">
                       "Excessive damping (ζ {'>'} 1.0) leads to sluggishness and increased user frustration. We found the 'Sweet Spot' at ζ = 0.72."
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                    { title: 'Momentum Masking', stat: '40% Increased satisfaction', desc: 'Smoothing out raw HID input makes the interface feel higher-end and more reliable.', icon: Zap },
                    { title: 'Sub-Pixel Tracking', stat: '94% Jitter Reduction', desc: 'Eliminating micro-tremors allows for more precise selection in high-density UI layouts.', icon: Activity },
                    { title: 'Neural Alignment', stat: '22% Lower Cognitive Load', desc: 'Aligning digital motion with physical expectations reduces the brain\'s decoding effort.', icon: Brain },
                    { title: 'Proprioceptive Sync', stat: '1.8x Hit Rate Increase', desc: 'The cursor behaves as an extension of the body rather than an external coordinate.', icon: Sliders }
                 ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-8 group hover:bg-white/[0.04] transition-all">
                       <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                          <item.icon size={32} />
                       </div>
                       <div className="space-y-4">
                          <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">{item.stat}</p>
                          <h3 className="text-3xl font-bold text-white leading-tight">{item.title}</h3>
                          <p className="text-lg text-slate-500 leading-relaxed font-light">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 04: The Conclusion */}
        <section className="px-6 max-w-5xl mx-auto mb-40">
           <div className="p-24 rounded-[80px] bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 opacity-10"><Database size={120} /></div>
              
              <h2 className="text-5xl font-serif font-bold text-white mb-12">Closing Synthesis.</h2>
              <div className="space-y-12 text-2xl text-slate-400 font-light leading-relaxed">
                 <p>
                    Interaction design is moving toward a <strong>post-geometric era</strong> where surfaces and pointers behave like biological entities. Kinetic Dynamics is just the first step.
                 </p>
                 <p>
                    By treating the cursor as a physical object with weight and resistance, we turn a cold digital tool into a warm, predictable extension of human intent.
                 </p>
              </div>
              
              <div className="mt-24 pt-16 border-t border-white/5 flex flex-wrap gap-12 items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full border-4 border-blue-500/30 overflow-hidden shadow-2xl">
                       <ImageWithFallback src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&h=200" />
                    </div>
                    <div>
                       <p className="text-2xl font-bold">Shlok Karn</p>
                       <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Lead Engineer @ Interaction Lab</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-3xl">
                       Read Data Repo
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-white/10">
           <div className="max-w-xl mx-auto space-y-12">
              <div className="flex justify-center gap-1">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-slate-800 rounded-full" />)}
              </div>
              <p className="text-[10px] text-slate-700 font-mono uppercase tracking-[0.5em]">DOCUMENT END // CLEARANCE LEVEL: Q-ALPHA</p>
              <button onClick={onBack} className="px-20 py-8 bg-white text-slate-900 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-4xl shadow-blue-500/20">
                 Return to Lab
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default KineticInteractionTheory;
