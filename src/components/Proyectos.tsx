import React, { useState, CSSProperties } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/Proyectos.css";

const MAX_VISIBILITY = 3;

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  icon: string;
  onIconClick?: () => void; // <- opcional para manejar interacción del botón
}

// 📌 Definir el tipo de los proyectos con un ID y una categoría
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
  link?: string;
}


// 📌 Datos de prueba con categorías específicas
const proyectosData: Proyecto[] = [
  {
    id: 1,
    title: "E-commerce",
    subtitle: "Tienda Camisas",
    image: "/img/po1.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
    description: "Proyecto de e-commerce con carrito, pasarela de pagos y panel de administración.",
    technologies: [
      { name: "React", logo: "/loogos/react.svg" },
      { name: "Node.js", logo: "/loogos/Javascript.svg" },
      { name: "MongoDB", logo: "/loogos/mysql.svg" }
    ],
    images: ["/img/po1.jpg", "/img/po2.jpg"],
    link: "https://www.bershka.com/"
  },

  {
    id: 2,
    title: "Videojuego",
    subtitle: "Videojuego para web",
    image: "/img/po3.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
    description: "Proyecto de videojuegos en una aplicacion web codificado en c++ con el motor de juegos unity.",
    technologies: [
      { name: "React", logo: "/loogos/react.svg" },
      { name: "Node.js", logo: "/loogos/Javascript.svg" },
      { name: "MongoDB", logo: "/loogos/mysql.svg" }
    ],
    images: ["/img/po2.jpg", "/img/po2.jpg"],
    link: "https://juancarmonal2004.wixsite.com/sombra-furtiva"
  },
  {
    id: 3,
    title: "Web E-comerce",
    subtitle: "Tienda de plantillas de Diseño ",
    image: "/img/po3.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
    description: "Proyecto sobre venta de plantillas de diseño con una pasarela de pagos incluida",
    technologies: [
      { name: "React", logo: "/loogos/react.svg" },
      { name: "Javascript", logo: "/loogos/Javascript.svg" },
      { name: "MySql", logo: "/loogos/mysql.svg" }
    ],
    images: ["/img/po3.jpg"],
    link: "https://www.designi.com.br/"
  },

  {
    id: 4,
    title: " Web IA",
    subtitle: "Chatbot de Atención al Cliente",
    image: "/img/po4.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "IA",
    description: "chat bot de atencion al cliente usando AI.",
    technologies: [
      { name: "React", logo: "/loogos/react.svg" },
      { name: "Node.js", logo: "/loogos/Javascript.svg" },
      { name: "MongoDB", logo: "/loogos/mysql.svg" }
    ],
    images: ["/img/po1.jpg", "/img/po2.jpg"],
    link: "https://www.deepseek.com/"
  },
  {
    id: 5,
    title: "Web comida rapida",
    subtitle: "Plataforma de comidas",
    image: "/img/po5.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
    description: "aplicacion web para una empresa de comidas rapidas",
    technologies: [
      { name: "React", logo: "/loogos/react.svg" },
      { name: "Node.js", logo: "/loogos/Javascript.svg" },
      { name: "MongoDB", logo: "/loogos/mysql.svg" }
    ],
    images: ["/img/po1.jpg", "/img/po2.jpg"],
    link: "https://www.mcdonalds.com.co/"
  },


];




const Card: React.FC<CardProps> = ({ title, subtitle, image, icon, onIconClick }) => (
  <div className="proyecto-card">
    <div className="image-container relative">
      {/* Icono como botón */}
      <button
        className="card-icon-overlay"
        onClick={onIconClick}
        aria-label={`Más sobre ${title}`}
      >
        <img src={icon} alt={`icono ${title}`} />
      </button>

      {/* Imagen principal */}
      <img src={image} alt={title} className="card-image w-full h-auto" />
    </div>

    <div className="card-content p-4">
      <p className="card-subtitle text-sm text-gray-500">{subtitle}</p>
      <h2 className="card-title text-lg font-semibold">{title}</h2>
      <p className="card-date text-xs text-gray-400">2025</p>
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

//  Nuevo: Componente de Categorías con nombres más descriptivos
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
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null); // 👈 Agregado

  return (
    <div className="app">
      <h1 className="proyectos-title">Mis Proyectos</h1>

      <CategoryDropdown onSelect={setSelectedCategory} />

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
              onIconClick={() => {
                console.log(`Ver más sobre: ${proyecto.title}`);
                setSelectedProject(proyecto); // ✅ Funciona correctamente
              }}
            />
          ))}
      </Carousel>

      {/* Modal básico para mostrar detalles del proyecto */}
      {selectedProject && (
        <div className="project-modal-overlay">
          <div className="project-modal">
            <button
              className="close-button"
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar modal"
            >
              ✖
            </button>

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            <div className="tech-icons">
              {selectedProject.technologies?.map((tech) => (
                <img key={tech.name} src={tech.logo} alt={tech.name} title={tech.name} />
              ))}
            </div>

            <div className="project-images">
              {selectedProject.images?.map((img, index) => (
                <img key={index} src={img} alt={`Imagen ${index + 1}`} />
              ))}
            </div>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button"
              >
                Ver Proyecto
              </a>
            )}
          </div>
        </div>
      )}

    </div>
  );
};



export default Proyectos;
