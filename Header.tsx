import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  favoritesCount: number;
  toggleCart: () => void;
  setSearchQuery: (query: string) => void;
}

const Header = ({ cartCount, favoritesCount, toggleCart, setSearchQuery }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (value: string) => {
    setLocalSearch(value);
    setSearchQuery(value);
  };

  const navLinks = ['Shop', 'Collections', 'Drops', 'About'];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4'
        : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Mobile Menu Toggle (Left on mobile) */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Logo (Center on mobile, Left on desktop usually, let's keep left for classic ecommerce or center for luxury? User said "Header élégant, logo mis en valeur". Let's center it for maximum luxury feel and Nav on left/right or Nav left.) 
             Let's go with: Desktop: Logo Left, Nav Center, Actions Right. 
          */}
          <motion.a
            href="/"
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            {/* Using text fallback if image fails, or just mostly text for crispness? 
                The prompt asks to keep structure. I'll keep image but add text option if needed, or style it. 
                Let's assume the logo image is white. If we have light theme issues we might need a mix-blend mode.
                For now keeping image but optimizing container. 
            */}
            <img src="/theartifash_logo.png" alt="THEARTIFASH" className="h-[50px] md:h-[80px] w-auto object-contain brightness-0 invert" />
            {/* Note: brightness-0 invert makes it white if it was black. If it's already white/gold, remove. 
                 Assuming THEARTIFASH logo is gold or white. If updated in previous turn, it might be text.
                 Let's stick to the image as it was there.
             */}
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors font-medium relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="hidden md:block overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={localSearch}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full bg-transparent border-b border-primary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm py-1 font-light"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {searchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
            </button>

            {/* Favorites */}
            <button className="p-2 text-foreground/80 hover:text-primary transition-colors relative hidden md:block">
              <Heart size={20} strokeWidth={1.5} className={favoritesCount > 0 ? 'fill-primary text-primary' : ''} />
              {favoritesCount > 0 && (
                <span className="absolute top-1 right-0 w-1.5 h-1.5 bg-primary rounded-full" />
              )}
            </button>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="p-2 text-foreground/80 hover:text-primary transition-colors relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/5 md:hidden"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-6 items-center">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
