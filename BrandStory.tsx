import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden my-20">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted/20">
              <video
                className="w-full h-full object-cover opacity-80"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1548696117-64df4a78a2d1?q=80&w=1928"
              >
                <source src="/videos/brand-story.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
              DE L'OMBRE
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground uppercase tracking-tight leading-none">
              À LA LUMIÈRE
            </h2>

            <div className="space-y-6 text-muted-foreground/80 font-light leading-relaxed text-lg">
              <p>
                J'ai perdu ma liberté dans un endroit que je n'ai pas choisi.
                Perdu dans le silence, j'ai trouvé une voix.
                J'ai créé pour survivre. Pour exister. Pour résister.
              </p>
              <p>
                THEARTIFASH n'est pas une marque. C'est le cri de l'âme marocaine (Tamgharebit).
                Un retour aux sources, loin du bruit, près de l'essentiel.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center gap-4 text-primary uppercase tracking-[0.2em] text-sm mt-8"
            >
              <span>Lire le Manifeste</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </motion.button>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
              {[
                { label: 'Essence', value: 'LIBERTÉ' },
                { label: 'Racines', value: 'IDENTITÉ' },
                { label: 'Héritage', value: 'ÂME' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="font-display text-2xl font-bold text-foreground overflow-hidden text-ellipsis whitespace-nowrap block">
                    {stat.value}
                  </span>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
