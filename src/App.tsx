import { useState, useRef } from "react";
import logoIcon from "./assets/icon.svg";
import "./App.css";
import TechBanner from "./components/TechBanner";
import SobreMi from "./components/SobreMi";
import SkillCard from "./components/SkillCard";
import Proyectos from "./components/Proyectos";
import Footer from "./components/CinematicFooter";
import Video from "./components/Video";
import ExperienceSection from "./components/ExperienceSection";
import { LayoutGroup } from "framer-motion";
import { useLanguage } from "./components/idiomas";
import { useFloatingSkills } from "./hooks/useFloatingSkills";
// import { SplineScene } from "./components/ui/SplineScene"; // Robot 3D (en pausa)
import { asset } from "./lib/utils";

import { skillsData } from "./constants/skillsData.ts";

const HEADER_OFFSET = 85;

/**
 * Scroll suave robusto: en cada frame recalcula el destino real del elemento,
 * de modo que los cambios de layout durante el trayecto (tarjetas aterrizando,
 * canvas/imágenes cargando) no cortan la animación. Devuelve un cancelador.
 */
function smoothScrollTo(getTarget: () => number, duration = 480): () => void {
  const startY = window.scrollY;
  const startTime = performance.now();
  let raf = 0;
  let cancelled = false;
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const tick = (now: number) => {
    if (cancelled) return;
    const t = Math.min(1, (now - startTime) / duration);
    const target = getTarget(); // recalcula cada frame: tolera cambios de layout
    window.scrollTo(0, startY + (target - startY) * easeOutCubic(t));
    if (t < 1) {
      raf = requestAnimationFrame(tick);
    } else {
      window.scrollTo(0, getTarget()); // ajuste final exacto
    }
  };
  raf = requestAnimationFrame(tick);

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
  };
}

const App: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const { isSticky, landed } = useFloatingSkills(skillsSectionRef);
  const cancelScrollRef = useRef<(() => void) | null>(null);

  const navItems = [
    { label: t("nav_home"), id: "inicio" },
    { label: t("nav_about"), id: "sobre-mi" },
    { label: t("nav_projects"), id: "proyectos" },
    { label: t("nav_video"), id: "video" },
    { label: t("nav_contact"), id: "contacto" },
  ];

  /**
   * Navegación fluida y precisa
   * @param e - Evento opcional para preventDefault
   * @param id - El ID del elemento al que queremos navegar
   */
  const handleNavClick = (e: React.MouseEvent | null, id: string) => {
    e?.preventDefault();
    e?.stopPropagation();
    setMenuOpen(false);

    // Cancela cualquier scroll en curso para no pelear con uno nuevo
    cancelScrollRef.current?.();

    // Pequeño delay para que el menú móvil termine de cerrar antes de medir
    setTimeout(() => {
      const getTarget = (): number => {
        if (id === "inicio") return 0;
        if (id === "contacto") {
          return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          ) - window.innerHeight;
        }
        const el = document.getElementById(id);
        if (!el) return window.scrollY;
        return el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      };

      cancelScrollRef.current = smoothScrollTo(getTarget);
    }, 50);
  };

  return (
    <LayoutGroup>
      {/* 1. CONTENEDOR FLOTANTE INDEPENDIENTE 
        Está fuera del header, fixed en la pantalla.
      */}
      {!landed && (
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
            {/* Robot 3D (en pausa) — para reactivar: descomentar el import de
                SplineScene y reemplazar el <img> por:
            <div className="hero-robot">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="hero-robot__canvas"
              />
            </div> */}
          </div>
        </section>
      </div>

      <TechBanner />

      <div id="sobre-mi" className="content1">
        <SobreMi />
      </div>
      {/* Sección de Experiencia (A donde viajan las tarjetas) */}

      <div className="contentE" id="experience-zone" ref={skillsSectionRef}>
        <ExperienceSection landed={landed} />
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