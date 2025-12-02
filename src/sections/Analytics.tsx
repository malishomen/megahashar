import React from 'react';

const Analytics: React.FC = () => {
  const swotData = {
    strengths: [
      { title: 'Уникальная концепция', desc: 'Proof-of-Help алгоритм' },
      { title: 'Социальная значимость', desc: 'Решение реальных проблем' },
      { title: 'Культурное наследие', desc: 'Традиция "Хашар"' },
      { title: 'M2E механика', desc: 'Вознаграждение за действия' }
    ],
    weaknesses: [
      { title: 'Юридические пробелы', desc: 'Неясность регулирования' },
      { title: 'Сложность токеномики', desc: 'Требует балансировки' },
      { title: 'Барьер входа', desc: 'Необходимость обучения' },
      { title: 'Технические риски', desc: 'Зависимость от блокчейна' }
    ],
    opportunities: [
      { title: 'Глобальная экспансия', desc: 'Потенциал 100+ стран' },
      { title: 'Партнерства', desc: 'С НКО и бизнесом' },
      { title: 'Грантовые программы', desc: 'Государственная поддержка' },
      { title: 'Web3 тренд', desc: 'Растущий рынок' }
    ],
    threats: [
      { title: 'Регуляторные риски', desc: 'Законодательные изменения' },
      { title: 'Конкуренция', desc: 'Появление аналогов' },
      { title: 'Мошенничество', desc: 'Фейковые задания' },
      { title: 'Волатильность', desc: 'Крипторынка' }
    ]
  };

  return (
    <>
      <div className="analytics-section">
        <h2 className="section-title">Аналитика</h2>
        <p className="section-subtitle">
          SWOT-анализ и социальное влияние проекта MegaHashAr
        </p>
        
        <div className="swot-container">
          <div className="swot-quadrant strengths">
            <div className="quadrant-header">
              <span className="quadrant-icon">💪</span>
              <h3>Сильные стороны</h3>
            </div>
            <div className="quadrant-content">
              {swotData.strengths.map((item, index) => (
                <div key={index} className="swot-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="swot-quadrant weaknesses">
            <div className="quadrant-header">
              <span className="quadrant-icon">⚠️</span>
              <h3>Слабые стороны</h3>
            </div>
            <div className="quadrant-content">
              {swotData.weaknesses.map((item, index) => (
                <div key={index} className="swot-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="swot-quadrant opportunities">
            <div className="quadrant-header">
              <span className="quadrant-icon">🚀</span>
              <h3>Возможности</h3>
            </div>
            <div className="quadrant-content">
              {swotData.opportunities.map((item, index) => (
                <div key={index} className="swot-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="swot-quadrant threats">
            <div className="quadrant-header">
              <span className="quadrant-icon">⚡</span>
              <h3>Угрозы</h3>
            </div>
            <div className="quadrant-content">
              {swotData.threats.map((item, index) => (
                <div key={index} className="swot-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="social-impact">
          <h3>Социальное влияние</h3>
          <div className="impact-grid">
            <div className="impact-card card-3d">
              <div className="impact-icon">🏙️</div>
              <h4>Улучшение городов</h4>
              <p>Благоустройство общественных пространств, чистота улиц, озеленение</p>
              <div className="impact-metric">+45% улучшение инфраструктуры</div>
            </div>
            
            <div className="impact-card card-3d">
              <div className="impact-icon">🤝</div>
              <h4>Поддержка малого бизнеса</h4>
              <p>Помощь предпринимателям, продвижение местных товаров и услуг</p>
              <div className="impact-metric">+32% рост местного бизнеса</div>
            </div>
            
            <div className="impact-card card-3d">
              <div className="impact-icon">❤️</div>
              <h4>Культура взаимопомощи</h4>
              <p>Формирование традиции помощи друг другу в обществе</p>
              <div className="impact-metric">+67% вовлеченность населения</div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .analytics-section {
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
        
        .swot-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 80px;
        }
        
        .swot-quadrant {
          background: rgba(17, 34, 64, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(0, 188, 212, 0.1);
          transition: all 0.3s ease;
        }
        
        .swot-quadrant:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 188, 212, 0.2);
        }
        
        .strengths {
          border-color: rgba(76, 175, 80, 0.3);
        }
        
        .weaknesses {
          border-color: rgba(255, 152, 0, 0.3);
        }
        
        .opportunities {
          border-color: rgba(0, 188, 212, 0.3);
        }
        
        .threats {
          border-color: rgba(244, 67, 54, 0.3);
        }
        
        .quadrant-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .quadrant-icon {
          font-size: 2rem;
        }
        
        .quadrant-header h3 {
          color: var(--light-text);
          font-size: 1.5rem;
        }
        
        .quadrant-content {
          text-align: left;
        }
        
        .swot-item {
          padding: 15px;
          margin-bottom: 10px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .swot-item:hover {
          background: rgba(0, 188, 212, 0.1);
        }
        
        .swot-item h4 {
          color: var(--primary-cyan);
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        
        .swot-item p {
          color: var(--gray-text);
          font-size: 0.9rem;
        }
        
        .social-impact {
          margin-top: 80px;
        }
        
        .social-impact h3 {
          font-size: 2.5rem;
          color: var(--light-text);
          margin-bottom: 50px;
        }
        
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .impact-card {
          text-align: center;
        }
        
        .impact-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
        }
        
        .impact-card h4 {
          color: var(--light-text);
          font-size: 1.4rem;
          margin-bottom: 15px;
        }
        
        .impact-card p {
          color: var(--gray-text);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .impact-metric {
          color: var(--accent-green);
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        @media (max-width: 1024px) {
          .swot-container {
            grid-template-columns: 1fr;
          }
          
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Analytics;

