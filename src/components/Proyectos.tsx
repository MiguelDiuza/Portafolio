import React, { useState, CSSProperties, useEffect } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./idiomas";
import "../styles/Proyectos.css";

const MAX_VISIBILITY = 3;

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  icon: string;
  onIconClick?: () => void;
}

interface Proyecto {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  icon: string;
  idCategoria: string;
  description?: string;
  technologies?: { name: string; logo: string }[];
  images?: string[];
  video?: string;
  link?: string;
  link2?: string;
  repo?: string;
  repo2?: string;
}

const base = import.meta.env.BASE_URL;

const getProyectosData = (t: any): Proyecto[] => [
  {
    id: 1,
    title: t("p1_title"),
    subtitle: t("p1_sub"),
    image: `${base}img/app.jpg`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Mobile",
    description: t("p1_desc"),
    technologies: [
      { name: "HTML", logo: `${base}loogos/html.svg` },
      { name: "JS", logo: `${base}loogos/Javascript.svg` },
      { name: "CSS", logo: `${base}loogos/css.svg` }
    ],
    images: [`${base}img/app2.jpg`],
    video: `${base}img/Bg3.mp4`,
    repo: "https://github.com/MiguelDiuza/AppAndroid"
  },
  {
    id: 2,
    title: t("p2_title"),
    subtitle: t("p2_sub"),
    image: `${base}img/im1.png`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Web",
    description: t("p2_desc"),
    technologies: [
      { name: "HTML", logo: `${base}loogos/html.svg` },
      { name: "JS", logo: `${base}loogos/Javascript.svg` },
      { name: "CSS", logo: `${base}loogos/css.svg` }
    ],
    images: [`${base}img/im1.png`],
    video: `${base}img/vip.mp4`,
    link: "https://www.vipwelleurope.es",
    repo: "https://github.com/MiguelDiuza/VipWell"
  },
  {
    id: 3,
    title: t("p3_title"),
    subtitle: t("p3_sub"),
    image: `${base}img/MedicalAI.png`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "IA, Web",
    description: t("p3_desc"),
    technologies: [
      { name: "React", logo: `${base}loogos/react.svg` },
      { name: "HTML", logo: `${base}loogos/html.svg` },
      { name: "Javascript", logo: `${base}loogos/Javascript.svg` },
      { name: "CSS", logo: `${base}loogos/css.svg` },
      { name: "Python", logo: `${base}loogos/python.svg` },
      { name: "YOLO", logo: `${base}loogos/yolo.svg` },
      { name: "PyTorch", logo: `${base}loogos/pytorch.svg` }
    ],
    images: [`${base}img/MedicalAI.png`],
    video: `${base}img/Visumed.mp4`,
    link: "https://ia-patologia.vercel.app/",
    repo: "https://github.com/MiguelDiuza/IA_Patologia"
  },
  {
    id: 4,
    title: t("p4_title"),
    subtitle: t("p4_sub"),
    image: `${base}img/mot.png`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Web",
    description: t("p4_desc"),
    technologies: [
      { name: "HTML", logo: `${base}loogos/html.svg` },
      { name: "JS", logo: `${base}loogos/Javascript.svg` },
      { name: "CSS", logo: `${base}loogos/css.svg` },
      { name: "PostgreSQL", logo: `${base}loogos/postgresql.svg` }
    ],
    images: [`${base}img/mot.png`],
    video: `${base}img/Motion.mp4`,
    link: "https://motiondreamstudio.com/",
    link2: "https://motion-dreams-erp.vercel.app/",
    repo: "https://github.com/MiguelDiuza/MotionDreamStudio",
    repo2: "https://github.com/MiguelDiuza/motionDreamsERP"
  },
  {
    id: 5,
    title: t("p5_title"),
    subtitle: t("p5_sub"),
    image: `${base}img/som.png`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "RA",
    description: t("p5_desc"),
    technologies: [
      { name: "UNITY", logo: `${base}loogos/unity.png` },
      { name: "BLENDER", logo: `${base}loogos/blender.svg` },
      { name: "C++", logo: `${base}loogos/c++.svg` },
      { name: "HTML", logo: `${base}loogos/html.svg` },
      { name: "JS", logo: `${base}loogos/Javascript.svg` },
      { name: "CSS", logo: `${base}loogos/css.svg` }
    ],
    images: [`${base}img/sombra.png`],
    video: `${base}img/G.mp4`,
    repo: "https://github.com/MiguelDiuza/SombraFur"
  }
];

