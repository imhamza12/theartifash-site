
import { Truck, ShieldCheck, Banknote, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBar = () => {
    const items = [
        {
            icon: Truck,
            title: "Livraison Rapide",
            subtitle: "في جميع أنحاء المغرب (24-48h)"
        },
        {
            icon: Banknote,
            title: "Paiement à la livraison",
            subtitle: "خلص حتى توصلك السلعة"
        },
        {
            icon: ShieldCheck,
            title: "Savoir-Faire",
            subtitle: "Héritage & Authenticité"
        },
        {
            icon: HelpCircle,
            title: "Contact",
            subtitle: "Disponible sur WhatsApp"
        }
    ];

    return (
        <section className="bg-void-black border-y border-white/10 py-8 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                        >
                            <item.icon className="w-8 h-8 text-primary mb-2" strokeWidth={1.5} />
                            <div>
                                <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-muted-foreground font-medium">
                                    {item.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
