import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const lookbookImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800", // Desert/Fashion
    title: "L'Aube",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&q=80", // Architecture/Fashion
    title: "Kasbah",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1512958542288-07f5b1595def?w=600&q=80", // Morocco Portrait
    title: "Atlas",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&q=80", // Fabric/Jewelry
    title: "Ornement",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?w=600&q=80", // Minimal Shadow
    title: "Ombre",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1605218427368-35b80a3bd25d?w=600&q=80", // Craft
    title: "Matière",
    span: "col-span-1 row-span-1",
  },
];

const LookbookGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Éditorial
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground uppercase tracking-tight">
              Lookbook
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline flex items-center gap-3 self-start md:self-auto text-xs"
          >
            <span>VOIR LA GALERIE</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {lookbookImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Content - Hidden by default, shown on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="font-display text-2xl font-serif text-white tracking-widest italic">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookGallery;
