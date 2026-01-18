import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const Cart = ({ isOpen, onClose, items, updateQuantity, removeItem }: CartProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 200 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-charcoal z-50 flex flex-col border-l border-white/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="font-display text-xl font-bold uppercase tracking-wider flex items-center gap-3">
            <ShoppingBag className="text-electric-red" />
            Cart
            <span className="text-sm font-normal text-muted-foreground">
              ({items.reduce((sum, item) => sum + item.quantity, 0)})
            </span>
          </h2>
          <motion.button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-void-black flex items-center justify-center mb-4">
                <ShoppingBag size={40} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase mb-2">Cart Empty</h3>
              <p className="text-muted-foreground mb-6">
                Your cart is waiting for something bold
              </p>
              <motion.button
                onClick={onClose}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>
            </div>
          ) : (
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50, height: 0 }}
                  className="flex gap-4 py-4 border-b border-white/10 last:border-0"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-void-black">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm uppercase tracking-wide truncate">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.collection}</p>
                    <p className="text-electric-red font-bold mt-1">
                      {item.price} MAD
                    </p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-end gap-2">
                    <motion.button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-muted-foreground hover:text-electric-red transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={16} />
                    </motion.button>

                    <div className="flex items-center gap-1 bg-void-black rounded-full px-1">
                      <motion.button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus size={14} />
                      </motion.button>
                      <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus size={14} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Footer */}
        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/10 p-6 space-y-4 bg-void-black">
            {/* Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sous-total</span>
                <span>{subtotal} MAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Livraison</span>
                <span className={shipping === 0 ? 'text-neon-green font-medium' : ''}>
                  {shipping === 0 ? 'GRATUITE' : `${shipping} MAD`}
                </span>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-2 rounded text-center">
                <p className="text-xs text-primary font-bold">
                  Paiement à la livraison disponible / الدفع عند الاستلام
                </p>
              </div>
            </div>

            <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
              <span>Total</span>
              <span className="text-electric-red">{total} MAD</span>
            </div>

            {/* Checkout Button */}
            <motion.button
              className="w-full btn-accent py-4 font-bold uppercase tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Commander / إتمام الطلب
            </motion.button>
          </div>
        )}
      </motion.aside>
    </>
  );
};

export default Cart;
