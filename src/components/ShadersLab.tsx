import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Sparkles, Zap, Cpu, Box, Search, 
  Layers, ExternalLink, BookOpen, ChevronRight, 
  Binary, Activity, Wand2, FlaskConical, Code,
  Settings, Info, AlertTriangle, CheckCircle2, XCircle,
  Eye, Droplets, Wind, Waves
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ShadersLab = ({ onBack, onOpenPaper }: { onBack: () => void, onOpenPaper: (id: string) => void }) => {
  const [activeShader, setActiveShader] = useState('voronoi');
  const [intensity, setIntensity] = useState(50);
  const [speed, setSpeed] = useState(30);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simple Canvas Shader Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let time = 0;

    const render = () => {
      time += speed * 0.001;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Create a shader-like gradient pattern
      const gradient = ctx.createRadialGradient(
        width / 2 + Math.cos(time) * (width / 4),
        height / 2 + Math.sin(time) * (height / 4),
        0,
        width / 2,
        height / 2,
        width / (1.5 - intensity * 0.01)
      );

      if (activeShader === 'voronoi') {
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(0.5, '#a855f7');
        gradient.addColorStop(1, '#000000');
      } else if (activeShader === 'liquid') {
        gradient.addColorStop(0, '#06b6d4');
        gradient.addColorStop(0.5, '#3b82f6');
        gradient.addColorStop(1, '#000000');
      } else if (activeShader === 'fbm') {
        gradient.addColorStop(0, '#f43f5e');
        gradient.addColorStop(0.5, '#fb923c');
        gradient.addColorStop(1, '#000000');
      } else {
        gradient.addColorStop(0, '#10b981');
        gradient.addColorStop(0.5, '#34d399');
        gradient.addColorStop(1, '#000000');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add some "noise" particles
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time + i) * 0.5 + 0.5) * width;
        const y = (Math.cos(time * 0.8 + i) * 0.5 + 0.5) * height;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [activeShader, intensity, speed]);

  const researchPapers = [
    {
      id: 'glsl-optimization',
      title: "Real-Time GLSL Optimization",
      author: "Inigo Quilez",
      year: "2015",
      summary: "Advanced techniques for signed distance functions (SDFs) and raymarching to achieve photorealism on low-end GPUs.",
    },
    {
      id: 'shader-visual-psychology',
      title: "Visual Stimuli in Shaders",
      author: "Sarah Drasner",
      year: "2020",
      summary: "How procedural color transitions and movement speed in shaders affect user perceived performance.",
    }
  ];

  const analysis = {
    merits: [
      { title: 'Infinite Resolution', desc: 'Mathematical rendering ensures no pixelation at any zoom level.' },
      { title: 'Zero Latency', desc: 'Running on GPU hardware allows for 60FPS complex generative art.' },
      { title: 'Deterministic', desc: 'The same math always produces the same frame, essential for consistency.' }
    ],
    demerits: [
      { title: 'High Power Drain', desc: 'Intensive GPU utilization can lead to rapid battery depletion.' },
      { title: 'Arithmetic Complexity', desc: 'Debugging GLSL is notoriously difficult without standard logging.' },
      { title: 'Branching Penalties', desc: 'If-statements can severely degrade performance on older mobile GPUs.' }
    ],
    limitations: [
      { title: 'Browser Sandbox', desc: 'Limited by WebGL 2.0 specs and memory allocation boundaries.' },
      { title: 'Precision Loss', desc: 'Float precision varies across hardware, leading to visual artifacts.' },
      { title: 'Siloed Logic', desc: 'Difficult to share state between CPU and GPU at high frequencies.' }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#08080C] text-indigo-50/90 font-sans selection:bg-indigo-500/30 overflow-x-hidden"
    >
      {/* Background Animated Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.05, 0.15, 0.05],
             rotate: [0, 90, 0]
           }}
           transition={{ duration: 15, repeat: Infinity }}
           className="absolute -top-1/4 -left-1/4 w-[1200px] h-[1200px] bg-indigo-600/10 blur-[180px] rounded-full" 
         />
         <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2],
             opacity: [0.05, 0.1, 0.05],
             rotate: [0, -90, 0]
           }}
           transition={{ duration: 20, repeat: Infinity }}
           className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-rose-600/10 blur-[200px] rounded-full" 
         />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#08080C]/80 backdrop-blur-2xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-indigo-400 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Exit Laboratory
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" /> GPU PIPELINE: ACTIVE
           </div>
           <button className="px-5 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-indigo-600 transition-all">
              Deploy Build
           </button>
        </div>
      </nav>

      <main className="pt-40 pb-60 px-6 max-w-7xl mx-auto relative z-10">
        <header className="mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                 >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-10">
                       <Sparkles className="text-indigo-400" size={18} />
                       <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400">Experimental Shaders // Module 101</span>
                    </div>
                    <h1 className="text-8xl md:text-[160px] font-serif font-black tracking-tighter leading-[0.8] mb-12 text-white">
                      Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 italic">Alchemy.</span>
                    </h1>
                    <p className="text-3xl text-slate-400 font-light leading-relaxed max-w-3xl">
                      Mastering the GPU to create infinite generative patterns, organic liquid dynamics, and raymarched dimensions.
                    </p>
                 </motion.div>
              </div>
              <div className="lg:col-span-4 sticky top-40">
                 <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                       <Info size={20} className="text-indigo-400" /> System Note
                    </h3>
                    <p className="text-slate-400 leading-relaxed italic text-lg mb-8">
                       "Shaders represent the bridge between pure mathematics and visual emotion. Every pixel is a calculated choice."
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                       <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                          <Binary size={20} />
                       </div>
                       <div>
                          <p className="text-xs font-mono text-slate-500 uppercase">Architecture</p>
                          <p className="text-sm font-bold">GLSL v3.0 ES</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </header>

        {/* Interactive Workbench */}
        <section className="py-40 border-y border-white/5 mb-60">
           <div className="flex flex-col lg:flex-row gap-16 items-stretch">
              <div className="flex-1 bg-black rounded-[64px] border border-white/10 overflow-hidden relative group">
                 <canvas 
                   ref={canvasRef}
                   width={1200}
                   height={800}
                   className="w-full h-full object-cover"
                 />
                 
                 <div className="absolute top-10 right-10 flex gap-3">
                    <div className="px-5 py-2.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[10px] font-mono font-bold text-indigo-400 flex items-center gap-2">
                       <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" /> GPU LOAD: 14%
                    </div>
                    <div className="px-5 py-2.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[10px] font-mono font-bold text-emerald-400">
                       60.0 FPS
                    </div>
                 </div>

                 <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end bg-black/20 backdrop-blur-md p-10 rounded-[40px] border border-white/5">
                    <div className="space-y-2">
                       <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Render Buffer</p>
                       <h3 className="text-4xl font-serif font-bold uppercase tracking-widest text-white">{activeShader}</h3>
                    </div>
                    <div className="flex gap-3">
                       {['Voronoi', 'Simplex', 'FBM', 'Liquid'].map(s => (
                          <button 
                             key={s} 
                             onClick={() => setActiveShader(s.toLowerCase())}
                             className={`px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeShader === s.toLowerCase() ? 'bg-white text-black shadow-2xl' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}`}
                          >
                             {s}
                          </button>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="w-full lg:w-96 space-y-8">
                 <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[48px] space-y-10">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                       <Settings size={16} /> Parameter Tuning
                    </h4>
                    
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                             <span>Intensity</span>
                             <span className="text-indigo-400">{intensity}%</span>
                          </div>
                          <input 
                             type="range" 
                             min="1" max="100" 
                             value={intensity}
                             onChange={(e) => setIntensity(parseInt(e.target.value))}
                             className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-indigo-500"
                          />
                       </div>
                       <div className="space-y-4">
                          <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                             <span>Time Delta</span>
                             <span className="text-indigo-400">{speed}%</span>
                          </div>
                          <input 
                             type="range" 
                             min="1" max="100" 
                             value={speed}
                             onChange={(e) => setSpeed(parseInt(e.target.value))}
                             className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-indigo-500"
                          />
                       </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 space-y-6">
                       <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                             <Code size={20} />
                          </div>
                          <div>
                             <p className="text-[10px] font-mono text-slate-500 uppercase">Math Engine</p>
                             <p className="text-sm font-bold">Fast Fourier Transform</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="p-10 bg-indigo-600 rounded-[48px] text-white group cursor-pointer overflow-hidden relative transition-all hover:bg-indigo-500">
                    <div className="absolute -right-8 -top-8 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform">
                       <Zap size={120} />
                    </div>
                    <h4 className="text-2xl font-black mb-4">View Source.</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-80 mb-8">
                       Explore the raw GLSL code behind these procedural patterns.
                    </p>
                    <button className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                       Visit Repository <ChevronRight size={18} />
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Merits / Demerits / Limitations */}
        <section className="mb-60">
           <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-indigo-400 font-mono text-sm tracking-[0.4em] uppercase mb-4 block">// GPU Forensics</span>
              <h2 className="text-6xl font-serif font-bold mb-8 text-white">Efficiency Analysis.</h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                 Every shader is a trade-off between visual fidelity and hardware thermal limits. Our findings prioritize sustained performance.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12 transition-all hover:bg-white/[0.04]">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                       <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Merits</h3>
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

              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12 transition-all hover:bg-white/[0.04]">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500">
                       <XCircle size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Demerits</h3>
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

              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-12 transition-all hover:bg-white/[0.04]">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                       <AlertTriangle size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Limitations</h3>
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

        {/* Technical Papers */}
        <section className="mb-40">
           <div className="flex items-center gap-4 mb-16">
              <BookOpen className="text-indigo-400" size={32} />
              <h2 className="text-4xl font-serif font-bold">Research Library</h2>
              <div className="flex-1 h-[1px] bg-white/10 ml-4" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchPapers.map((paper, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  onClick={() => onOpenPaper(paper.id)}
                  className="p-16 rounded-[64px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-400/50 transition-all cursor-pointer group flex flex-col justify-between min-h-[500px]"
                >
                   <div>
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                            <FlaskConical size={40} />
                         </div>
                         <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Archive ID: {paper.id.toUpperCase()}</span>
                      </div>
                      <h3 className="text-5xl font-serif font-bold mb-8 group-hover:text-indigo-400 transition-colors leading-tight">{paper.title}</h3>
                      <p className="text-xl text-slate-500 leading-relaxed">"{paper.summary}"</p>
                   </div>
                   
                   <div className="pt-12 border-t border-white/5 flex items-center justify-between font-bold text-xs tracking-widest text-slate-500 group-hover:text-white transition-colors uppercase">
                      <span>OPEN TECHNICAL JOURNAL</span>
                      <ChevronRight size={20} />
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        <footer className="py-40 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full -z-10" />
           <h3 className="text-4xl font-serif font-bold mb-12 text-white">Back to Creative Labs?</h3>
           <button onClick={onBack} className="px-16 py-6 bg-white text-black rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-indigo-500/10">
              Return to Studio
           </button>
        </footer>
      </main>
    </motion.div>
  );
};

export default ShadersLab;
