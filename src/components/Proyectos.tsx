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
}

// 📌 Definir el tipo de los proyectos con un ID y una categoría
interface Proyecto {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  icon: string;
  idCategoria: string; // Nueva propiedad para categorizar
}

// 📌 Datos de prueba con categorías específicas
const proyectosData: Proyecto[] = [
  {
    id: 1,
    title: "E-commerce",
    subtitle: "Tienda Tecnológica",
    image: "/img/po1.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
  },
  {
    id: 2,
    title: "Aplicación Móvil",
    subtitle: "Gestor de Finanzas Personales",
    image: "/img/po2.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
  },
  {
    id: 3,
    title: "Web E-comerce",
    subtitle: "Experiencia Interactiva en Museos",
    image: "/img/po3.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
  },
  {
    id: 4,
    title: " Web IA",
    subtitle: "Chatbot de Atención al Cliente",
    image: "/img/po4.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "IA",
  },
  {
    id: 5,
    title: "Web comida rapida",
    subtitle: "Plataforma de comidas",
    image: "/img/po5.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
  },

  {
    id: 6,
    title: "Web de autos",
    subtitle: "Autos",
    image: "/img/po5.jpg",
    icon: "/loogos/mas.svg",
    idCategoria: "Web",
  },
];


const Card: React.FC<CardProps> = ({ title, subtitle, image, icon }) => (
  <div className="proyecto-card">
    <div className="image-container">
      <img src={icon} alt="icon" className="card-icon-overlay" />
      <img src={image} alt={title} className="card-image" />
    </div>
    <div className="card-content">
      <p className="card-subtitle">{subtitle}</p>
      <h2 className="card-title">{title}</h2>
      <p className="card-date">2025</p>
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

// ✅ Nuevo: Componente de Categorías con nombres más descriptivos
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

  return (
    <div className="app">
      <h1 className="proyectos-title">Mis Proyectos</h1>

      {/* 🔥 Agregamos el dropdown aquí */}
      <CategoryDropdown onSelect={setSelectedCategory} />

      <Carousel>
        {proyectosData
          .filter((proyecto: Proyecto) => proyecto.idCategoria === selectedCategory) // Filtramos por categoría
          .map((proyecto) => (
            <Card key={proyecto.id} title={proyecto.title} subtitle={proyecto.subtitle} image={proyecto.image} icon={proyecto.icon} />
          ))}
      </Carousel>
    </div>
  );
};

export default Proyectos;
