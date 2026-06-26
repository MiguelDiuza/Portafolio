import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skillsData } from '../constants/skillsData.ts';
import { useLanguage } from './idiomas';

// Carga diferida: three.js solo se descarga cuando las tarjetas aterrizan.
const CanvasRevealEffect = lazy(() =>
  import('./ui/CanvasRevealEffect').then((m) => ({ default: m.CanvasRevealEffect }))
);

interface ExperienceSectionProps {
  /** Controlado por App vía useFloatingSkills: las tarjetas ya aterrizaron. */
  landed: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ landed }) => {
  const { t } = useLanguage();

  return (
    <section style={{ position: 'relative' }} className="contentE">
      {/* Fondo de matriz de puntos animada (solo se monta al aterrizar) */}
      <div className="exp-canvas-bg" aria-hidden="true">
        {landed && (
          <Suspense fallback={null}>
            <CanvasRevealEffect
              animationSpeed={3.2}
              colors={[
                [139, 122, 255],
                [99, 102, 241],
              ]}
              dotSize={4}
              opacities={[0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
              reverse={false}
            />
          </Suspense>
        )}
        <div className="exp-canvas-mask" />
      </div>

      {/* CONTENIDO */}
      <div className="content-wrapper">
        <div
          id="experience-cards-section"
          style={{
            minHeight: '600px',
            padding: '5rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h1 className="section-title">{t("exp_title")}</h1>

          {landed && (
            <motion.p
              className="exp-hint"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t("exp_tech_hint")}
            </motion.p>
          )}

          <div className="exp-cards-grid">
            {landed && skillsData.map((skill) => (
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
          {landed && (
            <motion.div
              className="glass-panel wide-differentiator-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2>{t("exp_diff_title")}</h2>
              <p>{t("exp_diff_p1")}</p>
              <p style={{ marginTop: '1.5rem' }}>{t("exp_diff_p2")}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
