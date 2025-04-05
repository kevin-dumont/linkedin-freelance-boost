
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const CTA: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Formulaire envoyé !",
      description: "Nous avons bien reçu votre demande. Nous vous recontacterons sous 48h.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      linkedin: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section relative pb-24">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10"></div>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer ton profil LinkedIn en{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              machine à clients
            </span>
            ?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Remplis le formulaire ci-dessous pour postuler à l'accompagnement. 
            Je te recontacterai sous 48h pour discuter de ton projet.
          </p>
        </div>
        
        <Card className="blur-card border-border/30 max-w-2xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Ton nom et prénom" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email professionnel</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="ton.email@exemple.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="linkedin">URL de ton profil LinkedIn</Label>
                  <Input 
                    id="linkedin" 
                    name="linkedin" 
                    placeholder="https://linkedin.com/in/ton-profil" 
                    value={formData.linkedin}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Ton objectif principal sur LinkedIn</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Décris brièvement ce que tu souhaites accomplir sur LinkedIn (trouver des clients, vendre un produit, etc.)" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary/50"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full py-6 text-lg bg-primary hover:bg-primary/90">
                Je postule à l'accompagnement
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                En soumettant ce formulaire, tu acceptes d'être recontacté pour discuter de l'accompagnement. Aucun engagement.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
