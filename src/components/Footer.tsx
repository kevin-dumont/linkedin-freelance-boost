
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Kevin Dumont
            </span>
            <p className="text-foreground/70 mt-2">
              Expert LinkedIn pour développeurs freelance
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#pain-points" className="text-foreground/70 hover:text-primary transition-colors">
              Symptômes
            </a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#offer" className="text-foreground/70 hover:text-primary transition-colors">
              L'offre
            </a>
            <a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors">
              Témoignages
            </a>
            <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
        </div>
        
        <Separator className="bg-border/30 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Kevin Dumont. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Conditions générales
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
