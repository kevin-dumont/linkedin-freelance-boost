
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Combien de temps faut-il pour voir les premiers résultats ?",
      answer: "Les premiers résultats en termes de visibilité sont généralement visibles dès les 2-3 premières semaines. Pour les prises de contact concrètes et les opportunités de mission, comptez plutôt 4 à 8 semaines. Tout dépend de la régularité de publication et du suivi des actions recommandées."
    },
    {
      question: "Est-ce que je vais devoir passer beaucoup de temps sur LinkedIn ?",
      answer: "Non, la stratégie est optimisée pour les développeurs qui ont peu de temps. Vous aurez besoin de consacrer environ 2-3h par semaine à LinkedIn, réparties en petites sessions de 15-30 minutes. Nous mettons en place des processus efficaces et utilisons des outils d'automatisation pour maximiser votre temps."
    },
    {
      question: "Je n'ai pas d'idées de contenu, est-ce un problème ?",
      answer: "Pas du tout ! C'est justement l'un des points forts de cet accompagnement. Nous identifions ensemble les sujets qui résonnent avec votre expertise et votre cible. De plus, je vous fournis des templates et des prompts d'IA pour générer du contenu pertinent sans partir de zéro."
    },
    {
      question: "Dois-je déjà avoir une audience pour que ça fonctionne ?",
      answer: "Non, la méthode fonctionne même si vous partez de zéro. Beaucoup de mes clients commencent avec moins de 100 connexions et obtiennent des résultats. La qualité de votre réseau compte plus que sa taille, et nous travaillons justement à attirer les bonnes personnes."
    },
    {
      question: "Est-ce que je serai obligé de devenir un influenceur tech ?",
      answer: "Absolument pas. L'objectif est d'établir votre expertise de façon ciblée et professionnelle, pas de devenir un influenceur. Nous créons une présence LinkedIn orientée business qui vous ressemble et qui attire des clients, pas des followers."
    },
    {
      question: "Que se passe-t-il si je n'ai pas le temps de publier régulièrement ?",
      answer: "La constance est importante, mais nous adaptons la stratégie à votre disponibilité. Nous prévoyons des périodes plus intenses et des périodes plus légères. Je vous aide également à créer du contenu à l'avance et à programmer vos publications pour maintenir une présence même quand vous êtes occupé."
    }
  ];

  return (
    <section id="faq" className="section bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Questions fréquentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
