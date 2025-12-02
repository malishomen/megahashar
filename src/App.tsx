import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Whitepaper from './sections/Whitepaper';
import Roadmap from './sections/Roadmap';
import Analytics from './sections/Analytics';
import FAQ from './sections/FAQ';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Анимация при загрузке
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <ThreeScene />
      <Header />
      
      <main className="main-content">
        <section id="home">
          <Hero />
        </section>
        
        <section id="mission">
          <Mission />
        </section>
        
        <section id="whitepaper">
          <Whitepaper />
        </section>
        
        <section id="roadmap">
          <Roadmap />
        </section>
        
        <section id="analytics">
          <Analytics />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

