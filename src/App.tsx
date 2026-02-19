import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import {
  Github, Twitter, Linkedin, Mail, ArrowRight, ExternalLink,
  Code2, Palette, Sparkles, Terminal, Cpu, Camera,
  Music, MapPin, Coffee, Zap, Layers, MousePointer2,
  Smile, Heart, PenTool, Image as LucideImage, Maximize2,
  Send, MessageCircle, ArrowUp, FileText
} from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import shlokHero from 'figma:asset/0c4049b60953bdcb167699e085ecf8206213901e.png';

import ZenithCaseStudy from './components/ZenithCaseStudy';
import PulseAudioCaseStudy from './components/PulseAudioCaseStudy';
import CommonGroundCaseStudy from './components/CommonGroundCaseStudy';
import PhysicsSandboxLab from './components/PhysicsSandboxLab';
import AdvancedCharacterPhysics from './components/AdvancedCharacterPhysics';
import CollisionDetectionResearch from './components/CollisionDetectionResearch';
import ConstraintDynamicsResearch from './components/ConstraintDynamicsResearch';
import GenerativeTypeLab from './components/GenerativeTypeLab';
import VariableFontResearch from './components/VariableFontResearch';
import AlgorithmicGlyphResearch from './components/AlgorithmicGlyphResearch';
import LofiPlayerLab from './components/LofiPlayerLab';
import ShadersLab from './components/ShadersLab';
import CursorPackLab from './components/CursorPackLab';
import TooltipsLab from './components/TooltipsLab';
import LofiPsychoacoustics from './components/LofiPsychoacoustics';
import GLSLOptimization from './components/GLSLOptimization';
import KineticInteractionTheory from './components/KineticInteractionTheory';
import UtilityFirstArchitectures from './components/UtilityFirstArchitectures';
import MicroFeedbackResearch from './components/MicroFeedbackResearch';
import ProceduralBeatGen from './components/ProceduralBeatGen';
import VisualStimuliResearch from './components/VisualStimuliResearch';
import AccessibilityInPopovers from './components/AccessibilityInPopovers';
import PhotographyGallery from './components/PhotographyGallery';
import ResumePage from './components/ResumePage';

// --- Decorative Components ---

const Noise = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
);

