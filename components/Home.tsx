import React from 'react';
import Hero from './Hero';
import StatsRow from './StatsRow';
import WhySection from './WhySection';
import Features from './Features';
import FeatureDeepDive from './FeatureDeepDive';
import Testimonials from './Testimonials';
import Differentiation from './Differentiation';
import Pricing from './Pricing';
import CTA from './CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <StatsRow />
      <WhySection />
      <Features />
      <FeatureDeepDive />
      <Testimonials />
      <Differentiation />
      <Pricing />
      <CTA />
    </>
  );
};

export default Home;
