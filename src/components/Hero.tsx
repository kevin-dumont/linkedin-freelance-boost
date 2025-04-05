
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 md:py-28 overflow-hidden relative">
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformez votre profil LinkedIn en{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              machine à clients
            </span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Pour les développeurs freelance qui veulent décrocher des missions
            sans faire de prospection froide, grâce à un contenu qui convertit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToContact} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 px-8"
              size="lg"
            >
              Je veux attirer des clients
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('pain-points')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border/50 hover:bg-secondary/50 text-lg py-6 px-8"
              size="lg"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
