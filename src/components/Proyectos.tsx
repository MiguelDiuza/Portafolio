import React, { useState, CSSProperties, useEffect } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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

const proyectosData: Proyecto[] = [
  {
    id: 1,
    title: "Studio Web",
    subtitle: "Studio de diseño web",
    image: `${base}img/mot.png`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Web",
    description:
      "Proyecto para un estudio de diseño con y panel de administración.",
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
    id: 2,
    title: "Machinery Web",
    subtitle: "Machinery Management Web",
    image: `${base}img/im1.png`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Web",
    description: "Proyecto de videojuegos en una aplicacion web codificado en c++ con el motor de juegos unity.",
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
    title: "Web AI de Diseño",
    subtitle: "Ai de diseño entrenada y desplegada en web",
    image: `${base}img/aiFly.jpg`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Web",
    description: "Proyecto sobre venta de plantillas de diseño con una pasarela de pagos incluida",
    technologies: [
      { name: "React", logo: `${base}loogos/react.svg` },
      { name: "Javascript", logo: `${base}loogos/Javascript.svg` },
      { name: "MySql", logo: `${base}loogos/mysql.svg` }
    ],
    images: [`${base}img/aiFly.jpg`],
    video: `${base}img/Bg3.mp4`,
    link: "https://www.designi.com.br/",
    repo: "https://github.com/"
  },
  {
    id: 4,
    title: " Web IA",
    subtitle: "Chatbot de Atención al Cliente",
    image: `${base}img/po4.jpg`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "IA",
    description: "chat bot de atencion al cliente usando AI.",
    technologies: [
      { name: "React", logo: `${base}loogos/react.svg` },
      { name: "Node.js", logo: `${base}loogos/Javascript.svg` },
      { name: "MongoDB", logo: `${base}loogos/mysql.svg` }
    ],
    images: [`${base}img/po4.jpg`],
    video: `${base}img/Bg3.mp4`,
    link: "https://www.deepseek.com/",
    repo: "https://github.com/"
  },
  {
    id: 5,
    title: "App de gestión",
    subtitle: "Gestión de tareas del hogar",
    image: `${base}img/app.jpg`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Web",
    description: "aplicacion web para una empresa de comidas rapidas",
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
    id: 6,
    title: "Video juego web",
    subtitle: "Videojuego en web desarrollado en Unity",
    image: `${base}img/som.png`,
    icon: `${base}loogos/mas.svg`,
    idCategoria: "Web",
    description: "Videojuego en web desarrollado en Unity",
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
    link: "https://www.mcdonalds.com.co/",
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
        <button
          className="card-icon-overlay"
          onClick={onIconClick}
          aria-label={`Más sobre ${title}`}
        >
          <img src={icon} alt={`icono ${title}`} />
        </button>
        <img src={image} alt={title} className="card-image" />
      </div>

      <div className="card-content">
        <p className="card-subtitle">{subtitle}</p>
        <h2 className="card-title">{title}</h2>
        <p className="card-date">2025</p>
      </div>
    </div>
  </div>
);

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState<number>(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
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

const categories = [
  { id: "Web", name: "Desarrollo Web" },
  { id: "RA", name: "Realidad Aumentada" },
  { id: "IA", name: "Inteligencia Artificial" },
  { id: "UI/UX", name: "Diseño UI/UX" },
];

const CategoryDropdown: React.FC<{ onSelect: (category: string) => void }> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Desarrollo Web");

  const handleSelect = (categoryId: string, categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsOpen(false);
    onSelect(categoryId);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedCategory} <IoIosArrowDown className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {categories.map(({ id, name }) => (
            <li key={id} onClick={() => handleSelect(id, name)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Proyectos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      setIsVideoLoading(true);
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedProject]);

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
        Mis Proyectos
      </motion.h1>

      <CategoryDropdown onSelect={setSelectedCategory} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Carousel>
          {proyectosData
            .filter((proyecto: Proyecto) => proyecto.idCategoria === selectedCategory)
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
            <motion.div
              className="modal-content glass-panel"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar modal"
              >
                ✖
              </button>

              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
                {selectedProject.title}
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.8rem', fontSize: '1rem', lineHeight: '1.4' }}>
                {selectedProject.description}
              </p>

              <div className="tech-icons">
                {selectedProject.technologies?.map((tech) => (
                  <img key={tech.name} src={tech.logo} alt={tech.name} title={tech.name} className="icon-white" />
                ))}
              </div>

              <div className="project-media">
                <div className="media-container">
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <img src={selectedProject.images[0]} alt={selectedProject.title} />
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  )}
                </div>
                <div className="media-container video-block">
                  {selectedProject.video ? (
                    <>
                      {isVideoLoading && (
                        <div className="video-loader">
                          <div className="spinner"></div>
                          <p>Cargando video...</p>
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
                    <div className="video-placeholder">Video no disponible</div>
                  )}
                </div>
              </div>

              <div className="project-links">
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    Ver Sitio
                  </a>
                )}
                {selectedProject.link2 && (
                  <a href={selectedProject.link2} target="_blank" rel="noopener noreferrer">
                    Ver Panel
                  </a>
                )}
                {selectedProject.repo && (
                  <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Repo
                  </a>
                )}
                {selectedProject.repo2 && (
                  <a href={selectedProject.repo2} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Backend
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Proyectos;
