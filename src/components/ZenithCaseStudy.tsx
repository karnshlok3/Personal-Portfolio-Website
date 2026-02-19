import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Cpu, MousePointer2, Layout, Sparkles, 
  Maximize2, Eye, Workflow, PenTool, Globe, Github
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ZenithCaseStudy = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans selection:bg-orange-200"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FDFCF9]/80 backdrop-blur-md">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-orange-100 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 bg-slate-900 text-white rounded-full px-6 flex items-center gap-2 font-bold text-sm">
            Launch Prototype <Globe size={16} />
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-40 px-6 max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">// Case Study: Zenith OS</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-slate-900 mb-8">
              Rethinking <br /> Spatial Interaction.
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100">
               <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Role</p>
                 <p className="font-bold">Interaction Designer & Dev</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Timeline</p>
                 <p className="font-bold">8 Weeks (Winter 2025)</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Stack</p>
                 <p className="font-bold">React, Framer, Three.js</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Goal</p>
                 <p className="font-bold">Beyond the Window Meta</p>
               </div>
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-[48px] overflow-hidden aspect-video shadow-2xl mb-32"
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1634207284450-f6ad4451b94f?q=80&w=1200" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* The Problem */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif font-bold text-slate-900">The Context</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>
              Since the 1970s, the "Desktop Metaphor" has dominated our digital lives. We use files, folders, and rectangular windows that overlap and hide content. But our physical world isn't made of flat overlapping rectangles.
            </p>
            <p className="font-bold text-slate-900">
              Zenith OS was born from a simple question: What if an operating system lived in a radial, spatial environment where distance indicated priority?
            </p>
          </div>
        </section>

        {/* Core Concepts Grid */}
        <section className="mb-40">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-50 space-y-6">
                 <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                    <Layout size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Radial Hierarchy</h3>
                 <p className="text-slate-500">Applications orbit the user. The closer an app is to the center, the more resources it consumes and the more detail it reveals.</p>
              </div>
              <div className="p-10 bg-slate-900 text-white rounded-[40px] shadow-2xl space-y-6">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400">
                    <Workflow size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Spatial Priority</h3>
                 <p className="text-slate-300">Forget minimize/maximize. Apps exist in a 3D z-space. Flick an app "away" to background it, pull it "close" to focus.</p>
              </div>
              <div className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-50 space-y-6">
                 <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                    <MousePointer2 size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Gestural Intent</h3>
                 <p className="text-slate-500">Interactions are based on physical momentum. Dragging has weight. Closing an app feels like closing a physical folder.</p>
              </div>
           </div>
        </section>

        {/* Design Process */}
        <section className="mb-40">
           <div className="mb-16">
              <h2 className="text-5xl font-serif font-bold mb-4">The Process</h2>
              <div className="h-1 w-24 bg-orange-400" />
           </div>
           
           <div className="space-y-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="space-y-6">
                    <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Phase 01: The Radial Grid</span>
                    <h3 className="text-3xl font-bold">Breaking the Grid.</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                       I started by mapping how the eye moves on a circular screen. We naturally focus on the center and use the periphery for context. I developed a "Polar Grid" system where every UI element's position is calculated via (radius, angle) rather than (x, y).
                    </p>
                    <ul className="space-y-4">
                       <li className="flex gap-3 items-start">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-400" />
                          <p className="text-slate-700 font-medium">Mapped visual attention spans across different radii.</p>
                       </li>
                       <li className="flex gap-3 items-start">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-400" />
                          <p className="text-slate-700 font-medium">Developed a custom math library for polar transformations.</p>
                       </li>
                    </ul>
                 </div>
                 <div className="rounded-[40px] overflow-hidden bg-slate-100 shadow-xl">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1717062010825-fa50480667ca?q=80&w=800" className="w-full h-full object-cover" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
                 <div className="md:order-2 space-y-6">
                    <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Phase 02: Momentum & Weight</span>
                    <h3 className="text-3xl font-bold">Making Pixels Heavy.</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                       To make Zenith feel "handcrafted," the physics had to be perfect. I used spring physics for every movement. If you flick an app to the side, it doesn't just slide—it has friction and mass.
                    </p>
                    <div className="p-6 bg-orange-50 rounded-[32px] border border-orange-100 italic text-slate-700">
                       "Digital objects often lack soul because they move linearly. By adding spring physics and friction, Zenith feels like a physical tool you've held before."
                    </div>
                 </div>
                 <div className="md:order-1 rounded-[40px] overflow-hidden bg-slate-100 shadow-xl">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1764588037085-a78240016f8b?q=80&w=800" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </section>

        {/* Outcomes */}
        <section className="mb-40 p-12 md:p-24 bg-slate-900 rounded-[64px] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px]" />
           <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
              <Sparkles size={48} className="text-orange-400 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold">The Result</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                 A fully functional React prototype that proves spatial computing isn't just for AR/VR—it can revolutionize how we use our standard screens today.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="text-center">
                    <p className="text-4xl font-black text-orange-400">40%</p>
                    <p className="text-sm font-bold text-slate-500 uppercase mt-2">Reduction in Tab Fatigue</p>
                 </div>
                 <div className="text-center">
                    <p className="text-4xl font-black text-orange-400">2x</p>
                    <p className="text-sm font-bold text-slate-500 uppercase mt-2">Faster Context Switching</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer Navigation */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-slate-100">
           <button 
             onClick={onBack}
             className="flex items-center gap-4 text-2xl font-serif font-bold group"
           >
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              Previous Project
           </button>
           <button 
             className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-orange-500 transition-colors shadow-xl"
           >
              Next Project: Pulse Audio
           </button>
        </footer>
      </main>
    </motion.div>
  );
};

export default ZenithCaseStudy;
