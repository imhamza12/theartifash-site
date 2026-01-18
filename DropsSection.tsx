import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { productsData } from '@/data/products';

const DropsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Get limited products
  const limitedProducts = productsData.filter(p => p.isLimited && p.inStock).slice(0, 3);

  useEffect(() => {
    // Set drop date to 7 days from now
    const dropDate = new Date();
    dropDate.setDate(dropDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = dropDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-theartifash-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 border border-primary text-primary text-xs uppercase tracking-[0.3em] font-medium mb-6">
            Séries Limitées
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground uppercase tracking-widest mb-4">
            Prochainement
          </h2>
          <p className="text-muted-foreground/80 max-w-md mx-auto font-light">
            Fragments d'histoire. Quantités limitées. L'art ne se reproduit pas.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-8 md:gap-12 mb-16"
        >
          {[
            { value: timeLeft.days, label: 'Jours' },
            { value: timeLeft.hours, label: 'Heures' },
            { value: timeLeft.minutes, label: 'Min' },
            { value: timeLeft.seconds, label: 'Sec' },
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <motion.span
                key={item.value}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="block text-4xl md:text-6xl font-serif text-primary mb-2"
              >
                {String(item.value).padStart(2, '0')}
              </motion.span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Products Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {limitedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative aspect-[4/5] overflow-hidden bg-muted/10 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white text-black text-[10px] font-bold uppercase px-3 py-1 tracking-widest">Exclusif</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-serif text-xl text-white tracking-wider mb-2 italic">
                  {product.name}
                </h3>
                <p className="text-primary font-bold text-sm tracking-widest">{product.price} MAD</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-primary uppercase tracking-[0.2em] text-xs font-bold hover:text-white transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span>M'avertir</span>
          </motion.button>

          <div className="w-px h-4 bg-muted-foreground/30 hidden sm:block" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-muted-foreground uppercase tracking-[0.2em] text-xs hover:text-white transition-colors"
          >
            <span>Voir le calendrier</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DropsSection;
