import React, { useState, useEffect } from 'react';
import '../styles/animations.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Определение активного раздела
      const sections = ['home', 'mission', 'whitepaper', 'roadmap', 'analytics', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'mission', label: 'Миссия' },
    { id: 'whitepaper', label: 'Whitepaper' },
    { id: 'roadmap', label: 'Дорожная карта' },
    { id: 'analytics', label: 'Аналитика' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <div className="logo-icon">
              <div className="nexus-dot"></div>
            </div>
            <span className="logo-text gradient-text">MegaHashAr</span>
          </div>
          
          <nav className="nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <button className="btn-primary mobile-hidden" onClick={() => scrollToSection('whitepaper')}>
            Присоединиться
          </button>
          
          <button className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 5%;
          transition: all 0.3s ease;
        }
        
        .header.scrolled {
          background: rgba(10, 25, 47, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          padding: 15px 5%;
        }
        
        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
          cursor: pointer;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary-cyan), var(--primary-teal));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: pulse 2s infinite;
        }
        
        .nexus-dot {
          width: 12px;
          height: 12px;
          background: var(--accent-gold);
          border-radius: 50%;
          position: relative;
        }
        
        .nexus-dot::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid var(--accent-gold);
          border-radius: 50%;
          opacity: 0.5;
          animation: ripple 2s infinite;
        }
        
        .logo-text {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        
        .nav {
          display: flex;
          gap: 30px;
        }
        
        .nav-item {
          background: none;
          border: none;
          color: var(--gray-text);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-item:hover {
          color: var(--light-text);
          background: rgba(0, 188, 212, 0.1);
        }
        
        .nav-item.active {
          color: var(--primary-cyan);
          background: rgba(0, 188, 212, 0.15);
        }
        
        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: var(--primary-cyan);
          border-radius: 50%;
        }
        
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
        }
        
        .menu-toggle span {
          width: 25px;
          height: 2px;
          background: var(--light-text);
          transition: 0.3s;
          border-radius: 2px;
        }
        
        .mobile-hidden {
          display: block;
        }
        
        @media (max-width: 1024px) {
          .nav {
            gap: 15px;
          }
        }
        
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }
          
          .nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--dark-card);
            flex-direction: column;
            padding: 20px;
            gap: 10px;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .nav.open {
            display: flex;
          }
          
          .mobile-hidden {
            display: none;
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Header;

