import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./StudiesCards.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

interface Study {
  title: string;
  years: string;
  image: string;
  pdf?: string;
  description?: string;
}

const StudiesCards: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  useEffect(() => {
    let x: ReturnType<typeof setTimeout>;
    const $cards = $(".study-card");
    const $style = $(".hover");

    $cards.on("mousemove touchmove", function (e) {
      let pos: [number, number] = [e.offsetX || 0, e.offsetY || 0];
      e.preventDefault();

      if (e.type === "touchmove" && e.originalEvent && "touches" in e.originalEvent) {
        const touchEvent = e.originalEvent as TouchEvent;
        pos = [touchEvent.touches[0].clientX, touchEvent.touches[0].clientY];
      }

      const $card = $(this);
      const l = pos[0];
      const t = pos[1];
      const h = $card.height() || 0;
      const w = $card.width() || 0;
      const px = Math.abs(Math.floor((100 / w) * l) - 100);
      const py = Math.abs(Math.floor((100 / h) * t) - 100);
      const pa = 50 - px + (50 - py);

      const lp = 50 + (px - 50) / 1.5;
      const tp = 50 + (py - 50) / 1.5;
      const px_spark = 50 + (px - 50) / 7;
      const py_spark = 50 + (py - 50) / 7;
      const p_opc = 20 + Math.abs(pa) * 1.5;

      const ty = ((tp - 50) / 2) * -1;
      const tx = ((lp - 50) / 1.5) * 0.5;

      const grad_pos = `background-position: ${lp}% ${tp}%;`;
      const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
      const opc = `opacity: ${p_opc / 100};`;
      const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`;

      const style = `
        .study-card:hover:before { ${grad_pos} }
        .study-card:hover:after { ${sprk_pos} ${opc} }
      `;

      $cards.removeClass("active");
      $card.removeClass("animated");
      $card.attr("style", tf);
      $style.html(style);

      if (e.type === "touchmove") return false;
      clearTimeout(x);
    }).on("mouseout touchend touchcancel", function () {
      const $card = $(this);
      $style.html("");
      $card.removeAttr("style");
      x = setTimeout(() => {
        $card.addClass("animated");
      }, 2500);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedStudy ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedStudy]);

  const studies: Study[] = [
    {
      title: "Bachiller Técnico en Arte Gráfico",
      years: "2012-2018",
      image: "./img/artImg.png",
      pdf: "/pdfs/art.pdf",
      description: "Estudio técnico enfocado en procesos gráficos, diseño y producción impresa.",
    },
    {
      title: "Tecnólogo en Animación 3D",
      years: "2019-2021",
      image: "./img/senaImg.png",
      pdf: "/pdfs/An3d.pdf",
      description: "Formación profesional en modelado, rigging, animación y postproducción 3D.",
    },
    {
      title: "Ingeniería Multimedia",
      years: "En espera del <br> diploma, mayo 2026",
      image: "./img/mulImg.png",
      pdf: "/pdfs/IngMultimedia.pdf",
      description: "Carrera universitaria enfocada en desarrollo de software multimedia e interacción.",
    },
    {
      title: "Especialización en IA",
      years: "En curso",
      image: "./img/iaImg.png",
      pdf: "/pdfs/extra.pdf",
      description: "Estudios de posgrado sobre aprendizaje automático, redes neuronales y big data.",
    },
    {
      title: "Cursos Adicionales",
      years: "2013 - ∞",
      image: "./img/cuImg.png",
      pdf: "/pdfs/extra.pdf",
      description: "Colección de cursos cortos en áreas como diseño, desarrollo, animación y más.",
    },
  ];

  return (
    <div className="sobre-mi__studies">
      {studies.map((study, index) => (
        <div key={index} className="study-card" onClick={() => setSelectedStudy(study)}>
          <h3>{study.title}</h3>
          <p>{study.years}</p>
          <div className="study-card-footer">
            <img src={study.image} alt={`Imagen de ${study.title}`} className="study-card-image" />
          </div>
        </div>
      ))}

      {selectedStudy && (
        <div
          className="study-modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedStudy(null)}
        >
          <div className="study-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedStudy(null)}>✖</button>
            <h2>{selectedStudy.title}</h2>
            <p><strong>{selectedStudy.years}</strong></p>
            {selectedStudy.description && <p>{selectedStudy.description}</p>}
            {selectedStudy.pdf ? (
              <iframe
                src={selectedStudy.pdf}
                title={`PDF de ${selectedStudy.title}`}
                className="pdf-viewer"
              ></iframe>
            ) : (
              <p>No hay PDF disponible para este estudio.</p>
            )}
          </div>
        </div>
      )}

      <style className="hover"></style>
    </div>
  );
};

export default StudiesCards;
