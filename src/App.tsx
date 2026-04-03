import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
