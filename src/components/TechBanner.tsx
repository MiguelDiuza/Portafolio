import "../styles/TechBanner.css";

const TechBanner = () => {
  const base = import.meta.env.BASE_URL;

  const techLogos = [
    { src: `${base}public/loogos/blender.svg`, alt: "Blender" },
    { src: `${base}public/loogos/adobe.svg`, alt: "Adobe" },
    { src: `${base}public/loogos/unity.svg`, alt: "Unity" },
    { src: `${base}public/loogos/mysql.svg`, alt: "MySQL" },
    { src: `${base}public/loogos/java.svg`, alt: "Java" },
    { src: `${base}public/loogos/python.svg`, alt: "Python" },
    { src: `${base}public/loogos/css3.svg`, alt: "CSS3" },
    { src: `${base}public/loogos/html5.svg`, alt: "HTML5" },
    { src: `${base}public/loogos/javascript.svg`, alt: "JavaScript" },
    { src: `${base}public/loogos/react.svg`, alt: "React" },
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
