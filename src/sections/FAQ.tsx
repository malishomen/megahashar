import { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Что такое Proof-of-Help?',
      answer: 'Proof-of-Help (PoH) — это уникальный алгоритм консенсуса, который верифицирует добрые дела в реальном мире. Каждое подтверждённое доброе дело записывается в блокчейн как NFT, создавая прозрачную и неизменяемую запись о вашей помощи другим.'
    },
    {
      question: 'Как заработать токены MHR?',
      answer: 'Зарабатывайте MHR выполняя задания: помогайте соседям, участвуйте в благоустройстве, поддерживайте местный бизнес. Также токены можно получать через стейкинг — чем выше ваш Valor Points рейтинг, тем больше доходность.'
    },
    {
      question: 'Как стать ментором?',
      answer: 'Чтобы стать ментором, необходимо достичь уровня "Легенда" (10,000+ Valor Points), пройти обучение и получить одобрение сообщества. Менторы получают дополнительные токены за обучение новичков и модерацию заданий.'
    },
    {
      question: 'Как платформа борется с мошенничеством?',
      answer: 'Мы используем многоуровневую систему: видео-верификация действий, геолокация, AI-анализ, репутационные метрики и сообщество модераторов ("Патруль доблести"). Мошенники получают штрафы и бан.'
    },
    {
      question: 'Какие страны будут первыми для экспансии?',
      answer: 'После успешного запуска в Узбекистане мы планируем экспансию в Казахстан и Киргизию (2026), затем в другие страны Центральной Азии, СНГ и далее по всему миру.'
    },
    {
      question: 'Когда состоится листинг токена MHR?',
      answer: 'Публичный листинг токена MHR запланирован на Q4 2025 после полного запуска платформы в Узбекистане. Сначала на DEX, затем на централизованных биржах в 2026 году.'
    },
    {
      question: 'Нужны ли технические знания для участия?',
      answer: 'Нет! Платформа разработана максимально простой. Достаточно скачать приложение, пройти регистрацию и начать выполнять задания. Криптокошелек создается автоматически, все операции интуитивно понятны.'
    },
    {
      question: 'Можно ли обменять токены на реальные деньги?',
      answer: 'Да, после листинга токены MHR можно будет обменять на другие криптовалюты и фиатные деньги через биржи. Также токены можно использовать для покупок у партнеров и стейкинга.'
    }
  ];

  return (
    <>
      <div className="faq-section">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <p className="section-subtitle">
          Ответы на самые популярные вопросы о MegaHashAr
        </p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <h3>Остались вопросы?</h3>
          <p>Присоединяйтесь к нашему сообществу и задайте вопрос напрямую</p>
          <div className="cta-buttons">
            <button className="btn-primary">Telegram сообщество</button>
            <button className="btn-secondary">Discord канал</button>
          </div>
        </div>
      </div>
      
      <style>{`
        .faq-section {
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
        
        .faq-container {
          max-width: 900px;
          margin: 0 auto 80px;
        }
        
        .faq-item {
          background: rgba(17, 34, 64, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 188, 212, 0.1);
          border-radius: 15px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .faq-item:hover {
          border-color: var(--primary-cyan);
          box-shadow: 0 5px 20px rgba(0, 188, 212, 0.1);
        }
        
        .faq-item.active {
          border-color: var(--primary-cyan);
        }
        
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 30px;
          text-align: left;
        }
        
        .faq-question h3 {
          color: var(--light-text);
          font-size: 1.2rem;
          font-weight: 600;
          flex: 1;
        }
        
        .faq-toggle {
          font-size: 2rem;
          color: var(--primary-cyan);
          font-weight: 300;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(0, 188, 212, 0.1);
          transition: all 0.3s ease;
        }
        
        .faq-item:hover .faq-toggle {
          background: rgba(0, 188, 212, 0.2);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          text-align: left;
        }
        
        .faq-item.active .faq-answer {
          max-height: 500px;
          padding: 0 30px 25px;
        }
        
        .faq-answer p {
          color: var(--gray-text);
          line-height: 1.8;
          font-size: 1.05rem;
        }
        
        .faq-cta {
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 131, 143, 0.1) 100%);
          border: 1px solid rgba(0, 188, 212, 0.2);
          border-radius: 20px;
          padding: 60px 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-cta h3 {
          font-size: 2rem;
          color: var(--light-text);
          margin-bottom: 15px;
        }
        
        .faq-cta p {
          color: var(--gray-text);
          font-size: 1.1rem;
          margin-bottom: 30px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
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
        
        @media (max-width: 768px) {
          .faq-question {
            padding: 20px;
          }
          
          .faq-question h3 {
            font-size: 1rem;
          }
          
          .faq-item.active .faq-answer {
            padding: 0 20px 20px;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
          
          .faq-cta {
            padding: 40px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default FAQ;

