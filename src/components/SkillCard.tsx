import React from 'react';
import { motion } from "framer-motion";
import "../styles/SkillCard.css";

interface TechItem {
  src: string;
  alt: string;
}

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
  techs 
}) => {
  return (
    <motion.div
      className={`skill-card glass-panel ${className || ""} ${isShrunk ? "shrink" : ""}`}
      layoutId={layoutId}
      layout 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: isShrunk ? 0.85 : 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: "spring" }}
      style={{
        // AQUI CAMBIAMOS EL TAMAÑO DE LA TARJETA ATERRIZADA
        // 200px de ancho y 240px de alto aprox para que sea compacta
        width: isExpanded ? '200px' : undefined, 
        minHeight: isExpanded ? '240px' : undefined, 
        
        flexDirection: 'column',
        display: 'flex',
        justifyContent: isExpanded ? 'center' : 'center', // Centrado vertical
        padding: isExpanded ? '1.5rem' : undefined
      }}
    >
      {/* 1. EL CÍRCULO: Solo se muestra si NO está expandida (es decir, solo flotando) */}
      {!isExpanded && (
        <div className="skill-circle" style={{ background: `conic-gradient(#6a5acd ${percentage}% , rgba(255, 255, 255, 0.1) ${percentage}% )` }}>
          <span className="skill-percentage">{percentage}%</span>
        </div>
      )}
      
      {/* El nombre siempre visible, pero si está expandida le damos un poco más de tamaño */}
      <div className="skill-name" style={{ fontSize: isExpanded ? '1.3rem' : '1rem', marginBottom: isExpanded ? '15px' : '0' }}>
        {skillName}
      </div>

      {/* --- INFORMACIÓN EXTRA (SOLO ATERRIZADA) --- */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ width: '100%', textAlign: 'center' }}
        >
          {/* BARRA DE PROGRESO (GRUESA) */}
          <div style={{ 
              height: '12px', // Barra bien gruesa
              background: '#333', 
              borderRadius: '6px', 
              overflow: 'hidden', 
              marginBottom: '20px', // Espacio hacia los iconos
              marginTop: '5px'
          }}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ delay: 0.4, duration: 1 }}
              style={{ height: '100%', background: '#6a5acd' }} 
            />
          </div>

          {/* ICONOS DE TECNOLOGÍAS (MÁS GRANDES) */}
          {techs && techs.length > 0 && (
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {techs.map((tech, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            // 3. AQUI AGRANDAMOS LOS ICONOS
                            width: '45px',  // Antes 30px
                            height: '45px', // Antes 30px
                            background: 'rgba(255,255,255,0.1)', 
                            borderRadius: '50%', 
                            padding: '8px', 
                            display:'flex', 
                            alignItems:'center', 
                            justifyContent:'center' 
                        }} 
                        title={tech.alt}
                    >
                        <img src={tech.src} alt={tech.alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ))}
            </div>
          )}

        </motion.div>
      )}
    </motion.div>
  );
};

export default SkillCard;