
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OfferDetails: React.FC = () => {
  const goodFitItems = [
    "Tu es développeur freelance et tu cherches à attirer des clients de qualité via LinkedIn, mais ton profil reste invisible malgré tes compétences techniques.",
    "Tu as du mal à convertir les visites sur ton profil en véritables opportunités de missions, même si tu es compétent dans ton domaine.",
    "Tu publies déjà du contenu sur LinkedIn mais tu ne vois aucun impact concret sur ton pipeline de prospects et ton chiffre d'affaires.",
    "Tu veux développer une audience qualifiée dans la tech sans sacrifier ton temps de développement ou ta production client.",
    "Tu veux transformer LinkedIn en canal d'acquisition de clients sans recourir à des techniques de prospection chronophages ou invasives."
  ];

  const notGoodFitItems = [
    "Tu recherches uniquement une solution clé en main sans t'impliquer dans la création de contenu ou l'optimisation de ta présence LinkedIn.",
    "Tu n'as pas encore défini clairement tes services ou ton positionnement en tant que développeur freelance.",
    "Tu préfères investir dans des publicités payantes plutôt que de construire une stratégie organique durable sur LinkedIn.",
    "Tu cherches des résultats immédiats sans engagement sur la durée nécessaire pour bâtir une autorité dans ton domaine.",
    "Tu travailles en entreprise et tu n'as pas besoin de trouver des clients ou de promouvoir tes services de façon autonome."
  ];

  const beforeAfterItems = {
    before: [
      "Ils publiaient dans le vide, sans aucune stratégie.",
      "Leur profil LinkedIn n'était pas optimisé et passait inaperçu.",
      "Aucun contact qualifié, aucun rendez-vous.",
      "Aucun retour sur leurs efforts de contenu."
    ],
    after: [
      "Un positionnement clair, visible et différenciant.",
      "Un profil qui génère des prises de contact qualifiées.",
      "Des posts qui convertissent, pas juste des likes.",
      "Des missions décrochées via LinkedIn.",
      "Une stratégie durable pour générer des clients sans prospecter à froid."
    ]
  };

  const phases = [
    {
      title: "DÉMARRAGE STRATÉGIQUE",
      items: [
        "Compréhension de ton activité et de tes objectifs business",
        "Définition de ton positionnement et de ton audience cible",
        "Élaboration de la stratégie éditoriale sur mesure",
        "Sélection des thématiques fortes qui te démarquent",
        "Création de ton calendrier de publication personnalisé"
      ],
      duration: "Durée du rendez-vous : 1h30"
    },
    {
      title: "ACCÈS AUX RESSOURCES ET À LA COMMUNAUTÉ",
      items: [
        "Plateforme de formation asynchrone",
        "Templates et méthodologies prêts à l'emploi",
        "Communauté privée de développeurs",
        "Discussions et partages de bonnes pratiques",
        "Réponses en continu via la plateforme"
      ],
      duration: "Accès illimité + échanges asynchrones"
    },
    {
      title: "ACCOMPAGNEMENT PERSONNALISÉ",
      items: [
        "Appels 1:1 tous les 10 jours",
        "Review et amélioration de tes posts",
        "Conseils personnalisés pour booster ta portée",
        "Analyse des résultats + ajustements",
        "Validation de tes idées de contenus"
      ],
      duration: "Durée : 3 mois"
    }
  ];

  const includes = [
    "Un accompagnement complet pour transformer ton profil LinkedIn en machine à clients",
    "Optimisation de ton profil LinkedIn",
    "Création de posts impactants avec IA (si tu veux)",
    "Stratégies concrètes pour générer des rendez-vous",
    "Méthodes pour construire une audience qualifiée tech",
    "Conseils pour vendre tes prestations, ton SaaS ou faire de l'apport d'affaires",
    "Techniques pour maximiser ta portée organique sans pub",
    "Retours personnalisés sur tes actions",
    "Système pour transformer les impressions en leads",
    "Méthodologie testée avec +180 freelances",
    "Accès à mes prompts, templates, ressources",
    "Accompagnement pour trouver des missions sans réseau",
    "Automatisations pour LinkedIn",
    "Appels 1-1 tous les 10 jours",
    "Support 7/7 par message",
    "1 post écrit pour toi chaque semaine",
    "Update marketing continu"
  ];

  const bonus = [
    "Coaching apport d'affaires (Chris Scholly)",
    "Refonte complète de ton profil LinkedIn (valeur 600€) : bannière, sélection, visuels, photo de profil, contenu, retours illimités"
  ];

  const excludes = [
    "Refonte ou création de site web",
    "Achat de publicités LinkedIn",
    "Externalisation complète de tous tes posts",
    "Stratégie multicanale hors LinkedIn",
    "Coaching sur d'autres plateformes",
    "Démarchage téléphonique ou mailing",
    "Garantie de résultats chiffrés (tu restes acteur)",
    "Support technique pour outils extérieurs",
    "Masterclass d'intervenants externes",
    "Gestion administrative de ton activité freelance"
  ];

  const doNothingList = [
    "Tu continues à publier dans le vide",
    "Ton profil reste invisible",
    "Tu rates 1 à 2 missions par mois",
    "À 400€/jour, tu perds 8000€/mois",
    "En 3 mois, t'as perdu 24 000€",
    "À l'année, t'as perdu une Tesla"
  ];

  const takeActionList = [
    "On clarifie ton positionnement",
    "Ton profil attire les bons clients",
    "Tu publies du contenu qui convertit",
    "Tu décroches des missions sous 2 à 3 mois",
    "Tu construis un canal d'acquisition rentable",
    "Une mission peut rembourser l'accompagnement"
  ];

  return (
    <section id="offer" className="section bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mon offre pour les développeurs freelance
        </h2>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="blur-card border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Cette offre est faite pour vous si…
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="checkmark-list">
                  {goodFitItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="blur-card border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">
                  Cette offre n'est pas faite pour vous si…
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="x-list">
                  {notGoodFitItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">
          Avant/Après de mes clients
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="blur-card border-border/30">
            <CardHeader>
              <CardTitle className="text-xl text-destructive">Avant</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {beforeAfterItems.before.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-destructive">•</span> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="blur-card border-border/30">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Après</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {beforeAfterItems.after.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">
          Le déroulé complet de l'offre
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className="blur-card border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Phase {index + 1} – {phase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <span className="text-primary">•</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4">{phase.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <Tabs defaultValue="includes">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="includes">Ce que comprend l'offre</TabsTrigger>
              <TabsTrigger value="excludes">Ce que ne comprend pas l'offre</TabsTrigger>
            </TabsList>
            
            <TabsContent value="includes">
              <Card className="blur-card border-border/30">
                <CardContent className="pt-6">
                  <ul className="checkmark-list grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    {includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <h4 className="font-bold text-primary mb-4">Bonus si tu prends ce soir avant minuit :</h4>
                    <ul className="space-y-2">
                      {bonus.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-primary">★</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="excludes">
              <Card className="blur-card border-border/30">
                <CardContent className="pt-6">
                  <ul className="x-list grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    {excludes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">
          Ne rien faire VS Remplir ce formulaire
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="blur-card border-border/30">
            <CardHeader>
              <CardTitle className="text-xl text-destructive">Si tu ne fais rien</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {doNothingList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-destructive mt-1">↓</span> 
                    {index === doNothingList.length - 2 ? (
                      <span className="text-destructive font-semibold">{item}</span>
                    ) : index === doNothingList.length - 1 ? (
                      <span className="text-destructive font-bold text-lg">➜ {item}</span>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="blur-card border-border/30">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Tu remplis ce formulaire</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {takeActionList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">↓</span>
                    {index === takeActionList.length - 2 ? (
                      <span className="text-primary font-semibold">{item}</span>
                    ) : index === takeActionList.length - 1 ? (
                      <span className="text-primary font-bold text-lg">➜ {item}</span>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
