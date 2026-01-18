import { motion } from 'framer-motion';
import { Quote, BadgeCheck } from 'lucide-react';
import { testimonialsData } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-electric-red uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            The Community
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">
            What They're Saying
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              className="bg-void-black border border-white/10 rounded-lg p-6 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-electric-red/30 mb-4" />

              {/* Text */}
              <blockquote className="text-white/80 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    {testimonial.verified && (
                      <BadgeCheck size={14} className="text-electric-blue" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
