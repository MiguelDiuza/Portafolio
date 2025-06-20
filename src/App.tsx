import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import TechBanner from "./components/TechBanner"; // Importa el componente aquí
import SobreMi from "./components/SobreMi";
import SkillCard from "./components/SkillCard";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Skills from "./components/Skills";


const App: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Encabezado fijo con dos secciones */}
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="header-content">
          {/* Sección izquierda */}
          <div className="header-left">
            <nav>
              <img src={viteLogo} className="logo" alt="Vite logo" />
              <a href="#inicio">Inicio</a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contáctame</a>
            </nav>
          </div>

          {/* Sección derecha */}
          <div className="header-right">
            <div className="card-container">
              <SkillCard skillName="Frontend" percentage={65} />
              <SkillCard skillName="Backend" percentage={38} />
              <SkillCard skillName="UI/UX" percentage={70} />
              <SkillCard skillName="3D/AR/VR" percentage={65} />
              <SkillCard skillName="AI" percentage={45} />
            </div>
          </div>
        </div>
      </header>

      {/* Contenedor principal de la página */}
      <div id="inicio" className="main-container">
        <section className="intro">
          {/* División para los títulos e imagen */}
          <div className="intro-content">
            <div className="intro-text">
              <h1>INGENIERO <br /> MULTIMEDIA</h1>
              <h2>MIGUEL ANGEL DIUZA M.</h2>
              <p>Diseñador UI/UX | Front-End & Full-Stack Developer | IA Developer</p>

              {/* Contenedor de los botones */}
              <div className="contact-buttons">
                <div className="icon-buttons">
                  <button className="contact-button con" aria-label="Contact">
                    <img src="loogos/contactame.svg" alt="Contact" />

                  </button>

                  <button
                    className="icon-button linkedin"
                    aria-label="LinkedIn"
                    onClick={() => window.open("https://www.linkedin.com/in/miguel-diuza-ab13501a0/", "_blank")}
                  ></button>
                  <button
                    className="icon-button whatsapp"
                    aria-label="WhatsApp"
                    onClick={() => window.open("https://w.app/person", "_blank")}
                  ></button>
                  <button
                    className="icon-button behance"
                    aria-label="Behance"
                    onClick={() => window.open("https://www.behance.net/migueldiuza1", "_blank")}
                  ></button>
                </div>
              </div>

              {/* Sección separada para el botón de video */}
              <div className="video-button-container">
                <button
                  className="contact-button video-button"
                  aria-label="Video"
                  onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <img src="https://drive.google.com/drive/folders/1-LF7PMHx9ib2P1HA6Tql1Z-Y5c6eX-E5" alt="Video" />

                </button>
              </div>
            </div>
          </div>

          {/* Imagen de la intro */}
          <div className="intro-image">
            <img src="https://drive.google.com/drive/folders/1-LF7PMHx9ib2P1HA6Tql1Z-Y5c6eX-E5"alt="person" />
          </div>
        </section>
      </div>


      {/* Banner de tecnologías */}
      <TechBanner />

      {/* Contenido principal */}
      <div id="sobre-mi" className="content1">
        <SobreMi />
      </div>

      <div id="proyectos" className="content2">
        <Proyectos />
      </div>

      <div id="proyectos" className="content2">
        <Skills />
      </div>

      <div id="video">
        <Video />
      </div>

      <footer id="contacto" className="footer-container">
        <div className="footer-content">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default App;
