import React, { useState, useEffect, useRef } from 'react';
import SkillCard from './SkillCard';
import BackgroundAI from './BackgroundAI';
import { skillsData } from '../constants/skillsData.ts';

const ExperienceSection: React.FC = () => {
  const [showSkillsInBody, setShowSkillsInBody] = useState<boolean>(false);
  const internalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (internalRef.current) {
        const rect = internalRef.current.getBoundingClientRect();
        // Sincronizado con la lógica de App.tsx: 150px de margen superior
        if (rect.top <= 150) {
          setShowSkillsInBody(true);
        } else if (rect.top > 500) {
          setShowSkillsInBody(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Comprobación inicial
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }} className="contentE">
      {/* 1. EL VIDEO DE FONDO */}
      <BackgroundAI />

      {/* 2. EL CONTENIDO */}
      <div className="content-wrapper">
        <div
          ref={internalRef}
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
          <h1 className="section-title">
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

          {/* TARJETA ANCHA DE DIFERENCIADOR */}
          {showSkillsInBody && (
            <div className="glass-panel wide-differentiator-card">
              <h2>Más allá de la Ingeniería Convencional</h2>
              <p>
                Mi perfil profesional trasciende la ingeniería tradicional. Como Ingeniero Multimedia, combino una sólida formación técnica y algorítmica con la versatilidad multimodal que exige la industria actual. Esta convergencia me permite liderar proyectos en diversas fronteras tecnológicas: desde el diseño de experiencias de usuario de alto impacto (UI/UX) y el desarrollo de tecnologías inmersivas (Realidad Aumentada y Videojuegos).
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                Además, mi especialización en Inteligencia Artificial potencia mi capacidad para diseñar, entrenar e implementar modelos avanzados que resuelven problemas complejos, integrándolos de manera armoniosa en ecosistemas informáticos escalables y multidisciplinarios. Mi enfoque no solo busca la funcionalidad, sino la creación de valor a través de la armonía entre la técnica y la experiencia del usuario.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;