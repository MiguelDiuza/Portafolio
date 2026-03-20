import React from "react";
import "../styles/Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Contactame:</h3>
        <p className="name">Miguel Angel Diuza Montaño</p>
        <p className="phone">+57 312 8555441</p>
        <a href="mailto:mandiuza@gmail.com" className="email">
          mandiuza@gmail.com
        </a>
        <p className="location">Cali - Colombia</p>

        <div className="footer-icons">
          <button
            className="icon-button linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/miguel-angel-diuza-montaño-ab13501a0", "_blank")
            }>
          </button>
          <button
            className="icon-button whatsapp"
            onClick={() => window.open("https://wa.me/573128555441", "_blank")}>
          </button>
          <button
            className="icon-button github"
            aria-label="GitHub"
            onClick={() => window.open("https://github.com/MiguelDiuza", "_blank")}
          >
          </button>
        </div>
      </div>
      <div id="contacto" style={{ height: '1px' }}></div>
    </footer>
  );
};

export default Footer;
