import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, MousePointer2, Move, Sparkles, 
  Terminal, Cpu, Box, Search, Layers, ExternalLink,
  BookOpen, ChevronRight, Magnet, Wind, Wand2, Activity,
  CheckCircle2, XCircle, AlertTriangle, Fingerprint
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CursorPackLab = ({ onBack, onOpenPaper }: { onBack: () => void, onOpenPaper: (id: string) => void }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeType, setActiveType] = useState('organic');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cursorModes = {
    organic: {
      title: 'Organic Fluidity',
      icon: Wind,
      desc: 'High momentum, low friction movement mimicking liquid physics.',
      merits: ['Reduced cognitive load', 'Playful "flow" state', 'Hides jitter'],
      demerits: ['Slight input lag', 'Precision penalty', 'Learning curve'],
      limitations: ['Not for CAD software', 'Requires 120Hz monitor for best feel'],
      color: 'blue'
    },
    magnetic: {
      title: 'Magnetic Snap',
      icon: Magnet,
      desc: 'Attracts to nearby UI elements with elastic bounce and haptic-like visual feedback.',
      merits: ['Increased target hit-rate', 'Tactile feel', 'Accessibility win'],
      demerits: ['Can feel "sticky"', 'Visual jarring on fast moves', 'Interferes with gestures'],
      limitations: ['Requires semantic UI tagging', 'Complex edge-case handling'],
      color: 'purple'
    },
    kinetic: {
      title: 'Kinetic Energy',
      icon: Activity,
      desc: 'Leaves a trailing trail of particles based on velocity and acceleration.',
      merits: ['Expressive branding', 'Strong user engagement', 'Visualizes speed'],
      demerits: ['CPU intensive', 'Visual clutter', 'Distracts from content'],
      limitations: ['Mobile battery drain', 'Accessibility contrast risks'],
      color: 'rose'
    }
  };

  const researchPapers = [
    {
      id: 'kinetic-interaction-theory',
      title: "Kinetic Interaction Theory",
      author: "Shlok Karn",
      year: "2025",
      summary: "Exploring how sub-pixel momentum and spring physics in cursor movements affect user satisfaction and perceived latency.",
    },
    {
      id: 'micro-feedback-loops',
      title: "Micro-Feedback Loops",
      author: "Tyson G.",
      year: "2024",
      summary: "A deep dive into the psychological impact of cursor state changes during hover events in complex dashboards.",
    }
  ];

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050507] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden"
    >
      {/* Interactive Cursor Model */}
      <AnimatePresence>
         {activeType === 'organic' && (
           <motion.div 
             className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/50 pointer-events-none z-[100] mix-blend-screen shadow-[0_0_20px_rgba(59,130,246,0.5)]"
             animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
             transition={{ type: "spring", damping: 15, stiffness: 100, mass: 1 }}
           />
         )}
         {activeType === 'magnetic' && (
            <motion.div 
              className="fixed top-0 left-0 w-12 h-12 rounded-lg border-2 border-purple-400/50 pointer-events-none z-[100] mix-blend-screen"
              animate={{ 
                x: mousePos.x - 24, 
                y: mousePos.y - 24,
                scale: [1, 1.2, 1],
                rotate: mousePos.x % 360
              }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
         )}
         {activeType === 'kinetic' && (
            <motion.div 
              className="fixed top-0 left-0 pointer-events-none z-[100] flex gap-1"
              animate={{ x: mousePos.x, y: mousePos.y }}
              transition={{ type: "spring", damping: 10, stiffness: 200 }}
            >
               {[...Array(5)].map((_, i) => (
                 <motion.div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-rose-500"
                    animate={{ 
                      y: [0, i * 10, 0],
                      opacity: [1, 0, 1]
                    }}
                    transition={{ duration: 0.5, delay: i * 0.05, repeat: Infinity }}
                 />
               ))}
            </motion.div>
         )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-[#050507]/80 backdrop-blur-xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Exit Playground
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <Activity size={12} className="text-blue-500" /> Latency: 4.2ms
           </div>
           <button className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-xs font-bold text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
              Copy Config
           </button>
        </div>
      </nav>

      <main className="relative">
        {/* Animated Hero Header */}
        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <motion.div style={{ opacity, scale }}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-blue-400 mb-10">
               <Fingerprint size={18} />
               Human-Centric Interaction
            </div>
            <h1 className="text-8xl md:text-[180px] font-serif font-black tracking-tighter leading-[0.85] mb-12">
              Beyond the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 italic">Pixel.</span>
            </h1>
            <p className="text-3xl text-slate-400 font-light leading-relaxed max-w-3xl mb-16">
               The cursor is the most intimate connection between human intent and digital execution. Why is it still a static triangle?
            </p>
          </motion.div>
        </section>

        {/* Interactive Comparison Model */}
        <section className="py-40 bg-white/[0.02] border-y border-white/5 overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                 <div className="max-w-xl">
                    <h2 className="text-5xl font-serif font-bold mb-6">Interaction Models.</h2>
                    <p className="text-xl text-slate-500">Select a mode to preview the physics model live on your screen. Each model is engineered for specific use cases.</p>
                 </div>
                 <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10">
                    {Object.keys(cursorModes).map((mode) => (
                       <button 
                          key={mode}
                          onClick={() => setActiveType(mode)}
                          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeType === mode ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:text-white'}`}
                       >
                          {mode.charAt(0).toUpperCase() + mode.slice(1)}
                       </button>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                 {/* Visual Preview Model */}
                 <div className="lg:col-span-7 aspect-[16/10] bg-[#0A0A0C] border border-white/10 rounded-[64px] relative overflow-hidden group cursor-none">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-full max-w-lg grid grid-cols-3 gap-8 p-12">
                          {[1,2,3,4,5,6,7,8,9].map(i => (
                             <motion.div 
                                key={i}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                className="aspect-square rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-700 hover:text-white transition-all"
                             >
                                <Sparkles size={32} />
                             </motion.div>
                          ))}
                       </div>
                    </div>
                    {/* Mode Name Tag */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-400">
                       Active Model: {cursorModes[activeType].title}
                    </div>
                 </div>

                 {/* Merits/Demerits Analysis */}
                 <div className="lg:col-span-5 space-y-10">
                    <div className="p-10 rounded-[48px] bg-white/[0.03] border border-white/5">
                       <h3 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                          <CheckCircle2 className="text-green-500" /> Merits
                       </h3>
                       <ul className="space-y-4">
                          {cursorModes[activeType].merits.map((merit, i) => (
                             <li key={i} className="flex gap-4 text-slate-400 text-lg">
                                <span className="text-green-500/50 font-mono">0{i+1}</span>
                                {merit}
                             </li>
                          ))}
                       </ul>
                    </div>

                    <div className="p-10 rounded-[48px] bg-white/[0.03] border border-white/5">
                       <h3 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                          <XCircle className="text-rose-500" /> Demerits
                       </h3>
                       <ul className="space-y-4">
                          {cursorModes[activeType].demerits.map((demerit, i) => (
                             <li key={i} className="flex gap-4 text-slate-400 text-lg">
                                <span className="text-rose-500/50 font-mono">0{i+1}</span>
                                {demerit}
                             </li>
                          ))}
                       </ul>
                    </div>

                    <div className="p-10 rounded-[48px] bg-orange-500/10 border border-orange-500/20">
                       <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
                          <AlertTriangle size={20} /> Limitations
                       </h3>
                       <p className="text-slate-400 leading-relaxed italic">
                          {cursorModes[activeType].limitations.join('. ')}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Deep Dive Research Header */}
        <section className="py-60 px-6 max-w-7xl mx-auto text-center">
           <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase mb-8 block"
           >
              // The Academic Layer
           </motion.span>
           <h2 className="text-7xl md:text-[120px] font-serif font-black tracking-tighter leading-none mb-16">
              Engineering <br /> <span className="italic">Empathy.</span>
           </h2>
           <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              We've abstracted away the math. Now, read the logic behind the magic in our peer-reviewed technical publications.
           </p>
        </section>

        {/* Research Papers Grid */}
        <section className="pb-40 px-6 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchPapers.map((paper, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  onClick={() => onOpenPaper(paper.id)}
                  className="p-16 rounded-[64px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-400/50 transition-all cursor-pointer group flex flex-col justify-between min-h-[500px]"
                >
                   <div>
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                            <Terminal size={32} />
                         </div>
                         <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{paper.year} Edition</span>
                      </div>
                      <h3 className="text-5xl font-serif font-bold mb-8 group-hover:text-blue-400 transition-colors leading-tight">{paper.title}</h3>
                      <p className="text-xl text-slate-500 leading-relaxed">"{paper.summary}"</p>
                   </div>
                   
                   <div className="pt-12 border-t border-white/5 flex items-center justify-between font-bold text-xs tracking-widest text-slate-500 group-hover:text-white transition-colors">
                      <span>READ TECHNICAL PUBLICATION</span>
                      <ArrowLeft className="rotate-180" size={20} />
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        <footer className="py-40 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full -z-10" />
           <h3 className="text-4xl font-serif font-bold mb-12 text-white">Back to the Lab?</h3>
           <button onClick={onBack} className="px-16 py-6 bg-white text-slate-900 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-blue-500/10">
              Return to Creative Labs
           </button>
        </footer>
      </main>
    </motion.div>
  );
};

export default CursorPackLab;
