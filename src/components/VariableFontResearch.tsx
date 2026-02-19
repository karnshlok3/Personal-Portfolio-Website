import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Type, Move, Layers, Zap, Search, Globe, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const VariableFontResearch = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-[#FDFCFB] text-[#1D1D1F] font-sans selection:bg-orange-100 p-6 md:p-12 lg:p-20"
    >
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-black transition-colors mb-12 font-bold group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Laboratory
        </button>

        <header className="mb-24">
           <div className="flex justify-between items-baseline mb-8 border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Technical Brief #TYP-2016</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Microsoft / Adobe Collaborative</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">Variable Font Mechanics.</h1>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Author</p>
                 <p className="font-bold">John Hudson</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                 <p className="font-bold text-emerald-600">Standardized</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Year</p>
                 <p className="font-bold">2016</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Format</p>
                 <p className="font-bold">OpenType v1.8</p>
              </div>
           </div>
        </header>

        {/* Abstract */}
        <section className="mb-24">
           <p className="text-3xl font-light leading-relaxed text-slate-600 border-l-4 border-orange-500 pl-12 py-4">
              Variable fonts allow a single font file to behave like multiple fonts. By defining a <strong>n-dimensional design space</strong>, we can interpolate any character along multiple axes (Weight, Width, Optical Size) in real-time without extra asset loading.
           </p>
        </section>

        {/* Interpolation Theory */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tight">The Multi-Axis Master Strategy</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                 Before variable fonts, if you wanted a "Semi-Bold Condensed" font, you had to load a unique file. John Hudson's research proposed storing only the <strong>delta changes</strong> between a "Regular" and "Bold" master.
              </p>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                 <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Move size={18} className="text-orange-500" /> Linear Interpolation (LERP)
                 </h4>
                 <p className="text-sm text-slate-400 mb-6 font-mono">P(t) = (1-t)A + tB</p>
                 <p className="text-sm text-slate-500">
                    Where A is the baseline point, B is the target master, and t is the percentage along the axis (e.g., Weight).
                 </p>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-square bg-white border-2 border-slate-900 rounded-[48px] p-12 flex flex-col justify-between shadow-2xl overflow-hidden group">
                 <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400">
                    <span>AXIS_WEIGHT</span>
                    <div className="w-12 h-1 bg-slate-900" />
                    <span>AXIS_WIDTH</span>
                 </div>
                 <div className="flex-1 flex items-center justify-center">
                    <motion.span 
                      animate={{ 
                        fontWeight: [100, 900, 100],
                        fontStretch: ['50%', '200%', '50%']
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="text-[140px] leading-none"
                    >
                      B
                    </motion.span>
                 </div>
                 <div className="text-[10px] font-mono text-center text-slate-400 italic">
                    "Fluid motion through N-dimensional design space."
                 </div>
              </div>
           </div>
        </section>

        {/* Impact */}
        <section className="mb-32">
           <h2 className="text-4xl font-black mb-12">Performance & Responsive Design</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-bold">Size Reduction</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">Reducing font payload by up to 80% by consolidating 18 styles into 1 single binary.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <Layers size={24} />
                 </div>
                 <h3 className="text-xl font-bold">Optical Sizing</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">Automatically adjusting stroke thickness for small captions vs large headlines for max legibility.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Search size={24} />
                 </div>
                 <h3 className="text-xl font-bold">Fluid Layouts</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">Fonts that morph their width to perfectly fit any container without letter-spacing hacks.</p>
              </div>
           </div>
        </section>

        <footer className="text-center pt-20 border-t border-slate-200">
           <button onClick={onBack} className="px-12 py-5 bg-black text-white rounded-full font-bold hover:bg-orange-500 transition-colors shadow-2xl">
              Back to Laboratory View
           </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default VariableFontResearch;
