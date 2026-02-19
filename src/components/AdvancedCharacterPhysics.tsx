import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, ScrollText, Quote, ChevronRight, Hash, Database, Binary } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AdvancedCharacterPhysics = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C] font-serif selection:bg-orange-100 p-6 md:p-12 lg:p-20"
    >
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-black transition-colors mb-12 font-sans font-bold group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Laboratory
        </button>

        <header className="border-b-2 border-black/10 pb-12 mb-20">
           <div className="flex justify-between items-baseline mb-6">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-slate-400">Technical Report #2001-A</span>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-slate-400">GDC Proceedings</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">Advanced Character Physics</h1>
           <div className="flex flex-col md:flex-row gap-8 font-sans">
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Author</p>
                 <p className="font-bold">Thomas Jakobsen</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Affiliation</p>
                 <p className="font-bold">IO Interactive (Hitman Series)</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Date</p>
                 <p className="font-bold">February 2001</p>
              </div>
           </div>
        </header>

        {/* Abstract */}
        <section className="mb-24">
           <div className="bg-white p-12 border-l-8 border-black shadow-sm italic text-xl leading-relaxed relative">
              <Quote className="absolute top-4 left-4 text-black/5" size={64} />
              "This paper presents a robust and efficient method for animating characters based on physics simulations. By utilizing Verlet Integration and a simple constraint solver, we achieve stable ragdoll effects and cloth simulations that were previously computationally prohibitive for real-time applications."
           </div>
        </section>

        {/* History & Context */}
        <section className="mb-24 space-y-8">
           <h2 className="text-3xl font-black flex items-center gap-3">
              <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-sans">01</span>
              Historical Context
           </h2>
           <div className="text-lg leading-relaxed space-y-6 font-serif opacity-80">
              <p>
                 Before 2001, most real-time physics in games relied on <strong>Euler Integration</strong>. While intuitive, Euler is notoriously unstable for rigid body systems. If an object moved too fast or had too many constraints, the system would "explode"—vertices would fly off into infinity as rounding errors compounded.
              </p>
              <p>
                 Thomas Jakobsen, working on the <em>Hitman: Codename 47</em> engine, needed a way to simulate dead bodies (ragdolls) that didn't glitch when colliding with stairs or walls. He looked back at 18th-century molecular dynamics to find a solution.
              </p>
           </div>
        </section>

        {/* The Core Concept: Verlet Integration */}
        <section className="mb-24 space-y-12">
           <h2 className="text-3xl font-black flex items-center gap-3">
              <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-sans">02</span>
              Verlet Integration
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 text-lg leading-relaxed opacity-80">
                 <p>
                    The genius of Verlet is that it <strong>removes velocity from the equation</strong>. Instead of storing how fast an object is going, we store its current position and its <em>previous</em> position.
                 </p>
                 <div className="p-8 bg-slate-900 text-white rounded-3xl font-sans space-y-4">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">The Formula</p>
                    <p className="text-2xl font-mono leading-relaxed">
                       x<sub className="text-xs">new</sub> = 2x - x<sub className="text-xs">old</sub> + a * Δt²
                    </p>
                 </div>
                 <p>
                    By calculating the difference between the two, velocity is implicitly maintained. This makes the system incredibly stable even when we manually move objects to satisfy constraints.
                 </p>
              </div>
              <div className="rounded-3xl overflow-hidden border-2 border-black/5 shadow-2xl">
                 <ImageWithFallback src="https://images.unsplash.com/photo-1758685849011-b3efeb6e1122?q=80&w=800" className="w-full h-full object-cover" />
              </div>
           </div>
        </section>

        {/* Concept: Constraints */}
        <section className="mb-24 space-y-8">
           <h2 className="text-3xl font-black flex items-center gap-3">
              <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-sans">03</span>
              Constraint Satisfaction
           </h2>
           <div className="text-lg leading-relaxed space-y-6 font-serif opacity-80">
              <p>
                 Jakobsen introduced the "Relaxation" method. If two particles are connected by a stick of length 10, but have moved to a distance of 12, we simply pull them both back until the distance is 10. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                 <div className="p-6 bg-white border border-black/5 rounded-2xl">
                    <Hash className="mb-4 text-orange-500" />
                    <h4 className="font-bold mb-2">Iterative Solving</h4>
                    <p className="text-sm">Run the satisfaction loop multiple times per frame for stiffer constraints.</p>
                 </div>
                 <div className="p-6 bg-white border border-black/5 rounded-2xl">
                    <Database className="mb-4 text-blue-500" />
                    <h4 className="font-bold mb-2">Memory Efficient</h4>
                    <p className="text-sm">No need to store complex Jacobian matrices or solve massive linear systems.</p>
                 </div>
                 <div className="p-6 bg-white border border-black/5 rounded-2xl">
                    <Binary className="mb-4 text-emerald-500" />
                    <h4 className="font-bold mb-2">Implicit Velocity</h4>
                    <p className="text-sm">Moving particles to satisfy constraints automatically updates their velocity.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Conclusion */}
        <footer className="pt-20 border-t-2 border-black/10 text-center">
           <p className="text-slate-400 font-sans text-sm uppercase tracking-widest mb-4">End of Report</p>
           <button onClick={onBack} className="px-10 py-4 bg-black text-white rounded-full font-sans font-bold hover:bg-orange-600 transition-colors shadow-xl">
              Return to Project View
           </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default AdvancedCharacterPhysics;
