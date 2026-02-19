import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { ArrowLeft, Camera, Maximize2, Aperture, Heart, Smile, Zap, Sparkles, MapPin, Search } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';

// BASE SOURCE IMAGES (18 unique high-quality sources)
const sourceImages = [
  { url: "https://images.unsplash.com/photo-1665321755791-5e4295c9a7d4?q=80&w=1200", title: "Sunset Peaks", category: "Nature", note: "The mountains were screaming in gold." },
  { url: "https://images.unsplash.com/photo-1732667221862-92ad76c92b4f?q=80&w=1200", title: "Urban Neon", category: "Places", note: "City lights tell the best lies." },
  { url: "https://images.unsplash.com/photo-1770682758164-ae8af63a69aa?q=80&w=1200", title: "Macro Geometry", category: "Abstract", note: "God is in the details." },
  { url: "https://images.unsplash.com/photo-1718058537557-7c1609373ef6?q=80&w=1200", title: "Creative Chaos", category: "Sudden", note: "A messy desk is a sign of a busy mind." },
  { url: "https://images.unsplash.com/photo-1601151793890-a7f8d0cdb41a?q=80&w=1200", title: "Rainy Streets", category: "Places", note: "Reflection of a lonely world." },
  { url: "https://images.unsplash.com/photo-1758525865344-bd4e2bfce5ca?q=80&w=1200", title: "Pure Joy", category: "Joy", note: "Laughing until it hurts." },
  { url: "https://images.unsplash.com/photo-1764663178603-b9831cb54929?q=80&w=1200", title: "Bloom", category: "Nature", note: "Nature's slow explosion." },
  { url: "https://images.unsplash.com/photo-1763361735358-f296c926ecdb?q=80&w=1200", title: "Vintage Soul", category: "Portraits", note: "Film grain is the skin of a memory." },
  { url: "https://images.unsplash.com/photo-1768439139336-21aa31d60447?q=80&w=1200", title: "Cosmic Sky", category: "Nature", note: "We are just dust in the wind." },
  { url: "https://images.unsplash.com/photo-1556766649-e57889dd19d6?q=80&w=1200", title: "Azure Waves", category: "Nature", note: "The ocean is a rhythmic beast." },
  { url: "https://images.unsplash.com/photo-1740151430913-e4d2e39a8a85?q=80&w=1200", title: "Minimalist Morning", category: "Sudden", note: "Coffee and silence." },
  { url: "https://images.unsplash.com/photo-1763665225680-289f20352dd4?q=80&w=1200", title: "Wild Spirit", category: "Places", note: "Hiking into the unknown." },
  { url: "https://images.unsplash.com/photo-1762796159038-053707dab326?q=80&w=1200", title: "Editorial Look", category: "Portraits", note: "Capturing the character." },
  { url: "https://images.unsplash.com/photo-1765157684237-78000a2448c0?q=80&w=1200", title: "Industrial Decay", category: "Abstract", note: "Rust is the makeup of time." },
  { url: "https://images.unsplash.com/photo-1762904495307-e5e6afe29cca?q=80&w=1200", title: "Street Taste", category: "Joy", note: "Spices and stories." },
  { url: "https://images.unsplash.com/photo-1753958510282-ddc97114081c?q=80&w=1200", title: "Nocturnal Shadows", category: "Abstract", note: "Darkness reveals what light hides." },
  { url: "https://images.unsplash.com/photo-1763833216149-d1b994ccef8d?q=80&w=1200", title: "Autumn Road", category: "Nature", note: "Golden transitions." },
  { url: "https://images.unsplash.com/photo-1653991473866-2c41d49a27b1?q=80&w=1200", title: "Festival Pulse", category: "Joy", note: "A collective heartbeat." }
];

// Generate 100+ images by creating variations of the source pool with different crop/processing hints
const generateGallery = () => {
  const gallery = [];
  const categories = ["Nature", "Animals", "Places", "Joy", "Sudden", "Abstract", "Portraits", "Experiments"];
  const notes = [
    "A moment frozen in time.", "The light was just right.", "Caught in the wild.", 
    "Unscripted and raw.", "My favorite click.", "Somewhere far away.",
    "The beauty of ordinary things.", "Colors of my mind.", "A silent whisper."
  ];

  for (let i = 0; i < 112; i++) {
    const source = sourceImages[i % sourceImages.length];
    // We append a query param to trick the browser/cache into treating them as separate instances if needed, 
    // but primarily we use them to build a massive visual wall.
    gallery.push({
      id: i,
      url: `${source.url}&sig=${i}`, // Cache busting signature for visual variety in loading
      title: `${source.title} v.${Math.floor(i/sourceImages.length) + 1}`,
      category: categories[i % categories.length],
      note: notes[i % notes.length],
      rotation: Math.random() * 6 - 3,
      scale: 0.95 + Math.random() * 0.1,
      yOffset: Math.random() * 50 - 25
    });
  }
  return gallery;
};

