
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PainPoints: React.FC = () => {
  const painPoints = [
    "Ton profil LinkedIn est clean, mais personne ne te contacte. Rien. Zéro.",
    "T'as déjà tenté de publier, mais à part des likes de collègues, t'as rien gagné.",
    "Tu passes du temps à écrire… et t'as même pas un seul rendez-vous derrière.",
    "Tu regardes des devs moins bons que toi décrocher des missions grâce à LinkedIn.",
    "Tu procrastines sur ton positionnement parce que \"faut que je réfléchisse encore un peu\".",
    "T'as l'impression de parler dans le vide à chaque post.",
    "Tu crois ne rien avoir à dire, alors tu postes pas.",
    "Tu t'es convaincu que LinkedIn c'est pour les influenceurs, pas pour toi.",
    "T'essaies des trucs au pif, sans stratégie, sans plan, sans résultat.",
    "Tu t'es promis de t'y mettre \"sérieusement\"… depuis 6 mois."
  ];

  return (
    <section id="pain-points" className="section bg-secondary py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tu te reconnais là-dedans ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <Card key={index} className="blur-card h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <p className="text-foreground/90 mb-2 font-medium">
                    • {point}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xl text-center mt-12 font-semibold text-destructive">
          Pendant ce temps, d'autres prennent ta place.
        </p>
      </div>
    </section>
  );
};

export default PainPoints;
