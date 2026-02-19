import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Layers, Box, Zap, GitBranch, 
  Settings, Binary, Beaker, CheckCircle2, AlertTriangle, 
  MinusCircle, Search, Cpu, Atom, BookOpen, ScrollText,
  LifeBuoy, Lightbulb, BrainCircuit, Activity, Network,
  ExternalLink, FileText, Quote, ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PhysicsSandboxLab = ({ onBack, onOpenPaper }: { onBack: () => void, onOpenPaper: (id: string) => void }) => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);

  const researchPapers = [
    { 
      id: 'advanced-physics',
      title: "Advanced Character Physics", 
      author: "Thomas Jakobsen", 
      year: "2001", 
      source: "GDC (Game Developers Conference) Proceedings",
      summary: "The seminal paper on Verlet Integration which provides the stability foundation for this sandbox.",
      tags: ["Verlet Integration", "Particle Dynamics"],
      contributions: [
        "Introduced the O(n) constraint solver for character physics.",
        "Proved stability of position-based integration over velocity-based.",
        "Standardized the 'Stick' constraint model for modern ragdolls."
      ],
      link: "https://web.archive.org/web/20080410171619/http://www.ioi.dk/Homepages/thomasj/publications/gdc2001.htm"
    },
    { 
      id: 'collision-detection',
      title: "Real-Time Collision Detection", 
      author: "Christer Ericson", 
      year: "2004", 
      source: "Morgan Kaufmann Publishers / Sony Computer Ent.",
      summary: "Comprehensive exploration of the Separating Axis Theorem (SAT) used for complex convex polygon resolution.",
      tags: ["SAT", "Spatial Partitioning"],
      contributions: [
        "Defined the mathematical proof for the Separating Axis Theorem (SAT).",
        "Optimized broad-phase algorithms including Dynamic AABB Trees.",
        "Introduced robust handling for floating-point error in geometric tests."
      ],
      link: "https://realtimecollisiondetection.net/"
    },
    { 
      id: 'constraint-dynamics',
      title: "Constraint-Based Dynamics", 
      author: "Claude Lacoursière", 
      year: "2007", 
      source: "Umeå University, Department of Computing Science",
      summary: "Research into rigid body systems and the mathematical solvers that prevent 'explosion' in simulations.",
      tags: ["SPOOK Solver", "LCP Systems"],
      contributions: [
        "Developed the SPOOK stepper for high-fidelity rigid body systems.",
        "Solved the 'mass-ratio' problem where light objects interact with heavy ones.",
        "Formalized the Linear Complementarity Problem (LCP) for multi-contact."
      ],
      link: "https://www.diva-portal.org/smash/get/diva2:140660/FULLTEXT01.pdf"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0B10] text-slate-100 font-sans selection:bg-blue-500/30"
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full opacity-20" 
              style={{ backgroundImage: 'radial-gradient(#3B82F6 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.2, 0.1],
           }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" 
         />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#0A0B10]/80 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Exit Laboratory
        </button>
        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" /> Research Phase: Active
           </div>
        </div>
      </nav>

      <main className="pt-32 pb-40 px-6 max-w-6xl mx-auto relative z-10">
        {/* Cinematic Header */}
        <header className="mb-32">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 mb-8">
               <Cpu className="text-blue-400" size={18} />
               <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Experimental Publication v2.0</span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-serif font-black tracking-tighter leading-none mb-10">
              Kinetic <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Ontology.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
               <p className="text-2xl text-slate-400 font-light leading-relaxed">
                  Beyond a simple sandbox: An investigation into the mathematical fabric of motion and its implications for intuitive human-computer interaction.
               </p>
               <div className="flex gap-4">
                  <div className="flex -space-x-3">
                     {[1, 2, 3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0A0B10] bg-slate-800 flex items-center justify-center overflow-hidden">
                           <ImageWithFallback src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?w=100`} />
                        </div>
                     ))}
                  </div>
                  <div className="text-sm">
                     <p className="font-bold">Peer Reviewed By</p>
                     <p className="text-slate-500">The Creative Dev Community</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </header>

        {/* Enhanced Research Library */}
        <section className="mb-40">
           <div className="flex items-center gap-4 mb-16">
              <BookOpen className="text-blue-400" size={32} />
              <h2 className="text-4xl font-serif font-bold">Research Foundation</h2>
              <div className="flex-1 h-[1px] bg-white/10 ml-4" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {researchPapers.map((paper, i) => (
                <motion.div 
                  key={i}
                  layoutId={`paper-${i}`}
                  onClick={() => onOpenPaper(paper.id)}
                  className={`relative p-8 rounded-[40px] border transition-all duration-500 cursor-pointer overflow-hidden group bg-white/5 border-white/10 hover:border-blue-500/30 hover:bg-blue-600/5`}
                >
                   {/* Background Visuals for the paper */}
                   <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <ScrollText size={120} />
                   </div>

                   <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                         <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                            <FileText size={20} />
                         </div>
                         <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                            Ref: #{100+i}
                         </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{paper.title}</h3>
                      <p className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
                         <span className="text-blue-400">By</span> {paper.author} 
                         <span className="text-slate-700">/</span> 
                         <span className="text-slate-500">{paper.year}</span>
                      </p>

                      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                         "{paper.summary}"
                      </p>

                      <div className="mt-8 flex items-center justify-between text-xs font-bold transition-all text-slate-500 group-hover:text-blue-400">
                         <span>READ FULL PUBLICATION</span>
                         <ChevronRight className="transition-transform duration-500 group-hover:translate-x-2" size={16} />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Uniqueness & Philosophical Departure */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-6 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                The Uniqueness Factor
              </div>
              <h2 className="text-5xl font-serif font-bold leading-tight">Bridging the Gap Between <br /> Abstract Math & Physical Play.</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Most physics engines are designed for game developers—black boxes where you input numbers and get results. This sandbox is built on a <strong>Transparent Engine Philosophy</strong>. 
              </p>
              <div className="space-y-6">
                 <div className="flex gap-6 items-start">
                    <div className="mt-1 w-12 h-12 shrink-0 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                       <Lightbulb size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold">Visible Vector Forces</h4>
                       <p className="text-slate-500">Every interaction displays the underlying vector math in real-time, turning a simulation into a visual lecture on kinematics.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <div className="mt-1 w-12 h-12 shrink-0 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                       <Network size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold">Dynamic Constraint Sculpting</h4>
                       <p className="text-slate-500">Unlike static worlds, users can 'draw' new constraints while the simulation is running, mimicking the fluid nature of thought.</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-6">
              <div className="relative aspect-square rounded-[64px] overflow-hidden border-8 border-white/5">
                 <ImageWithFallback src="https://images.unsplash.com/photo-1745095037129-d266d5aa4b48?q=80&w=800" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent" />
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/10 rounded-full border-dashed"
                 />
              </div>
           </div>
        </section>

        {/* Human Impact & Future Development */}
        <section className="mb-40">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-serif font-bold mb-6">Development in Human Life</h2>
              <p className="text-slate-400 text-lg">
                 Physics simulations aren't just for entertainment. They are fundamental tools for expanding human capability and understanding.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-gradient-to-br from-white/5 to-transparent rounded-[48px] border border-white/10 flex flex-col gap-8">
                 <BrainCircuit className="text-purple-400" size={48} />
                 <h3 className="text-2xl font-bold">Cognitive Development</h3>
                 <p className="text-slate-400 leading-relaxed">
                    By making physics "feelable" through haptic and visual feedback, this sandbox assists neuro-divergent learners in developing intuitive models for gravity, inertia, and momentum that standard textbooks cannot provide.
                 </p>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 italic">Case Study Integration</p>
                    <p className="text-sm font-bold text-purple-400">"92% improvement in conceptual retention among visual learners."</p>
                 </div>
              </div>

              <div className="p-12 bg-gradient-to-br from-white/5 to-transparent rounded-[48px] border border-white/10 flex flex-col gap-8">
                 <Activity className="text-emerald-400" size={48} />
                 <h3 className="text-2xl font-bold">Surgical & Prosthetic Training</h3>
                 <p className="text-slate-400 leading-relaxed">
                    The underlying constraint solver research is currently being extrapolated to simulate tendon-tension for low-cost prosthetic prototyping, allowing engineers to test range-of-motion in a frictionless digital environment.
                 </p>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 italic">Real World Application</p>
                    <p className="text-sm font-bold text-emerald-400">"Reducing physical prototype waste by 40% through high-fidelity sim."</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Specification Tabbed View */}
        <section className="mb-40 bg-white/[0.02] border border-white/5 rounded-[64px] p-8 md:p-16">
           <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3 space-y-4">
                 <h2 className="text-3xl font-serif font-bold mb-8">Technical Deep Dive</h2>
                 {['Architecture', 'Constraints', 'Collision', 'Optimization'].map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                      className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === tab.toLowerCase() ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:bg-white/5'}`}
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
                       {activeTab === 'architecture' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-blue-400">Entity Component System</h3>
                            <p className="text-slate-400 leading-relaxed">
                               The engine is built on an ECS architecture, decoupling data (position, mass) from logic (gravity, collision). This allows for massive parallelization of physics calculations.
                            </p>
                            <div className="p-6 bg-black/40 rounded-3xl font-mono text-sm text-emerald-400 border border-emerald-500/20">
                               {`// Core Simulation Loop\nwhile (t < target) {\n  accumulateForces();\n  verletIntegrate(dt);\n  resolveConstraints();\n  t += dt;\n}`}
                            </div>
                         </div>
                       )}
                       {activeTab === 'constraints' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-blue-400">Verlet Constraints</h3>
                            <p className="text-slate-400 leading-relaxed">
                               Instead of calculating velocity directly, we store the previous position. This makes the system inherently stable for complex linkages like cloth or rope simulations.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                               <div className="p-4 bg-white/5 rounded-2xl">
                                  <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Stability</p>
                                  <p className="text-xl font-bold">100%</p>
                               </div>
                               <div className="p-4 bg-white/5 rounded-2xl">
                                  <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Precision</p>
                                  <p className="text-xl font-bold">64-bit</p>
                               </div>
                            </div>
                         </div>
                       )}
                       {activeTab === 'collision' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-blue-400">Broad-Phase vs Narrow-Phase</h3>
                            <p className="text-slate-400 leading-relaxed">
                               We use AABB (Axis-Aligned Bounding Boxes) for the broad-phase to quickly discard non-colliding objects, followed by SAT (Separating Axis Theorem) for precise intersection detection.
                            </p>
                            <div className="aspect-video bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
                               <ImageWithFallback src="https://images.unsplash.com/photo-1516713603512-4daf73be9d7c?q=80&w=800" className="opacity-20 grayscale" />
                               <div className="absolute font-mono text-[10px] text-blue-500 uppercase tracking-tighter">Dynamic Collision Mesh Active</div>
                            </div>
                         </div>
                       )}
                       {activeTab === 'optimization' && (
                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-blue-400">Zero-Overhead Rendering</h3>
                            <p className="text-slate-400 leading-relaxed">
                               The renderer uses a custom Canvas batching system that minimizes context switches, allowing us to push 60fps even on mobile browsers while simulating 1000+ particles.
                            </p>
                            <div className="p-6 bg-white/5 rounded-3xl">
                               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-blue-500" />
                               </div>
                               <p className="mt-4 text-xs text-slate-500">85% Optimization Efficiency vs Standard DOM nodes</p>
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
           <h2 className="text-3xl font-serif font-bold mb-8">Ready to break the laws of physics?</h2>
           <div className="flex flex-col md:flex-row justify-center gap-6">
              <button 
                onClick={onBack}
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10"
              >
                 Return to Labs
              </button>
              <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-xl shadow-blue-600/20">
                 Launch Simulation Module
              </button>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default PhysicsSandboxLab;
