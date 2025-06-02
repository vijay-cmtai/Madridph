
import React from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InnovationSection from '@/components/InnovationSection';
import ProductsSection from '@/components/ProductsSection';
import ApproachSection from '@/components/ApproachSection';
import TherapiesSection from '@/components/TherapiesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <InnovationSection />
        <ProductsSection />
        <ApproachSection />
        <TherapiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
