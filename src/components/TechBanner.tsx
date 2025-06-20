import "../styles/TechBanner.css";

const TechBanner = () => {
  const base = import.meta.env.BASE_URL;

  const techLogos = [
    { src: `${base}loogos/blender.svg`, alt: "Blender" },
    { src: `${base}loogos/Adobe.svg`, alt: "Adobe" },
    { src: `${base}loogos/Unity.svg`, alt: "Unity" },
    { src: `${base}loogos/mysql.svg`, alt: "MySQL" },
    { src: `${base}loogos/java.svg`, alt: "Java" },
    { src: `${base}loogos/python.svg`, alt: "Python" },
    { src: `${base}loogos/css3.svg`, alt: "CSS3" },
    { src: `${base}loogos/html5.svg`, alt: "HTML5" },
    { src: `${base}loogos/Javascript.svg`, alt: "JavaScript" },
    { src: `${base}loogos/react.svg`, alt: "React" },
  ];


  return (
    <section className="infinity-banner">
      <div className="logo-container">
        {/* Tres grupos de logos */}
        <div className="logos">
          {techLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`tech-logo ${logo.alt === "Adobe" || logo.alt === "Unity" ? "large-logo" : ""}`}
            />
          ))}
        </div>
        <div className="logos">
          {techLogos.map((logo, index) => (
            <img
              key={index + techLogos.length}
              src={logo.src}
              alt={logo.alt}
              className={`tech-logo ${logo.alt === "Adobe" || logo.alt === "Unity" ? "large-logo" : ""}`}
            />
          ))}
        </div>
        <div className="logos">
          {techLogos.map((logo, index) => (
            <img
              key={index + techLogos.length * 2}
              src={logo.src}
              alt={logo.alt}
              className={`tech-logo ${logo.alt === "Adobe" || logo.alt === "Unity" ? "large-logo" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBanner;
