
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Hero from '../components/Home/Hero';
import NewsSection from '../components/Home/NewsSection';
import InformativosSection from '../components/Home/InformativosSection';
import Footer from '../components/Layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <NewsSection />
        <InformativosSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
