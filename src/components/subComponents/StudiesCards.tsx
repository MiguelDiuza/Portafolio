import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./StudiesCards.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Info } from "lucide-react";

interface Study {
  title: string;
  years: string;
  image: string;
  pdf?: string;
  description?: string;
  badge?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const StudiesCards: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  useEffect(() => {
    let x: ReturnType<typeof setTimeout>;
    const $cards = $(".study-card");
    const $style = $(".hover");

    $cards.on("mousemove touchmove", function (e) {
      let pos: [number, number] = [e.offsetX || 0, e.offsetY || 0];
      e.preventDefault();

      if (e.type === "touchmove" && e.originalEvent && "touches" in e.originalEvent) {
        const touchEvent = e.originalEvent as TouchEvent;
        pos = [touchEvent.touches[0].clientX, touchEvent.touches[0].clientY];
      }

      const $card = $(this);
      const l = pos[0];
      const t = pos[1];
      const h = $card.height() || 0;
      const w = $card.width() || 0;
      const px = Math.abs(Math.floor((100 / w) * l) - 100);
      const py = Math.abs(Math.floor((100 / h) * t) - 100);
      const pa = 50 - px + (50 - py);

      const lp = 50 + (px - 50) / 1.5;
      const tp = 50 + (py - 50) / 1.5;
      const px_spark = 50 + (px - 50) / 7;
      const py_spark = 50 + (py - 50) / 7;
      const p_opc = 20 + Math.abs(pa) * 1.5;

      const ty = ((tp - 50) / 2) * -1;
      const tx = ((lp - 50) / 1.5) * 0.5;

      const grad_pos = `background-position: ${lp}% ${tp}%;`;
      const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
      const opc = `opacity: ${p_opc / 100};`;
      const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`;

      const style = `
        .study-card:hover:before { ${grad_pos} }
        .study-card:hover:after { ${sprk_pos} ${opc} }
      `;

      $cards.removeClass("active");
      $card.removeClass("animated");
      $card.attr("style", tf);
      $style.html(style);

      if (e.type === "touchmove") return false;
      clearTimeout(x);
    }).on("mouseout touchend touchcancel", function () {
      const $card = $(this);
      $style.html("");
      $card.removeAttr("style");
      x = setTimeout(() => {
        $card.addClass("animated");
      }, 2500);
    });
  }, []);

  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedStudy]);

  const base = import.meta.env.BASE_URL;

  const studies: Study[] = [
    {
      title: "Bachiller Técnico en Arte Gráfico",
      years: "2012 - 2018",
      image: `${base}img/artImg.png`,
      pdf: `${base}pdfs/art.pdf`,
      description: "Formación técnica integral enfocada en los fundamentos del diseño visual, técnicas de ilustración digital y procesos de pre-prensa. Especialización en la conceptualización creativa para medios impresos y digitales.",
    },
    {
      title: "Tecnólogo en Animación 3D",
      years: "2019 - 2021",
      image: `${base}img/senaImg.png`,
      pdf: `${base}pdfs/An3d.pdf`,
      description: "Capacitación avanzada en el pipeline completo de producción digital. Incluye modelado poligonal 3D, rigging avanzado, animación de personajes, iluminación cinemática y composición de efectos visuales (VFX) para producciones multimedia.",
    },
    {
      title: "Ingeniería Multimedia",
      years: "2021 - 2026",
      image: `${base}img/mulImg.png`,
      pdf: `${base}pdfs/IngMultimedia.pdf`,
      badge: "graduación programada mayo 23",
      description: "Programa académico transdisciplinar que fusiona la ingeniería de software con el diseño de experiencias interactivas. Especialización en desarrollo de productos digitales, interfaces inmersivas, y gestión de proyectos tecnológicos multimedia.",
    },
    {
      title: "Especialización en IA",
      years: "Actualmente cursando",
      image: `${base}img/iaImg.png`,
      pdf: `${base}pdfs/ai.pdf`,
      badge: "1/2 semestres aprobados",
      description: "Estudios de posgrado de vanguardia orientados al análisis predictivo y automatización inteligente. Profundización en arquitecturas de redes neuronales, visión por computador, procesamiento de lenguaje natural y el despliegue de modelos de Machine Learning en entornos de producción.",
    },
    {
      title: "Cursos Adicionales",
      years: "2013 - Actualidad",
      image: `${base}img/cuImg.png`,
      pdf: `${base}pdfs/extra.pdf`,
      description: "Trayectoria de formación continua y autodidacta a través de certificaciones internacionales en desarrollo web, backend, infraestructura en la nube y diseño estratégico. Un compromiso constante con la actualización técnica en un ecosistema digital en constante cambio.",
    },
  ];

  return (
    <motion.div
      className="sobre-mi__studies"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {studies.map((study, index) => (
        <motion.div
          key={index}
          className="study-card glass-panel"
          onClick={() => setSelectedStudy(study)}
          variants={cardVariants}
        >
          <h3>{study.title}</h3>
          <p>{study.years}</p>
          <div className="study-card-footer">
            <img src={study.image} alt={`Imagen de ${study.title}`} className="study-card-image" />
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            className="study-modal-overlay"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedStudy(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="study-modal glass-panel"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className="close-button" onClick={() => setSelectedStudy(null)}>✖</button>

              <div className="study-modal-content">
                <div className="study-info">
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedStudy.title}
                  </motion.h2>
                  <motion.p
                    className="study-years"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Calendar size={20} style={{ marginRight: '10px', verticalAlign: 'middle', color: '#00d2ff' }} />
                    <strong style={{ verticalAlign: 'middle' }}>{selectedStudy.years}</strong>
                  </motion.p>
                  <motion.div
                    className="study-description"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selectedStudy.description && (
                      <div className="description-flex">
                        <Info size={22} className="info-icon" />
                        <p>{selectedStudy.description}</p>
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="study-preview-container">
                  {selectedStudy.badge && (
                    <div className="study-badge">
                      {selectedStudy.badge}
                    </div>
                  )}
                  {selectedStudy.pdf ? (
                    <div className="pdf-container">
                      <iframe
                        src={`${selectedStudy.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title={`PDF de ${selectedStudy.title}`}
                        className={`pdf-viewer-standard ${selectedStudy.title.includes("Ingeniería") ? 'pdf-scaled' : ''}`}
                      ></iframe>
                    </div>
                  ) : (
                    <div className="no-pdf">
                      <p>No hay previsualización disponible.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style className="hover"></style>
    </motion.div>
  );
};

export default StudiesCards;
