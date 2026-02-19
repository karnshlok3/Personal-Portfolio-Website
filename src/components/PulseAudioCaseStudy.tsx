import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Music, Activity, Zap, Sparkles, 
  Layers, Headphones, Share2, PenTool, Globe, Github,
  Volume2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PulseAudioCaseStudy = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0B] text-slate-100 font-sans selection:bg-indigo-500/30"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 bg-indigo-600 text-white rounded-full px-6 flex items-center gap-2 font-bold text-sm">
            Listen Now <Volume2 size={16} />
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
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">// Case Study: Pulse Audio</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-white mb-8">
              Seeing <br /> the Sound.
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
               <div>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Role</p>
                 <p className="font-bold text-slate-200">Creative Technologist</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Duration</p>
                 <p className="font-bold text-slate-200">12 Weeks (Fall 2025)</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Tech</p>
                 <p className="font-bold text-slate-200">Three.js, GLSL, Web Audio</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Focus</p>
                 <p className="font-bold text-slate-200">Generative Landscapes</p>
               </div>
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-[48px] overflow-hidden aspect-video shadow-2xl mb-32 relative group"
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1724961221869-cf0d4dc01062?q=80&w=1200" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
             <div className="flex items-center gap-4 text-indigo-400">
                <div className="flex gap-1">
                   {[1,2,3,4].map(i => <div key={i} className={`w-1 h-8 bg-current rounded-full animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />)}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest">Live Spectrum Analysis Active</span>
             </div>
          </div>
        </motion.div>

        {/* The Problem */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif font-bold text-white">The Core Hook</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-xl text-slate-400 leading-relaxed">
            <p>
              Traditional audio visualizers are often just reactive wallpapers—oscilloscopes or dancing bars that feel disconnected from the environment. I wanted to build something that felt like an ecosystem.
            </p>
            <p className="font-bold text-white">
              Pulse Audio transforms sound frequencies into geographical data. Bass controls the mountain peaks, mid-tones control the ripple of the water, and high-end frequencies generate the atmospheric "glow."
            </p>
          </div>
        </section>

        {/* Core Concepts Grid */}
        <section className="mb-40">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white/5 rounded-[40px] border border-white/5 space-y-6 hover:bg-white/10 transition-colors">
                 <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                    <Activity size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">FFT Analysis</h3>
                 <p className="text-slate-400">Real-time Fast Fourier Transform analysis breaks audio into frequency bins, used as the primary seed for vertex displacement.</p>
              </div>
              <div className="p-10 bg-indigo-900/20 rounded-[40px] border border-indigo-500/20 shadow-2xl space-y-6">
                 <div className="w-16 h-16 bg-indigo-400/20 rounded-2xl flex items-center justify-center text-indigo-400">
                    <Sparkles size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Generative Flora</h3>
                 <p className="text-slate-300">Beat-detection triggers the growth of digital trees and rocks, creating a persistent history of the song's energy.</p>
              </div>
              <div className="p-10 bg-white/5 rounded-[40px] border border-white/5 space-y-6 hover:bg-white/10 transition-colors">
                 <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                    <Headphones size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Flow Optimization</h3>
                 <p className="text-slate-400">Color palettes are algorithmically selected based on the song's BPM and key, ensuring the visuals match the user's focus state.</p>
              </div>
           </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="mb-40">
           <div className="mb-16">
              <h2 className="text-5xl font-serif font-bold mb-4">The Tech Stack</h2>
              <div className="h-1 w-24 bg-indigo-500" />
           </div>
           
           <div className="space-y-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="space-y-6">
                    <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Development: Vertex Shaders</span>
                    <h3 className="text-3xl font-bold text-white">Sculpting with Math.</h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                       Instead of moving objects, I move the mesh itself using GLSL shaders. By passing audio frequency data into the shader's uniform variables, I can deform 100,000 vertices at 60fps without stressing the CPU.
                    </p>
                    <div className="p-6 bg-white/5 rounded-[32px] border border-white/10 font-mono text-sm text-indigo-300">
                       gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y + (audioIntensity * noiseValue), position.z, 1.0);
                    </div>
                 </div>
                 <div className="rounded-[40px] overflow-hidden bg-slate-900 shadow-xl aspect-square">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1549317336-206569e8475c?q=80&w=800" className="w-full h-full object-cover opacity-80" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
                 <div className="md:order-2 space-y-6">
                    <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">UX: Synesthesia by Design</span>
                    <h3 className="text-3xl font-bold text-white">Atmospheric Depth.</h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                       The biggest challenge was "persistence." If a visualizer only reacts to the current second, it feels jittery. I implemented a rolling buffer that stores the last 5 seconds of audio data, creating trailing mountain ranges behind the user.
                    </p>
                    <div className="flex gap-4">
                       <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-bold">BLOOM EFFECTS</div>
                       <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-bold">FOG DISPLACEMENT</div>
                       <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-bold">DEPTH SENSING</div>
                    </div>
                 </div>
                 <div className="md:order-1 rounded-[40px] overflow-hidden bg-slate-900 shadow-xl aspect-square">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1595513279524-fa90ad188c98?q=80&w=800" className="w-full h-full object-cover opacity-60" />
                 </div>
              </div>
           </div>
        </section>

        {/* Outcomes */}
        <section className="mb-40 p-12 md:p-24 bg-gradient-to-tr from-indigo-900 to-slate-900 rounded-[64px] text-white overflow-hidden relative border border-white/10">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px]" />
           <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
              <Zap size={48} className="text-indigo-400 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold">The Impact</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                 Pulse Audio has become a staple for developers in the community, used as a companion tool for deep work sessions.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="text-center">
                    <p className="text-4xl font-black text-indigo-400">15k+</p>
                    <p className="text-sm font-bold text-slate-500 uppercase mt-2">Active Users</p>
                 </div>
                 <div className="text-center">
                    <p className="text-4xl font-black text-indigo-400">4.9/5</p>
                    <p className="text-sm font-bold text-slate-500 uppercase mt-2">Product Hunt Rating</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer Navigation */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-white/10">
           <button 
             onClick={onBack}
             className="flex items-center gap-4 text-2xl font-serif font-bold group text-white hover:text-indigo-400 transition-colors"
           >
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              Previous Project
           </button>
           <button 
             className="px-12 py-6 bg-white text-slate-900 rounded-full font-black text-xl hover:bg-indigo-400 hover:text-white transition-all shadow-xl"
           >
              Next Project: Common Ground
           </button>
        </footer>
      </main>
    </motion.div>
  );
};

export default PulseAudioCaseStudy;
