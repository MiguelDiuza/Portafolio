import { useState, useEffect, useRef } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import TechBanner from "./components/TechBanner";
import SobreMi from "./components/SobreMi";
import SkillCard from "./components/SkillCard";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import Video from "./components/Video";
import ExperienceSection from "./components/ExperienceSection";
import { LayoutGroup } from "framer-motion";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const skillsData = [
  { name: "Frontend", percentage: 70 },
  { name: "Backend", percentage: 58 },
  { name: "UI/UX", percentage: 70 },
  { name: "3D/AR/VR", percentage: 65 },
  { name: "AI", percentage: 55 },
];

const App: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [showSkillsInBody, setShowSkillsInBody] = useState<boolean>(false);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Cambiamos a sticky un poco antes para suavizar
      setIsSticky(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSkillsInBody(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "-100px 0px 0px 0px" }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <LayoutGroup>
      {/* 1. CONTENEDOR FLOTANTE INDEPENDIENTE 
        Está fuera del header, fixed en la pantalla.
      */}
      {!showSkillsInBody && (
        <div className={`floating-skills-container ${isSticky ? "sticky-mode" : ""}`}>
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.name}
              skillName={skill.name}
              percentage={skill.percentage}
              layoutId={`skill-${skill.name}`}
              isShrunk={isSticky} // Mantiene la lógica de encogerse
            />
          ))}
        </div>
      )}

      {/* Encabezado fijo (Ahora solo navegación) */}
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="header-content">
          <div className="header-left">
            <nav>
              <img src={viteLogo} className="logo" alt="Vite logo" />
              <a href="#inicio">Inicio</a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contáctame</a>
            </nav>
          </div>
          
          {/* El lado derecho queda vacío para mantener el espacio si usas flex space-between */}
          <div className="header-right" style={{ width: '60%' }}></div>
        </div>
      </header>

      {/* Contenedor principal de la página */}
      <div id="inicio" className="main-container">
        <section className="intro">
          <div className="intro-content">
            <div className="intro-text">
              <h1>INGENIERO <br /> MULTIMEDIA</h1>
              <h2>MIGUEL ANGEL DIUZA M.</h2>
              <p>Diseñador UI/UX | Front-End & Full-Stack Developer | IA Developer</p>

              <div className="contact-buttons">
                <div className="icon-buttons">
                  <button className="contact-button con" aria-label="Contact">
                    <img src={asset("loogos/contactame.svg")} alt="Contact" />
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

              <div className="video-button-container">
                <button
                  className="contact-button video-button"
                  aria-label="Video"
                  onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <img src={asset("img/boton_Video.svg")} alt="Video" />
                </button>
              </div>
            </div>
          </div>

          <div className="intro-image">
            <img src={asset("img/person.png")} alt="person" />
          </div>
        </section>
      </div>

      <TechBanner />

      <div id="sobre-mi" className="content1">
        <SobreMi />
      </div>
            {/* Sección de Experiencia (A donde viajan las tarjetas) */}

      <div id="sobre-mi" className="contentE">
        <ExperienceSection />
      </div>

      <div id="proyectos" className="content2">
        <Proyectos />
      </div>

      <div id="video">
        <Video />
      </div>

      <footer id="contacto" className="footer-container">
        <div className="footer-content">
          <Footer />
        </div>
      </footer>
    </LayoutGroup>
  );
};

export default App;