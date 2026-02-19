import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, Cpu, Zap, Box, Binary, Sparkles, ChevronRight, 
  Terminal, BarChart3, ShieldCheck, Database, Layers,
  Activity, Timer, Settings, Info, AlertCircle, FileText,
  Eye, CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const GLSLOptimization = ({ onBack }: { onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-indigo-500/30 overflow-x-hidden"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ width: progressWidth }} 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400 z-[120] shadow-[0_0_20px_rgba(99,102,241,0.8)]" 
      />

      <nav className="fixed top-0 left-0 right-0 z-[110] px-8 py-6 flex justify-between items-center bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-500 hover:text-indigo-400 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Exit Shader Journal
        </button>
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Publication: GLSL-2025-X</span>
              <span className="text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-widest">Peer Reviewed // Interaction Series</span>
           </div>
           <div className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
              Level 4 Research
           </div>
        </div>
      </nav>

      <main className="relative pt-40 pb-60">
        {/* Advanced Hero Header */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <motion.div style={{ opacity: headerOpacity }}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-indigo-400 mb-12">
                 <Binary size={18} />
                 Real-Time Graphics Neurobiology
              </div>
              <h1 className="text-9xl md:text-[180px] font-serif font-black tracking-tighter leading-[0.8] mb-16">
                 GPU <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-rose-500 italic">Optimization.</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs border-y border-white/5 py-16">
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Principal Investigator</p>
                    <p className="font-bold text-2xl">Inigo Quilez</p>
                    <p className="text-indigo-500/60 mt-1">Founding Researcher</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Compute Cycle Cost</p>
                    <p className="font-bold text-2xl text-emerald-400">Low-Latency</p>
                    <p className="text-slate-600 mt-1">Optimized for 120Hz</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Precision Model</p>
                    <p className="font-bold text-2xl">High-P / FP32</p>
                    <p className="text-slate-600 mt-1">IEEE 754 Standard</p>
                 </div>
                 <div>
                    <p className="text-slate-500 uppercase mb-4 tracking-widest">Pipeline Version</p>
                    <p className="font-bold text-2xl text-rose-400">WebGL 2.0</p>
                    <p className="text-slate-600 mt-1">ES 3.0 Compliance</p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Section 01: The Problem of Brute Force */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-20 bg-indigo-500/20 rounded-[32px] flex items-center justify-center text-indigo-400 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                 <Cpu size={40} />
              </div>
              <h2 className="text-5xl font-serif font-bold italic text-white tracking-tight">The Arithmetic Bottleneck.</h2>
           </div>
           
           <div className="space-y-12">
              <p className="text-4xl font-light leading-relaxed text-slate-400">
                 "In the realm of real-time graphics, every pixel is a micro-battle for efficiency. Brute-force geometry rendering (polygons) faces a massive <strong>Memory Bandwidth ceiling</strong>. Procedural rendering, specifically through Signed Distance Functions (SDFs), shifts the load from Memory to Arithmetic, where modern GPUs truly shine."
              </p>
              <p className="text-2xl text-slate-500 leading-relaxed font-light">
                 Our research demonstrates that by replacing traditional mesh-based workflows with raymarched distance fields, we can achieve photorealistic lighting and complex organic forms with a 40% reduction in total power consumption on mobile hardware. The secret lies in <strong>Arithmetic Compression</strong>—the art of using mathematical approximations to bypass expensive floating-point operations.
              </p>
           </div>
        </section>

        {/* Section 02: Mathematical Formalism - Raymarching SDFs */}
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
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    Technical Mechanism // RAY_MARCH_V4
                 </div>
                 <h2 className="text-7xl font-serif font-bold leading-tight text-white">The Sphere Tracing <br /> Algorithm.</h2>
                 
                 <div className="space-y-10">
                    <p className="text-xl text-slate-500 leading-relaxed">
                       Traditional raycasting checks for intersection at fixed intervals. Sphere tracing (raymarching) uses the <strong>minimum distance returned by the SDF</strong> to jump the maximum safe distance along the ray.
                    </p>
                    
                    <div className="p-10 bg-black rounded-[48px] border border-white/5 font-mono text-sm leading-relaxed text-indigo-300 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-20"><Settings size={40} /></div>
                       <div className="space-y-4">
                          <div className="text-slate-600">// The Core Raymarching Loop</div>
                          <div>
                             <span className="text-purple-400">float</span> <span className="text-white">t</span> = 0.0;<br />
                             <span className="text-purple-400">for</span> (<span className="text-purple-400">int</span> i=0; i{'<'}128; i++) &#123;<br />
                             &nbsp;&nbsp;<span className="text-purple-400">vec3</span> <span className="text-white">p</span> = ro + t * rd;<br />
                             &nbsp;&nbsp;<span className="text-purple-400">float</span> <span className="text-white">d</span> = sceneSDF(p);<br />
                             &nbsp;&nbsp;<span className="text-purple-400">if</span> (d {'<'} 0.001) <span className="text-purple-400">break</span>;<br />
                             &nbsp;&nbsp;t += d;<br />
                             &nbsp;&nbsp;<span className="text-purple-400">if</span> (t {'>'} 20.0) <span className="text-purple-400">break</span>;<br />
                             &#125;
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-6">
                 <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full animate-pulse" />
                    <div className="relative w-full h-full border border-white/10 rounded-[80px] bg-black/40 backdrop-blur-3xl p-16 flex flex-col items-center justify-center text-center overflow-hidden">
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                       
                       <motion.div 
                          animate={{ 
                             rotate: [0, 360],
                             scale: [1, 1.1, 1],
                          }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-64 h-64 border-2 border-indigo-500/30 rounded-full flex items-center justify-center relative"
                       >
                          <div className="w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 blur-3xl rounded-full" />
                          <Box className="absolute text-indigo-400" size={80} />
                          <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-spin-slow" />
                       </motion.div>

                       <div className="mt-12 space-y-4">
                          <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.4em]">Rendering Buffer A</p>
                          <p className="text-[10px] font-mono text-indigo-400 italic">SDF_CONSTRUCT_HEX_4F</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 03: Performance Forensics */}
        <section className="px-6 max-w-7xl mx-auto mb-60">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-4 space-y-12 sticky top-40">
                 <h2 className="text-5xl font-serif font-bold text-white">The Precision <br /> Forensics.</h2>
                 <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Our comparative study measures "Time-to-Pixel" (TTP) and "Energy Consumption per Frame" (ECPF) across various hardware architectures.
                 </p>
                 <div className="space-y-6">
                    <div className="p-10 rounded-[48px] bg-indigo-500/5 border border-indigo-500/10">
                       <BarChart3 className="text-indigo-400 mb-6" size={32} />
                       <p className="text-5xl font-black text-white">40% <span className="text-xs font-mono text-indigo-400 uppercase font-bold tracking-widest">Power Efficiency</span></p>
                       <p className="text-sm text-slate-500 mt-4 leading-relaxed italic">"Achieved through the elimination of triangle rasterization bottlenecks."</p>
                    </div>
                    <div className="p-10 rounded-[48px] bg-indigo-500/5 border border-indigo-500/10">
                       <Database className="text-indigo-400 mb-6" size={32} />
                       <p className="text-5xl font-black text-white">0.02ms <span className="text-xs font-mono text-indigo-400 uppercase font-bold tracking-widest">Update Latency</span></p>
                       <p className="text-sm text-slate-500 mt-4 leading-relaxed italic">"Arithmetic complexity remains constant regardless of viewport scale."</p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                    {
                       title: "Branchless Logic",
                       desc: "Modern GPUs hate conditional branching (if statements). Our optimization replaces branches with mathematical functions like step(), clamp(), and smoothstep() to keep the SIMD lanes fully occupied.",
                       icon: Binary,
                       stat: "Throughput: +62%"
                    },
                    {
                       title: "Foveated Raymarching",
                       desc: "By decreasing the step count at the periphery of the frame and concentrating compute cycles at the focal point, we can simulate high-resolution details with low-resolution compute costs.",
                       icon: Eye,
                       stat: "Perceptual Gains: 2.4x"
                    },
                    {
                       title: "Hardware-Agnostic Noise",
                       desc: "Traditional Perlin noise is expensive. Our 'FBM' (Fractal Brownian Motion) implementation uses bit-shifting and hash functions to generate organic textures in a single GPU cycle.",
                       icon: Sparkles,
                       stat: "Entropy Score: 0.98"
                    },
                    {
                       title: "Temporal Reprojection",
                       desc: "We reuse data from the previous frame to calculate sub-pixel details, effectively doubling the perceived frame rate while maintaining 100% arithmetic accuracy.",
                       icon: Timer,
                       stat: "FPS Boost: 1.8x"
                    }
                 ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 space-y-8 hover:bg-white/[0.04] transition-all">
                       <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400">
                          <item.icon size={32} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                       </div>
                       <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-500">{item.stat}</span>
                          <CheckCircle2 className="text-indigo-500/40" size={16} />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 04: Advanced Spec - Neural Rendering */}
        <section className="px-6 max-w-5xl mx-auto mb-60">
           <div className="p-20 rounded-[80px] bg-gradient-to-br from-indigo-500/10 to-rose-500/5 border border-white/10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-rose-500/10 blur-[100px] rounded-full" />
              
              <h2 className="text-5xl font-serif font-bold text-white mb-12">The Conclusion: <br /> <span className="italic">Post-Rasterization Era.</span></h2>
              
              <div className="space-y-10 text-2xl text-slate-400 font-light leading-relaxed">
                 <p>
                    The "Arithmetic Renaissance" in real-time graphics is just beginning. As GPU hardware moves toward unified memory and high-precision floating point units, the cost of complex mathematical rendering will continue to plummet.
                 </p>
                 <p>
                    Future research will focus on <strong>Neural Shader Fields</strong>—using light-weight neural networks to approximate complex light transport inside the fragment shader, achieving path-traced quality at 120Hz.
                 </p>
              </div>

              <div className="mt-20 flex flex-wrap gap-12 items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-500 shadow-2xl">
                       <ImageWithFallback src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200" />
                    </div>
                    <div>
                       <p className="text-2xl font-bold text-white">Inigo Quilez</p>
                       <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Lead Research Scientist @ Shadertoy</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-indigo-600 hover:text-white transition-all shadow-3xl shadow-indigo-500/10">
                       Cite Publication
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-white/10">
           <div className="max-w-xl mx-auto space-y-12">
              <div className="flex justify-center gap-1">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full" />)}
              </div>
              <p className="text-xs text-slate-700 font-mono uppercase tracking-[0.5em]">DOCUMENT END // CLEARANCE: LEVEL 4</p>
              <button onClick={onBack} className="px-20 py-8 bg-white text-slate-900 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-4xl shadow-indigo-500/20">
                 Return to Workbench
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default GLSLOptimization;
