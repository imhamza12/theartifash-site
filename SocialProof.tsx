import { motion } from 'framer-motion';
import { BadgeCheck, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/products';

const SocialProof = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 font-display text-[300px] font-medium text-primary leading-none blur-3xl">
          THEARTIFASH
        </div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Communauté
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground uppercase tracking-tight">
            Leurs Mots
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-500 rounded-sm"
            >
              {/* Quote Icon */}
              <Quote className="w-6 h-6 text-primary/50 mb-6 group-hover:text-primary transition-colors" />

              {/* Text */}
              <p className="text-muted-foreground/80 mb-6 leading-relaxed font-light italic text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
                      <BadgeCheck className="w-3 h-3 text-primary" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-serif text-foreground tracking-wide text-sm">
                    {testimonial.name}
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block mt-0.5">
                    Client Fidèle
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-foreground uppercase tracking-widest max-w-5xl mx-auto leading-tight opacity-90">
            "Nous ne vendons pas du tissu.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-theartifash-gold to-primary italic font-serif lowercase tracking-normal">nous transmettons une âme."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
