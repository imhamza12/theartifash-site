import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { collections } from '@/data/products';

const CollectionGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Explorer
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground uppercase tracking-tight">
            Nos Collections
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-muted"
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="font-serif text-3xl font-medium text-white tracking-wider mb-2 italic">
                    {collection.name}
                  </h3>
                  <p className="text-xs text-white/70 mb-6 uppercase tracking-widest">
                    {collection.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span>Découvrir</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
