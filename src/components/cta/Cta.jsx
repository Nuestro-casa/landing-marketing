import React from "react";
import "./Cta.scss";
import ctaBg from "../../assets/cta-bg.png";

import whatsapp from "../../assets/whatsapp.svg";
function Cta() {
  return (
    <div className="cta-wrapper">
      <div className="cta-img">
        <img
          src={ctaBg}
          alt="Familia comprando casa nueva"
          className="cta-bg"
        />
        <h1>
          Descubre la nueva forma de comprar vivienda{" "}
          <span className="orange-text">sin deuda</span> y gana un bono
          Falabella de $500.000 para tu nueva casa{" "}
          <span className="orange-text">*</span>
        </h1>
      </div>
      <div className="cta-form">
        <form className="cta-form">
          <h2>No dejes pasar esta oportunidad</h2>
          <p className="cta-desc">Completa el formulario</p>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="tel" placeholder="Teléfono" />
          <input type="email" placeholder="Correo electrónico" />
          <label for="terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              onchange="activateButton(this)"
            />{" "}
            Autorizo a Nuestro, para usar mis datos de acuerdo a la ley 1581 de
            protección de datos personales
          </label>
          <button className="cta-main btn">
            ¡Quiero comprar mi casa ahora!
          </button>
          <a
            href="https://api.whatsapp.com/send?phone=573152559261"
            className="cta-whatsapp btn"
          >
            <img src={whatsapp} alt="" />
            <p>Escríbenos a WhatsApp</p>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Cta;
