import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./StudiesCards.css";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Info } from "lucide-react";
import { useLanguage } from '../idiomas';

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
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const StudiesCards: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);
  const [zoomedDiploma, setZoomedDiploma] = useState<string | null>(null);

  // Bloquea el scroll del body mientras hay un modal abierto
  useEffect(() => {
    const open = selectedStudy || zoomedDiploma;
    document.body.style.overflow = open ? "hidden" : "auto";
    document.documentElement.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedStudy, zoomedDiploma]);

  const base = import.meta.env.BASE_URL;

  const studies: Study[] = [
    {
      title: t("study_art_title"),
      years: t("study_art_years"),
      image: `${base}img/artImg.png`,
      pdf: `${base}pdfs/art.pdf`,
      description: t("study_art_desc"),
    },
    {
      title: t("study_anim_title"),
      years: t("study_anim_years"),
      image: `${base}img/senaImg.png`,
      pdf: `${base}pdfs/An3d.pdf`,
      description: t("study_anim_desc"),
    },
    {
      title: t("study_eng_title"),
      years: t("study_eng_years"),
      image: `${base}img/mulImg.png`,
      pdf: `${base}pdfs/pregrado.pdf`,
      badge: t("study_eng_badge"),
      description: t("study_eng_desc"),
    },
    {
      title: t("study_ai_title"),
      years: t("study_ai_years"),
      image: `${base}img/iaImg.png`,
      pdf: `${base}pdfs/ai.pdf`,
      badge: t("study_ai_badge"),
      description: t("study_ai_desc"),
    },
    {
      title: t("study_extra_title"),
      years: t("study_extra_years"),
      image: `${base}img/cuImg.png`,
      pdf: `${base}pdfs/extra.pdf`,
      description: t("study_extra_desc"),
    },
  ];

  const getJpgPath = (pdfPath?: string) => {
    if (!pdfPath) return "";
    return pdfPath.replace(/\.pdf$/, "_page-0001.jpg");
  };

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
          whileHover={{ y: -8, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <h3>{study.title}</h3>
          <p>{study.years}</p>
          <div className="study-card-footer">
            <div className="study-card-media-container">
              <img
                src={study.image}
                alt={`Imagen de ${study.title}`}
                className="study-card-image default-image"
              />
              {study.pdf && (
                <div className="pdf-thumbnail-wrapper">
                  <img
                    src={getJpgPath(study.pdf)}
                    alt={`Previsualización de ${study.title}`}
                    className="pdf-thumbnail-image hover-image"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Modal de detalle del estudio (portal a body: queda sobre todo,
          las tarjetas flotantes quedan detrás) */}
      {createPortal(
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
              className="study-modal glass-panel glass-strong"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="close-button" onClick={() => setSelectedStudy(null)} aria-label="Cerrar">
                ✖
              </button>

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
                    <Calendar size={20} style={{ marginRight: "10px", verticalAlign: "middle" }} />
                    <strong style={{ verticalAlign: "middle" }}>{selectedStudy.years}</strong>
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
                  {selectedStudy.badge && <div className="study-badge">{selectedStudy.badge}</div>}
                  {selectedStudy.pdf ? (
                    <div
                      className="pdf-container clickable-diploma"
                      onClick={() => setZoomedDiploma(getJpgPath(selectedStudy.pdf))}
                    >
                      <img
                        src={getJpgPath(selectedStudy.pdf)}
                        alt={`Diploma de ${selectedStudy.title}`}
                        className="pdf-viewer-image"
                      />
                      <div className="diploma-fade" />
                      <button
                        className="diploma-view-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          setZoomedDiploma(getJpgPath(selectedStudy.pdf));
                        }}
                      >
                        {t("study_view_full")}
                      </button>
                    </div>
                  ) : (
                    <div className="no-pdf">
                      <p>{t("study_no_pdf")}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}

      {/* Overlay del diploma a tamaño completo (portal a body) */}
      {createPortal(
        <AnimatePresence>
        {zoomedDiploma && (
          <motion.div
            className="diploma-zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedDiploma(null)}
          >
            <motion.img
              src={zoomedDiploma}
              alt="Diploma completo"
              className="diploma-zoom-image"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="close-button diploma-zoom-close" onClick={() => setZoomedDiploma(null)}>
              ✖
            </button>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
};

export default StudiesCards;
