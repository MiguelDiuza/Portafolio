import React, { useState, useEffect, useRef } from 'react';
import { LayoutGroup } from 'framer-motion';
import SkillCard from './SkillCard';

// 1. CONFIGURACIÓN DE RUTAS Y DATOS
const base = import.meta.env.BASE_URL || "/"; 

// Función auxiliar para generar ruta de logo
const getLogo = (name: string) => `${base}loogos/${name}`;

// Mapeo completo de tus datos
const skillsData = [
  {
    name: "Frontend",
    percentage: 70,
    techs: [
      { src: getLogo("react.svg"), alt: "React" },
      { src: getLogo("html5.svg"), alt: "HTML5" },
      { src: getLogo("css3.svg"), alt: "CSS3" },
      { src: getLogo("js.png"), alt: "JS" }
    ]
  },
  {
    name: "Backend",
    percentage: 58,
    techs: [
      { src: getLogo("python.svg"), alt: "Python" },
      { src: getLogo("java.svg"), alt: "Java" },
      { src: getLogo("mysql.svg"), alt: "MySQL" },
      { src: getLogo("api.svg"), alt: "APIs" }
    ]
  },
  {
    name: "UI/UX",
    percentage: 70,
    techs: [
      { src: getLogo("photo.svg"), alt: "photoshop" },
      { src: getLogo("figma.svg"), alt: "Figma" },
      { src: getLogo("sk.png"), alt: "sk" },
      { src: getLogo("ilus.svg"), alt: "ilustrator" }
    ]
  },
  {
    name: "3D/AR/VR",
    percentage: 65,
    techs: [
      { src: getLogo("blender.svg"), alt: "Blender" },
      { src: getLogo("unity.png"), alt: "Unity" },
      { src: getLogo("unr.png"), alt: "Unreal" },
      { src: getLogo("maya.png"), alt: "Maya" }
    ]
  },
  {
    name: "AI",
    percentage: 55,
    techs: [
      { src: getLogo("yolo.svg"), alt: "YOLO" },
      { src: getLogo("pytorch.svg"), alt: "PyTorch" },
      { src: getLogo("sc.svg"), alt: "Scikit" },
      { src: getLogo("robo.png"), alt: "Roboflow" },
      { src: getLogo("python.svg"), alt: "Reg. Log." }
    ]
  },
];

const ExperienceSection: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [showSkillsInBody, setShowSkillsInBody] = useState<boolean>(false);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Lógica Sticky
      setIsSticky(window.scrollY > 50);

      // 2. Lógica de Docking
      if (skillsSectionRef.current) {
        const rect = skillsSectionRef.current.getBoundingClientRect();
        if (rect.top <= 150) {
          setShowSkillsInBody(true);
        } else {
          setShowSkillsInBody(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="contentE">
      {/* 1. EL VIDEO DE FONDO */}
      <video className="bg-video" autoPlay loop muted playsInline>
        {/* Usamos la variable base + nombre del archivo (Mayúsculas importan) */}
        <source src={`${base}img/BG3.mp4`} type="video/mp4" />
      </video>

      {/* 2. EL CONTENIDO */}
      <div className="content-wrapper">
        <LayoutGroup>

          {/* TARJETAS FLOTANTES (Arriba) */}
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
                  isExpanded={false}
                />
              ))}
            </div>
          )}

          {/* TARJETAS EN SECCIÓN (Abajo) */}
          <div
            ref={skillsSectionRef}
            id="experience-cards-section"
            style={{
              minHeight: '600px',
              padding: '5rem 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <h1 style={{ marginBottom: '2rem', fontSize: '4.5rem' }}>
              Mis Habilidades
            </h1>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              {showSkillsInBody && skillsData.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skillName={skill.name}
                  percentage={skill.percentage}
                  techs={skill.techs}
                  layoutId={`skill-${skill.name}`}
                  isShrunk={false}
                  isExpanded={true}
                  className="large-card"
                />
              ))}
            </div>
          </div>

        </LayoutGroup>
      </div>
    </section>
  );
};

export default ExperienceSection;