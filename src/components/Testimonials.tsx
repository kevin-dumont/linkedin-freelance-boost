
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Paul D.",
      role: "Développeur Full-Stack",
      quote: "Après 2 mois d'accompagnement avec Kevin, j'ai décroché une mission à 600€/j alors que je galérais depuis des mois. Sa méthode fonctionne vraiment !",
    },
    {
      name: "Sophie M.",
      role: "Développeuse React Native",
      quote: "J'étais sceptique au début, mais les résultats sont là. En 3 mois, je suis passée de 0 à 3 leads qualifiés par semaine. Je ne fais plus de prospection froide.",
    },
    {
      name: "Thomas L.",
      role: "Développeur Backend",
      quote: "Kevin m'a aidé à trouver mon positionnement et à le communiquer clairement. Résultat : je reçois maintenant des demandes ciblées et je peux enfin être sélectif.",
    },
    {
      name: "Marie C.",
      role: "Développeuse Data",
      quote: "L'accompagnement m'a aidée à sortir de ma zone de confort. J'ai maintenant une audience de +500 personnes qualifiées et des opportunités régulières.",
    },
    {
      name: "Lucas R.",
      role: "Développeur DevOps",
      quote: "La méthode de Kevin est structurée et efficace. En suivant ses conseils, j'ai triplé mes vues de profil et j'ai eu 2 nouvelles missions en moins de 45 jours.",
    },
    {
      name: "Emma B.",
      role: "Développeuse Front-End",
      quote: "Son approche m'a évité de perdre du temps en essais-erreurs. J'ai économisé des mois de tâtonnement et j'ai désormais une stratégie qui marche vraiment !",
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Ce que disent mes clients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="blur-card border-border/30 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1 mb-4">
                  <p className="italic text-foreground/80">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
