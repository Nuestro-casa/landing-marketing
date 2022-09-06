import React from "react";
import "./Ventajas.scss";
import dotsNaranjas from "../../assets/dots-naranjas-2.png";
import ventajasBubble from "../../assets/ventajas-bubble.png";

import ventajas1 from "../../assets/ventaja-1.png";
import ventajas2 from "../../assets/ventaja-2.png";
import ventajas3 from "../../assets/ventaja-3.png";
import ventajas4 from "../../assets/ventaja-4.png";
import ventajas5 from "../../assets/ventaja-5.png";
import ventajas6 from "../../assets/ventaja-6.png";

function Ventajas() {
  return (
    <>
      <div className="ventajas-title">
        <img src={dotsNaranjas} alt="" className="dots" />
        <h2>Descubre nuestras ventajas</h2>
      </div>
      <div className="ventajas-wrapper">
        <img src={ventajasBubble} alt="" className="dots" />
        <div className="ventaja-item">
          <div className="cuadrado">
            <img src={ventajas1} alt="" />
          </div>
          <p>Puedes comprar con solo el 15% de cuota inicial</p>
        </div>
        <div className="ventaja-item">
          <div className="cuadrado">
            <img src={ventajas2} alt="" />
          </div>
          <p>Somos tu socio-inversionista, aportamos el porcentaje restante</p>
        </div>
        <div className="ventaja-item">
          <div className="cuadrado">
            <img src={ventajas3} alt="" />
          </div>
          <p>Tu cuota es la más baja del mercado</p>
        </div>
        <div className="ventaja-item">
          <div className="cuadrado">
            <img src={ventajas4} alt="" />
          </div>
          <p>Compra cuando quieras y a tu ritmo</p>
        </div>
        <div className="ventaja-item">
          <div className="cuadrado">
            <img src={ventajas5} alt="" />
          </div>
          <p>
            ¡No es deuda!, cuando quieras puedes retirarte, te devolvemos tu
            participación
          </p>
        </div>
        <div className="ventaja-item">
          <div className="cuadrado">
            <img src={ventajas6} alt="" />
          </div>
          <p>
            ¡Estás seguro! Tu inversión y tu dinero lo administra Acción
            Fiduciaria
          </p>
        </div>
      </div>
    </>
  );
}

export default Ventajas;
