import React from 'react';

const OfferDetails: React.FC = () => {
  const forYouPoints = [
    "Tu es développeur freelance et tu as du mal à trouver des clients.",
    "Tu sais que LinkedIn est un outil puissant, mais tu ne sais pas comment l'utiliser efficacement.",
    "Tu veux attirer des clients à toi, sans avoir à faire de prospection froide.",
    "Tu es prêt à investir du temps et de l'énergie pour développer ta présence sur LinkedIn.",
    "Tu as besoin d'un accompagnement personnalisé pour atteindre tes objectifs."
  ];

  const notForYouPoints = [
    "Tu penses que LinkedIn c'est juste pour les influenceurs et les commerciaux.",
    "Tu n'es pas prêt à investir du temps et de l'énergie pour développer ta présence sur LinkedIn.",
    "Tu veux des résultats immédiats, sans effort.",
    "Tu n'es pas ouvert aux conseils et tu préfères faire les choses à ta manière.",
    "Tu n'as pas les moyens d'investir dans un accompagnement personnalisé."
  ];

  const offerPhases = [
    {
      title: "Audit de ton profil LinkedIn",
      points: [
        "Analyse complète de ton profil actuel",
        "Identification des points forts et des axes d'amélioration",
        "Recommandations personnalisées pour optimiser ton profil"
      ],
      duration: "Durée : 1 semaine"
    },
    {
      title: "Définition de ta stratégie de contenu",
      points: [
        "Identification de ta cible et de ses besoins",
        "Définition de ton positionnement et de ta proposition de valeur",
        "Création d'un calendrier éditorial personnalisé"
      ],
      duration: "Durée : 2 semaines"
    },
    {
      title: "Création de contenu engageant",
      points: [
        "Rédaction de posts percutants et adaptés à ta cible",
        "Création de visuels attractifs et professionnels",
        "Optimisation de tes publications pour maximiser leur portée"
      ],
      duration: "Durée : 3 semaines"
    }
  ];

  const includedPoints = [
    "Un audit complet de ton profil LinkedIn",
    "Une stratégie de contenu personnalisée",
    "Un calendrier éditorial sur mesure",
    "La création de contenu engageant (posts, visuels, etc.)",
    "Un accompagnement personnalisé tout au long de la mission",
    "Un suivi régulier de tes performances",
    "L'accès à une communauté de développeurs freelance"
  ];

  const notIncludedPoints = [
    "La garantie de résultats immédiats (le succès sur LinkedIn prend du temps)",
    "La gestion de ton profil LinkedIn à ta place (tu seras acteur de ta présence en ligne)",
    "La création de contenu à l'infini (nous définirons ensemble une stratégie réaliste)",
    "Le remboursement de la mission si tu n'es pas satisfait (nous ferons tout pour que tu le sois)"
  ];

  return (
    <section id="offer" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Cette offre est <span className="gradient-text">faite pour vous</span> si...
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">✓</span> Idéal pour vous si
            </h3>
            <ul className="checkmark-list space-y-4">
              {forYouPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-destructive mr-2">✗</span> Pas pour vous si
            </h3>
            <ul className="x-list space-y-4">
              {notForYouPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-secondary/50 p-8 rounded-lg shadow-sm mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Le déroulé complet de l'offre
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offerPhases.map((phase, index) => (
              <div key={index} className="blur-card p-6">
                <h4 className="text-xl font-bold mb-4 gradient-text">
                  Phase {index + 1} - {phase.title}
                </h4>
                <ul className="space-y-2">
                  {phase.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-foreground/70">{phase.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">✓</span> Ce que comprend cette offre
            </h3>
            <ul className="checkmark-list space-y-4">
              {includedPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-destructive mr-2">✗</span> Ce que ne comprend pas cette offre
            </h3>
            <ul className="x-list space-y-4">
              {notIncludedPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default OfferDetails;
