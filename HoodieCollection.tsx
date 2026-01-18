import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

// Specialized Data for the Hoodie Collection
const hoodies = [
    {
        id: 'h-artisan',
        title: "Hoodie L'Envol",
        description: "Broderie d'art sur coton lourd. \"Maybe it's about the story.\" Une pièce narrative qui célèbre le voyage autant que la destination.",
        price: 1890,
        mainImage: "/products/hoodie-artisan-front.jpg",
        details: [
            "/products/hoodie-artisan-detail.jpg", // Texture/Embroidery
            "/products/hoodie-artisan-back.jpg", // Back View as detail
        ]
    },
    {
        id: 'h-heritage',
        title: 'Hoodie Héritage',
        description: "L'union du streetwear et de l'artisanat. Patch tapisserie tissé au dos, calligraphie 'Haqq' en relief. Une culture à porter fièrement.",
        price: 1890,
        mainImage: "/products/hoodie-heritage-back-navy.jpg",
        details: [
            "/products/hoodie-heritage-front-duo.jpg", // Front view & Color options
            "/products/hoodie-heritage-group.jpg", // Group/Vibe
        ]
    },
    {
        id: 'h-signature',
        title: 'Hoodie Signature',
        description: "L'éclat du blanc, la noblesse du bleu. Patch tapisserie vintage et calligraphie noire en contraste. Une œuvre d'art portable.",
        price: 1990,
        mainImage: "/products/hoodie-signature-back.jpg",
        details: [
            "/products/hoodie-signature-folded.jpg", // Folded/Front vibe
            "/products/hoodie-signature-detail.jpg", // Hand/Texture detail
        ]
    },
    {
        id: 'h-memoire',
        title: 'Hoodie Mémoire',
        description: "L'étoffe des souvenirs. Empiècement tapisserie sur les épaules, poche poitrine unique. \"Memories Never Die\".",
        price: 2090,
        mainImage: "/products/hoodie-memoire-back.jpg",
        details: [
            "/products/hoodie-memoire-shoulder.jpg", // Shoulder detail
            "/products/hoodie-memoire-group.jpg", // Group/Vibe
        ]
    },
    {
        id: 'h-vision',
        title: 'Hoodie Vision',
        description: "Le regard tourné vers l'avenir. Motif 'L'Œil' embossé ton sur ton. Une profondeur de texture inégalée.",
        price: 1890,
        mainImage: "/products/hoodie-vision-back.jpg",
        details: [
            "/products/hoodie-vision-hand.jpg", // Hand touching relief
            "/products/hoodie-vision-texture.jpg", // Texture detail
        ]
    }
];

const HoodieCollection = () => {
    return (
        <section className="bg-[#efeae0] text-[#0a0a0a] py-32 overflow-hidden">
            <div className="container px-4">
                {/* Collection Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-[#b07d62] mb-4 block font-medium">
                        Archives 2025
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl text-[#0a0a0a] uppercase tracking-wide leading-none font-medium">
                        L'Art du <span className="italic font-serif text-[#cdb172]">Hoodie</span>
                    </h2>
                </motion.div>

                {/* Hoodies Showcase */}
                <div className="space-y-32">
                    {hoodies.map((hoodie, index) => (
                        <motion.div
                            key={hoodie.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Product Visuals */}
                            <div className="relative w-full lg:w-3/5">
                                {/* Main Image */}
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-[#b07d62]/10 bg-white">
                                    <img
                                        src={hoodie.mainImage}
                                        alt={hoodie.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating Detailed Zooms */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="absolute top-10 -right-4 lg:-right-12 w-40 h-40 rounded-3xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
                                >
                                    <img src={hoodie.details[0]} alt="Detail 1" className="w-full h-full object-cover scale-150" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="absolute bottom-20 -left-4 lg:-left-12 w-48 h-48 rounded-3xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
                                >
                                    <img src={hoodie.details[1]} alt="Detail 2" className="w-full h-full object-cover scale-150" />
                                </motion.div>
                            </div>

                            {/* Product Content */}
                            <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
                                <div>
                                    <h3 className="font-display text-4xl lg:text-5xl font-medium text-[#0a0a0a] uppercase tracking-tight mb-4">
                                        {hoodie.title.replace('THEARTIFASH – ', '')}
                                    </h3>
                                    <div className="w-20 h-px bg-[#b07d62] mx-auto lg:mx-0 opacity-50 mb-8" />
                                    <p className="text-lg text-[#0a0a0a]/70 font-sans font-light leading-relaxed">
                                        {hoodie.description}
                                    </p>
                                </div>

                                <div className="flex flex-col items-center lg:items-start gap-2">
                                    <p className="text-2xl font-serif text-[#cdb172] italic">
                                        {hoodie.price} MAD
                                    </p>
                                    <p className="text-xs uppercase tracking-widest text-[#0a0a0a]/40">
                                        Série Limitée
                                    </p>
                                </div>

                                <div className="pt-8">
                                    <button className="group bg-[#0a0a0a] text-[#efeae0] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#cdb172] transition-colors duration-500 rounded-sm">
                                        <span className="flex items-center gap-3">
                                            Ajouter au Panier
                                            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HoodieCollection;
