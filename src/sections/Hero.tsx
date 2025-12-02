import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

const Hero: React.FC = () => {
  const [counters, setCounters] = useState({
    users: 0,
    tasks: 0,
    cities: 1
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const animationFrameRef = useRef<number>();

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
  
  // Инициализация золотых частиц
  useEffect(() => {
    const initParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      initParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        baseX: Math.random() * window.innerWidth,
        baseY: Math.random() * window.innerHeight,
        vx: 0,
        vy: 0
      });
    }
    setParticles(initParticles);
  }, []);
  
  // Отслеживание мыши и обновление частиц
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Проверка нахождения в hero секции
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const inSection = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsInHeroSection(inSection);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Анимация частиц с магнитным эффектом
  useEffect(() => {
    const animateParticles = () => {
      if (!isInHeroSection) {
        animationFrameRef.current = requestAnimationFrame(animateParticles);
        return;
      }
      
      setParticles(prev => prev.map(particle => {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const magnetRange = 200;
        
        if (distance < magnetRange && distance > 0) {
          const force = (magnetRange - distance) / magnetRange;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * 0.5;
          particle.vy += Math.sin(angle) * force * 0.5;
        }
        
        // Возврат к базовой позиции
        const returnForce = 0.05;
        particle.vx += (particle.baseX - particle.x) * returnForce;
        particle.vy += (particle.baseY - particle.y) * returnForce;
        
        // Применение скорости с затуханием
        particle.vx *= 0.95;
        particle.vy *= 0.95;
        
        return {
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy
        };
      }));
      
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };
    
    animationFrameRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isInHeroSection]);

  return (
    <>
      {/* Золотые частицы */}
      <div className="golden-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle-golden"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`
            }}
          />
        ))}
      </div>
      
      <div className="hero-section" ref={heroRef}>
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
            {/* Hero видео hero3.mp4 */}
            <div className="hero-video-wrapper">
              <video
                className="hero-video-media"
                src="/megahashar/assets/hero3.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="hero-video-gradient"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        /* Золотые частицы */
        .golden-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
        }
        
        .particle-golden {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent-gold);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-gold),
                      0 0 20px var(--accent-gold);
          transition: none;
          will-change: transform;
        }
        
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
        
        /* Hero видео справа */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .hero-video-wrapper {
          position: relative;
          width: 100%;
          max-width: 550px;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.6),
            0 0 80px rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.2);
        }
        
        .hero-video-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .hero-video-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(10, 25, 47, 0.3) 80%
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
          
          .hero-video-wrapper {
            max-width: 450px;
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
          
          .hero-video-wrapper {
            max-width: 100%;
          }
          
          .particle-golden {
            width: 3px;
            height: 3px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
