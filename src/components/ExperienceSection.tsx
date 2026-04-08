import React, { useState, useEffect, useRef } from 'react';
import SkillCard from './SkillCard';
import BackgroundAI from './BackgroundAI';
import { skillsData } from '../constants/skillsData.ts';
import { useLanguage } from './idiomas';

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
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
            {t("exp_title")}
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
              <h2>{t("exp_diff_title")}</h2>
              <p>{t("exp_diff_p1")}</p>
              <p style={{ marginTop: '1.5rem' }}>{t("exp_diff_p2")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;