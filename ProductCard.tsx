import { motion } from 'framer-motion';
import { Heart, Plus, Eye } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
  toggleFavorite: (id: number) => void;
  isFavorite: boolean;
  index: number;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({
  product,
  addToCart,
  toggleFavorite,
  isFavorite,
  index,
  onQuickView
}: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <motion.article
      className="group relative bg-transparent"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
          <motion.button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="bg-white text-black px-6 py-3 font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 hover:bg-primary transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {product.inStock ? 'Ajouter / شراء' : 'Épuisé'}
          </motion.button>

          {onQuickView && (
            <motion.button
              onClick={() => onQuickView(product)}
              className="bg-white/90 text-black p-3 hover:bg-primary transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={16} />
            </motion.button>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-0 left-0 p-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
              Nouveau
            </span>
          )}
          {product.isLimited && (
            <span className="bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/20">
              Limité
            </span>
          )}
          {!product.inStock && (
            <span className="bg-white text-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
              Rupture
            </span>
          )}
          {discount > 0 && (
            <span className="bg-white text-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
              -{discount}%
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <motion.button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:text-primary"
          whileTap={{ scale: 0.9 }}
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-primary text-primary' : ''}
            strokeWidth={1.5}
          />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          {product.collection}
        </p>
        <h3 className="font-serif text-lg text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-3 text-sm font-light mt-1">
          <span className="text-foreground">{product.price} MAD</span>
          {product.originalPrice && (
            <span className="text-muted-foreground/50 line-through text-xs">
              {product.originalPrice} MAD
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
