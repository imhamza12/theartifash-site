

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="block">
              <span className="font-serif text-3xl text-primary tracking-widest uppercase">THEARTIFASH</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs font-sans">
              Préserver Tamgharebit.
              L'identité comme résistance.
              La culture comme survie.
            </p>
            {/* Socials Placeholder */}
            <div className="flex gap-4 pt-2">
              {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest hover:text-primary transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Collections</h4>
            <div className="flex flex-col gap-4 text-sm font-light">
              <a href="#" className="hover:text-primary transition-colors">Nouveautés</a>
              <a href="#" className="hover:text-primary transition-colors">Best Sellers</a>
              <a href="#" className="hover:text-primary transition-colors">Accessoires</a>
              <a href="#" className="hover:text-primary transition-colors">Éditions Limitées</a>
            </div>
          </div>

          {/* House */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">La Maison</h4>
            <div className="flex flex-col gap-4 text-sm font-light">
              <a href="#" className="hover:text-primary transition-colors">Notre Histoire</a>
              <a href="#" className="hover:text-primary transition-colors">L'Atelier</a>
              <a href="#" className="hover:text-primary transition-colors">Sustainability</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Newsletter</h4>
            <p className="text-sm mb-6 font-light">Inscrivez-vous pour recevoir nos exclusivités.</p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 text-sm font-light"
                />
                <button type="submit" className="absolute right-0 top-2 text-xs uppercase tracking-widest hover:text-primary transition-colors">
                  Rejoindre
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider opacity-60">
            <p>© {currentYear} THEARTIFASH. Tous droits réservés.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">CGV</a>
              <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
