import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MarqueeText from '@/components/MarqueeText';
import CollectionGrid from '@/components/CollectionGrid';
import DropsSection from '@/components/DropsSection';
import BrandStory from '@/components/BrandStory';
import LookbookGallery from '@/components/LookbookGallery';
import SocialProof from '@/components/SocialProof';
import NewsletterCTA from '@/components/NewsletterCTA';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import QuickViewModal from '@/components/QuickViewModal';
import TrustBar from '@/components/TrustBar';
import { productsData, Product, categories } from '@/data/products';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

interface CartItem extends Product {
  quantity: number;
}

import HoodieCollection from '@/components/HoodieCollection';

const Index = () => {
  const { toast } = useToast();

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('voidx-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('voidx-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Quick view state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Persist cart
  useEffect(() => {
    localStorage.setItem('voidx-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('voidx-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.collection.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Show limited products initially
  const displayedProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 8);

  // Cart functions
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: number) => {
    const item = cartItems.find(i => i.id === id);
    setCartItems(prev => prev.filter(item => item.id !== id));
    if (item) {
      toast({
        title: "Removed from cart",
        description: `${item.name} has been removed.`,
      });
    }
  };

  const toggleFavorite = (id: number) => {
    const product = productsData.find(p => p.id === id);
    const isAdding = !favorites.includes(id);

    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );

    if (product) {
      toast({
        title: isAdding ? "Added to wishlist" : "Removed from wishlist",
        description: product.name,
      });
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-void-black text-white">
      {/* Header */}
      <Header
        cartCount={cartCount}
        favoritesCount={favorites.length}
        toggleCart={() => setIsCartOpen(true)}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Elements */}
      <TrustBar />

      {/* Marquee */}
      <MarqueeText />

      {/* Brand Story */}
      <section id="about">
        <BrandStory />
      </section>

      {/* New Capsule Collection */}
      <HoodieCollection />

      {/* Collections */}
      <section id="collections">
        <CollectionGrid />
      </section>

      {/* Limited Drops */}
      <section id="drops">
        <DropsSection />
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-20 bg-void-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-red uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
              Shop
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
              Featured Products
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all ${selectedCategory === cat.id
                    ? 'bg-white text-black'
                    : 'bg-transparent border border-white/20 text-white hover:border-white/40'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {displayedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  toggleFavorite={toggleFavorite}
                  isFavorite={favorites.includes(product.id)}
                  index={index}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">No products found</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {!showAllProducts && filteredProducts.length > 8 && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setShowAllProducts(true)}
                className="btn-primary"
              >
                View All Products
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about">
        <BrandStory />
      </section>

      {/* Lookbook */}
      <LookbookGallery />

      {/* Social Proof */}
      <SocialProof />

      {/* Newsletter */}
      <NewsletterCTA />

      {/* Footer */}
      <Footer />

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeFromCart}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
        isFavorite={quickViewProduct ? favorites.includes(quickViewProduct.id) : false}
      />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
