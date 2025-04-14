import React from "react";
import "../styles/Video.css";

const Video: React.FC = () => {
  const videoId = "oOkRGhgylb8"; // Reemplázalo con el ID de tu video

  return (
    <div className="video-container">
      {/* Imágenes flotantes */}
      <img
        src="/img/form.png"
        alt="Floating Shape 1"
        className="floating-image floating-image-1"
      />
      <img
        src="/img/form2.png"
        alt="Floating Shape 2"
        className="floating-image floating-image-2"
      />

      {/* Título y subtítulo */}
      <h2 className="video-title">VIDEO PORTAFOLIO</h2>
      <p className="video-subtitle">Dale play a mi creatividad</p>

      {/* Video embebido */}
      <div className="video-card">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
