import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import VideoTutorials from './components/VideoTutorials';
import LogoSlider from './components/LogoSlider';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Features />
      <Gallery />
      <VideoTutorials />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
