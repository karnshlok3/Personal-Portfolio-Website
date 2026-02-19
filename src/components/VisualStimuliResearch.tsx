import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, Eye, Brain, Zap, Sparkles, Activity, 
  MessageSquare, ShieldCheck, HeartPulse, Search,
  Target, Info, ChevronRight, FileText, Settings,
  FlaskConical, CheckCircle2, AlertCircle, BarChart3,
  Cpu, MousePointer2, Layers, Database
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const VisualStimuliResearch = ({ onBack }: { onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC] font-sans selection:bg-rose-500/30 overflow-x-hidden"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ width: progressWidth }} 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 z-[120] shadow-[0_0_20px_rgba(244,63,94,0.8)]" 
      />

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-[#0A0A0F]/90 backdrop-blur-3xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-rose-400 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Research
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Publication: VSS-2025-Q1</span>
              <span className="text-[10px] font-mono text-rose-500 font-bold uppercase tracking-widest">Subject: Visual Psychology // Shaders</span>
           </div>
           <div className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-lg text-[10px] font-bold text-rose-400 uppercase tracking-widest">
              Level 4 Submission
           </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60">
        {/* Advanced Hero Header */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <motion.div style={{ opacity }}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-rose-400 mb-12 animate-pulse">
                 <Eye size={18} />
                 The Psychology of Perception Series
              </div>
              <h1 className="text-9xl md:text-[200px] font-serif font-black tracking-tighter leading-[0.8] mb-16 text-white">
                 Visual <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-500 to-amber-500 italic">Stimuli.</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs border-y border-white/5 py-16">
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Principal Investigator</p>
                    <p className="font-bold text-2xl">Sarah Drasner</p>
                    <p className="text-rose-500/60 mt-1 uppercase tracking-tighter tracking-widest">UX Engineering Lead</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Cognitive Load</p>
                    <p className="font-bold text-2xl text-rose-400">-22.4% Δ</p>
                    <p className="text-slate-600 mt-1 uppercase tracking-tighter tracking-widest">Perceived Performance</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Retention Factor</p>
                    <p className="font-bold text-2xl">1.84x</p>
                    <p className="text-slate-600 mt-1 uppercase tracking-tighter tracking-widest">Brand Trust Index</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Subject Count</p>
                    <p className="font-bold text-2xl text-amber-400">2,400+</p>
                    <p className="text-slate-600 mt-1 uppercase tracking-tighter tracking-widest">Cross-Demographic</p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Section 01: The Perceptual Premise */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-20 bg-rose-500/20 rounded-[32px] flex items-center justify-center text-rose-400 shadow-[0_0_50px_rgba(244,63,94,0.3)]">
                 <Brain size={40} />
              </div>
              <h2 className="text-5xl font-serif font-bold italic text-white tracking-tight">The Aesthetic Engine.</h2>
           </div>
           
           <div className="space-y-12">
              <p className="text-4xl font-light leading-relaxed text-slate-400">
                 "Shaders are not merely decorative; they are <strong>perceptual catalysts</strong>. Visual Stimuli in Shaders investigates how procedural color transitions and movement speed affect user perceived performance, cognitive load, and brand trust by exploiting the human brain's evolutionary bias toward organic motion."
              </p>
              <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[64px] space-y-8">
                 <h3 className="text-2xl font-bold flex items-center gap-3 font-serif"><HeartPulse className="text-rose-500" /> Physiological Resonance</h3>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Our data shows that "Hard Transitions" (sudden CSS color changes) trigger a micro-startle response in the amygdala, whereas shader-based "Fluid Transitions" maintain a state of sustained Parasympathetic activation. By utilizing the GPU to interpolate millions of sub-colors per second, we can simulate the <strong>Biological Gradient</strong>, which users instinctively perceive as 'Premium' and 'Trustworthy'.
                 </p>
              </div>
           </div>
        </section>

        {/* Technical Deep Dive: The Fluid Motion Standard */}
        <section className="py-60 bg-white/[0.02] border-y border-white/5 overflow-hidden mb-60 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-5">
              <div className="grid grid-cols-20 h-full">
                 {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="border-r border-white/5" />
                 ))}
              </div>
           </div>

           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6 space-y-16">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg text-[10px] font-bold text-rose-400 uppercase tracking-widest">
                    Mechanism // PERCEPT_SYNC_V1
                 </div>
                 <h2 className="text-7xl font-serif font-bold leading-tight text-white">The Fluid Motion <br /> Standard.</h2>
                 
                 <div className="space-y-10">
                    <p className="text-xl text-slate-500 leading-relaxed">
                       Traditional animation is limited by keyframe resolution. Shader-based motion uses <strong>Temporal Math</strong> to define velocity as a continuous function, eliminating "stutter" at a neurobiological level.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-10 rounded-[40px] bg-white/[0.03] border border-white/5 space-y-6">
                          <Activity className="text-rose-400" size={32} />
                          <h4 className="text-2xl font-bold text-white">Temporal Anti-Aliasing</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">By averaging pixel data over time, we eliminate the 'sharp' edges that cause ocular fatigue during long sessions.</p>
                       </div>
                       <div className="p-10 rounded-[40px] bg-white/[0.03] border border-white/5 space-y-6">
                          <Target className="text-rose-400" size={32} />
                          <h4 className="text-2xl font-bold text-white">Focus Anchoring</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">Gradients that flow toward active interactive zones subconsciously guide user attention without requiring explicit UI cues.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-6">
                 <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-rose-500/5 blur-[120px] rounded-full animate-pulse" />
                    <div className="relative w-full h-full border border-white/10 rounded-[80px] bg-black/40 backdrop-blur-3xl p-16 flex flex-col items-center justify-center text-center overflow-hidden">
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                       
                       <motion.div 
                          animate={{ 
                             scale: [1, 1.15, 1],
                             boxShadow: ["0 0 40px rgba(244,63,94,0.1)", "0 0 80px rgba(244,63,94,0.4)", "0 0 40px rgba(244,63,94,0.1)"]
                          }}
                          transition={{ duration: 5, repeat: Infinity }}
                          className="w-48 h-48 rounded-full border-4 border-rose-500/50 flex items-center justify-center mb-12 relative overflow-hidden"
                       >
                          <motion.div 
                            animate={{ 
                              x: [-100, 100],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/20 to-transparent skew-x-12"
                          />
                          <Sparkles className="text-rose-400" size={64} />
                       </motion.div>

                       <div className="space-y-4">
                          <div className="flex gap-2 justify-center">
                             {[1,2,3,4,5].map(i => (
                                <motion.div 
                                   key={i}
                                   animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                   className="w-2 h-2 bg-rose-500/40 rounded-full"
                                />
                             ))}
                          </div>
                          <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.4em]">Neural Resonance Buffer</p>
                          <p className="text-[10px] font-mono text-rose-700 italic">SYNC_ESTABLISHED_STIM_7X</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 03: Data Visualization & Impact */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-4 space-y-12 sticky top-40">
                 <h2 className="text-6xl font-serif font-bold text-white">The Psychology <br /> of Flow.</h2>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Our research identified three primary 'Visual Anchors' that directly impact user behavior during high-complexity tasks.
                 </p>
                 <div className="space-y-6">
                    <div className="p-10 rounded-[48px] bg-rose-500/5 border border-rose-500/10 transition-all hover:bg-rose-500/10">
                       <BarChart3 className="text-rose-400 mb-6" size={32} />
                       <p className="text-5xl font-black text-white">-120ms <span className="text-xs font-mono text-rose-400 uppercase font-bold tracking-widest">Perceived Latency</span></p>
                    </div>
                    <div className="p-10 rounded-[48px] bg-rose-500/5 border border-rose-500/10 transition-all hover:bg-rose-500/10">
                       <Database className="text-rose-400 mb-6" size={32} />
                       <p className="text-5xl font-black text-white">92% <span className="text-xs font-mono text-rose-400 uppercase font-bold tracking-widest">Brand Confidence</span></p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                    {
                       title: "Organic Movement Heuristic",
                       desc: "Humans are evolved to track biological motion. By mimicking the 'breathing' rhythm (12-20 bpm) in shader pulses, we create a sense of safety and predictability in the interface.",
                       icon: HeartPulse,
                       stat: "Anxiety Score: -31%"
                    },
                    {
                       title: "Cognitive Offloading",
                       desc: "Moving status indication from text to 'Ambient Light' (shaders) reduces the demand on the Prefrontal Cortex. Users 'feel' the system status rather than having to 'read' it.",
                       icon: Cpu,
                       stat: "Task Speed: +14%"
                    },
                    {
                       title: "The Halo Effect",
                       desc: "High-fidelity shader interactions act as a 'Visual Proxy' for system engineering quality. If the interface is beautiful and fluid, users assume the underlying backend is equally robust.",
                       icon: ShieldCheck,
                       stat: "Perceived Reliability: +44%"
                    },
                    {
                       title: "Atmospheric Anchoring",
                       desc: "Ambient background shaders establish the 'Digital Vibe'—calibrating user expectations for either high-energy productivity or low-energy consumption.",
                       icon: Layers,
                       stat: "Retention: 1.8x"
                    }
                 ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-8 hover:bg-white/[0.04] transition-all">
                       <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-400">
                          <item.icon size={32} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                       </div>
                       <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500">{item.stat}</span>
                          <CheckCircle2 className="text-rose-500/40" size={16} />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 04: Advanced Spec - Neural Priming */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="p-24 rounded-[80px] bg-gradient-to-br from-rose-500/10 to-amber-500/5 border border-white/10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full" />
              
              <h2 className="text-6xl font-serif font-bold text-white mb-12">Conclusion: <br /> <span className="italic">The Neural Priming Era.</span></h2>
              
              <div className="space-y-12 text-2xl text-slate-400 font-light leading-relaxed">
                 <p>
                    Visual stimuli in shaders are not just about "beauty." They are about <strong>Neural Priming</strong>—the preparation of the user's brain for a specific type of interaction.
                 </p>
                 <p>
                    As we move toward high-refresh rate displays and increasingly complex spatial computing, the role of the Fragment Shader as a psychological mediator will become central to the success of any digital product.
                 </p>
                 <p>
                    The "Fluid Motion Standard" is only the beginning. Our next phase of research investigates <strong>Pupillary Response</strong> to procedural luminescence—effectively closing the loop between the GPU and the Human Nervous System.
                 </p>
              </div>

              <div className="mt-24 flex flex-wrap gap-12 items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-rose-500 shadow-2xl">
                       <ImageWithFallback src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200" />
                    </div>
                    <div>
                       <p className="text-2xl font-bold text-white">Sarah Drasner</p>
                       <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">UX Engineering Lead // Netlify</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-rose-600 hover:text-white transition-all shadow-3xl shadow-rose-500/10">
                       Cite Publication
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-white/10">
           <div className="max-w-xl mx-auto space-y-12">
              <div className="flex justify-center gap-1">
                 {[1,2,3,4,5,6,7].map(i => <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full" />)}
              </div>
              <p className="text-xs text-slate-600 font-mono uppercase tracking-[0.5em]">DOCUMENT END // CLEARANCE LEVEL: Q-GAMMA</p>
              <button onClick={onBack} className="px-20 py-8 bg-white text-slate-900 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-4xl shadow-rose-500/20">
                 Return to Shaders Lab
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default VisualStimuliResearch;
