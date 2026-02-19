import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, Cpu, Binary, Zap, Layers, Settings, 
  Activity, Play, Box, Disc, Terminal, ChevronRight,
  Database, BarChart3, ShieldCheck, Timer, Music, Sliders
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ProceduralBeatGen = ({ onBack }: { onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#08080A] text-slate-100 font-sans selection:bg-orange-500/30 overflow-x-hidden"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ width: progressWidth }} 
        className="fixed top-0 left-0 h-1.5 bg-orange-500 z-[120] shadow-[0_0_20px_rgba(249,115,22,0.5)]" 
      />

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-[#08080A]/90 backdrop-blur-3xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-orange-400 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Publication
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">REPORT ID: PBG-2021-V</span>
              <span className="text-[10px] font-mono text-orange-500 font-bold uppercase tracking-widest">IRCAM PARIS // TECH REPORT</span>
           </div>
           <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 border border-orange-500/20">
              <Binary size={18} />
           </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60 px-6 max-w-7xl mx-auto">
        <header className="mb-60">
           <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold text-orange-400 mb-12">
              <Cpu size={18} />
              Algorithmic Composition & Humanization
           </div>
           <h1 className="text-8xl md:text-[180px] font-serif font-black tracking-tighter leading-[0.8] mb-16 text-white">
              Procedural <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-amber-500 italic">Rhythm.</span>
           </h1>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs border-y border-white/5 py-16">
              <div>
                 <p className="text-slate-500 uppercase mb-4 tracking-widest">Author</p>
                 <p className="font-bold text-2xl">Marcus Chen</p>
                 <p className="text-slate-600">Computation Audio Lab</p>
              </div>
              <div>
                 <p className="text-slate-500 uppercase mb-4 tracking-widest">Entropy Model</p>
                 <p className="font-bold text-2xl text-orange-500">Markov L3</p>
                 <p className="text-slate-600">Non-Repetitive Variances</p>
              </div>
              <div>
                 <p className="text-slate-500 uppercase mb-4 tracking-widest">Sample Depth</p>
                 <p className="font-bold text-2xl">64-Slice</p>
                 <p className="text-slate-600">Dynamic Granular Engine</p>
              </div>
              <div>
                 <p className="text-slate-500 uppercase mb-4 tracking-widest">Humanization</p>
                 <p className="font-bold text-2xl text-rose-500">±12ms</p>
                 <p className="text-slate-600">Micro-Timing Jitter</p>
              </div>
           </div>
        </header>

        {/* Section 01: The Problem of Loops */}
        <section className="mb-60 max-w-5xl mx-auto space-y-16">
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-orange-500/20 rounded-[32px] flex items-center justify-center text-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
                 <Timer size={40} />
              </div>
              <h2 className="text-5xl font-serif font-bold italic text-white tracking-tight">The Curse of the Loop.</h2>
           </div>
           <div className="space-y-12">
              <p className="text-4xl font-light leading-relaxed text-slate-400">
                 "Traditional music production relies on loops—fixed blocks of time that repeat identically. However, the human brain is highly tuned to detect repetition. <strong>Habituation</strong> occurs after the 4th cycle, causing the listener to 'tune out' the audio signal."
              </p>
              <p className="text-2xl text-slate-500 leading-relaxed font-light">
                 Our research proposes a <strong>Procedural Drum Engine</strong> that generates infinite, non-identical rhythm patterns in real-time. By utilizing high-order Markov chains and simulated human-timing errors, we create a sonic environment that feels alive and unpredictable, maintaining listener engagement for 8+ hours.
              </p>
           </div>
        </section>

        {/* Section 02: Markov Architecture */}
        <section className="py-60 bg-white/[0.02] border-y border-white/5 overflow-hidden mb-60 relative">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6 space-y-16">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                    Technical Mechanism // STOCHASTIC_BEAT
                 </div>
                 <h2 className="text-7xl font-serif font-bold leading-tight text-white">Infinite Variance <br /> Logic.</h2>
                 
                 <div className="space-y-10">
                    <p className="text-xl text-slate-500 leading-relaxed">
                       Instead of storing full patterns, we store a <strong>Probability Transition Matrix</strong>. For every beat, the engine calculates the most likely next hit based on the previous four hits, modified by a "Novelty Bias" variable.
                    </p>
                    
                    <div className="p-10 bg-black rounded-[48px] border border-white/5 font-mono text-sm leading-relaxed text-orange-300">
                       <div className="text-slate-600 mb-4">// Next hit probability calculation</div>
                       <div className="space-y-2">
                          <span className="text-purple-400">const</span> <span className="text-white">probK</span> = (hits.k / hits.total) * weighting;<br />
                          <span className="text-purple-400">const</span> <span className="text-white">probS</span> = (hits.s / hits.total) * (1 - novelty);<br />
                          <span className="text-purple-400">const</span> <span className="text-white">nextHit</span> = Math.random() {'<'} probK ? 'KICK' : 'SNARE';
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-6">
                 <div className="relative aspect-square bg-[#121214] border border-white/10 rounded-[80px] p-16 overflow-hidden group">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="h-full flex flex-col justify-between">
                       <div className="flex justify-between items-start font-mono text-[10px] text-slate-600">
                          <span>SEQUENCER_BUFFER_01</span>
                          <span>TEMPO: 88.4 BPM</span>
                       </div>
                       
                       <div className="flex-1 flex items-center justify-center">
                          <div className="grid grid-cols-8 gap-4 w-full">
                             {Array.from({ length: 32 }).map((_, i) => (
                                <motion.div 
                                   key={i}
                                   animate={{ 
                                      backgroundColor: Math.random() > 0.7 ? '#f97316' : '#1e1e1e',
                                      scale: Math.random() > 0.7 ? [1, 1.2, 1] : 1
                                   }}
                                   transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                                   className="aspect-square rounded-lg border border-white/5"
                                />
                             ))}
                          </div>
                       </div>
                       
                       <p className="text-xs font-mono text-orange-500 uppercase tracking-widest text-center">Markov Probabilities: 0.92 Accuracy</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 03: The Dilla Swing */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-4 space-y-12 sticky top-40">
                 <h2 className="text-6xl font-serif font-bold text-white">The Human <br /> Imperfection.</h2>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Perfect quantization is the death of lofi. Our engine introduces "Micro-Timing Jitter" to replicate the 'Dilla-style' swing that defines the genre.
                 </p>
                 <div className="space-y-6">
                    <div className="p-8 rounded-3xl bg-orange-500/5 border border-orange-500/10">
                       <Activity className="text-orange-500 mb-4" />
                       <h4 className="font-bold text-white mb-2 uppercase text-sm tracking-widest">Timing Variance</h4>
                       <p className="text-3xl font-black text-white">±12ms</p>
                       <p className="text-xs text-slate-600 mt-2 italic">Standard human deviation threshold</p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                    {
                       title: "Micro-Offset Injection",
                       desc: "Instead of snapping hits to the grid, we apply a Gaussian distribution curve to the hit placement. This ensures that the kick drum is always slightly ahead of the beat, creating a 'push' feel.",
                       icon: Timer,
                       stat: "Jitter: 0.04σ"
                    },
                    {
                       title: "Velocity Randomization",
                       desc: "Humans never hit a drum with identical force twice. Our engine varies the MIDI velocity of every hi-hat hit between 60 and 85, replicating the natural fatigue of a real drummer.",
                       icon: Sliders,
                       stat: "Vel Range: 25%"
                    },
                    {
                       title: "Dynamic Granular Resynthesis",
                       desc: "Every time a snare is triggered, the engine slightly shifts the sample's start position. This creates minute variations in the 'attack' of the sound, preventing sonic fatigue.",
                       icon: Layers,
                       stat: "Offset: 2ms"
                    },
                    {
                       title: "Atmospheric Sidechaining",
                       desc: "The procedural beats communicate with the background textures. Every kick drum 'ducks' the rain and vinyl noise, tying the entire environment together into a rhythmic whole.",
                       icon: Music,
                       stat: "Ducking: -6dB"
                    }
                 ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-8 hover:bg-white/[0.04] transition-all">
                       <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
                          <item.icon size={32} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                       </div>
                       <div className="pt-6 border-t border-white/5">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">{item.stat}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 04: Conclusion */}
        <section className="mb-40">
           <div className="p-24 rounded-[80px] bg-gradient-to-br from-orange-500/10 to-rose-500/5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 opacity-10"><Database size={120} /></div>
              
              <h2 className="text-5xl font-serif font-bold text-white mb-12">Closing Summary.</h2>
              <div className="space-y-12 text-2xl text-slate-400 font-light leading-relaxed">
                 <p>
                    Procedural music is the future of productivity audio. By removing the predictability of the loop, we extend the "Focus Window" of the average knowledge worker by nearly 40%.
                 </p>
                 <p>
                    Future research will focus on <strong>Biometric-Responsive Beats</strong>, where the complexity of the Markov chain shifts in real-time based on the listener's heart rate or typing speed.
                 </p>
              </div>

              <div className="mt-24 pt-16 border-t border-white/5 flex flex-wrap gap-12 items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full border-4 border-orange-500/30 overflow-hidden shadow-2xl">
                       <ImageWithFallback src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&h=200" />
                    </div>
                    <div>
                       <p className="text-2xl font-bold">Marcus Chen</p>
                       <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Audio Engineer @ IRCAM Paris</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-orange-500 hover:text-white transition-all shadow-3xl">
                       View Repo
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-white/10">
           <div className="max-w-xl mx-auto space-y-12">
              <div className="flex justify-center gap-2">
                 {[1,2,3,4,5,6].map(i => <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full" />)}
              </div>
              <p className="text-xs text-slate-700 font-mono uppercase tracking-[0.4em]">Submission Archive // IRCAM-TECH-2021</p>
              <button onClick={onBack} className="px-20 py-8 bg-white text-slate-900 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-4xl shadow-orange-500/10">
                 Return to Studio
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default ProceduralBeatGen;
