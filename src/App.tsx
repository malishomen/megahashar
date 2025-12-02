import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Whitepaper from './sections/Whitepaper';
import Roadmap from './sections/Roadmap';
import Analytics from './sections/Analytics';
import FAQ from './sections/FAQ';
import './styles/globals.css';
import './styles/performance.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Анимация при загрузке
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  // Parallax для фонового видео
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const backgroundStyle = {
    transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px)) scale(1.1)`
  };

  return (
    <div className="app">
      {/* Видео-фон на всю страницу с parallax */}
      <div className="video-background">
        <video
          className="video-background__media"
          src="/megahashar/assets/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={backgroundStyle}
        />
        <div className="video-background__overlay"></div>
      </div>
      
      {/* ThreeScene убран - видео должно быть видно */}
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

