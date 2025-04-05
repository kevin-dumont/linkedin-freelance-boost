
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-6 border-b border-border/30 backdrop-blur-sm bg-background/90 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Kevin Dumont
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#pain-points" className="text-foreground/80 hover:text-primary transition-colors">
            Symptômes
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            À propos
          </a>
          <a href="#offer" className="text-foreground/80 hover:text-primary transition-colors">
            L'offre
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Témoignages
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        <Button 
          onClick={scrollToContact} 
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Je postule
        </Button>
      </div>
    </header>
  );
};

export default Header;
