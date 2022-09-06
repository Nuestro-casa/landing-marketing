import React from "react";
import "./Last.scss";
import whatsapp from "../../assets/whatsapp-logo.png";
function Last() {
  return (
    <>
      <div className="last-cta-wrapper">
        <p>
          ¡Preguntar no te obliga a comprar!
          <br />
          <br />
          Descubre nuestra alternativa de financiemiento, sus beneficios, y
          cumple tu sueño de tener casa propia ahora.
          <br />
          <br />
          ¡Hablemos!
        </p>
        <button className="btn main">¡Vale, ¡Me animo a preguntar!</button>
        <a
          href="https://api.whatsapp.com/send?phone=573152559261"
          className="btn whatsapp"
        >
          <span>
            <img src={whatsapp} alt="" />
            <span>Escribenos a whatapp</span>
          </span>
        </a>
      </div>
    </>
  );
}

export default Last;