const Card: React.FC<CardProps> = ({ title, subtitle, image, icon, onIconClick }) => (
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
        <img src={icon} alt={`icono ${title}`} />
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

const CategoryDropdown: React.FC<{ onSelect: (category: string) => void, t: any }> = ({ onSelect, t }) => {
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

  const selectedName = categories.find(c => c.id === selectedId)?.name || t("proj_all");

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

const Proyectos: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [expandedMedia, setExpandedMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

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

  useEffect(() => {
    if (selectedProject) {
      setIsVideoLoading(true);
    }
  }, [selectedProject?.id]);

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
          {getProyectosData(t)
            .filter((proyecto: Proyecto) => {
              if (selectedCategory === "All") return true;
              const projectCats = proyecto.idCategoria.split(',').map(cat => cat.trim());
              return projectCats.includes(selectedCategory);
            })
            .map((proyecto) => (
              <Card
                key={proyecto.id}
                title={proyecto.title}
                subtitle={proyecto.subtitle}
                image={proyecto.image}
                icon={proyecto.icon}
                onIconClick={() => setSelectedProject(proyecto)}
              />
            ))}
        </Carousel>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <button
                className="close-button mobile-exterior-close"
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                aria-label="Cerrar modal exterior"
            >
              ✖
            </button>
            <motion.div
              className="modal-content glass-panel"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
            >
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar modal"
              >
                ✖
              </button>

              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '0.2rem', marginTop: '-0.5rem' }}>
                {selectedProject.title}
              </h2>

              <p className="modal-description">
                {selectedProject.description}
              </p>

              <div className="tech-icons">
                {selectedProject.technologies?.map((tech) => (
                  <img key={tech.name} src={tech.logo} alt={tech.name} title={tech.name} className="icon-white" />
                ))}
              </div>

              <div className="project-media">
                <div
                  className="media-container clickable-media"
                  onClick={() => {
                    const src = selectedProject.images && selectedProject.images.length > 0
                      ? selectedProject.images[0]
                      : selectedProject.image;
                    setExpandedMedia({ type: 'image', src });
                  }}
                >
                  <div className="media-zoom-overlay">{t("proj_zoom")}</div>
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <img src={selectedProject.images[0]} alt={selectedProject.title} />
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  )}
                </div>
                <div
                  className="media-container video-block clickable-media"
                  onClick={() => {
                    if (selectedProject.video) {
                      setExpandedMedia({ type: 'video', src: selectedProject.video });
                    }
                  }}
                >
                  {selectedProject.video ? (
                    <>
                      <div className="media-zoom-overlay">{t("proj_zoom")}</div>
                      {isVideoLoading && (
                        <div className="video-loader">
                          <div className="progress-bar">
                            <div className="progress-fill"></div>
                          </div>
                          <p>{t("proj_loading")}</p>
                        </div>
                      )}
                      <video
                        src={selectedProject.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={() => setIsVideoLoading(false)}
                        style={{ opacity: isVideoLoading ? 0 : 1, transition: 'opacity 0.5s' }}
                      />
                    </>
                  ) : (
                    <div className="video-placeholder">{t("proj_no_video")}</div>
                  )}
                </div>
              </div>

              <div className="project-links">
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    {t("proj_visit_site")}
                  </a>
                )}
                {selectedProject.link2 && (
                  <a href={selectedProject.link2} target="_blank" rel="noopener noreferrer">
                    {t("proj_visit_panel")}
                  </a>
                )}
                {selectedProject.repo && (
                  <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> {t("proj_repo")}
                  </a>
                )}
                {selectedProject.repo2 && (
                  <a href={selectedProject.repo2} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> {t("proj_backend")}
                  </a>
                )}
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
              <button
                className="close-button expanded-close"
                onClick={() => setExpandedMedia(null)}
              >
                ✖
              </button>
              {expandedMedia.type === 'image' ? (
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
