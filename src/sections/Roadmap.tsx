import React, { useState } from 'react';

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      period: '2025 Q1-Q2',
      title: 'MVP и Пилот',
      status: 'active',
      items: [
        'Запуск MVP в Ташкенте',
        'Тестирование алгоритма Proof-of-Help',
        'Набор первых 1,000 пользователей',
        'Верификация 5,000 добрых дел'
      ]
    },
    {
      period: '2025 Q3',
      title: 'Расширение функций',
      status: 'upcoming',
      items: [
        'Патруль доблести и модерация',
        'Система рейтингов и достижений',
        'Групповые задания',
        'Интеграция с соцсетями'
      ]
    },
    {
      period: '2025 Q4',
      title: 'Публичный запуск',
      status: 'upcoming',
      items: [
        'Полный релиз в Узбекистане',
        'Запуск токена MHR',
        'NFT маркетплейс',
        'Партнерства с местным бизнесом'
      ]
    },
    {
      period: '2026',
      title: 'Международная экспансия',
      status: 'future',
      items: [
        'Запуск в Казахстане и Киргизии',
        'Листинг на централизованных биржах',
        'Расширение в регион',
        'Достижение 100,000 пользователей'
      ]
    },
    {
      period: '2027+',
      title: 'Глобальная платформа',
      status: 'future',
      items: [
        'Полная DAO-модель управления',
        'Собственный Layer-2 сайдчейн',
        'Глобальная экспансия',
        '600+ городов по всему миру'
      ]
    }
  ];

  return (
    <>
      <div className="roadmap-section">
        <h2 className="section-title">Дорожная карта</h2>
        <p className="section-subtitle">
          Наш путь от пилотного проекта до глобальной платформы взаимопомощи
        </p>
        
        <div className="roadmap-timeline">
          <div className="timeline-line"></div>
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`timeline-item ${activePhase === index ? 'active' : ''} ${phase.status}`}
              onClick={() => setActivePhase(index)}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-content card-3d">
                <div className="phase-period">{phase.period}</div>
                <h3>{phase.title}</h3>
                <ul className="phase-items">
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className={`phase-status status-${phase.status}`}>
                  {phase.status === 'active' && '🔥 В процессе'}
                  {phase.status === 'upcoming' && '📅 Скоро'}
                  {phase.status === 'future' && '🔮 Планируется'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .roadmap-section {
          text-align: center;
        }
        
        .section-subtitle {
          color: var(--gray-text);
          font-size: 1.2rem;
          margin-bottom: 80px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .roadmap-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
        }
        
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, 
            var(--primary-cyan) 0%, 
            rgba(0, 188, 212, 0.5) 50%, 
            rgba(0, 188, 212, 0.2) 100%
          );
          transform: translateX(-50%);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          cursor: pointer;
        }
        
        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: 55%;
          text-align: right;
        }
        
        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 55%;
          text-align: left;
        }
        
        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 30px;
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .marker-dot {
          width: 20px;
          height: 20px;
          background: var(--primary-cyan);
          border: 4px solid var(--dark-bg);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .timeline-item.active .marker-dot {
          width: 30px;
          height: 30px;
          background: var(--accent-gold);
          box-shadow: 0 0 20px var(--accent-gold);
        }
        
        .timeline-item.active .timeline-content {
          transform: scale(1.05);
        }
        
        .timeline-content {
          padding: 30px;
          transition: all 0.3s ease;
        }
        
        .phase-period {
          color: var(--primary-cyan);
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
        
        .timeline-content h3 {
          color: var(--light-text);
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
        
        .phase-items {
          list-style: none;
          margin-bottom: 20px;
        }
        
        .phase-items li {
          color: var(--gray-text);
          padding: 8px 0;
          position: relative;
          padding-left: 25px;
        }
        
        .timeline-item:nth-child(even) .phase-items li {
          padding-left: 25px;
          padding-right: 0;
        }
        
        .phase-items li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-cyan);
          font-weight: bold;
        }
        
        .timeline-item:nth-child(even) .phase-items li::before {
          left: 0;
          right: auto;
        }
        
        .phase-status {
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-block;
          margin-top: 10px;
        }
        
        .status-active {
          background: rgba(76, 175, 80, 0.2);
          color: var(--accent-green);
        }
        
        .status-upcoming {
          background: rgba(255, 215, 0, 0.2);
          color: var(--accent-gold);
        }
        
        .status-future {
          background: rgba(0, 188, 212, 0.2);
          color: var(--primary-cyan);
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }
          
          .timeline-marker {
            left: 30px;
          }
          
          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            margin-left: 80px;
            margin-right: 0;
            text-align: left;
          }
          
          .phase-items li {
            padding-left: 25px;
            padding-right: 0;
          }
          
          .phase-items li::before {
            left: 0;
            right: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Roadmap;

