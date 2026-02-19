import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Palette, Type, MousePointer2, Sparkles, 
  Terminal, Cpu, Box, Search, Layers, ExternalLink,
  BookOpen, ScrollText, ChevronRight, FileText, 
  PenTool, BrainCircuit, Activity, Network, Lightbulb
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const GenerativeTypeLab = ({ onBack, onOpenPaper }: { onBack: () => void, onOpenPaper: (id: string) => void }) => {
  const [activeTab, setActiveTab] = useState('mechanics');
  const [testText, setTestText] = useState('GEN');
  const [axes, setAxes] = useState({ wght: 700, wdth: 100, ital: 0, opsz: 32 });

  const historyEvents = [
    { year: '1440', title: 'Gutenberg Press', desc: 'Movable type revolutionizes mass communication.' },
    { year: '1757', title: 'Baskerville', desc: 'Transitions to high-contrast, rationalist typography.' },
    { year: '1957', title: 'Helvetica', desc: 'Swiss style brings mid-century modernism to the masses.' },
    { year: '1984', title: 'Desktop Publishing', desc: 'PostScript & Apple LaserWriter make type accessible.' },
    { year: '2016', title: 'Variable Fonts', desc: 'OpenType 1.8 introduces the multi-axis design space.' },
    { year: '2025', title: 'Generative AI', desc: 'Type becomes fluid, context-aware, and infinite.' }
  ];

  const researchPapers = [
    {
      id: 'variable-font-mechanics',
      title: "Variable Font Mechanics",
      author: "John Hudson",
      year: "2016",
      source: "TypeTalks / Microsoft Typography",
      summary: "Exploration of the 'Interpolation' space in OpenType variable fonts and its impact on responsive design.",
      tags: ["OpenType", "Interpolation", "Axes"],
      contributions: [
        "Defined the standard for 'Design Space' axes (Weight, Width, Slant).",
        "Introduced the concept of 'Masters' in font interpolation.",
        "Optimized font-delivery size through delta-encoding."
      ]
    },
    {
      id: 'algorithmic-glyph-generation',
      title: "Algorithmic Glyph Generation",
      author: "Erik van Blokland",
      year: "2008",
      source: "RoboFab Project / Letterror",
      summary: "Research into using Python and Bezier algorithms to procedurally generate entire alphabets based on geometric rules.",
      tags: ["Procedural", "Python", "Bezier"],
      contributions: [
        "Developed the Unified Font Object (UFO) format for generative tools.",
        "Created 'Letterror'—the first truly procedural variable font system.",
        "Formalized the use of 'Noise' to simulate analog ink-bleed in digital fonts."
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0F0F0F] text-slate-100 font-sans selection:bg-orange-500/30"
    >
      {/* Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
              style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <motion.div 
           animate={{ 
             scale: [1, 1.3, 1],
             opacity: [0.1, 0.2, 0.1],
           }}
           transition={{ duration: 15, repeat: Infinity }}
           className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-orange-600/10 blur-[200px] rounded-full" 
         />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold text-slate-400 hover:text-orange-400 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Exit Laboratory
        </button>
        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" /> Typography Experiment: Active
           </div>
        </div>
      </nav>

      <main className="pt-32 pb-40 px-6 max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-32">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 mb-8">
               <Palette className="text-orange-400" size={18} />
               <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Experimental Typography v1.4</span>
            </div>
            <h1 className="text-7xl md:text-[140px] font-serif font-black tracking-tighter leading-none mb-10">
              Computational <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 italic">Typography.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
               <p className="text-2xl text-slate-400 font-light leading-relaxed">
                  Investigating the intersection of variable font technology and generative algorithms to create expressive, responsive, and "living" type.
               </p>
               <div className="flex gap-4">
                  <div className="flex -space-x-3">
                     {[4, 5, 6].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0F0F0F] bg-slate-800 flex items-center justify-center overflow-hidden">
                           <ImageWithFallback src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?w=100`} />
                        </div>
                     ))}
                  </div>
                  <div className="text-sm">
                     <p className="font-bold">Peer Reviewed By</p>
                     <p className="text-slate-500">The Design Engineering Collective</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </header>

        {/* History Timeline */}
        <section className="mb-40">
           <div className="flex items-center gap-4 mb-16">
              <ScrollText className="text-orange-400" size={32} />
              <h2 className="text-4xl font-serif font-bold">The Evolution of Type</h2>
              <div className="flex-1 h-[1px] bg-white/10 ml-4" />
           </div>
           
           <div className="relative pt-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5" />
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                 {historyEvents.map((event, i) => (
                    <div key={i} className="relative pt-8 group">
                       <div className="absolute top-[-4px] left-0 w-8 h-2 bg-orange-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                       <span className="text-xs font-mono text-orange-400 mb-2 block">{event.year}</span>
                       <h4 className="font-bold text-white mb-2">{event.title}</h4>
                       <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest">{event.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Interactive Type Tester */}
        <section className="mb-40">
           <div className="flex items-center gap-4 mb-16">
              <MousePointer2 className="text-orange-400" size={32} />
              <h2 className="text-4xl font-serif font-bold">Interactive Type Tester</h2>
              <div className="flex-1 h-[1px] bg-white/10 ml-4" />
           </div>

           <div className="bg-white/[0.02] border border-white/10 rounded-[64px] p-8 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                 <div className="lg:col-span-4 space-y-10">
                    <div>
                       <label className="text-xs font-mono text-slate-500 uppercase mb-4 block">Input String</label>
                       <input 
                          type="text" 
                          value={testText} 
                          onChange={(e) => setTestText(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-orange-500/50 transition-colors"
                       />
                    </div>
                    
                    <div className="space-y-8">
                       <div>
                          <div className="flex justify-between text-xs font-mono text-slate-500 uppercase mb-4">
                             <span>Weight (wght)</span>
                             <span>{axes.wght}</span>
                          </div>
                          <input 
                             type="range" min="100" max="900" step="1" 
                             value={axes.wght} 
                             onChange={(e) => setAxes({...axes, wght: parseInt(e.target.value)})}
                             className="w-full accent-orange-500"
                          />
                       </div>
                       <div>
                          <div className="flex justify-between text-xs font-mono text-slate-500 uppercase mb-4">
                             <span>Width (wdth)</span>
                             <span>{axes.wdth}%</span>
                          </div>
                          <input 
                             type="range" min="50" max="200" step="1" 
                             value={axes.wdth} 
                             onChange={(e) => setAxes({...axes, wdth: parseInt(e.target.value)})}
                             className="w-full accent-rose-500"
                          />
                       </div>
                       <div>
                          <div className="flex justify-between text-xs font-mono text-slate-500 uppercase mb-4">
                             <span>Optical Size (opsz)</span>
                             <span>{axes.opsz}pt</span>
                          </div>
                          <input 
                             type="range" min="8" max="144" step="1" 
                             value={axes.opsz} 
                             onChange={(e) => setAxes({...axes, opsz: parseInt(e.target.value)})}
                             className="w-full accent-blue-500"
                          />
                       </div>
                    </div>
                 </div>

                 <div className="lg:col-span-8 flex items-center justify-center min-h-[400px] border border-white/5 bg-black/40 rounded-[48px] overflow-hidden p-12">
                    <motion.div 
                       style={{ 
                          fontWeight: axes.wght,
                          fontStretch: `${axes.wdth}%`,
                          fontSize: `${axes.opsz * 2}px`,
                          lineHeight: 1
                       }}
                       className="font-serif text-white tracking-tighter text-center break-all select-none"
                    >
                       {testText || 'Type...'}
                    </motion.div>
                 </div>
              </div>
           </div>
        </section>

        {/* Research Library */}
        <section className="mb-40">
           <div className="flex items-center gap-4 mb-16">
              <BookOpen className="text-orange-400" size={32} />
              <h2 className="text-4xl font-serif font-bold">Research Foundation</h2>
              <div className="flex-1 h-[1px] bg-white/10 ml-4" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchPapers.map((paper, i) => (
                <motion.div 
                  key={i}
                  onClick={() => onOpenPaper(paper.id)}
                  className="relative p-10 rounded-[40px] border border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-orange-600/5 transition-all duration-500 cursor-pointer group overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Type size={120} />
                   </div>

                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/20">
                            <FileText size={24} />
                         </div>
                         <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                            Ref: #T-0{i+1}
                         </div>
                      </div>

                      <h3 className="text-3xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{paper.title}</h3>
                      <p className="text-xs font-mono text-slate-500 mb-8">
                         <span className="text-orange-400">By</span> {paper.author} <span className="mx-2">/</span> {paper.year}
                      </p>

                      <p className="text-slate-400 text-lg leading-relaxed mb-12">
                         "{paper.summary}"
                      </p>

                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-orange-400 transition-colors">
                         <span>READ FULL PUBLICATION</span>
                         <ChevronRight className="transition-transform duration-500 group-hover:translate-x-2" size={16} />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Uniqueness Section */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-6 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest">
                The Philosophical Shift
              </div>
              <h2 className="text-5xl font-serif font-bold leading-tight">Moving Beyond <br /> the Static Character.</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Traditional fonts are sets of fixed vectors. Generative Type reimagines fonts as <strong>dynamic systems of rules</strong> that respond to environmental stimuli, user behavior, and mathematical noise.
              </p>
              <div className="space-y-6">
                 <div className="flex gap-6 items-start">
                    <div className="mt-1 w-12 h-12 shrink-0 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400">
                       <BrainCircuit size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold">Responsive Aesthetics</h4>
                       <p className="text-slate-500">Fonts that automatically adjust weight based on ambient light or legibility based on reading distance.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <div className="mt-1 w-12 h-12 shrink-0 bg-rose-500/20 rounded-2xl flex items-center justify-center text-rose-400">
                       <Network size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold">Algorithmic Variation</h4>
                       <p className="text-slate-500">Utilizing Perlin noise to give digital characters a "handwritten" soul, ensuring no two instances of a glyph are identical.</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-6">
              <div className="relative aspect-square rounded-[64px] overflow-hidden border-8 border-white/5 bg-white/5 flex items-center justify-center p-12">
                 <ImageWithFallback src="https://images.unsplash.com/photo-1580746171752-696bf78660fb?q=80&w=800" className="w-full h-full object-cover opacity-50 grayscale" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                        fontWeight: [400, 900, 400]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="text-[200px] font-serif font-black text-orange-400 leading-none select-none drop-shadow-[0_0_50px_rgba(251,146,60,0.3)]"
                    >
                      A
                    </motion.span>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
              </div>
           </div>
        </section>

        {/* Human Impact Section */}
        <section className="mb-40">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-serif font-bold mb-6">Human Life Integration</h2>
              <p className="text-slate-400 text-lg">
                 Typography is the interface through which we consume 90% of the web. Making it more human and responsive is a cognitive necessity.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-gradient-to-br from-white/5 to-transparent rounded-[48px] border border-white/10 flex flex-col gap-8">
                 <Activity className="text-blue-400" size={48} />
                 <h3 className="text-2xl font-bold">Assistive Reading</h3>
                 <p className="text-slate-400 leading-relaxed">
                    By dynamically adjusting x-height and letter-spacing for dyslexic readers in real-time, generative type systems can reduce reading fatigue by up to 35% compared to static fonts.
                 </p>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4 italic">Accessibility Research</p>
                    <p className="text-sm font-bold text-blue-400">"Personalized typography as a standard for inclusive web design."</p>
                 </div>
              </div>

              <div className="p-12 bg-gradient-to-br from-white/5 to-transparent rounded-[48px] border border-white/10 flex flex-col gap-8">
                 <Lightbulb className="text-rose-400" size={48} />
                 <h3 className="text-2xl font-bold">Emotional Communication</h3>
                 <p className="text-slate-400 leading-relaxed">
                    Typography that shifts weight and slant based on the sentiment analysis of the text being written, adding a layer of non-verbal emotional cues to digital correspondence.
                 </p>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4 italic">Psychological Impact</p>
                    <p className="text-sm font-bold text-rose-400">"Bridging the gap between spoken tone and written word."</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Specification */}
        <section className="mb-40 bg-white/[0.02] border border-white/5 rounded-[64px] p-8 md:p-16">
           <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3 space-y-4">
                 <h2 className="text-3xl font-serif font-bold mb-8">Technical Blueprint</h2>
                 {['Mechanics', 'Algorithms', 'Rendering', 'Axes'].map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                      className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === tab.toLowerCase() ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20' : 'text-slate-500 hover:bg-white/5'}`}
                    >
                       {tab}
                    </button>
                 ))}
              </div>
              <div className="md:w-2/3 min-h-[400px]">
                 <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                       {activeTab === 'mechanics' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-orange-400">Variable Interpolation</h3>
                            <p className="text-slate-400 leading-relaxed">
                               The engine calculates intermediate bezier paths between "Masters". Instead of loading 10 separate font files, we load 1 file and calculate the 1000s of variations on the fly.
                            </p>
                            <div className="p-6 bg-black/40 rounded-3xl font-mono text-sm text-emerald-400 border border-emerald-500/20">
                               {`// CSS Variable Axis Control\n.element {\n  font-variation-settings: 'wght' var(--weight), 'wdth' var(--width);\n  transition: font-variation-settings 0.3s ease;\n}`}
                            </div>
                         </div>
                       )}
                       {activeTab === 'algorithms' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-orange-400">Bezier Deformation</h3>
                            <p className="text-slate-400 leading-relaxed">
                               By applying displacement maps to the control points of a bezier curve, we can procedurally alter glyph shapes while maintaining topological integrity.
                            </p>
                            <div className="aspect-video bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center">
                               <ImageWithFallback src="https://images.unsplash.com/photo-1743778812446-89def1e784cf?q=80&w=800" className="opacity-20 grayscale" />
                               <div className="absolute font-mono text-[10px] text-orange-500 uppercase">Generating Perlin Displacement...</div>
                            </div>
                         </div>
                       )}
                       {activeTab === 'rendering' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-orange-400">Sub-Pixel Antialiasing</h3>
                            <p className="text-slate-400 leading-relaxed">
                               Custom rendering pipeline utilizing the Canvas API to ensure that generative variations are rendered with razor-sharp precision regardless of zoom level or display density.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                               <div className="p-4 bg-white/5 rounded-2xl">
                                  <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Smoothing</p>
                                  <p className="text-xl font-bold text-orange-400">Sub-Pixel</p>
                               </div>
                               <div className="p-4 bg-white/5 rounded-2xl">
                                  <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Engine</p>
                                  <p className="text-xl font-bold text-orange-400">v1.4 Core</p>
                               </div>
                            </div>
                         </div>
                       )}
                       {activeTab === 'axes' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-orange-400">Custom Design Axes</h3>
                            <p className="text-slate-400 leading-relaxed">
                               Beyond standard axes, we've developed custom axes for 'Gooeyness', 'Shakiness', and 'Organic Expansion', allowing for unique expressive ranges.
                            </p>
                            <div className="p-6 bg-white/5 rounded-3xl">
                               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
                                  <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="h-full bg-orange-500" />
                                </div>
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
                                  <motion.div initial={{ width: 0 }} animate={{ width: '45%' }} className="h-full bg-rose-500" />
                                </div>
                               <p className="mt-4 text-xs text-slate-500">Custom Design Axes: 92% Calibration Complete</p>
                            </div>
                         </div>
                       )}
                    </motion.div>
                 </AnimatePresence>
              </div>
           </div>
        </section>

        {/* Final Footer Call */}
        <footer className="text-center pt-20 border-t border-white/5">
           <h2 className="text-3xl font-serif font-bold mb-8">Ready to evolve your typeface?</h2>
           <div className="flex flex-col md:flex-row justify-center gap-6">
              <button 
                onClick={onBack}
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10"
              >
                 Return to Labs
              </button>
              <button className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all shadow-xl shadow-orange-600/20">
                 Launch Font Experimenter
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default GenerativeTypeLab;
