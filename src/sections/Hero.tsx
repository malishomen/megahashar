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
            <div className="nexus-animation">
              <div className="nexus-core">
                <div className="core-glow"></div>
              </div>
              <div className="nexus-ring ring-1"></div>
              <div className="nexus-ring ring-2"></div>
              <div className="nexus-ring ring-3"></div>
              <div className="nexus-nodes">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="nexus-node" style={{ transform: `rotate(${i * 45}deg)` }}>
                    <div className="node-glow"></div>
                  </div>
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
        }
        
        .nexus-animation {
          width: 400px;
          height: 400px;
          position: relative;
          animation: float 6s ease-in-out infinite;
        }
        
        .nexus-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: var(--accent-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 50px var(--accent-gold);
          animation: pulse-gold 3s infinite;
        }
        
        .core-glow {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          animation: pulse-white 2s infinite;
        }
        
        .nexus-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 2px solid;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .ring-1 {
          width: 200px;
          height: 200px;
          border-color: var(--primary-cyan);
          animation: rotate 20s linear infinite;
        }
        
        .ring-2 {
          width: 300px;
          height: 300px;
          border-color: rgba(0, 188, 212, 0.5);
          animation: rotate-reverse 25s linear infinite;
        }
        
        .ring-3 {
          width: 400px;
          height: 400px;
          border-color: rgba(0, 188, 212, 0.2);
          animation: rotate 30s linear infinite;
        }
        
        .nexus-nodes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .nexus-node {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          transform-origin: 50% 50%;
        }
        
        .node-glow {
          width: 12px;
          height: 12px;
          background: var(--primary-cyan);
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: glow 2s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 50px var(--accent-gold); }
          50% { box-shadow: 0 0 80px var(--accent-gold); }
        }
        
        @keyframes pulse-white {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
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
          
          .nexus-animation {
            width: 300px;
            height: 300px;
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
        }
      `}</style>
    </>
  );
};

export default Hero;

