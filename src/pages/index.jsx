import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Problems from '../components/Problems.jsx';
import Methodology from '../components/Methodology.jsx';
import About from '../components/About.jsx';
import Program from '../components/Program.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Methodology />
        <About />
        <Program />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
