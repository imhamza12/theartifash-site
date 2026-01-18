import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512958542288-07f5b1595def?q=80&w=2520" // Moroccan architecture/desert vibes
          alt="THEARTIFASH Campaign"
          className="h-full w-full object-cover opacity-60 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20" />
      </div>

      {/* Floating Elements (Subtle Gold Accents) */}
      <motion.div
        className="absolute top-32 left-10 w-64 h-64 border border-primary/10 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          {/* Tag removed for minimalism */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-foreground uppercase tracking-widest leading-none mb-6"
        >
          NÉ SANS
          <br />
          <span className="text-primary italic font-serif lowercase tracking-normal bg-gradient-to-r from-primary via-theartifash-gold to-primary bg-clip-text text-transparent">Liberté.</span>
          <br />
          PORTÉ AVEC
          <br />
          <span className="text-primary italic font-serif lowercase tracking-normal bg-gradient-to-r from-primary via-theartifash-gold to-primary bg-clip-text text-transparent">Sens.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl mb-12 tracking-wide font-light leading-relaxed"
        >
          L'identité comme acte de résistance. L'élégance comme une arme. <br />
          <span className="text-primary font-medium">الهوية كفعل مقاومة</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-black px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500"
          >
            REJOINDRE LE MOUVEMENT
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-white/20 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors duration-500 backdrop-blur-sm"
          >
            NOTRE HISTOIRE
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 opacity-60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-light">Explorer</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-40 mix-blend-overlay">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white -rotate-90 block whitespace-nowrap origin-center font-light" style={{ writingMode: 'vertical-rl' }}>
          Est. MMXXIV
        </span>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-40 mix-blend-overlay">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white rotate-90 block whitespace-nowrap origin-center font-light" style={{ writingMode: 'vertical-rl' }}>
          Edition Limitée
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
