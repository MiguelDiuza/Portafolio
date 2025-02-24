import "../styles/TechBanner.css";

const TechBanner = () => {
  const techLogos = [
    { src: "/loogos/blender.svg", alt: "Blender" },
    { src: "/loogos/adobe.svg", alt: "Adobe" },
    { src: "/loogos/unity.svg", alt: "Unity" },
    { src: "/loogos/mysql.svg", alt: "MySQL" },
    { src: "/loogos/java.svg", alt: "Java" },
    { src: "/loogos/python.svg", alt: "Python" },
    { src: "/loogos/css3.svg", alt: "CSS3" },
    { src: "/loogos/html5.svg", alt: "HTML5" },
    { src: "/loogos/javascript.svg", alt: "JavaScript" },
    { src: "/loogos/react.svg", alt: "React" },
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
