import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Map, Shield, Zap, Search, Globe, Move, Grid3X3, Layers, Hash } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CollisionDetectionResearch = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-[#F8F9FB] text-[#1A202C] font-sans p-6 md:p-12 lg:p-20"
    >
      <div className="max-w-5xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-12 font-bold group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Laboratory
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
           <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">Specialist Publication</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">Real-Time <br /> <span className="text-blue-600">Collision</span> <br /> Detection.</h1>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-12">
                 The definitive research on geometric intersection, spatial partitioning, and mathematical proofs for physical interaction.
              </p>
              <div className="flex gap-12 border-t border-slate-200 pt-8">
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lead Researcher</p>
                    <p className="font-bold">Christer Ericson</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Release</p>
                    <p className="font-bold">December 2004</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-[64px] -rotate-3" />
              <div className="relative aspect-[3/4] rounded-[64px] overflow-hidden shadow-2xl border-4 border-white rotate-3 group hover:rotate-0 transition-transform duration-700">
                 <ImageWithFallback src="https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?q=80&w=800" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>

        {/* SAT Theory Section */}
        <section className="mb-40">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <div className="w-16 h-16 bg-blue-600 text-white rounded-[24px] flex items-center justify-center shadow-lg shadow-blue-200">
                    <Move size={32} />
                 </div>
                 <h2 className="text-4xl font-black tracking-tight">Separating Axis Theorem (SAT)</h2>
                 <p className="text-xl text-slate-600 leading-relaxed">
                    The core of the research proves that if two convex objects are not intersecting, there must exist an axis onto which their projections do not overlap.
                 </p>
                 <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm space-y-4">
                    <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest">The Implementation Logic</h4>
                    <p className="text-slate-500 text-sm">
                       For every edge of both shapes, we calculate the normal (the projection axis). We then project every vertex of both shapes onto that normal. If we find a gap, we stop—collision is impossible.
                    </p>
                 </div>
              </div>
              <div className="relative">
                 {/* Visual Diagram Placeholder for SAT */}
                 <div className="w-full aspect-square bg-slate-900 rounded-[64px] p-12 flex flex-col justify-between text-white overflow-hidden group">
                    <div className="flex justify-between items-start">
                       <span className="text-[10px] font-mono text-slate-500">DIAGRAM_SAT_01</span>
                       <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                    <div className="relative flex-1 flex items-center justify-center">
                       <motion.div 
                         animate={{ rotate: 360 }}
                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                         className="w-48 h-48 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center"
                       >
                          <div className="w-32 h-32 bg-blue-600/40 blur-3xl rounded-full" />
                       </motion.div>
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-1 bg-blue-500/50 rotate-45" />
                          <div className="w-40 h-1 bg-emerald-500/50 -rotate-45" />
                       </div>
                    </div>
                    <p className="text-xs text-slate-400 font-mono italic">"A gap on any one axis proves non-collision."</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Spatial Partitioning */}
        <section className="mb-40 space-y-16">
           <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2 className="text-4xl font-black">Optimization: Spatial Partitioning</h2>
              <p className="text-xl text-slate-600">
                 In a world with 10,000 objects, checking every object against every other object requires 100 million tests. Ericson's research formalizes how to divide space to reduce this complexity.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'AABB Trees', icon: Grid3X3, desc: 'Hierarchical bounding boxes that allow for O(log n) discovery of potential collisions.' },
                { title: 'Hash Grids', icon: Hash, desc: 'Uniform spatial hashing that maps world coordinates to fixed-size buckets for O(1) lookups.' },
                { title: 'Octrees', icon: Layers, desc: 'Recursive 3D decomposition of space into eight octants, perfect for large static environments.' }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white rounded-[40px] border border-slate-100 group hover:border-blue-500 transition-colors">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={28} />
                   </div>
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Floating Point Stability */}
        <section className="mb-40 p-16 bg-slate-900 rounded-[64px] text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
           <div className="relative z-10 max-w-3xl space-y-8">
              <h2 className="text-4xl font-black italic">Precision vs. Robustness</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                 Computers aren't perfect. Ericson highlights that the "perfect mathematical proof" often fails in code because of <strong>floating-point precision</strong>. His work defines the "Epsilon" strategy—calculating collisions with a tiny buffer to prevent objects from getting stuck inside one another.
              </p>
              <div className="flex gap-4">
                 <div className="px-6 py-3 border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest">Float64 Active</div>
                 <div className="px-6 py-3 border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest">Error Margin: 0.0001</div>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-slate-200">
           <button onClick={onBack} className="px-12 py-5 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-slate-900 transition-all shadow-2xl shadow-blue-200">
              Back to Laboratory View
           </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default CollisionDetectionResearch;
