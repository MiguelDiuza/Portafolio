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
              window.open("https://www.linkedin.com/in/miguel-diuza-ab13501a0/", "_blank")
            }>
            </button>
          <button
            className="icon-button whatsapp"
            onClick={() => window.open("https://w.app/person", "_blank")}>
          </button>
          <button
            className="icon-button behance"
            aria-label="Behance"
            onClick={() => window.open("https://www.behance.net/migueldiuza1", "_blank")}
          >

          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
