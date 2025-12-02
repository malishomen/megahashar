import { useEffect, useState } from 'react';

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
            <div className="hero-heart-video">
              <video
                className="hero-heart-video__media"
                src="/megahashar/assets/megaheart_bg.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="hero-heart-video__overlay"></div>
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
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--gray-text);
          margin-bottom: 50px;
          max-width: 600px;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.8);
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .stat-card {
          background: rgba(17, 34, 64, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 188, 212, 0.2);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .stat-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: var(--primary-cyan);
          box-shadow: 0 10px 30px rgba(0, 188, 212, 0.3);
          background: rgba(17, 34, 64, 0.95);
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
        
        /* Видео-блок с кибер-сердцем */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .hero-heart-video {
          position: relative;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        
        .hero-heart-video__media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .hero-heart-video__overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(10, 25, 47, 0.3) 70%,
            rgba(10, 25, 47, 0.6) 100%
          );
          pointer-events: none;
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
          
          .hero-heart-video {
            max-width: 500px;
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
          
          .hero-heart-video {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
