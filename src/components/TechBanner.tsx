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
      <section className="bottom-banner">
        <div className="logo-container">
          {techLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="tech-logo" />
          ))}
        </div>
      </section>
    );
  };
  
  export default TechBanner;
  