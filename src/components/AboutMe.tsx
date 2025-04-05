
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutMe: React.FC = () => {
  const achievements = [
    "J'ai accompagné +180 freelances dans l'IT pour trouver des missions, vendre leurs SaaS ou faire de l'apport d'affaires.",
    "J'ai généré +8 millions d'impressions LinkedIn en seulement 9 mois.",
    "J'ai construit une audience de +10000 abonnés qualifiés dans la tech.",
    "J'ai créé une formation LinkedIn dédiée aux développeurs, avec +180 élèves satisfaits.",
    "J'optimise les profils LinkedIn pour convertir les vues en rendez-vous.",
    "J'écris des posts efficaces avec l'IA pour maximiser la portée et l'engagement.",
    "Je booste la visibilité des freelances tech grâce à des stratégies d'engagement ciblées.",
    "J'ai une expertise concrète du terrain grâce à mon expérience de développeur JS / React chez Warner Bros. Discovery.",
    "Je maîtrise le copywriting et la vente pour transformer la visibilité en chiffre d'affaires concret."
  ];

  return (
    <section id="about" className="section relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10"></div>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Qui suis-je ?
          </h2>
          
          <div className="mb-12 text-center">
            <p className="text-xl mb-6">
              Je m'appelle <span className="highlight-text">Kevin Dumont</span>, et j'aide les développeurs freelance à trouver des clients grâce à LinkedIn.
            </p>
            <p className="text-lg mb-8">
              En moins d'un an, j'ai transformé LinkedIn en machine à clients pour les devs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((achievement, index) => (
              <Card key={index} className="blur-card border-border/30">
                <CardContent className="p-5">
                  <p className="text-foreground/90">
                    <span className="text-primary font-bold">✦</span> {achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-lg">
              En bref, je connais parfaitement les enjeux des freelances tech pour avoir été moi-même dans leurs chaussures, et je les aide à attirer les bons clients grâce à du contenu qui convertit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
