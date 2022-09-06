import React from "react";
import "./Preguntas.scss";
import preguntasFamilia from "../../assets/preguntas-familia.png";
import dotsNaranja from "../../assets/orange-dots.svg";
function Preguntas() {
  return (
    <>
      <div className="divider-wrapper">
        <img src={dotsNaranja} alt="" />
        <div className="divider-text">
          <p>¿Te sientes identificado? Nuestro es para ti</p>
        </div>
      </div>
      <div className="preguntas-wrapper">
        <div className="preguntas-rectangulo">
          <ul>
            <li>
              <span>¿No tienes la cuota inicial completa?</span>
            </li>
            <li>
              <span>¿No te aprobaron el crédito?</span>
            </li>
            <li>
              <span>¿Los intereses y la cuota mensual son muy altas?</span>
            </li>
          </ul>
        </div>
        <div className="preguntas-imagen">
          <img src={preguntasFamilia} alt="" />
        </div>
      </div>
    </>
  );
}

export default Preguntas;
