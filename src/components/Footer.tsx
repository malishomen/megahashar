
const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MegaHashAr</h3>
            <p>Децентрализованная платформа взаимопомощи, где добро становится ценностью.</p>
            <div className="social-links">
              <a href="#" aria-label="Telegram">TG</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Discord">DC</a>
              <a href="https://github.com/malishomen/megahashar" aria-label="GitHub">GH</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#home">Главная</a></li>
              <li><a href="#mission">Миссия</a></li>
              <li><a href="#whitepaper">Whitepaper</a></li>
              <li><a href="#roadmap">Дорожная карта</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Ресурсы</h4>
            <ul>
              <li><a href="#analytics">Аналитика</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Документация</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Контакты</h4>
            <ul>
              <li><a href="mailto:info@megahashar.com">info@megahashar.com</a></li>
              <li><a href="#">Сообщество</a></li>
              <li><a href="#">Поддержка</a></li>
              <li><a href="#">Партнерство</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 MegaHashAr. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Условия использования</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
      
      <style>{`
        .footer {
          background: var(--dark-card);
          padding: 60px 5% 30px;
          border-top: 1px solid rgba(0, 188, 212, 0.1);
        }
        
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .footer-section h3 {
          color: var(--primary-cyan);
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        
        .footer-section h4 {
          color: var(--light-text);
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        
        .footer-section p {
          color: var(--gray-text);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section li {
          margin-bottom: 10px;
        }
        
        .footer-section a {
          color: var(--gray-text);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: var(--primary-cyan);
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 188, 212, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-cyan);
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: var(--primary-cyan);
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 30px;
          border-top: 1px solid rgba(0, 188, 212, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--gray-text);
          font-size: 0.9rem;
        }
        
        .footer-links {
          display: flex;
          gap: 20px;
        }
        
        .footer-links a {
          color: var(--gray-text);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: var(--primary-cyan);
        }
        
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;