const massiveGallery = generateGallery();

export default function PhotographyGallery({ onBack }: { onBack: () => void }) {
  const [activePhoto, setActivePhoto] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Nature", "Animals", "Places", "Joy", "Sudden", "Abstract", "Portraits"];

  const filteredPhotos = useMemo(() => {
    if (filter === "All") return massiveGallery;
    return massiveGallery.filter(p => p.category === filter);
  }, [filter]);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] bg-[#050505] overflow-y-auto overflow-x-hidden selection:bg-orange-500"
      ref={containerRef}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-orange-500 mb-8"
            >
              <Aperture size={80} strokeWidth={1} />
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-white font-mono text-[10px] uppercase tracking-[0.8em]">Compiling Archive</span>
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="h-full bg-orange-500" 
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DYNAMIC HUD NAV */}
      <nav className="fixed top-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center z-[550] gap-6 pointer-events-none">
        <motion.button 
          onClick={onBack}
          whileHover={{ scale: 1.05, x: -5 }}
          className="pointer-events-auto flex items-center gap-3 text-white font-mono text-[10px] uppercase tracking-widest bg-white/5 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
        >
          <ArrowLeft size={14} /> Close Gallery
        </motion.button>
        
        <div className="flex flex-wrap justify-center gap-2 pointer-events-auto bg-black/40 backdrop-blur-3xl p-2 rounded-full border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                filter === cat ? "bg-white text-black" : "text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* IMMERSIVE WALL HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
            scale: useTransform(smoothProgress, [0, 0.1], [1, 0.8]),
          }}
          className="relative z-10"
        >
          <h1 className="text-[15vw] md:text-[12vw] font-serif font-black text-white leading-[0.75] tracking-tighter italic">
            Visual<br/><span className="text-orange-500">Infinite.</span>
          </h1>
          <p className="mt-16 text-slate-500 max-w-2xl mx-auto text-xl italic font-serif leading-relaxed px-4">
            "I've taken thousands of photos. Most are bad. Some are okay. These are the ones that made me feel alive. 100+ fragments of time."
          </p>
          
          <div className="mt-16 flex items-center justify-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">
            <Zap size={14} /> Total Frames: {massiveGallery.length} <Zap size={14} />
          </div>
        </motion.div>
        
        {/* Extreme background visual chaos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
           {massiveGallery.slice(0, 20).map((p, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  y: [0, -20, 0], 
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1] 
                }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-48 h-64 grayscale opacity-50 blur-[1px]"
                style={{ 
                  top: `${(i * 15) % 100}%`, 
                  left: `${(i * 7) % 100}%` 
                }}
              >
                <ImageWithFallback src={p.url} className="w-full h-full object-cover rounded-xl" />
              </motion.div>
           ))}
        </div>
      </section>

      {/* THE MASSIVE MASONRY GRID */}
      <div className="max-w-[2400px] mx-auto px-4 md:px-8 pb-[60vh] relative z-20">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4, 1600: 5, 2000: 6 }}>
          <Masonry gutter="16px">
            {filteredPhotos.map((photo, i) => (
              <InteractivePhotoCard 
                key={photo.id} 
                photo={photo} 
                index={i} 
                onClick={() => setActivePhoto(photo)} 
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* THE ENDLESS SCROLL OUTRO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-black relative overflow-hidden">
         <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-10 h-full">
               {[...Array(50)].map((_, i) => (
                  <div key={i} className="aspect-square bg-white/10 m-1 border border-white/20" />
               ))}
            </div>
         </div>
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="relative z-10"
         >
            <h2 className="text-8xl md:text-[15vw] font-serif font-black text-white italic tracking-tighter mb-8 leading-none">That's All.</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest mb-16 uppercase italic">Or is it? Every second is a new frame.</p>
            <motion.button 
              onClick={onBack}
              whileHover={{ scale: 1.1, backgroundColor: "#f97316" }}
              className="px-20 py-8 bg-white text-black font-black text-3xl rounded-full transition-all duration-500 shadow-[0_0_100px_rgba(255,255,255,0.1)]"
            >
              Return Home
            </motion.button>
         </motion.div>
      </section>

      {/* CINEMATIC LIGHTBOX */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setActivePhoto(null)}
          >
             <motion.div 
               initial={{ scale: 0.8, opacity: 0, y: 50 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.8, opacity: 0, y: 50 }}
               className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
               onClick={e => e.stopPropagation()}
             >
                <div className="lg:col-span-8 aspect-[4/5] md:aspect-video rounded-[60px] overflow-hidden shadow-2xl border border-white/5 group relative">
                   <ImageWithFallback src={activePhoto.url} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                
                <div className="lg:col-span-4 space-y-10">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="px-5 py-2 rounded-full bg-orange-500/20 text-orange-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold border border-orange-500/30">
                            {activePhoto.category}
                         </div>
                         <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">ID_{activePhoto.id}</span>
                      </div>
                      <h3 className="text-6xl md:text-8xl font-serif font-black text-white italic tracking-tighter leading-[0.8]">
                         {activePhoto.title.split(' ')[0]}<br/>
                         <span className="text-orange-500">{activePhoto.title.split(' ')[1]}</span>
                      </h3>
                   </div>
                   
                   <div className="p-10 bg-white/[0.03] rounded-[40px] border border-white/10 backdrop-blur-3xl relative overflow-hidden group">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      <p className="text-2xl md:text-3xl text-slate-300 italic font-serif leading-relaxed relative z-10">
                         "{activePhoto.note}"
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                         <MapPin size={16} className="text-orange-500" />
                         <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Captured in the Wild</span>
                      </div>
                   </div>
                   
                   <div className="flex gap-4">
                      <button className="flex-1 py-6 bg-white rounded-3xl text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-colors">
                         <Sparkles size={16} /> Mint Memory
                      </button>
                      <button 
                        onClick={() => setActivePhoto(null)}
                        className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors"
                      >
                         <ArrowLeft size={24} />
                      </button>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none z-[590] opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/p6.png')] mix-blend-overlay" />
    </motion.div>
  );
}

function InteractivePhotoCard({ photo, index, onClick }: any) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  
  // Create that messy, floating effect
  const y = useTransform(scrollYProgress, [0, 1], [photo.yOffset, -photo.yOffset]);
  const rotate = useTransform(scrollYProgress, [0, 1], [photo.rotation, -photo.rotation]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ y, rotate }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div 
        className="relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(249,115,22,0.3)] group-hover:border-orange-500/40"
      >
        <ImageWithFallback 
          src={photo.url} 
          className="w-full h-auto object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-[2s] cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:scale-110" 
        />
        
        {/* MESSY OVERLAY HUD */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-8">
           <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                 <Camera size={16} className="text-orange-500" />
              </div>
              <div className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/40 leading-none text-right">
                 ARCHIVE_STAMP<br/>{photo.id} / 112
              </div>
           </div>
           
           <div className="space-y-4">
              <div className="flex items-center gap-2">
                 <div className="h-px flex-1 bg-orange-500/50" />
                 <span className="text-orange-500 font-mono text-[10px] uppercase tracking-widest font-black">Open Archive</span>
                 <div className="h-px flex-1 bg-orange-500/50" />
              </div>
              <h3 className="text-3xl font-serif font-black text-white italic tracking-tighter text-center leading-none">{photo.title}</h3>
              <div className="flex justify-center gap-3">
                 <Heart size={14} className="text-white/20" />
                 <Smile size={14} className="text-white/20" />
                 <Maximize2 size={14} className="text-white/20" />
              </div>
           </div>
        </div>
        
        {/* Shutter Detail on Corner */}
        <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
           <Aperture size={16} className="text-white" />
        </div>
      </div>
      
      {/* Drifting subtle label */}
      <div className="mt-4 px-3 flex items-center justify-between pointer-events-none">
         <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/30" />
            <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.4em]">Frame_{photo.id}</span>
         </div>
         <span className="text-[9px] font-mono text-white/5 uppercase tracking-[0.4em] italic">{photo.category}</span>
      </div>
    </motion.div>
  );
}
