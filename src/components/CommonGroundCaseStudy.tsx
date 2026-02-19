import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Leaf, Users, Map, ShieldCheck, 
  Smartphone, MessageSquare, Heart, PenTool, Globe, Github,
  WifiOff
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CommonGroundCaseStudy = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-emerald-100"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FDFBF7]/80 backdrop-blur-md border-b border-emerald-900/5">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold text-emerald-800/60 hover:text-emerald-900 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-colors text-emerald-900">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 bg-emerald-900 text-white rounded-full px-6 flex items-center gap-2 font-bold text-sm">
            Visit Community <Globe size={16} />
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
            <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-4 block">// Case Study: Common Ground</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-emerald-950 mb-8">
              Growing <br /> Together.
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-emerald-100">
               <div>
                 <p className="text-xs font-bold text-emerald-800/40 uppercase tracking-widest mb-1">Role</p>
                 <p className="font-bold text-emerald-900">Lead Product Designer</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-emerald-800/40 uppercase tracking-widest mb-1">Duration</p>
                 <p className="font-bold text-emerald-900">4 Months (Spring 2025)</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-emerald-800/40 uppercase tracking-widest mb-1">Stack</p>
                 <p className="font-bold text-emerald-900">React Native, Supabase</p>
               </div>
               <div>
                 <p className="text-xs font-bold text-emerald-800/40 uppercase tracking-widest mb-1">Focus</p>
                 <p className="font-bold text-emerald-900">Local Food Security</p>
               </div>
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-[48px] overflow-hidden aspect-[16/10] shadow-2xl mb-32 relative group border-[12px] border-white"
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1761415451360-3847fc21bc79?q=80&w=1200" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* The Problem */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif font-bold text-emerald-950">The Human Connection</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-xl text-emerald-900/70 leading-relaxed">
            <p>
              In dense urban environments, gardening is often a solitary act hidden on balconies or in small patches. While many people have surplus seeds or knowledge, there was no centralized, trusted way to share these resources hyper-locally.
            </p>
            <p className="font-bold text-emerald-900">
              Common Ground was designed to turn "neighbors" into "gardeners." It’s a tool for sharing surplus, building local food resilience, and fostering cross-generational knowledge exchange.
            </p>
          </div>
        </section>

        {/* Core Concepts Grid */}
        <section className="mb-40">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white rounded-[40px] border border-emerald-50 space-y-6 shadow-sm">
                 <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
                    <Map size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-emerald-950">Micro-Local Discovery</h3>
                 <p className="text-emerald-800/60">A radius-based search that prioritizes gardeners within walking distance to reduce the carbon footprint of trades.</p>
              </div>
              <div className="p-10 bg-emerald-900 text-emerald-50 rounded-[40px] shadow-2xl space-y-6">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-300">
                    <WifiOff size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Offline-First Sync</h3>
                 <p className="text-emerald-100/60">Gardens are often dead zones for WiFi. I built a robust local-storage sync that uploads data once the user returns home.</p>
              </div>
              <div className="p-10 bg-white rounded-[40px] border border-emerald-50 space-y-6 shadow-sm">
                 <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-700">
                    <ShieldCheck size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Trust Protocol</h3>
                 <p className="text-emerald-800/60">A community-vetted badge system that identifies expert seed savers and active community contributors.</p>
              </div>
           </div>
        </section>

        {/* The Research */}
        <section className="mb-40">
           <div className="mb-16">
              <h2 className="text-5xl font-serif font-bold mb-4 text-emerald-950">User Research</h2>
              <div className="h-1 w-24 bg-orange-400" />
           </div>
           
           <div className="space-y-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="space-y-6">
                    <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Method: Field Observation</span>
                    <h3 className="text-3xl font-bold text-emerald-900">Getting My Hands Dirty.</h3>
                    <p className="text-lg text-emerald-900/70 leading-relaxed">
                       I spent three weeks visiting community gardens in Seattle. I realized that the "seed trade" wasn't just a transaction—it was a 20-minute conversation about soil pH and sunlight. The app needed to facilitate these conversations, not just the trade.
                    </p>
                    <ul className="space-y-4">
                       <li className="flex gap-3 items-start">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-400" />
                          <p className="text-emerald-900 font-medium">Conducted 12 in-person interviews with urban gardeners.</p>
                       </li>
                       <li className="flex gap-3 items-start">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-400" />
                          <p className="text-emerald-900 font-medium">Identified "accessibility" as a major hurdle for older users.</p>
                       </li>
                    </ul>
                 </div>
                 <div className="rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1659187924893-1f4e5aca0b7f?q=80&w=800" className="w-full h-full object-cover" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
                 <div className="md:order-2 space-y-6">
                    <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Design: Radical Accessibility</span>
                    <h3 className="text-3xl font-bold text-emerald-900">Contrast & Clarity.</h3>
                    <p className="text-lg text-emerald-900/70 leading-relaxed">
                       Gardening happens outdoors in bright sunlight. Standard UI often fails here. I designed a "High Sunlight" mode with 24pt minimum font sizes and pure black/white contrast options for maximum readability in the field.
                    </p>
                    <div className="p-8 bg-emerald-50 rounded-[40px] border border-emerald-100 flex items-center gap-6">
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                          <Smartphone size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-emerald-800 uppercase tracking-tighter">Resulting Metric</p>
                          <p className="text-2xl font-black text-emerald-950">98% Accessibility Score</p>
                       </div>
                    </div>
                 </div>
                 <div className="md:order-1 rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1628243989859-db92e2de1340?q=80&w=800" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </section>

        {/* Community Impact */}
        <section className="mb-40 p-12 md:p-24 bg-emerald-950 rounded-[64px] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />
           <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <Users size={48} className="text-orange-400 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Growing the Future</h2>
              <p className="text-xl text-emerald-100/60 leading-relaxed">
                 Within 3 months of launch, Common Ground facilitated over 450 seed trades and helped establish two new neighborhood community gardens.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                 <div className="text-center">
                    <p className="text-4xl font-black text-orange-400">1.2k</p>
                    <p className="text-xs font-bold text-emerald-400 uppercase mt-2 tracking-widest">Total Trades</p>
                 </div>
                 <div className="text-center">
                    <p className="text-4xl font-black text-orange-400">24</p>
                    <p className="text-xs font-bold text-emerald-400 uppercase mt-2 tracking-widest">Neighborhoods</p>
                 </div>
                 <div className="text-center">
                    <p className="text-4xl font-black text-orange-400">85%</p>
                    <p className="text-xs font-bold text-emerald-400 uppercase mt-2 tracking-widest">Retention Rate</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer Navigation */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-emerald-100">
           <button 
             onClick={onBack}
             className="flex items-center gap-4 text-2xl font-serif font-bold group text-emerald-950"
           >
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              Previous Project
           </button>
           <button 
             className="px-12 py-6 bg-emerald-900 text-white rounded-full font-black text-xl hover:bg-orange-500 transition-colors shadow-xl"
           >
              Contact Shlok
           </button>
        </footer>
      </main>
    </motion.div>
  );
};

export default CommonGroundCaseStudy;