const Sticker = ({ children, className, rotate = 0 }: { children: React.ReactNode, className?: string, rotate?: number }) => (
  <motion.div
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    whileHover={{ scale: 1.1, rotate: rotate + 5 }}
    whileDrag={{ scale: 1.2, zIndex: 50 }}
    style={{ rotate }}
    className={`absolute cursor-grab active:cursor-grabbing select-none px-4 py-2 bg-white rounded-lg shadow-md border border-slate-100 flex items-center gap-2 text-sm font-bold z-20 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ children, subtitle, align = 'left' }: any) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block"
    >
      // {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-serif font-bold text-slate-900 tracking-tight"
    >
      {children}
    </motion.h2>
  </div>
);

// --- Content Components ---

const ProjectCardAdvanced = ({ title, description, tags, learning, image, index, onViewCaseStudy }: any) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center mb-32`}
    >
      <div className="flex-1 relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 to-rose-50 rounded-[40px] rotate-[-2deg] scale-x-105 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
        <motion.div
          whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
          className="rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/50 aspect-video md:aspect-square lg:aspect-video"
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <div className={`absolute bottom-6 ${isEven ? '-right-6' : '-left-6'} hidden lg:flex flex-col gap-2`}>
          {tags.slice(0, 3).map((tag: string, i: number) => (
            <motion.div
              key={tag}
              initial={{ x: isEven ? 20 : -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-50 text-xs font-bold uppercase tracking-widest text-slate-600"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-6xl font-serif font-black text-slate-100 group-hover:text-orange-100 transition-colors">0{index + 1}</span>
          <h3 className="text-4xl font-serif font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          {description}
        </p>
        <div className="p-6 bg-slate-50 rounded-3xl border-l-4 border-orange-400">
          <h4 className="text-sm font-bold text-orange-600 uppercase mb-2 flex items-center gap-2">
            <PenTool size={16} /> The Growth Moment
          </h4>
          <p className="text-slate-700 italic">"{learning}"</p>
        </div>
        {onViewCaseStudy ? (
          <motion.button
            onClick={onViewCaseStudy}
            whileHover={{ x: 10 }}
            className="inline-flex items-center gap-2 text-slate-900 font-bold group/link cursor-pointer"
          >
            View Case Study <ArrowRight size={20} className="group-hover/link:text-orange-500 transition-colors" />
          </motion.button>
        ) : (
          <motion.a
            href="#"
            whileHover={{ x: 10 }}
            className="inline-flex items-center gap-2 text-slate-900 font-bold group/link"
          >
            Coming Soon <ArrowRight size={20} className="group-hover/link:text-orange-500 transition-colors" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [showZenithCaseStudy, setShowZenithCaseStudy] = useState(false);
  const [showPulseAudioCaseStudy, setShowPulseAudioCaseStudy] = useState(false);
  const [showCommonGroundCaseStudy, setShowCommonGroundCaseStudy] = useState(false);
  const [showPhysicsLab, setShowPhysicsLab] = useState(false);
  const [showGenerativeTypeLab, setShowGenerativeTypeLab] = useState(false);
  const [showLofiLab, setShowLofiLab] = useState(false);
  const [showShadersLab, setShowShadersLab] = useState(false);
  const [showCursorLab, setShowCursorLab] = useState(false);
  const [showTooltipsLab, setShowTooltipsLab] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showPaper, setShowPaper] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const rotateHero = useTransform(scrollYProgress, [0, 0.2], [0, -2]);

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {showPaper === 'advanced-physics' ? (
          <AdvancedCharacterPhysics key="advanced-physics" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'collision-detection' ? (
          <CollisionDetectionResearch key="collision-detection" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'constraint-dynamics' ? (
          <ConstraintDynamicsResearch key="constraint-dynamics" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'variable-font-mechanics' ? (
          <VariableFontResearch key="variable-font" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'algorithmic-glyph-generation' ? (
          <AlgorithmicGlyphResearch key="glyph-gen" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'lofi-psychoacoustics' ? (
          <LofiPsychoacoustics key="lofi-paper" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'glsl-optimization' ? (
          <GLSLOptimization key="glsl-paper" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'kinetic-interaction-theory' ? (
          <KineticInteractionTheory key="kinetic-paper" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'micro-feedback-loops' ? (
          <MicroFeedbackResearch key="micro-feedback-paper" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'shader-visual-psychology' ? (
          <VisualStimuliResearch key="visual-stimuli-paper" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'procedural-beat-gen' ? (
          <ProceduralBeatGen key="procedural-beat-paper" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'utility-first-architectures' ? (
          <UtilityFirstArchitectures key="utility-paper" onBack={() => setShowPaper(null)} />
        ) : showPaper === 'accessibility-in-popovers' ? (
          <AccessibilityInPopovers key="a11y-paper" onBack={() => setShowPaper(null)} />
        ) : showZenithCaseStudy ? (
          <ZenithCaseStudy key="zenith" onBack={() => setShowZenithCaseStudy(false)} />
        ) : showPulseAudioCaseStudy ? (
          <PulseAudioCaseStudy key="pulse" onBack={() => setShowPulseAudioCaseStudy(false)} />
        ) : showCommonGroundCaseStudy ? (
          <CommonGroundCaseStudy key="common-ground" onBack={() => setShowCommonGroundCaseStudy(false)} />
        ) : showPhysicsLab ? (
          <PhysicsSandboxLab
            key="physics-lab"
            onBack={() => setShowPhysicsLab(false)}
            onOpenPaper={(id) => setShowPaper(id)}
          />
        ) : showGenerativeTypeLab ? (
          <GenerativeTypeLab
            key="generative-type-lab"
            onBack={() => setShowGenerativeTypeLab(false)}
            onOpenPaper={(id) => setShowPaper(id)}
          />
        ) : showLofiLab ? (
          <LofiPlayerLab
            key="lofi-lab"
            onBack={() => setShowLofiLab(false)}
            onOpenPaper={(id) => setShowPaper(id)}
          />
        ) : showShadersLab ? (
          <ShadersLab
            key="shaders-lab"
            onBack={() => setShowShadersLab(false)}
            onOpenPaper={(id) => setShowPaper(id)}
          />
        ) : showCursorLab ? (
          <CursorPackLab
            key="cursor-lab"
            onBack={() => setShowCursorLab(false)}
            onOpenPaper={(id) => setShowPaper(id)}
          />
        ) : showTooltipsLab ? (
          <TooltipsLab
            key="tooltips-lab"
            onBack={() => setShowTooltipsLab(false)}
            onOpenPaper={(id) => setShowPaper(id)}
          />
        ) : showGallery ? (
          <PhotographyGallery key="gallery" onBack={() => setShowGallery(false)} />
        ) : showResume ? (
          <ResumePage key="resume" onBack={() => setShowResume(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Noise />

            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-[100]"
            />

            <motion.div
              style={{ y: backgroundY }}
              className="fixed inset-0 pointer-events-none -z-10"
            >
              <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-orange-200/20 blur-[120px] rounded-full animate-pulse" />
              <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-100/30 blur-[140px] rounded-full" />
              <div className="absolute top-[40%] right-[5%] w-[300px] h-[300px] bg-rose-100/20 blur-[100px] rounded-full" />
            </motion.div>

            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-1 p-1 bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl shadow-slate-200/50">
              {['Home', 'Work', 'Story', 'Labs', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-6 py-2.5 rounded-full text-sm font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>

            <main>
              <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
                <motion.div
                  style={{ scale: heroScale, opacity: heroOpacity, rotate: rotateHero }}
                  className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  <div className="lg:col-span-7 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                    >
                      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm border border-slate-100 rounded-full text-sm font-bold text-slate-700 mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        Available for Spring 2026 Internships
                      </div>

                      <h1 className="text-7xl md:text-[110px] font-serif font-black leading-[0.9] tracking-tighter text-slate-900 mb-8 relative">
                        <motion.span className="block">Crafting</motion.span>
                        <motion.span className="relative block">
                          Digital
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute bottom-4 left-0 h-4 bg-orange-400/20 -z-10"
                          />
                        </motion.span>
                        <motion.span className="block">Experiences.</motion.span>
                      </h1>

                      <p className="text-2xl md:text-3xl text-slate-500 max-w-2xl leading-relaxed mb-12 font-medium">
                        I’m <span className="text-slate-900 font-bold underline decoration-orange-400 decoration-4 underline-offset-8">Shlok Karn</span>, a student designer & developer building products that feel like they were made by a human, for humans.
                      </p>

                      <div className="flex flex-wrap gap-6 items-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const workSection = document.getElementById('work');
                            workSection?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-10 py-5 bg-slate-900 text-white rounded-[24px] font-black text-lg flex items-center gap-3 shadow-2xl shadow-slate-300 transition-transform"
                        >
                          View My Work <ArrowRight />
                        </motion.button>
                        <div className="flex items-center -space-x-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-14 h-14 rounded-full border-4 border-[#FDFCF9] overflow-hidden bg-slate-200">
                              <ImageWithFallback src={shlokHero} className="w-full h-full object-cover" />
                            </div>
                          ))}
                          <div className="pl-6 font-bold text-slate-400"> Trusted by early-stage startups</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-5 relative hidden lg:block">
                    <motion.div
                      initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: -2, scale: 1 }}
                      transition={{ delay: 0.3, duration: 1, type: "spring" }}
                      className="relative z-10"
                    >
                      <div className="aspect-[4/5] bg-slate-100 rounded-[60px] overflow-hidden shadow-3xl group">
                        <ImageWithFallback
                          src={shlokHero}
                          className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>

                      <Sticker className="top-10 -left-12 rotate-[-12deg] bg-yellow-100 text-yellow-800">
                        <Smile size={18} /> Student @ UW
                      </Sticker>
                      <Sticker className="bottom-20 -right-16 rotate-[8deg] bg-blue-100 text-blue-800">
                        <Zap size={18} /> 14+ Hackathons
                      </Sticker>
                      <Sticker className="top-1/2 -left-20 rotate-[-5deg] bg-rose-100 text-rose-800">
                        <Heart size={18} /> Design Engineering
                      </Sticker>

                      <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 right-10 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-50 z-30 max-w-[200px]"
                      >
                        <div className="flex gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map(s => <Sparkles key={s} size={14} className="text-orange-400" />)}
                        </div>
                        <p className="text-sm font-bold text-slate-800 leading-tight">
                          "He doesn't just code, he builds with soul."
                        </p>
                        <p className="text-[10px] text-slate-400 mt-2 font-mono uppercase tracking-widest">— Random Mentor</p>
                      </motion.div>
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-[100px] -z-10" />
                  </div>
                </motion.div>
              </section>

              <section id="work" className="max-w-7xl mx-auto px-6 py-40">
                <SectionHeading subtitle="The Portfolio">Selected Projects</SectionHeading>
                <div className="space-y-40">
                  <ProjectCardAdvanced
                    index={0}
                    title="Zenith OS"
                    description="A conceptual operating system focused on radial interactions and spatial awareness. Built to explore how we can move beyond the traditional 'window' metaphor."
                    tags={['Next.js', 'Framer Motion', 'Interaction Design']}
                    learning="I learned that breaking conventions is risky, but it's where the most delight lives."
                    image="https://images.unsplash.com/photo-1762503203730-ca33982518af?q=80&w=1200"
                    onViewCaseStudy={() => setShowZenithCaseStudy(true)}
                  />
                  <ProjectCardAdvanced
                    index={1}
                    title="Pulse Audio"
                    description="An immersive audio visualizer that transforms your local workspace music into 3D generative landscapes."
                    tags={['Three.js', 'Web Audio API', 'React']}
                    learning="Performance is a design feature. Optimizing 3D rendering for low-end devices taught me a lot."
                    image="https://images.unsplash.com/photo-1724961221869-cf0d4dc01062?q=80&w=1200"
                    onViewCaseStudy={() => setShowPulseAudioCaseStudy(true)}
                  />
                  <ProjectCardAdvanced
                    index={2}
                    title="Common Ground"
                    description="A hyperlocal community platform for urban gardeners to trade seeds and knowledge."
                    tags={['React Native', 'Supabase', 'UX Research']}
                    learning="Talking to real users changed the whole product."
                    image="https://images.unsplash.com/photo-1761415451360-3847fc21bc79?q=80&w=1200"
                    onViewCaseStudy={() => setShowCommonGroundCaseStudy(true)}
                  />
                </div>
              </section>

              <section id="labs" className="bg-slate-900 py-32 overflow-hidden relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                      <span className="text-orange-400 font-mono text-sm tracking-widest uppercase mb-4 block">// Experimental</span>
                      <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">The Creative Labs.</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: 'Physics Sandbox', type: 'React + Matter.js', icon: Layers, onClick: () => setShowPhysicsLab(true) },
                      { title: 'Generative Type', type: 'Canvas API', icon: Palette, onClick: () => setShowGenerativeTypeLab(true) },
                      { title: 'Custom Cursor Pack', type: 'SVG Animation', icon: MousePointer2, onClick: () => setShowCursorLab(true) },
                      { title: 'Lofi Player', type: 'Web Audio', icon: Music, onClick: () => setShowLofiLab(true) },
                      { title: 'Shaders 101', type: 'GLSL', icon: Sparkles, onClick: () => setShowShadersLab(true) },
                      { title: 'Tooltips.css', type: 'Open Source', icon: Code2, onClick: () => setShowTooltipsLab(true) },
                    ].map((lab, i) => (
                      <motion.div
                        key={i}
                        onClick={lab.onClick}
                        whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                        className="p-8 rounded-[32px] border border-white/10 flex flex-col gap-6 group cursor-pointer"
                      >
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all duration-300">
                          <lab.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{lab.title}</h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* --- STORY SECTION (THE HUMAN BEHIND THE CODE) --- */}
              <section id="story" className="max-w-7xl mx-auto px-6 py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                  <div className="relative group lg:sticky lg:top-40">
                    <div className="aspect-[4/5] bg-slate-100 rounded-[48px] overflow-hidden rotate-[-2deg] shadow-2xl transition-transform group-hover:rotate-0 duration-500 border-8 border-white relative">
                      <ImageWithFallback src="https://images.unsplash.com/photo-1758366279159-cc85ee15dca5?q=80&w=1080" className="w-full h-full object-cover" />
                    </div>

                    {/* Animated Quote Sticker - Outside the Image (Above) */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-6, -4, -6]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-8 -left-8 w-56 h-56 bg-[#fff9c4] shadow-xl p-6 flex flex-col justify-center items-center text-center transform -rotate-6 border-b-4 border-yellow-200/50 z-30 cursor-grab"
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      whileHover={{ scale: 1.1, rotate: -2 }}
                      whileDrag={{ scale: 1.2, zIndex: 50 }}
                    >
                      <span className="font-serif italic text-slate-800 text-lg leading-tight">"A desk is a physical manifestation of a busy mind."</span>
                      <div className="mt-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest italic">Personal Philosophy</div>
                    </motion.div>

                    {/* Floating Personality Tags */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 max-w-[180px] rotate-6"
                    >
                      <div className="text-orange-500 mb-2"><Sparkles size={24} /></div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">Always asking "What if we tried...?"</p>
                    </motion.div>

                    {/* New Content Below Image on the Left */}
                    <div className="mt-20 space-y-6">
                      <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Current Vibe</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-75" />
                            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-150" />
                          </div>
                        </div>
                        <p className="text-slate-800 font-medium">Status: Dreaming in GLSL and micro-interactions.</p>
                        <div className="flex items-center gap-3 text-sm text-slate-500 bg-slate-50 p-3 rounded-xl italic">
                          <PenTool size={14} className="text-orange-500" />
                          Currently reading: "Design as Art" by Bruno Munari
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowResume(true)}
                        className="p-8 bg-orange-500 rounded-[32px] text-white flex items-center justify-between group cursor-pointer shadow-xl shadow-orange-500/20"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <FileText size={28} />
                          </div>
                          <div>
                            <h4 className="font-bold text-xl leading-tight">Professional Resume</h4>
                            <p className="text-orange-100 text-sm font-medium">View career history & tools</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-orange-500 transition-all">
                          <ArrowRight size={20} />
                        </div>
                      </motion.div>

                      <div className="flex items-center gap-6 p-6 bg-slate-900 rounded-[32px] overflow-hidden relative">
                        <div className="flex flex-col gap-1 w-8 shrink-0">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: [4, 16, 4] }}
                              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                              className="w-1 bg-orange-400 rounded-full mx-auto"
                            />
                          ))}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Currently Playing</p>
                          <p className="text-white font-bold truncate">lofi hip hop radio - beats to relax/study to</p>
                          <p className="text-slate-400 text-xs truncate">ChilledCow // Spotify</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-10">
                          <Music size={80} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-16">
                    <div className="space-y-8">
                      <span className="text-orange-500 font-mono text-sm tracking-widest uppercase block">// The Narrative</span>
                      <h2 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 tracking-tight leading-[0.85]">Wait, Who is <br /><span className="text-orange-500 italic">Shlok??</span></h2>

                      <div className="space-y-8 text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                        <p>
                          I’m a student at the <span className="text-slate-900 font-bold italic">University of Washington</span>, navigating the weird and wonderful gap between design and engineering.
                        </p>
                        <p>
                          My journey didn't start with a keyboard, but with a shutter button. As a street photographer, I spent years chasing shadows and light, learning that the best stories aren't told—they're captured in the messy, unscripted details of reality.
                        </p>
                        <p>
                          I believe digital products should feel <span className="text-slate-900 font-bold">handcrafted, not mass-produced</span>. I’m obsessed with micro-interactions, the subtle physics of a scroll, and the "beautiful friction" that makes an interface feel human.
                        </p>
                      </div>
                    </div>

                    {/* The Personal Toolkit (Skills as Tools) */}
                    <div className="space-y-8 pt-12 border-t border-slate-100">
                      <h3 className="text-3xl font-serif font-bold text-slate-900 italic">The Toolkit.</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { label: 'The Lens', tech: 'Design, Motion, UX', color: 'bg-orange-50 text-orange-700' },
                          { label: 'The Engine', tech: 'React, TypeScript, Three.js', color: 'bg-blue-50 text-blue-700' },
                          { label: 'The Compass', tech: 'Strategy, Storytelling', color: 'bg-rose-50 text-rose-700' },
                          { label: 'The Canvas', tech: 'Figma, GLSL, WebGL', color: 'bg-indigo-50 text-indigo-700' },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                            className={`${item.color} p-6 rounded-3xl border border-current/10`}
                          >
                            <h4 className="font-black uppercase tracking-tighter text-xl mb-1">{item.label}</h4>
                            <p className="text-xs font-mono uppercase tracking-widest opacity-80">{item.tech}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Experience Narrative */}
                    <div className="space-y-8 pt-12 border-t border-slate-100">
                      <h3 className="text-3xl font-serif font-bold text-slate-900 italic">The Journey.</h3>
                      <div className="space-y-8">
                        {[
                          { year: '2026', title: 'Creative Engineering Intern', at: 'Stealth Startup', desc: 'Building high-performance UI components with soul.' },
                          { year: '2025', title: 'Design Lead', at: 'UW Hackers', desc: 'Crafting brand identities for 500+ participants.' },
                          { year: '2024', title: 'Street Photographer', at: 'Independent', desc: 'Capturing the unscripted energy of urban life.' },
                        ].map((exp, i) => (
                          <div key={i} className="flex gap-6 group">
                            <div className="font-mono text-sm text-orange-500 font-black pt-1">{exp.year}</div>
                            <div className="space-y-1">
                              <h4 className="font-bold text-slate-900 text-lg group-hover:text-orange-500 transition-colors">{exp.title} <span className="text-slate-400 font-normal">at {exp.at}</span></h4>
                              <p className="text-slate-500 font-medium">{exp.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      onClick={() => setShowGallery(true)}
                      className="bg-slate-900 rounded-[40px] p-10 md:p-14 overflow-hidden relative cursor-pointer group shadow-2xl shadow-slate-900/40"
                    >
                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white relative">
                          <Camera size={36} />
                          <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 border border-orange-400 rounded-full"
                          />
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-2">
                          <h3 className="text-3xl font-serif font-bold text-white italic">Enter the "Lens Archive"</h3>
                          <p className="text-slate-400 text-lg">A visual dump of my 100+ favorite frames.</p>
                        </div>
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                          <Maximize2 />
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-0" />
                    </motion.div>
                  </div>
                </div>
              </section>

              <section id="contact" className="relative py-40 overflow-hidden bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <motion.div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-slate-100 relative rotate-[-1deg]">
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white"><Send size={20} /></div>
                          <span className="font-mono text-xs uppercase tracking-[0.4em] text-slate-400">Postmark: Tomorrow</span>
                        </div>
                        <h2 className="text-5xl font-serif font-black text-slate-900">Let's build <span className="italic text-orange-500">something real.</span></h2>
                        <motion.a href="mailto:karnshlok3@gmail.com" className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-4 group hover:text-orange-500 transition-colors">
                          karnshlok3@gmail.com <ArrowRight className="text-orange-500" />
                        </motion.a>
                      </div>
                      <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#fff9c4] p-6 shadow-2xl rotate-6 flex flex-col justify-center text-center cursor-grab border-b-4 border-yellow-200">
                        <Coffee className="mx-auto mb-2 text-yellow-600/50" />
                        <span className="text-sm font-serif italic text-slate-800">"Coffee is my secondary language."</span>
                      </motion.div>
                    </motion.div>

                    <div className="lg:pt-20 space-y-16">
                      <div className="space-y-4">
                        <span className="text-orange-500 font-mono text-sm tracking-widest uppercase block">// Digital Presence</span>
                        <h3 className="text-4xl font-serif font-bold text-slate-900">Where I hang out online.</h3>
                      </div>
                      <div className="relative h-[250px] w-full">
                        {[
                          { name: 'Twitter', icon: Twitter, color: 'bg-[#1DA1F2]', x: 0, y: 0, href: 'https://x.com/ShlokKarn03' },
                          { name: 'GitHub', icon: Github, color: 'bg-[#333]', x: 120, y: 50, href: 'https://github.com/24bk1a05d0-cmyk' },
                          { name: 'LinkedIn', icon: Linkedin, color: 'bg-[#0077B5]', x: 40, y: 140, href: 'https://www.linkedin.com/in/shlok-karn-809993360' },
                          { name: 'Discord', icon: MessageCircle, color: 'bg-[#5865F2]', x: 180, y: 150, href: '#' },
                        ].map((social) => (
                          <motion.a key={social.name} href={social.href} drag dragConstraints={{ left: -50, right: 300, top: -50, bottom: 200 }} initial={{ x: social.x, y: social.y }} className={`absolute p-6 rounded-3xl shadow-xl flex items-center gap-4 text-white cursor-grab ${social.color}`}>
                            <social.icon size={24} />
                            <span className="font-mono text-xs font-bold uppercase tracking-widest">{social.name}</span>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            <footer className="py-20 bg-white relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-slate-100 pt-20">
                <div className="flex items-center gap-2 font-serif font-black text-3xl">
                  <span className="text-orange-500 italic">S.</span>Karn
                </div>
                <div className="text-xs font-mono text-slate-300 uppercase tracking-[0.4em]">Handcrafted • © 2026 Shlok Karn</div>
                <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <ArrowUp size={20} />
                </motion.button>
              </div>
              <div className="absolute -bottom-20 left-0 right-0 text-center pointer-events-none opacity-[0.02]">
                <span className="text-[25vw] font-serif font-black italic tracking-tighter">CREATOR</span>
              </div>
            </footer>
          </motion.div>
        )
        }
      </AnimatePresence >
    </div >
  );
}
