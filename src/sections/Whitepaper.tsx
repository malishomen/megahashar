import { useState } from 'react';

const Whitepaper: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: 'Введение',
      icon: '📖',
      content: 'MegaHashAr — это децентрализованная платформа взаимопомощи, основанная на узбекской традиции "Хашар". Мы создаем глобальную экосистему, где добрые дела становятся цифровой ценностью через технологию блокчейн.'
    },
    {
      title: 'Архитектура',
      icon: '🏗️',
      content: 'Платформа использует уникальную комбинацию алгоритмов: Proof-of-Stake для консенсуса, Proof-of-Help для верификации добрых дел, и Move-to-Earn механику для мотивации пользователей.'
    },
    {
      title: 'Токеномика',
      icon: '💰',
      content: 'MHR токен — основа экономики платформы. Общее количество: 1 млрд токенов. Распределение: 40% - сообщество, 20% - команда, 15% - инвесторы, 15% - резерв, 10% - маркетинг.'
    },
    {
      title: 'Безопасность',
      icon: '🔒',
      content: 'Многоуровневая система безопасности включает верификацию через видео, геолокацию, репутационные метрики и AI-анализ для предотвращения мошенничества.'
    },
    {
      title: 'Дорожная карта',
      icon: '🗺️',
      content: 'Поэтапный запуск начинается с пилотного проекта в Ташкенте в 2025 Q1-Q2, с последующей экспансией на регион и глобальные рынки к 2027 году.'
    }
  ];

  return (
    <>
      <div className="whitepaper-section">
        <h2 className="section-title">Whitepaper</h2>
        <p className="section-subtitle">
          Подробная документация о технологии, экономике и будущем MegaHashAr
        </p>
        
        <div className="whitepaper-container">
          <div className="chapters-nav">
            {chapters.map((chapter, index) => (
              <button
                key={index}
                className={`chapter-item ${activeChapter === index ? 'active' : ''}`}
                onClick={() => setActiveChapter(index)}
              >
                <span className="chapter-icon">{chapter.icon}</span>
                <span className="chapter-title">{chapter.title}</span>
              </button>
            ))}
          </div>
          
          <div className="chapter-content card-3d">
            <div className="chapter-header">
              <span className="chapter-icon-large">{chapters[activeChapter].icon}</span>
              <h3>{chapters[activeChapter].title}</h3>
            </div>
            <div className="chapter-text">
              {chapters[activeChapter].content}
            </div>
            <div className="chapter-footer">
              <button 
                className="btn-primary"
                onClick={() => window.open('/megahashar.md', '_blank')}
              >
                Скачать полный Whitepaper
              </button>
            </div>
          </div>
        </div>
        
        <div className="whitepaper-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">⚡</div>
            <h4>Быстрая верификация</h4>
            <p>Подтверждение добрых дел за минуты</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🎁</div>
            <h4>Реальные награды</h4>
            <p>Токены и NFT за помощь другим</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🌐</div>
            <h4>Глобальная сеть</h4>
            <p>Присоединяйтесь из любой точки мира</p>
          </div>
        </div>
      </div>
      
      <style>{`
        .whitepaper-section {
          text-align: center;
        }
        
        .section-subtitle {
          color: var(--gray-text);
          font-size: 1.2rem;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .whitepaper-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
          margin-bottom: 80px;
          text-align: left;
        }
        
        .chapters-nav {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .chapter-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: rgba(17, 34, 64, 0.5);
          border: 1px solid rgba(0, 188, 212, 0.1);
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        
        .chapter-item:hover {
          background: rgba(17, 34, 64, 0.8);
          border-color: var(--primary-cyan);
        }
        
        .chapter-item.active {
          background: rgba(0, 188, 212, 0.1);
          border-color: var(--primary-cyan);
        }
        
        .chapter-icon {
          font-size: 1.5rem;
        }
        
        .chapter-title {
          color: var(--light-text);
          font-weight: 500;
        }
        
        .chapter-content {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .chapter-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 188, 212, 0.2);
        }
        
        .chapter-icon-large {
          font-size: 3rem;
        }
        
        .chapter-header h3 {
          font-size: 2rem;
          color: var(--primary-cyan);
        }
        
        .chapter-text {
          color: var(--gray-text);
          line-height: 1.8;
          font-size: 1.1rem;
          flex-grow: 1;
        }
        
        .chapter-footer {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid rgba(0, 188, 212, 0.2);
        }
        
        .whitepaper-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .highlight-card {
          padding: 40px 30px;
          background: rgba(17, 34, 64, 0.5);
          border: 1px solid rgba(0, 188, 212, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .highlight-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-cyan);
          box-shadow: 0 10px 30px rgba(0, 188, 212, 0.2);
        }
        
        .highlight-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .highlight-card h4 {
          color: var(--light-text);
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
        
        .highlight-card p {
          color: var(--gray-text);
        }
        
        @media (max-width: 1024px) {
          .whitepaper-container {
            grid-template-columns: 1fr;
          }
          
          .chapters-nav {
            flex-direction: row;
            overflow-x: auto;
          }
          
          .chapter-item {
            flex-shrink: 0;
            min-width: 200px;
          }
          
          .whitepaper-highlights {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .whitepaper-highlights {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Whitepaper;

