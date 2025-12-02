import React from 'react';

const Mission: React.FC = () => {
  return (
    <>
      <div className="mission-section">
        <h2 className="section-title">Наша Миссия</h2>
        
        <div className="mission-content">
          <div className="mission-card card-3d">
            <div className="mission-icon">🎯</div>
            <h3>Фиксация Добрых Дел</h3>
            <p>
              С помощью алгоритма Proof-of-Help мы превращаем реальные добрые дела в 
              цифровые активы, подтверждённые смарт-контрактами и NFT. Каждый акт помощи 
              становится верифицированным и ценным.
            </p>
          </div>
          
          <div className="mission-card card-3d">
            <div className="mission-icon">💎</div>
            <h3>Вознаграждение Взаимопомощи</h3>
            <p>
              Система Valor Points и токенов MHR мотивирует пользователей помогать другим. 
              Чем больше ты помогаешь — тем выше твой рейтинг и доходность стейкинга.
            </p>
          </div>
          
          <div className="mission-card card-3d">
            <div className="mission-icon">🌍</div>
            <h3>Глобальное Объединение</h3>
            <p>
              Мы масштабируем узбекскую традицию "Хашар" на весь мир, создавая сообщество, 
              где люди разных культур и стран помогают друг другу, стирая границы и предрассудки.
            </p>
          </div>
        </div>
        
        <div className="mission-values">
          <h3>Ключевые ценности</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h4>Прозрачность</h4>
              <p>Все операции записываются в блокчейн</p>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <h4>Справедливость</h4>
              <p>Вознаграждение пропорционально вкладу</p>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <h4>Сообщество</h4>
              <p>Сила в коллективных действиях</p>
            </div>
            <div className="value-item">
              <div className="value-number">04</div>
              <h4>Инновации</h4>
              <p>Технологии служат общественному благу</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .mission-section {
          text-align: center;
        }
        
        .mission-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 60px 0;
        }
        
        .mission-card {
          text-align: left;
          height: 100%;
        }
        
        .mission-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .mission-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--primary-cyan);
        }
        
        .mission-card p {
          color: var(--gray-text);
          line-height: 1.6;
        }
        
        .mission-values {
          margin-top: 80px;
        }
        
        .mission-values h3 {
          font-size: 2rem;
          margin-bottom: 40px;
          color: var(--light-text);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        
        .value-item {
          text-align: center;
          padding: 30px 20px;
          background: rgba(0, 188, 212, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(0, 188, 212, 0.1);
          transition: all 0.3s ease;
        }
        
        .value-item:hover {
          transform: translateY(-5px);
          border-color: var(--primary-cyan);
        }
        
        .value-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-cyan);
          opacity: 0.3;
          margin-bottom: 10px;
        }
        
        .value-item h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: var(--light-text);
        }
        
        .value-item p {
          color: var(--gray-text);
          font-size: 0.9rem;
        }
        
        @media (max-width: 1024px) {
          .mission-content {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .mission-content {
            grid-template-columns: 1fr;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Mission;

