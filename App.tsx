import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsRow from './components/StatsRow';
import WhySection from './components/WhySection';
import Features from './components/Features';
import FeatureDeepDive from './components/FeatureDeepDive';
import Testimonials from './components/Testimonials';
import Differentiation from './components/Differentiation';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <StatsRow />
        <WhySection />
        <Features />
        <FeatureDeepDive />
        <Testimonials />
        <Differentiation />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;