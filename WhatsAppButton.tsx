
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "212622602251";
    const message = encodeURIComponent("Salam, j'ai une question à propos de THEARTIFASH.");

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 md:bottom-8 md:right-8 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle size={32} className="fill-current" />

            {/* Tooltip / Label for Desktop */}
            <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block pointer-events-none">
                Une question ? / تواصل معنا
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></span>
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
