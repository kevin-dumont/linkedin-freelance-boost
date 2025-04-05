
import React from 'react';
import { Card } from '@/components/ui/card';

const VideoSalesLetter: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <div className="aspect-video w-full relative bg-muted flex items-center justify-center">
              {/* Video placeholder - replace with actual video embed code */}
              <div className="text-center p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Vidéo de présentation</h2>
                <p className="text-muted-foreground">
                  Votre vidéo de vente sera intégrée ici. Dimensions recommandées : 16:9
                </p>
                {/* 
                Pour intégrer une vidéo, remplacez ce bloc par le code d'intégration.
                Exemple YouTube:
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/VIDEO_ID" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
                */}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSalesLetter;
