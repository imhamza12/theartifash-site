import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/data/products';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  addToCart: (product: Product) => void;
  toggleFavorite: (id: number) => void;
  isFavorite: boolean;
}

const QuickViewModal = ({
  product,
  isOpen,
  onClose,
  addToCart,
  toggleFavorite,
  isFavorite,
}: QuickViewModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-charcoal z-50 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-void-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-void-black transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            {/* Image Gallery */}
            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto bg-void-black">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {product.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === currentImageIndex ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-neon-green text-black px-3 py-1 text-xs font-bold uppercase">
                    New
                  </span>
                )}
                {product.isLimited && (
                  <span className="bg-electric-red text-white px-3 py-1 text-xs font-bold uppercase">
                    Limited
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              <div className="mb-4">
                <p className="text-electric-red uppercase tracking-widest text-sm mb-2">
                  {product.collection}
                </p>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-wider mb-3">
                  Color: {selectedColor || 'Select'}
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-white scale-110'
                          : 'border-transparent hover:border-white/50'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-wider mb-3">
                  Size: {selectedSize || 'Select'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 px-4 font-bold text-sm uppercase transition-all ${
                        selectedSize === size
                          ? 'bg-white text-black'
                          : 'bg-void-black border border-white/20 hover:border-white/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 btn-accent py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag size={18} />
                  {product.inStock ? 'Add to Cart' : 'Sold Out'}
                </motion.button>

                <motion.button
                  onClick={() => toggleFavorite(product.id)}
                  className={`w-14 h-14 border flex items-center justify-center transition-colors ${
                    isFavorite
                      ? 'bg-electric-red border-electric-red'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart
                    size={20}
                    className={isFavorite ? 'fill-white' : ''}
                  />
                </motion.button>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-void-black text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
