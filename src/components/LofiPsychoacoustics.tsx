import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, Music, Activity, Brain, Waves, Coffee, 
  ChevronRight, Binary, HeartPulse, Sliders, Disc,
  CheckCircle2, AlertTriangle, Zap, Wind, Mic2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const LofiPsychoacoustics = ({ onBack }: { onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0F0D0C] text-[#E0D5C7] font-serif selection:bg-amber-500/30 overflow-x-hidden"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ width: progressWidth }} 
        className="fixed top-0 left-0 h-1.5 bg-amber-600 z-[120] shadow-[0_0_20px_rgba(217,119,6,0.5)]" 
      />

      {/* Analog Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 mix-blend-overlay z-[100] bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-[#0F0D0C]/90 backdrop-blur-3xl border-b border-amber-900/20">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-amber-900/60 hover:text-amber-500 transition-colors group font-sans">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Studio
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col items-end font-sans">
              <span className="text-[10px] font-mono text-amber-900/60 uppercase tracking-widest">PUBLICATION ID: APSC-01</span>
              <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest">PEER REVIEWED // CLINICAL SERIES</span>
           </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60 px-6 max-w-6xl mx-auto">
        <header className="mb-60">
           <motion.div style={{ opacity: headerOpacity }}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-900/10 border border-amber-900/20 rounded-full text-xs font-bold text-amber-600 mb-12 font-sans">
                 <HeartPulse size={18} />
                 Sonic Neurobiology & Focus Dynamics
              </div>
              <h1 className="text-8xl md:text-[160px] font-black tracking-tighter leading-[0.8] mb-16 text-[#F5E6D3]">
                 Lofi <br /> <span className="italic text-amber-700/80">Psychoacoustics.</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-sans text-xs border-y border-amber-900/20 py-16">
                 <div>
                    <p className="text-amber-900 uppercase mb-4 tracking-widest font-bold">Principal Investigator</p>
                    <p className="font-bold text-2xl text-[#E0D5C7]">Dr. Elena Rossi</p>
                    <p className="text-amber-800 mt-1 uppercase tracking-tighter">Sonic Research Center</p>
                 </div>
                 <div>
                    <p className="text-amber-900 uppercase mb-4 tracking-widest font-bold">Subject Focus</p>
                    <p className="font-bold text-2xl text-amber-600">Auditory Masking</p>
                    <p className="text-amber-800 mt-1 uppercase tracking-tighter">Binaural Integration</p>
                 </div>
                 <div>
                    <p className="text-amber-900 uppercase mb-4 tracking-widest font-bold">Neural Range</p>
                    <p className="font-bold text-2xl text-[#E0D5C7]">Alpha/Theta</p>
                    <p className="text-amber-800 mt-1 uppercase tracking-tighter">8-12Hz Oscillation</p>
                 </div>
                 <div>
                    <p className="text-amber-900 uppercase mb-4 tracking-widest font-bold">Clinical Date</p>
                    <p className="font-bold text-2xl text-[#E0D5C7]">Autumn 2019</p>
                    <p className="text-amber-800 mt-1 uppercase tracking-tighter">Revised Feb 2026</p>
                 </div>
              </div>
           </motion.div>
        </header>

        {/* Abstract Section */}
        <section className="mb-60 space-y-16">
           <h2 className="text-4xl font-bold text-amber-700 flex items-center gap-4 font-sans uppercase tracking-[0.3em]">
              <span className="w-12 h-px bg-amber-900" /> Abstract
           </h2>
           <div className="space-y-12 leading-relaxed text-3xl font-light text-[#C4B7A8]">
              <p className="italic text-4xl text-[#F5E6D3] mb-12">
                 "Why does the sound of a dusty vinyl record skipping at 80bpm feel more like 'work' than silence?"
              </p>
              <p>
                 Traditional acoustic theory focuses on fidelity—the removal of noise. Rossi's research flips this paradigm, arguing that <strong>specific types of high-entropy noise</strong> (analog crackle, tape hiss, environmental hum) act as a cognitive blanket.
              </p>
              <p>
                 By providing a predictable, low-entropy background signal, lofi music effectively 'masks' unpredictable environmental interruptions (sirens, conversation, sudden footsteps), allowing the prefrontal cortex to remain in a sustained deep flow state.
              </p>
           </div>
        </section>

        {/* Section 02: The 60Hz Womb Hum */}
        <section className="mb-60">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="w-20 h-20 bg-amber-900/20 rounded-[32px] flex items-center justify-center text-amber-600 shadow-2xl">
                    <Waves size={40} />
                 </div>
                 <h3 className="text-6xl font-bold tracking-tight text-[#F5E6D3]">The 60Hz <br /> Womb Hum.</h3>
                 <p className="text-2xl text-[#C4B7A8] leading-relaxed font-light">
                    Our research shows that the low-frequency hum inherent in vintage hardware mimics the auditory environment of the womb. This triggers a <strong>primal safety response</strong> in the brain's amygdala, effectively lowering baseline cortisol levels.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="p-8 bg-amber-900/5 rounded-3xl border border-amber-900/10">
                       <p className="text-4xl font-black text-amber-600 mb-2">22%</p>
                       <p className="text-sm font-sans font-bold text-amber-900 uppercase tracking-widest">Cortisol Drop</p>
                    </div>
                    <div className="p-8 bg-amber-900/5 rounded-3xl border border-amber-900/10">
                       <p className="text-4xl font-black text-amber-600 mb-2">3.4x</p>
                       <p className="text-sm font-sans font-bold text-amber-900 uppercase tracking-widest">Focus Duration</p>
                    </div>
                 </div>
              </div>
              <div className="relative aspect-square">
                 <div className="absolute inset-0 bg-amber-600/5 blur-[120px] rounded-full" />
                 <div className="relative h-full bg-[#1A1816] border border-amber-900/20 rounded-[80px] p-20 flex flex-col items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <motion.div 
                       animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                       }}
                       transition={{ duration: 5, repeat: Infinity }}
                       className="w-64 h-64 border-2 border-amber-600/30 rounded-full flex items-center justify-center mb-12"
                    >
                       <Disc className="text-amber-600/40" size={120} />
                    </motion.div>
                    <p className="font-sans text-xs font-bold text-amber-900 uppercase tracking-[0.4em]">Sub-Aural Frequency Map</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 03: Technical Architecture of 'Chill' */}
        <section className="mb-60 bg-[#161413] -mx-6 px-6 py-40 border-y border-amber-900/20">
           <div className="max-w-5xl mx-auto text-center mb-24">
              <h2 className="text-6xl font-bold mb-8 text-[#F5E6D3]">Engineering 'Chill'.</h2>
              <p className="text-2xl text-[#C4B7A8] font-light leading-relaxed">
                 The efficacy of lofi is not accidental. It is a precise engineering of <strong>controlled auditory entropy</strong>.
              </p>
           </div>
           
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                 {
                    title: "Bit-Crushing",
                    desc: "Simulating the 12-bit crunch of early SP-1200 samplers. This removes high-frequency transients that can be jarring to the nervous system.",
                    icon: Binary,
                    stat: "8-12bit Range"
                 },
                 {
                    title: "Wow & Flutter",
                    desc: "Randomized pitch modulation between 0.2Hz and 0.5Hz. This replicates the natural, non-linear character of magnetic tape.",
                    icon: Activity,
                    stat: "0.5Hz Variance"
                 },
                 {
                    title: "Atmospheric Layers",
                    desc: "Injecting non-musical textures like rain or street noise. This creates a spatial anchor for the mind to inhabit.",
                    icon: Wind,
                    stat: "Stereo-Field: 100%"
                 }
              ].map((tech, i) => (
                 <div key={i} className="p-12 rounded-[56px] bg-[#0F0D0C] border border-amber-900/10 space-y-8 hover:border-amber-600/30 transition-all group">
                    <div className="w-16 h-16 bg-amber-900/10 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                       <tech.icon size={32} />
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-bold text-[#F5E6D3]">{tech.title}</h3>
                       <p className="text-lg text-[#C4B7A8] leading-relaxed font-light">{tech.desc}</p>
                    </div>
                    <div className="pt-6 border-t border-amber-900/10 text-xs font-sans font-bold text-amber-900 uppercase tracking-widest">
                       {tech.stat}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Section 04: The Clinical Conclusion */}
        <section className="mb-40">
           <div className="p-24 rounded-[80px] bg-gradient-to-br from-amber-900/20 to-[#1A1816] border border-amber-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 opacity-10"><Brain size={120} /></div>
              
              <h2 className="text-5xl font-bold text-[#F5E6D3] mb-12">Clinical Conclusion.</h2>
              <div className="space-y-12 text-2xl text-[#C4B7A8] font-light leading-relaxed">
                 <p>
                    Interaction with lofi environments represents a shift from "Attention-Driven Listening" to <strong>"Environmental Immersion"</strong>. 
                 </p>
                 <p>
                    Our data concludes that for tasks requiring high-novelty linguistic processing, lofi is ineffective. However, for <strong>deep algorithmic work</strong> or creative synthesis, the presence of analog artifacts provides the necessary friction to prevent mental wandering.
                 </p>
              </div>
              
              <div className="mt-24 pt-16 border-t border-amber-900/10 flex flex-wrap gap-12 items-center justify-between font-sans">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full border-4 border-amber-900/30 overflow-hidden shadow-2xl">
                       <ImageWithFallback src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200" />
                    </div>
                    <div>
                       <p className="text-2xl font-bold text-[#F5E6D3]">Dr. Elena Rossi</p>
                       <p className="text-sm font-mono text-amber-900 uppercase tracking-widest">Lead Investigator // SR-Center</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-12 py-6 bg-amber-600 text-black rounded-full font-black text-xl hover:bg-[#F5E6D3] transition-all shadow-3xl">
                       Cite Thesis
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-amber-900/10">
           <div className="max-w-xl mx-auto space-y-12 font-sans">
              <div className="flex justify-center gap-1">
                 {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-amber-900/40 rounded-full" />)}
              </div>
              <p className="text-[10px] text-amber-900 uppercase tracking-[0.5em]">DOCUMENT END // SESSION CLOSED</p>
              <button onClick={onBack} className="px-20 py-8 bg-[#F5E6D3] text-black rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-4xl shadow-amber-600/10">
                 Return to Session
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default LofiPsychoacoustics;
