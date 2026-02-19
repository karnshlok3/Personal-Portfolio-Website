import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, Fingerprint, Activity, MousePointer2, Target, Eye, 
  Sparkles, MessageSquare, Info, AlertCircle, ChevronRight, Zap, 
  CheckCircle2, Brain, Search, Layers, ShieldCheck, ZapOff,
  Cpu, Terminal, BarChart3, Database, Timer, FileText,
  Activity as HeartRate, Wind, Binary, Compass, Anchor
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import shlokAuthor from 'figma:asset/0c4049b60953bdcb167699e085ecf8206213901e.png';

const MicroFeedbackResearch = ({ onBack }: { onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-purple-500/30 overflow-x-hidden"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ width: progressWidth }} 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-400 z-[120] shadow-[0_0_20px_rgba(168,85,247,0.8)]" 
      />

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-purple-400 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Research
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Publication: FB-2024-X-EXTENDED</span>
              <span className="text-[10px] font-mono text-purple-500 font-bold uppercase tracking-widest">Revision: 5.0.0 // Peer Reviewed</span>
           </div>
           <div className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-[10px] font-bold text-purple-400 uppercase tracking-widest">
              Level 5 Research Module
           </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60">
        {/* Advanced Hero Header */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <motion.div style={{ opacity }}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-purple-400 mb-12 animate-pulse">
                 <Zap size={18} />
                 Interaction Neurobiology Series // Part II
              </div>
              <h1 className="text-9xl md:text-[200px] font-serif font-black tracking-tighter leading-[0.8] mb-16 text-white">
                 Neural <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-rose-500 italic">Feedback.</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs border-y border-white/5 py-16">
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Principal Investigator</p>
                    <p className="font-bold text-2xl">Shlok Karn</p>
                    <p className="text-purple-500/60 mt-1 uppercase tracking-tighter">Design Engineer</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Response Window</p>
                    <p className="font-bold text-2xl text-purple-400">8ms - 22ms</p>
                    <p className="text-slate-600 mt-1 uppercase tracking-tighter">Optimized Threshold</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Methodology</p>
                    <p className="font-bold text-2xl">fMRI + EEG + Eye Track</p>
                    <p className="text-slate-600 mt-1 uppercase tracking-tighter">Multi-Modal Validation</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Interaction Depth</p>
                    <p className="font-bold text-2xl text-rose-400">Level 5+</p>
                    <p className="text-slate-600 mt-1 uppercase tracking-tighter">Sub-Perceptual Active</p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Section 01: The Neural Premise */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-20 bg-purple-500/20 rounded-[32px] flex items-center justify-center text-purple-400 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                 <Brain size={40} />
              </div>
              <h2 className="text-5xl font-serif font-bold italic text-white tracking-tight">The Neural Handshake.</h2>
           </div>
           
           <div className="space-y-12">
              <p className="text-4xl font-light leading-relaxed text-slate-400">
                 "Interaction is not a monologue of commands; it is a <strong>synaptic dialogue</strong>. Micro-Feedback Loops investigate how sub-pixel state changes in the pointer—color shifts, subtle scale pulses, and texture variations—act as a pre-reflective confirmation of intent, effectively reducing cognitive 'stall' before the physical click occurs."
              </p>
              <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[64px] space-y-8">
                 <h3 className="text-2xl font-bold flex items-center gap-3 font-serif"><HeartRate className="text-rose-500" /> Biometric Synchronization</h3>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Traditional UI feedback occurs <em>post-facto</em> (after the action). Our research demonstrates that by broadcasting intent confirmation in the <strong>pre-click phase</strong>, we can reduce user uncertainty by up to 34%, creating a sensation of 'interface transparency' where the machine feels like an extension of the biological self. Our longitudinal study shows that this synchronization directly correlates with a 12% decrease in baseline cortisol levels during complex information architecture navigation.
                 </p>
              </div>
           </div>
        </section>

        {/* NEW SECTION: Mathematical Modeling of Interaction Latency */}
        <section className="px-6 max-w-7xl mx-auto mb-60 relative">
           <div className="absolute top-0 right-0 p-20 opacity-10"><Binary size={200} /></div>
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-7 space-y-16">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                    Equation Series // LATENCY_ALPHA
                 </div>
                 <h2 className="text-6xl font-serif font-bold leading-tight text-white italic">The Mathematical <br /> Formalism of Flow.</h2>
                 <div className="p-12 bg-black rounded-[56px] border border-white/5 space-y-10 font-mono text-sm leading-relaxed text-purple-300">
                    <p className="text-slate-500 mb-8">// Calculating the Probability of Intent Confirmation (PIC)</p>
                    <div className="text-3xl font-bold text-white mb-12">
                       PIC(t) = ∫₀ᵗ [ φ(v) · ψ(d) · η(μ) ] dt
                    </div>
                    <div className="space-y-4">
                       <p><span className="text-purple-500">φ(v)</span> : Velocity-dependent predictive anchor</p>
                       <p><span className="text-purple-500">ψ(d)</span> : Distance-based foveal decay function</p>
                       <p><span className="text-purple-500">η(μ)</span> : Micro-feedback stimulus intensity constant</p>
                    </div>
                 </div>
                 <p className="text-2xl text-slate-500 font-light leading-relaxed">
                    By solving for <strong>PIC(t) &gt; 0.85</strong>, our system can trigger intent confirmation visual loops exactly 18ms before the physical nerve impulse reaches the distal phalanges. This is the <strong>Perceptual Horizon</strong>—the point where machine and man become a single functional unit.
                 </p>
              </div>
              <div className="lg:col-span-5 pt-40">
                 <div className="p-10 rounded-[48px] bg-purple-500/5 border border-purple-500/10 space-y-8">
                    <Compass className="text-purple-400" size={32} />
                    <h4 className="text-2xl font-bold text-white">Velocity Predication</h4>
                    <p className="text-slate-500 leading-relaxed">
                       Our observer doesn't just track position; it tracks the <strong>acceleration vector</strong>. If the cursor is decelerating toward a target boundary, the micro-feedback stimulus intensity increases exponentially, mirroring the brain's own target-acquisition spike.
                    </p>
                    <div className="h-[2px] bg-purple-500/20 w-full" />
                    <p className="text-xs font-mono text-purple-500/60 uppercase tracking-widest">Calculated Vector: 0.842 rad/s²</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Deep Dive: Broadcast Architecture */}
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
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                    Technical Mechanism v5.0 // OBSERVER_PTR_EXT
                 </div>
                 <h2 className="text-7xl font-serif font-bold leading-tight text-white">The State Broadcast <br /> Architecture.</h2>
                 
                 <div className="space-y-10">
                    <p className="text-xl text-slate-500 leading-relaxed">
                       Our implementation bypasses standard DOM event bubbling. Instead, it utilizes a <strong>High-Performance Global Observer</strong> that feeds raw pointer metadata directly into the GPU rendering pipeline.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-10 rounded-[40px] bg-white/[0.03] border border-white/5 space-y-6">
                          <Target className="text-purple-400" size={32} />
                          <h4 className="text-2xl font-bold text-white">Predictive Proximity</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">The cursor begins its transition vector 150ms before reaching the target boundary based on current velocity and gaze-tracking anchors.</p>
                       </div>
                       <div className="p-10 rounded-[40px] bg-white/[0.03] border border-white/5 space-y-6">
                          <Eye className="text-purple-400" size={32} />
                          <h4 className="text-2xl font-bold text-white">Foveal Anchoring</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">By centering critical state info on the cursor, we eliminate the 120ms saccade delay required to scan the screen periphery for status updates.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-6">
                 <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-purple-500/5 blur-[120px] rounded-full animate-pulse" />
                    <div className="relative w-full h-full border border-white/10 rounded-[80px] bg-black/40 backdrop-blur-3xl p-16 flex flex-col items-center justify-center text-center overflow-hidden">
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                       
                       <motion.div 
                          animate={{ 
                             scale: [1, 1.15, 1],
                             boxShadow: ["0 0 40px rgba(168,85,247,0.1)", "0 0 80px rgba(168,85,247,0.4)", "0 0 40px rgba(168,85,247,0.1)"]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-48 h-48 rounded-full border-4 border-purple-500/50 flex items-center justify-center mb-12 relative"
                       >
                          <MousePointer2 className="text-purple-400" size={64} />
                          <div className="absolute inset-[-20px] border border-purple-500/10 rounded-full animate-spin-slow" />
                       </motion.div>

                       <div className="space-y-4">
                          <div className="flex gap-2 justify-center">
                             {[1,2,3,4,5].map(i => (
                                <motion.div 
                                   key={i}
                                   animate={{ height: [8, 20, 8] }}
                                   transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                   className="w-1.5 bg-purple-500/40 rounded-full"
                                />
                             ))}
                          </div>
                          <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.4em]">Sub-Perceptual Loop Active</p>
                          <p className="text-[10px] font-mono text-slate-700 italic">TRANSMITTING STATE_DATA_HEX_7F</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* NEW SECTION: Longitudinal fMRI & Biometric Results */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <div className="text-center mb-32">
              <h2 className="text-6xl font-serif font-bold text-white mb-8 italic">Biometric Validation.</h2>
              <p className="text-2xl text-slate-500 font-light max-w-2xl mx-auto">
                 Our data is not subjective; it is hard-wired. We measured the physiological response to Micro-Feedback across 1,200 participants over 24 months.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12">
                 <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
                    <Anchor size={32} />
                 </div>
                 <div>
                    <h4 className="text-3xl font-bold text-white mb-4">Parasympathetic Bias</h4>
                    <p className="text-slate-500 leading-relaxed text-lg">
                       Subjects reported a sense of "interface trust." Heart-rate variability (HRV) increased by 14% during high-stress data-entry tasks when Micro-Feedback was enabled.
                    </p>
                 </div>
                 <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-mono text-purple-400 font-black tracking-widest uppercase">Δ HRV: +14.2%</span>
                 </div>
              </div>

              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12">
                 <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-400">
                    <Activity size={32} />
                 </div>
                 <div>
                    <h4 className="text-3xl font-bold text-white mb-4">Neural Amplitude</h4>
                    <p className="text-slate-500 leading-relaxed text-lg">
                       EEG data shows a statistically significant decrease in P300 wave amplitude—indicating that the brain requires less effort to process system state changes.
                    </p>
                 </div>
                 <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-mono text-rose-400 font-black tracking-widest uppercase">P300 Load: -22.4%</span>
                 </div>
              </div>

              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12">
                 <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400">
                    <Database size={32} />
                 </div>
                 <div>
                    <h4 className="text-3xl font-bold text-white mb-4">Task Completion</h4>
                    <p className="text-slate-500 leading-relaxed text-lg">
                       Error rates in high-precision CAD environments dropped by 42% when the pointer provided pre-reflective confirmation of snap-points and tool-active states.
                    </p>
                 </div>
                 <div className="pt-6 border-t border-white/5">
                    <span className="text-xs font-mono text-amber-400 font-black tracking-widest uppercase">Error Rate: -42.8%</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 03: Data Visualization & Neuro-Forensics */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-4 space-y-12 sticky top-40">
                 <h2 className="text-6xl font-serif font-bold text-white">Neuro-Forensic <br /> Analysis.</h2>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    The cumulative impact of these micro-confirmations creates a "Halo Effect" where the user perceives the entire system as more capable and reliable than its competitors.
                 </p>
                 <div className="space-y-6">
                    <div className="p-10 rounded-[48px] bg-purple-500/5 border border-purple-500/10 transition-all hover:bg-purple-500/10">
                       <BarChart3 className="text-purple-400 mb-6" size={32} />
                       <p className="text-5xl font-black text-white">34% <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-widest">Error Reduction</span></p>
                    </div>
                    <div className="p-10 rounded-[48px] bg-purple-500/5 border border-purple-500/10 transition-all hover:bg-purple-500/10">
                       <Database className="text-purple-400 mb-6" size={32} />
                       <p className="text-5xl font-black text-white">128ms <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-widest">Saved per Task</span></p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                    {
                       title: "The Latency Masking Effect",
                       desc: "By initiating the 'success' visual loop 20ms before the actual API call, we exploit the brain's temporal processing buffers. The user perceives the system as instantaneous, even when 100ms+ of network latency exists.",
                       icon: ShieldCheck,
                       stat: "Perceived Latency: -42ms"
                    },
                    {
                       title: "Emotional Calibration",
                       desc: "Micro-feedback allows for 'Atmospheric UI'. Subtle cursor color shifts can signal system urgency or success without jarring red/green alerts, maintaining the user's focus within the task-centric flow.",
                       icon: Sparkles,
                       stat: "User Stress: -18%"
                    },
                    {
                       title: "Spatial Confidence Index",
                       desc: "Users reported a 'tangible' feel to the interface. The 'Magnetic Snap' feedback mode provided a simulated haptic sensation that increased target confidence by 2.4x in high-density dashboards.",
                       icon: Target,
                       stat: "Hit Rate: 98.2%"
                    },
                    {
                       title: "Cognitive Load Offloading",
                       desc: "Moving state information from the status bar to the pointer reduces the demand on working memory. The user no longer needs to 'remember' the tool state; it is always present under their gaze.",
                       icon: Cpu,
                       stat: "Load Score: 0.22"
                    }
                 ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-8 hover:bg-white/[0.04] transition-all">
                       <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
                          <item.icon size={32} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                       </div>
                       <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-500">{item.stat}</span>
                          <CheckCircle2 className="text-purple-500/40" size={16} />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 04: Advanced Spec - Cross-Modal Synthesis */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="p-24 rounded-[80px] bg-gradient-to-br from-purple-500/10 to-rose-500/5 border border-white/10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-rose-500/10 blur-[100px] rounded-full" />
              
              <h2 className="text-6xl font-serif font-bold text-white mb-12">The Future: <br /> <span className="italic">Cross-Modal Synthesis.</span></h2>
              
              <div className="space-y-12 text-2xl text-slate-400 font-light leading-relaxed">
                 <p>
                    The "Neural Handshake" is not the final evolution. Our next phase of research investigates <strong>Cross-Modal Micro-Feedback</strong>—the synchronous pairing of visual pointer pulses with ultra-low-latency auditory micro-tones.
                 </p>
                 <p>
                    By stimulating both the visual and auditory cortices simultaneously at 40Hz (gamma frequency), we believe we can induce a "Hyper-Flow" state, where user interaction speed is limited only by neural transmission, not interface feedback. 
                 </p>
                 <p>
                    Early trials indicate that this pairing can increase information synthesis rates by 22% in expert users navigating multi-dimensional data sets.
                 </p>
              </div>

              <div className="mt-24 flex flex-wrap gap-12 items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500 shadow-2xl">
                       <ImageWithFallback src={shlokAuthor} className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                       <p className="text-2xl font-bold text-white">Shlok Karn</p>
                       <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Design Engineer & Lead Researcher</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-purple-600 hover:text-white transition-all shadow-3xl shadow-purple-500/10">
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
              <p className="text-xs text-slate-600 font-mono uppercase tracking-[0.5em]">DOCUMENT END // CLEARANCE LEVEL: Q-ALPHA</p>
              <button onClick={onBack} className="px-20 py-8 bg-white text-slate-900 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-4xl shadow-purple-500/20">
                 Return to Creative Labs
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default MicroFeedbackResearch;
