import { useState, useEffect, useRef } from "react";
import logoIcon from "./assets/icon.svg";
import "./App.css";
import TechBanner from "./components/TechBanner";
import SobreMi from "./components/SobreMi";
import SkillCard from "./components/SkillCard";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import Video from "./components/Video";
import ExperienceSection from "./components/ExperienceSection";
import { LayoutGroup } from "framer-motion";
import { useLanguage } from "./components/idiomas";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

import { skillsData } from "./constants/skillsData.ts";

const App: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [showSkillsInBody, setShowSkillsInBody] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: t("nav_home"), id: "inicio" },
    { label: t("nav_about"), id: "sobre-mi" },
    { label: t("nav_projects"), id: "proyectos" },
    { label: t("nav_video"), id: "video" },
    { label: t("nav_contact"), id: "contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Obtenemos el rectángulo del elemento para una precisión extra
        const rect = entry.target.getBoundingClientRect();
        // Si el elemento está en el viewport O está por encima de él (ya pasó)
        const isPastOrInSection = rect.top <= 150 || entry.isIntersecting;
        setShowSkillsInBody(isPastOrInSection);
      },
      { threshold: 0.1, rootMargin: "-150px 0px 0px 0px" }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    const scrollHandler = () => {
      handleScroll();
      // Forzamos una comprobación manual además del observer para evitar el bug del modal
      if (skillsSectionRef.current) {
        const rect = skillsSectionRef.current.getBoundingClientRect();
        if (rect.top <= 150) {
          setShowSkillsInBody(true);
        } else if (rect.top > 500) {
          setShowSkillsInBody(false);
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      observer.disconnect();
    };
  }, []);

  /**
   * Navegación fluida y precisa
   * @param e - Evento opcional para preventDefault
   * @param id - El ID del elemento al que queremos navegar
   */
  const handleNavClick = (e: React.MouseEvent | null, id: string) => {
    e?.preventDefault();
    e?.stopPropagation();
    setMenuOpen(false);

    // Un timeout de 50ms es más seguro para asegurar que el DOM se estabilice tras cerrar el menú
    setTimeout(() => {
      if (id === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (id === "contacto") {
        const scrollToBottom = () => {
          const scrollHeight = Math.max(
            document.body.scrollHeight, 
            document.documentElement.scrollHeight
          );
          window.scrollTo({ top: scrollHeight, behavior: "smooth" });
        };
        
        scrollToBottom();
        // Un segundo intento tras 300ms ayuda a compensar cambios en el layout 
        // mientras la animación de scroll está en progreso
        setTimeout(scrollToBottom, 300);
        setTimeout(scrollToBottom, 600);
      } else {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 85; 
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }, 50);
  };

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
              techs={skill.techs}
              layoutId={`skill-${skill.name}`}
              isShrunk={isSticky} 
            />
          ))}
        </div>
      )}

      {/* Encabezado fijo */}
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="header-content">
          <div className="header-left">
            <img src={logoIcon} className="logo" alt="Logo" />
            <nav>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={toggleLanguage} 
                aria-label="Change Language"
                style={{ marginLeft: '8px', padding: '4px 10px', fontSize: '13px', borderRadius: '15px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 'bold', backdropFilter: 'blur(5px)' }}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </nav>
          </div>

          {/* Botón Hamburguesa */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menú Mobile */}
          {menuOpen && (
            <nav className="mobile-menu">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={toggleLanguage} 
                aria-label="Change Language"
                style={{ margin: '5px auto 10px auto', display: 'block', padding: '6px 16px', fontSize: '14px', borderRadius: '20px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 'bold', backdropFilter: 'blur(5px)' }}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </nav>
          )}

          <div className="header-right"></div>
        </div>
      </header>

      {/* Contenedor principal de la página */}
      <div id="inicio" className="main-container">
        <section className="intro">
          <div className="intro-content">
            <div className="intro-text">
              <h1>{t("hero_title").includes('\n') ? <>{t("hero_title").split('\n')[0]}<br/>{t("hero_title").split('\n')[1]}</> : t("hero_title")}</h1>
              <h2>{t("hero_subtitle")}</h2>
              <p> {t("hero_desc")} </p>

              <div className="contact-buttons">
                <div className="icon-buttons">
                  <button
                    className="contact-button con"
                    aria-label="Contact"
                    onClick={(e) => handleNavClick(e, "contacto")}
                  >
                    <img src={asset("loogos/contactame.svg")} alt="Contact" />
                  </button>
                  <button
                    className="icon-button linkedin"
                    aria-label="LinkedIn"
                    onClick={() => window.open("https://www.linkedin.com/in/miguel-angel-diuza-montaño-ab13501a0", "_blank")}
                  ></button>
                  <button
                    className="icon-button whatsapp"
                    aria-label="WhatsApp"
                    onClick={() => window.open("https://wa.me/573128555441", "_blank")}
                  ></button>
                  <button
                    className="icon-button github"
                    aria-label="GitHub"
                    onClick={() => window.open("https://github.com/MiguelDiuza", "_blank")}
                  ></button>
                </div>
              </div>

              <div className="video-button-container">
                <button
                  className="contact-button video-button"
                  aria-label="Video"
                  onClick={(e) => handleNavClick(e, "video")}
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

      <div className="contentE" id="experience-zone" ref={skillsSectionRef}>
        <ExperienceSection />
      </div>

      <div id="proyectos" className="content2">
        <Proyectos />
      </div>

      <div id="video">
        <Video />
      </div>

      <Footer />
    </LayoutGroup>
  );
};

export default App;