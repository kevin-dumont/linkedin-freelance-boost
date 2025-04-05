
import React from 'react';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import AboutMe from '@/components/AboutMe';
import OfferDetails from '@/components/OfferDetails';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import VideoSalesLetter from '@/components/VideoSalesLetter';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <VideoSalesLetter />
        <Hero />
        <PainPoints />
        <AboutMe />
        <OfferDetails />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Toaster />
    </div>
  );
};

export default Index;
