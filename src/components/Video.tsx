import React from "react";
import "../styles/Video.css";

const Video: React.FC = () => {
  const videoId = "Exu7r2vZpcw"; // Reemplázalo con el ID de tu video

  return (
    <div className="video-container">
      <h2 className="video-title">VIDEO PORTAFOLIO</h2>
      <p className="video-subtitle">Dale play a mi creatividad</p>
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
