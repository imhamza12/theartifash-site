import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 border border-accent/20"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 bg-accent/10 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 border border-accent mb-8"
          >
            <Zap className="w-8 h-8 text-accent" />
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary uppercase tracking-tight mb-6">
            JOIN THE
            <br />
            <span className="text-gradient-red">MOVEMENT</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Be the first to know about exclusive drops, early access, and members-only perks. 
            No spam. Just fire.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-card border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-accent flex items-center justify-center gap-3"
              >
                <span>SUBSCRIBE</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent/20 border border-accent p-6"
            >
              <p className="text-accent font-bold text-lg">
                YOU'RE IN. 🔥
              </p>
              <p className="text-muted-foreground mt-2">
                Welcome to the movement. Check your inbox.
              </p>
            </motion.div>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            Join 50,000+ who never miss a drop
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
