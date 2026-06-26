import { useEffect, useRef } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "./idiomas";
import "../styles/Footer.css";

const MARQUEE_ITEMS = [
  "UI / UX Design",
  "Front-End",
  "Machine Learning",
  "3D / AR / VR",
  "Full-Stack",
  "Computer Vision",
];

const MarqueeRow = () => (
  <div className="cine-marquee__group">
    {MARQUEE_ITEMS.map((item, i) => (
      <span key={i} className="cine-marquee__item">
        {item}
        <span className="cine-marquee__star">✦</span>
      </span>
    ))}
  </div>
);

const CinematicFooter: React.FC = () => {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const giantRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantRef.current,
        { yPercent: 25, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: { trigger: root, start: "top 85%", end: "bottom bottom", scrub: 1 },
        }
      );

      gsap.fromTo(
        contentRef.current?.children ? Array.from(contentRef.current.children) : [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "power3.out",
          duration: 0.9,
          scrollTrigger: { trigger: root, start: "top 70%" },
        }
      );
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    /* Wrapper de "cortina": su clip-path contiene al footer fixed,
       que se revela a medida que este bloque entra en el viewport. */
    <div ref={rootRef} className="cine-reveal" id="contacto">
    <footer className="cine-footer">
      {/* Fondos ambientales */}
      <div className="cine-aurora" aria-hidden="true" />
      <div className="cine-grid" aria-hidden="true" />
      <div ref={giantRef} className="cine-giant-text" aria-hidden="true">
        DIUZA
      </div>

      {/* Marquee superior */}
      <div className="cine-marquee" aria-hidden="true">
        <div className="cine-marquee__track">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>

      {/* Contenido principal */}
      <div ref={contentRef} className="cine-main">
        <p className="cine-eyebrow">{t("footer_contact")}</p>
        <h2 className="cine-heading">{t("footer_cta")}</h2>
        <p className="cine-name">Miguel Angel Diuza Montaño</p>

        {/* Pills de contacto principales */}
        <div className="cine-pills cine-pills--primary">
          <MagneticButton
            as="a"
            href="mailto:mandiuza@gmail.com"
            className="cine-pill cine-pill--accent"
          >
            <MdEmail /> mandiuza@gmail.com
          </MagneticButton>
          <MagneticButton
            as="a"
            href="https://wa.me/573128555441"
            target="_blank"
            rel="noopener noreferrer"
            className="cine-pill"
          >
            <FaWhatsapp /> +57 312 8555441
          </MagneticButton>
        </div>

        {/* Redes */}
        <div className="cine-pills">
          <MagneticButton
            as="a"
            href="https://www.linkedin.com/in/miguel-angel-diuza-montaño-ab13501a0"
            target="_blank"
            rel="noopener noreferrer"
            className="cine-pill cine-pill--icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="https://github.com/MiguelDiuza"
            target="_blank"
            rel="noopener noreferrer"
            className="cine-pill cine-pill--icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </MagneticButton>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="cine-bottom cine-bottom--end">
        <MagneticButton
          as="button"
          onClick={scrollToTop}
          className="cine-top"
          aria-label="Volver arriba"
          strength={0.5}
        >
          <HiArrowUp />
        </MagneticButton>
      </div>
    </footer>
    </div>
  );
};

export default CinematicFooter;
