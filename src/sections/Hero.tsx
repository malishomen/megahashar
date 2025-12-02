import { useEffect, useState } from 'react';
import '../styles/animations.css';

const Hero: React.FC = () => {
  const [counters, setCounters] = useState({
    users: 0,
    tasks: 0,
    cities: 1
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = {
        users: 50000 / steps,
        tasks: 30000 / steps,
        cities: 600 / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounters({
          users: Math.min(Math.floor(currentStep * increment.users), 50000),
          tasks: Math.min(Math.floor(currentStep * increment.tasks), 30000),
          cities: Math.min(Math.floor(currentStep * increment.cities), 600)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">MegaHashAr</span> — децентрализованная платформа взаимопомощи
            </h1>
            <p className="hero-subtitle">
              Где добрые дела становятся цифровой ценностью. Объединяем людей через технологию блокчейн,
              вознаграждая взаимопомощь и создавая справедливое общество.
            </p>
            
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number" id="counter-users">
                  {counters.users.toLocaleString()}
                </div>
                <div className="stat-label">Активных пользователей</div>
                <div className="stat-trend">↑ 1200% за 3 года</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number" id="counter-tasks">
                  {counters.tasks.toLocaleString()}
                </div>
                <div className="stat-label">Заданий в месяц</div>
                <div className="stat-trend">↑ 1100% рост</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number" id="counter-cities">
                  {counters.cities}
                </div>
                <div className="stat-label">Городов</div>
                <div className="stat-trend">Глобальная экспансия</div>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}>
                Узнать больше
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('whitepaper')?.scrollIntoView({ behavior: 'smooth' })}>
                Читать Whitepaper
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="heart-orbits-container">
              {/* Центральная ось энергии */}
              <div className="energy-axis"></div>
              
              {/* Кибер-сердце */}
              <div className="cyber-heart">
                <img 
                  src="/megahashar/assets/megaheart.png" 
                  alt="MegaHashAr Cyber Heart"
                  className="heart-image"
                  onError={(e) => {
                    // Fallback: показываем градиентное сердце если картинка не загрузилась
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.classList.add('fallback-heart');
                  }}
                />
                <div className="heart-glow"></div>
              </div>
              
              {/* Орбиты вокруг сердца */}
              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>
              <div className="orbit orbit-3"></div>
              
              {/* Энергетические частицы на орбитах */}
              <div className="energy-particles">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="particle" 
                    style={{ 
                      '--particle-delay': `${i * 0.5}s`,
                      '--orbit-radius': `${120 + (i % 3) * 80}px`
                    } as React.CSSProperties}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 5% 80px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(0, 188, 212, 0.1) 0%, transparent 70%);
          z-index: -1;
        }
        
        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 30px;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--gray-text);
          margin-bottom: 50px;
          max-width: 600px;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .stat-card {
          background: rgba(17, 34, 64, 0.7);
          border: 1px solid rgba(0, 188, 212, 0.1);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-cyan);
          box-shadow: 0 10px 20px rgba(0, 188, 212, 0.1);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-cyan);
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--gray-text);
          margin-bottom: 5px;
        }
        
        .stat-trend {
          font-size: 0.8rem;
          color: var(--accent-green);
          font-weight: 500;
        }
        
        .hero-actions {
          display: flex;
          gap: 20px;
          margin-top: 40px;
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--primary-cyan);
          border: 2px solid var(--primary-cyan);
          padding: 13px 28px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: rgba(0, 188, 212, 0.1);
          transform: translateY(-3px);
        }
        
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .heart-orbits-container {
          width: 450px;
          height: 450px;
          position: relative;
          animation: float 6s ease-in-out infinite;
        }
        
        /* Центральная энергетическая ось */
        .energy-axis {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4px;
          height: 300px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(220, 38, 38, 0.6) 20%,
            rgba(220, 38, 38, 0.9) 50%,
            rgba(0, 188, 212, 0.6) 80%,
            transparent 100%
          );
          border-radius: 4px;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
          animation: axis-pulse 1.3s ease-in-out infinite;
          z-index: 1;
        }
        
        /* Кибер-сердце */
        .cyber-heart {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 180px;
          height: 180px;
          z-index: 10;
        }
        
        .heart-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.8));
          animation: heart-beat 1.3s ease-in-out infinite;
        }
        
        .heart-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          height: 220px;
          background: radial-gradient(
            circle,
            rgba(220, 38, 38, 0.3) 0%,
            rgba(220, 38, 38, 0.1) 50%,
            transparent 70%
          );
          border-radius: 50%;
          animation: glow-pulse 1.3s ease-in-out infinite;
          z-index: -1;
        }
        
        /* Fallback градиентное сердце */
        .cyber-heart.fallback-heart::before {
          content: '❤️';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 140px;
          filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.8));
        }
        
        /* Орбиты */
        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid;
          z-index: 5;
        }
        
        .orbit-1 {
          width: 240px;
          height: 240px;
          border-color: rgba(0, 188, 212, 0.6);
          animation: rotate 15s linear infinite, orbit-pulse 1.3s ease-in-out infinite;
        }
        
        .orbit-2 {
          width: 320px;
          height: 320px;
          border-color: rgba(0, 188, 212, 0.4);
          animation: rotate-reverse 20s linear infinite, orbit-pulse 1.3s ease-in-out infinite 0.2s;
        }
        
        .orbit-3 {
          width: 400px;
          height: 400px;
          border-color: rgba(0, 188, 212, 0.25);
          animation: rotate 25s linear infinite, orbit-pulse 1.3s ease-in-out infinite 0.4s;
        }
        
        /* Энергетические частицы */
        .energy-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 8;
        }
        
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--primary-cyan);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          box-shadow: 0 0 15px var(--primary-cyan);
          animation: orbit-move 4s linear infinite;
          animation-delay: var(--particle-delay);
        }
        
        /* Анимации */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes heart-beat {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.8));
          }
          14% { 
            transform: scale(1.08);
            filter: drop-shadow(0 0 45px rgba(220, 38, 38, 1));
          }
          28% { 
            transform: scale(1.02);
            filter: drop-shadow(0 0 35px rgba(220, 38, 38, 0.85));
          }
          42% { 
            transform: scale(1.06);
            filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.95));
          }
          70% { 
            transform: scale(1);
            filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.8));
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          14% { 
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
          28% { 
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.8;
          }
          42% { 
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.9;
          }
          70% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
        }
        
        @keyframes axis-pulse {
          0%, 100% { 
            opacity: 0.7;
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
          }
          14%, 42% { 
            opacity: 1;
            box-shadow: 0 0 35px rgba(220, 38, 38, 0.9);
          }
          28% { 
            opacity: 0.85;
            box-shadow: 0 0 25px rgba(220, 38, 38, 0.7);
          }
        }
        
        @keyframes orbit-pulse {
          0%, 100% { 
            opacity: 0.6;
          }
          14%, 42% { 
            opacity: 1;
            box-shadow: 0 0 15px var(--primary-cyan);
          }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        
        @keyframes orbit-move {
          from { 
            transform: translate(-50%, -50%) 
                       rotate(0deg) 
                       translateX(var(--orbit-radius)) 
                       rotate(0deg);
          }
          to { 
            transform: translate(-50%, -50%) 
                       rotate(360deg) 
                       translateX(var(--orbit-radius)) 
                       rotate(-360deg);
          }
        }
        
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-subtitle {
            max-width: 100%;
          }
          
          .hero-stats {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .hero-actions {
            justify-content: center;
          }
          
          .heart-orbits-container {
            width: 350px;
            height: 350px;
          }
          
          .cyber-heart {
            width: 140px;
            height: 140px;
          }
          
          .heart-glow {
            width: 170px;
            height: 170px;
          }
          
          .orbit-1 { width: 200px; height: 200px; }
          .orbit-2 { width: 260px; height: 260px; }
          .orbit-3 { width: 320px; height: 320px; }
          
          .energy-axis {
            height: 240px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-stats {
            grid-template-columns: 1fr;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .heart-orbits-container {
            width: 280px;
            height: 280px;
          }
          
          .cyber-heart {
            width: 110px;
            height: 110px;
          }
          
          .heart-glow {
            width: 140px;
            height: 140px;
          }
          
          .orbit-1 { width: 160px; height: 160px; }
          .orbit-2 { width: 210px; height: 210px; }
          .orbit-3 { width: 260px; height: 260px; }
          
          .energy-axis {
            height: 200px;
            width: 3px;
          }
          
          .particle {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;

