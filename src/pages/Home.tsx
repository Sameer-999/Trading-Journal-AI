import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TargetAudience from '../components/TargetAudience';
import Pricing from '../components/Pricing';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <Pricing />
      <CTASection />
    </main>
  );
}
