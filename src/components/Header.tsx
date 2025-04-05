
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-4 border-b border-border/30 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/bf00ddef-9e7d-4d37-b232-35a5a9318c02.png" 
            alt="Kevin Dumont Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-heading font-bold gradient-text">
            Kevin Dumont
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
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
          Je postule <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
