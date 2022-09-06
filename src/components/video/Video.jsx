import React from "react";
import dotsNaranja from "../../assets/orange-dots.svg";
import "./Video.scss";
function Video() {
  return (
    <>
      <div className="divider-wrapper">
        <img src={dotsNaranja} alt="" />
        <div className="divider-text">
          <p>Es hora de revolucionar la forma de comprar vivienda </p>
        </div>
      </div>
      <div className="video-stats">
        <div className="stat">
          <h3>8%</h3>
          <p>De los adultos en Colombia tienen una hipoteca.</p>
        </div>
        <div className="stat">
          <h3>+35%</h3>
          <p>De los hogares en Colombia no tienen una vivienda digna</p>
        </div>
        <div className="stat">
          <h3>+10</h3>
          <p>
            Años de ahorro, es el tiempo que una familia ahorrar la cuota
            inicial
          </p>
        </div>
      </div>
      <div className="video-title">
        <h2>Te explicamos cómo funciona Nuestro, en 2 minutos</h2>
      </div>
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/aDElJxfzw_g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button className="video-cta">
        ¡Quiero una propuesta para comprar mi casa soñada!
      </button>
    </>
  );
}

export default Video;
