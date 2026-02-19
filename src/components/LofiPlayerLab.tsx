import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, Music, CassetteTape, Radio, Play, Pause, 
  FastForward, Rewind, Volume2, Search, BookOpen, 
  ChevronRight, Mic2, Disc, Waves, Sparkles, Binary,
  Sliders, Settings, Info, AlertTriangle, CheckCircle2, XCircle,
  Wind, Coffee, Moon, CloudRain, Terminal
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const LofiPlayerLab = ({ onBack, onOpenPaper }: { onBack: () => void, onOpenPaper: (id: string) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(65);
  const [activeMood, setActiveMood] = useState('midnight');
  const [sequencerStep, setSequencerStep] = useState(0);
  const [noiseLevels, setNoiseLevels] = useState({
    vinyl: 40,
    rain: 20,
    tape: 15,
    street: 0
  });

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSequencerStep(s => (s + 1) % 16);
    }, 150); // ~100 BPM
    return () => clearInterval(interval);
  }, [isPlaying]);

  const moods = {
    midnight: {
      name: 'Midnight in Shibuya',
      color: 'bg-indigo-900',
      text: 'text-indigo-400',
      bg: 'https://images.unsplash.com/photo-1570126688035-1e0adbed6fe0?q=80&w=1200',
      description: 'A deep, bassy journey through neon-lit streets. High spatial reverb and low-pass filters.'
    },
    study: {
      name: 'Library Echoes',
      color: 'bg-amber-900',
      text: 'text-amber-400',
      bg: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200',
      description: 'Dry, crisp acoustic piano with minimal low-end. Optimized for focus and memory retention.'
    },
    rainy: {
      name: 'Rainy Cafe',
      color: 'bg-slate-900',
      text: 'text-slate-400',
      bg: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200',
      description: 'Warm, mid-range heavy samples with organic rain textures. High comfort, low arousal.'
    }
  };

  const researchPapers = [
    {
      id: 'lofi-psychoacoustics',
      title: "Lofi Psychoacoustics",
      author: "Dr. Elena Rossi",
      year: "2019",
      summary: "Analyzing why imperfect frequencies (crackle, hiss, wow) induce focus and lower cortisol in listeners.",
    },
    {
      id: 'procedural-beat-gen',
      title: "Procedural Beat Generation",
      author: "Marcus Chen",
      year: "2021",
      summary: "Algorithms for generating infinite, non-repetitive lo-fi drum patterns using Markov chains.",
    }
  ];

  const analysis = {
    merits: [
      { title: 'Cortisol Reduction', desc: 'Predictable, low-entropy noise masks erratic environmental triggers.' },
      { title: 'Neural Entrainment', desc: 'Consistent 80-90 BPM rhythms align with alpha-wave brain states.' },
      { title: 'Information Filtering', desc: 'Low-fidelity audio requires less decoding by the auditory cortex.' }
    ],
    demerits: [
      { title: 'Dynamic Range Loss', desc: 'Heavy compression can lead to listening fatigue over 4+ hours.' },
      { title: 'Contextual Inaccuracy', desc: 'Mood-mismatching can unintentionally trigger melancholy.' },
      { title: 'Sub-Bass Interference', desc: 'Low frequencies can mask important system alerts or speech.' }
    ],
    limitations: [
      { title: 'Cognitive Ceiling', desc: 'Ineffective for tasks requiring high-novelty linguistic processing.' },
      { title: 'Hardware Dependency', desc: 'Requires flat-frequency headphones to avoid frequency masking.' },
      { title: 'Cultural Bias', desc: 'Nostalgia-driven efficacy varies wildly across different age cohorts.' }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0908] text-amber-50/90 font-sans selection:bg-amber-500/30 overflow-x-hidden"
    >
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ 
             scale: isPlaying ? [1, 1.1, 1] : 1,
             opacity: isPlaying ? [0.1, 0.2, 0.1] : 0.1
           }}
           transition={{ duration: 10, repeat: Infinity }}
           className={`absolute inset-0 ${moods[activeMood as keyof typeof moods].color} blur-[150px] rounded-full -translate-y-1/2`}
         />
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-6 flex justify-between items-center bg-[#0A0908]/80 backdrop-blur-2xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-amber-400 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Exit Studio
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-6 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                 <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-amber-400 animate-pulse' : 'bg-slate-700'}`} />
                 {isPlaying ? 'Live Stream: ACTIVE' : 'Signal: STANDBY'}
              </div>
              <div className="flex items-center gap-2">
                 <Settings size={14} className="animate-spin-slow" />
                 DSP ENGINE v2.4
              </div>
           </div>
           <button className="px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] font-bold text-amber-400 hover:bg-amber-400 hover:text-black transition-all uppercase tracking-widest">
              Export Setup
           </button>
        </div>
      </nav>

      <main className="relative pt-32 pb-40 px-6 max-w-7xl mx-auto z-10">
        <header className="mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                 >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-amber-400 mb-10">
                       <Disc size={18} className={isPlaying ? 'animate-spin' : ''} />
                       Analog Soul, Digital Architecture
                    </div>
                    <h1 className="text-8xl md:text-[140px] font-serif font-black tracking-tighter leading-[0.8] mb-12 text-white">
                      The Lofi <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 italic">Interface.</span>
                    </h1>
                    <p className="text-3xl text-slate-400 font-light leading-relaxed max-w-2xl mb-16">
                      An interactive model exploring why "imperfect" audio creates the perfect environment for deep focus.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                       {Object.entries(moods).map(([key, mood]) => (
                         <button 
                           key={key}
                           onClick={() => setActiveMood(key)}
                           className={`px-8 py-4 rounded-2xl text-sm font-bold border transition-all ${activeMood === key ? 'bg-amber-400 border-amber-400 text-black shadow-xl shadow-amber-400/20 scale-105' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'}`}
                         >
                           {mood.name}
                         </button>
                       ))}
                    </div>
                 </motion.div>
              </div>
              <div className="lg:col-span-4 sticky top-40">
                 <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                       <Info size={20} className="text-amber-400" /> Session Note
                    </h3>
                    <p className="text-slate-400 leading-relaxed italic text-lg mb-8">
                       "{moods[activeMood as keyof typeof moods].description}"
                    </p>
                    <div className="space-y-4">
                       <div className="flex justify-between text-xs font-mono text-slate-500">
                          <span>BITRATE</span>
                          <span className="text-amber-400">12-BIT EMULATION</span>
                       </div>
                       <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: isPlaying ? '100%' : '30%' }}
                            className="h-full bg-amber-400"
                          />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </header>

        {/* Interactive Model Prototype */}
        <section className="py-40 border-y border-white/5 mb-40 relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
           
           <div className="flex flex-col lg:flex-row gap-16 items-stretch">
              {/* Visualizer & Player */}
              <div className="flex-1 bg-[#121214] border border-white/10 rounded-[64px] p-12 overflow-hidden relative group">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                 <div className="relative h-full flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                       <div className="w-20 h-20 bg-amber-400 rounded-3xl flex items-center justify-center text-black shadow-2xl">
                          <Music size={40} />
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Signal Status</p>
                          <div className="flex items-center gap-2 justify-end">
                             <span className="text-xl font-mono text-white tracking-tighter">44100Hz</span>
                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          </div>
                       </div>
                    </div>

                    <div className="py-20 flex flex-col items-center gap-12 text-center">
                       <motion.div 
                         animate={{ rotate: isPlaying ? 360 : 0 }}
                         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                         className="relative w-64 h-64"
                       >
                          <div className="absolute inset-0 border-8 border-white/5 rounded-full" />
                          <div className="absolute inset-4 border-2 border-amber-400/20 border-dashed rounded-full" />
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-12 h-12 bg-white/10 rounded-full" />
                          </div>
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
                       </motion.div>

                       <div>
                          <h3 className="text-4xl font-serif font-bold mb-4">{moods[activeMood as keyof typeof moods].name}</h3>
                          <div className="flex items-center gap-8 justify-center">
                             <button className="text-slate-500 hover:text-white transition-colors"><Rewind /></button>
                             <button 
                               onClick={() => setIsPlaying(!isPlaying)}
                               className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                             >
                                {isPlaying ? <Pause size={32} /> : <Play fill="currentColor" size={32} />}
                             </button>
                             <button className="text-slate-500 hover:text-white transition-colors"><FastForward /></button>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center gap-4 h-12">
                       {Array.from({ length: 40 }).map((_, i) => (
                         <motion.div 
                           key={i}
                           animate={{ height: isPlaying ? [10, Math.random() * 40 + 10, 10] : 4 }}
                           transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.03 }}
                           className="flex-1 bg-amber-400/40 rounded-full"
                         />
                       ))}
                    </div>
                 </div>
              </div>

              {/* Mixing Console */}
              <div className="w-full lg:w-96 space-y-8">
                 <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[48px] space-y-10">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                       <Terminal size={16} /> Markov Sequencer
                    </h4>
                    <div className="grid grid-cols-4 gap-3">
                       {Array.from({ length: 16 }).map((_, i) => (
                          <motion.div 
                             key={i}
                             animate={{ 
                                backgroundColor: sequencerStep === i ? '#fbbf24' : 'rgba(255,255,255,0.05)',
                                scale: sequencerStep === i ? 1.1 : 1
                             }}
                             className="aspect-square rounded-xl border border-white/5 flex items-center justify-center"
                          >
                             {sequencerStep === i && isPlaying && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                          </motion.div>
                       ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-600">
                       <span>TRANSITION_P: 0.82</span>
                       <span>ENTROPY: LOW</span>
                    </div>
                 </div>

                 <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[48px] space-y-12">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                       <Sliders size={16} /> Mastering Console
                    </h4>
                    
                    {[
                      { id: 'vinyl', name: 'Vinyl Crackle', icon: Disc },
                      { id: 'rain', name: 'Rain Loop', icon: CloudRain },
                      { id: 'tape', name: 'Tape Hiss', icon: CassetteTape },
                      { id: 'street', name: 'Ambient Street', icon: Wind }
                    ].map(fx => (
                      <div key={fx.id} className="space-y-4">
                         <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                            <span className="flex items-center gap-2"><fx.icon size={12} /> {fx.name}</span>
                            <span className="text-amber-400">{noiseLevels[fx.id as keyof typeof noiseLevels]}%</span>
                         </div>
                         <div className="relative h-1 bg-white/5 rounded-full overflow-hidden group cursor-pointer">
                            <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${noiseLevels[fx.id as keyof typeof noiseLevels]}%` }}
                               className="h-full bg-white group-hover:bg-amber-400 transition-colors"
                            />
                         </div>
                      </div>
                    ))}

                    <div className="pt-8 border-t border-white/5">
                       <div className="flex justify-between items-center mb-6">
                          <Volume2 size={20} className="text-slate-500" />
                          <span className="text-2xl font-mono text-white">{volume}%</span>
                       </div>
                       <div className="h-2 bg-white/10 rounded-full relative overflow-hidden group">
                          <motion.div 
                            animate={{ width: `${volume}%` }}
                            className="h-full bg-amber-400"
                          />
                       </div>
                    </div>
                 </div>

                 <div className="p-10 bg-amber-400 rounded-[48px] text-black">
                    <h4 className="text-2xl font-black mb-4">Neural Masking.</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-80">
                       By injecting randomized imperfections, we prevent the brain from habituating to the sound, maintaining high focus for extended periods.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* Analysis: Merits, Demerits, Limitations */}
        <section className="mb-60">
           <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-amber-400 font-mono text-sm tracking-[0.4em] uppercase mb-4 block">// Analysis & Forensics</span>
              <h2 className="text-6xl font-serif font-bold mb-8">Efficacy Report.</h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                 While lofi is a powerful cognitive tool, it operates within strict neurological boundaries. Our multi-year study highlights its precise performance envelope.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
                       <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold">Merits</h3>
                 </div>
                 <div className="space-y-10">
                    {analysis.merits.map((item, i) => (
                      <div key={i} className="space-y-3">
                         <h4 className="text-lg font-bold text-white">{item.title}</h4>
                         <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500">
                       <XCircle size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold">Demerits</h3>
                 </div>
                 <div className="space-y-10">
                    {analysis.demerits.map((item, i) => (
                      <div key={i} className="space-y-3">
                         <h4 className="text-lg font-bold text-white">{item.title}</h4>
                         <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                       <AlertTriangle size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold">Limitations</h3>
                 </div>
                 <div className="space-y-10">
                    {analysis.limitations.map((item, i) => (
                      <div key={i} className="space-y-3">
                         <h4 className="text-lg font-bold text-white">{item.title}</h4>
                         <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Research Deep Dives */}
        <section className="mb-40">
           <div className="flex items-center gap-4 mb-16">
              <BookOpen className="text-amber-400" size={32} />
              <h2 className="text-4xl font-serif font-bold">Advanced Publications</h2>
              <div className="flex-1 h-[1px] bg-white/10 ml-4" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchPapers.map((paper, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  onClick={() => onOpenPaper(paper.id)}
                  className="p-16 rounded-[64px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-400 transition-all cursor-pointer group flex flex-col justify-between min-h-[500px]"
                >
                   <div>
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-20 h-20 bg-amber-400/10 rounded-3xl flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                            <Binary size={40} />
                         </div>
                         <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Academic Entry #{i+1}</span>
                      </div>
                      <h3 className="text-5xl font-serif font-bold mb-8 group-hover:text-amber-400 transition-colors leading-tight">{paper.title}</h3>
                      <p className="text-xl text-slate-500 leading-relaxed">"{paper.summary}"</p>
                   </div>
                   
                   <div className="pt-12 border-t border-white/5 flex items-center justify-between font-bold text-xs tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">
                      <span>OPEN TECHNICAL JOURNAL</span>
                      <ChevronRight size={20} />
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        <footer className="py-40 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full -z-10" />
           <h3 className="text-4xl font-serif font-bold mb-12 text-white">Back to the Lab?</h3>
           <button onClick={onBack} className="px-16 py-6 bg-white text-black rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-amber-500/10">
              Return to Laboratory
           </button>
        </footer>
      </main>
    </motion.div>
  );
};

export default LofiPlayerLab;
