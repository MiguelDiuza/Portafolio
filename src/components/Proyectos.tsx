import React, { useState, CSSProperties, useEffect } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./idiomas";
import { PROJECTS, TECHS, Project, ProjectLink } from "../constants/projectsData";
import type { TranslationKey } from "../constants/translations";
import { asset } from "../lib/utils";
import "../styles/Proyectos.css";

const MAX_VISIBILITY = 3;
const ADD_ICON = asset("loogos/mas.svg");

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  onIconClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, subtitle, image, onIconClick }) => (
  <div className="proyecto-card">
    <div className="shine shine-top"></div>
    <div className="shine shine-bottom"></div>
    <div className="glow glow-top"></div>
    <div className="glow glow-bottom"></div>
    <div className="glow glow-bright glow-top"></div>
    <div className="glow glow-bright glow-bottom"></div>

    <div className="inner-content">
      <div className="image-container">
        <img src={image} alt={title} className="card-image" />
      </div>

      <button
        className="card-icon-overlay"
        onClick={onIconClick}
        aria-label={`Más sobre ${title}`}
      >
        <img src={ADD_ICON} alt="" />
      </button>

      <div className="card-content">
        <p className="card-subtitle">{subtitle}</p>
        <h2 className="card-title">{title}</h2>
        <p className="card-date">2026</p>
      </div>
    </div>
  </div>
);

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const count = React.Children.count(children);
  const [active, setActive] = useState<number>(Math.floor(count / 2));
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && active < count - 1) {
      setActive((i) => i + 1);
    }
    if (isRightSwipe && active > 0) {
      setActive((i) => i - 1);
    }
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {active > 0 && (
        <button className="proyecto-nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => {
        const styles: CSSProperties = {
          "--active": i === active ? 1 : 0,
          "--offset": (active - i) / 3,
          "--direction": Math.sign(active - i),
          "--abs-offset": Math.abs(active - i) / 3,
          pointerEvents: active === i ? "auto" : "none",
          opacity: Math.max(1 - Math.abs(active - i) * 0.3, 0),
          display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
        } as CSSProperties;

        return (
          <div className="proyectos-card-container" style={styles}>
            {child}
          </div>
        );
      })}
      {active < count - 1 && (
        <button className="proyecto-nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const CategoryDropdown: React.FC<{ onSelect: (category: string) => void; t: (k: TranslationKey) => string }> = ({ onSelect, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("All");

  const categories = [
    { id: "All", name: t("proj_all") },
    { id: "Web", name: t("proj_web") },
    { id: "RA", name: t("proj_ra") },
    { id: "IA", name: t("proj_ia") },
    { id: "Mobile", name: t("proj_mobile") },
  ];

  const handleSelect = (categoryId: string) => {
    setSelectedId(categoryId);
    setIsOpen(false);
    onSelect(categoryId);
  };

  const selectedName = categories.find((c) => c.id === selectedId)?.name || t("proj_all");

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedName} <IoIosArrowDown className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {categories.map(({ id, name }) => (
            <li key={id} onClick={() => handleSelect(id)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const LINK_LABELS: Record<ProjectLink["type"], TranslationKey> = {
  site: "proj_visit_site",
  panel: "proj_visit_panel",
  repo: "proj_repo",
  backend: "proj_backend",
};

const Proyectos: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedMedia, setExpandedMedia] = useState<{ type: "image" | "video"; src: string } | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (selectedProject || expandedMedia) {
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
  }, [selectedProject, expandedMedia]);

  // Reinicia estado de carga y "ver más" al cambiar de proyecto
  useEffect(() => {
    if (selectedProject) {
      setIsVideoLoading(true);
      setShowDetails(false);
    }
  }, [selectedProject?.id]);

  const closeModal = () => setSelectedProject(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category.split(",").map((c) => c.trim()).includes(selectedCategory);
  });

  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="section-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {t("proj_title")}
      </motion.h1>

      <CategoryDropdown onSelect={setSelectedCategory} t={t} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Carousel key={selectedCategory}>
          {filteredProjects.map((proyecto) => (
            <Card
              key={proyecto.id}
              title={t(proyecto.titleKey)}
              subtitle={t(proyecto.subtitleKey)}
              image={proyecto.image}
              onIconClick={() => setSelectedProject(proyecto)}
            />
          ))}
        </Carousel>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <button
              className="close-button mobile-exterior-close"
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
              aria-label="Cerrar modal exterior"
            >
              ✖
            </button>
            <motion.div
              className="project-modal glass-panel glass-strong"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="close-button" onClick={closeModal} aria-label="Cerrar modal">
                ✖
              </button>

              <div className="project-modal__scroll">
                {/* HEADER */}
                <header className="project-modal__header">
                  <div className="project-modal__chips">
                    {selectedProject.category.split(",").map((c) => (
                      <span key={c} className="project-chip">{c.trim()}</span>
                    ))}
                  </div>
                  <h2 className="project-modal__title">{t(selectedProject.titleKey)}</h2>
                  <p className="project-modal__subtitle">{t(selectedProject.subtitleKey)}</p>
                </header>

                {/* MEDIA */}
                <div className="project-media">
                  <div
                    className="media-container clickable-media"
                    onClick={() =>
                      setExpandedMedia({
                        type: "image",
                        src: selectedProject.images[0] || selectedProject.image,
                      })
                    }
                  >
                    <div className="media-zoom-overlay">{t("proj_zoom")}</div>
                    <img src={selectedProject.images[0] || selectedProject.image} alt={t(selectedProject.titleKey)} />
                  </div>

                  <div
                    className="media-container video-block clickable-media"
                    onClick={() => {
                      if (selectedProject.video) setExpandedMedia({ type: "video", src: selectedProject.video });
                    }}
                  >
                    {selectedProject.video ? (
                      <>
                        <div className="media-zoom-overlay">{t("proj_zoom")}</div>
                        {isVideoLoading && (
                          <div className="video-loader">
                            <div className="progress-bar"><div className="progress-fill"></div></div>
                            <p>{t("proj_loading")}</p>
                          </div>
                        )}
                        <video
                          src={selectedProject.video}
                          autoPlay loop muted playsInline
                          onLoadedData={() => setIsVideoLoading(false)}
                          style={{ opacity: isVideoLoading ? 0 : 1, transition: "opacity 0.5s" }}
                        />
                      </>
                    ) : (
                      <div className="video-placeholder">{t("proj_no_video")}</div>
                    )}
                  </div>
                </div>

                {/* DESCRIPCIÓN CORTA */}
                <p className="project-modal__desc">{t(selectedProject.descKey)}</p>

                {/* VER MÁS */}
                <button
                  className="see-more-toggle"
                  onClick={() => setShowDetails((v) => !v)}
                  aria-expanded={showDetails}
                >
                  {showDetails ? t("proj_see_less") : t("proj_see_more")}
                  <IoIosArrowDown className={`see-more-icon ${showDetails ? "open" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {showDetails && (
                    <motion.div
                      className="project-details"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="project-details__inner">
                        <h3 className="project-section-title">{t("proj_about_title")}</h3>
                        <p className="project-modal__detail">{t(selectedProject.detailKey)}</p>

                        <h3 className="project-section-title">{t("proj_stack_title")}</h3>
                        <div className="proj-groups">
                          {selectedProject.groups.map((group, gi) => (
                            <div key={gi} className="proj-group">
                              <div className="proj-group__head">
                                <span className="proj-group__label">{group.label[language]}</span>
                                <div className="proj-group__techs">
                                  {group.techs.map((key) => {
                                    const tech = TECHS[key];
                                    if (!tech) return null;
                                    return (
                                      <span key={key} className="proj-group__chip" title={tech.name}>
                                        <span className="proj-group__chip-logo">
                                          <img src={tech.logo} alt={tech.name} />
                                        </span>
                                        <span>{tech.name}</span>
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                              <p className="proj-group__note">{group.note[language]}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* LINKS */}
                <div className="project-links">
                  {selectedProject.links.map((link) => (
                    <a
                      key={link.type + link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button"
                    >
                      {(link.type === "repo" || link.type === "backend") && <FaGithub />}
                      {t(LINK_LABELS[link.type])}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {expandedMedia && (
          <motion.div
            className="media-expanded-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedMedia(null)}
          >
            <motion.div
              className="media-expanded-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button expanded-close" onClick={() => setExpandedMedia(null)}>
                ✖
              </button>
              {expandedMedia.type === "image" ? (
                <img src={expandedMedia.src} alt="Vista ampliada" />
              ) : (
                <video src={expandedMedia.src} autoPlay loop muted playsInline />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Proyectos;
