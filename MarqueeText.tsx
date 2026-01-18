import { motion } from 'framer-motion';

const MarqueeText = () => {
  const words = ['TAMGHAREBIT', 'LIBERTÉ', 'HÉRITAGE', 'RESISTANCE', 'ÂME', 'SILENCE', 'PROFONDEUR', 'RACINES'];

  return (
    <section className="py-6 bg-card border-y border-border overflow-hidden">
      <div className="marquee">
        <motion.div
          className="marquee-content"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...words, ...words, ...words, ...words].map((word, index) => (
            <span key={index} className="flex items-center">
              <span className="font-display text-xl md:text-2xl font-bold text-primary uppercase tracking-[0.2em] px-8">
                {word}
              </span>
              <span className="text-accent text-2xl">✦</span>
            </span>
          ))}
        </motion.div>
        <motion.div
          className="marquee-content"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...words, ...words, ...words, ...words].map((word, index) => (
            <span key={index} className="flex items-center">
              <span className="font-display text-xl md:text-2xl font-bold text-primary uppercase tracking-[0.2em] px-8">
                {word}
              </span>
              <span className="text-accent text-2xl">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeText;
