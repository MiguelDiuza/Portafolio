import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from './idiomas';
import { TECH_DETAILS } from '../constants/techDetails';
import "../styles/SkillCard.css";

interface TechItem {
  src: string;
  alt: string;
}

/**
 * Aro de progreso con glass + relieve 3D (sin disco interior).
 * El % flota en el centro vacío del aro.
 */
const SkillRing: React.FC<{ percentage: number; uid: string }> = ({ percentage, uid }) => {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - percentage / 100);

  return (
    <div className="skill-ring">
      <svg viewBox="0 0 120 120" className="skill-ring__svg">
        <defs>
          <linearGradient id={`ringGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="skill-ring__stop-a" />
            <stop offset="100%" className="skill-ring__stop-b" />
          </linearGradient>
          <linearGradient id={`ringSheen-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle className="skill-ring__track" cx="60" cy="60" r={r} />
        <circle
          className="skill-ring__progress"
          cx="60"
          cy="60"
          r={r}
          stroke={`url(#ringGrad-${uid})`}
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
        <circle
          className="skill-ring__sheen"
          cx="60"
          cy="60"
          r={r}
          stroke={`url(#ringSheen-${uid})`}
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <span className="skill-ring__label">{percentage}%</span>
    </div>
  );
};

interface SkillCardProps {
  skillName: string;
  percentage: number;
  layoutId?: string;
  className?: string;
  isShrunk?: boolean;
  isExpanded?: boolean;
  techs?: TechItem[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  percentage,
  layoutId,
  className,
  isShrunk,
  isExpanded,
  techs,
}) => {
  const { language } = useLanguage();
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const detail = selectedTech ? TECH_DETAILS[selectedTech.alt] : null;

  // Bloquea el scroll del fondo mientras el modal de tecnología está abierto
  useEffect(() => {
    if (!selectedTech) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedTech]);

  return (
    <motion.div
      className={`skill-card glass-panel ${className || ""} ${isShrunk && !isExpanded ? "shrink" : ""} ${isExpanded ? "is-landed" : ""}`}
      layoutId={layoutId}
      layout
      // Animación original (la más fluida): layout + layoutId con un mismo
      // spring conduce el viaje (aterrizaje) y el escalado (scroll) de forma
      // continua.
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: isShrunk && !isExpanded ? 0.85 : 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* ARO DE PROGRESO: solo cuando flota (no aterrizada) */}
      {!isExpanded && (
        <SkillRing percentage={percentage} uid={(layoutId || skillName).replace(/\W/g, "")} />
      )}

      <div className={`skill-name ${isExpanded ? "skill-name--landed" : ""}`}>
        {skillName}
      </div>

      {/* INFORMACIÓN EXTRA (solo aterrizada) — aparece tras el deslizamiento */}
      {isExpanded && (
        <motion.div
          className="skill-detail"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <div className="skill-progress-track">
            <motion.div
              className="skill-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {techs && techs.length > 0 && (
            <div className="skill-techs">
              {techs.map((tech) => (
                <button
                  key={tech.alt}
                  className="skill-tech"
                  onClick={() => TECH_DETAILS[tech.alt] && setSelectedTech(tech)}
                  title={TECH_DETAILS[tech.alt]?.name || tech.alt}
                  type="button"
                >
                  <span className="skill-tech__badge">
                    <img src={tech.src} alt={tech.alt} className="icon-white skill-tech__icon" />
                  </span>
                  <span className="skill-tech__label">{tech.alt}</span>
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* MODAL DE DETALLE DE TECNOLOGÍA (portal a body para escapar
          el containing-block que crean los transforms de framer) */}
      {createPortal(
        <AnimatePresence>
        {selectedTech && detail && (
          <motion.div
            className="tech-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              className="tech-modal glass-panel glass-strong"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="tech-modal__close" onClick={() => setSelectedTech(null)} aria-label="Cerrar">
                ✖
              </button>

              <div className="tech-modal__head">
                <span className="tech-modal__badge">
                  <img src={selectedTech.src} alt={selectedTech.alt} className="icon-white" />
                </span>
                <div>
                  <h3 className="tech-modal__name">{detail.name}</h3>
                  <span className="tech-modal__level-label">{detail.level}%</span>
                </div>
              </div>

              <div className="tech-modal__track">
                <motion.div
                  className="tech-modal__fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${detail.level}%` }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <p className="tech-modal__desc">{detail.desc[language]}</p>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
};

export default SkillCard;
