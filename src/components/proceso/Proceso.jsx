import React from "react";
import "./Proceso.scss";
function Proceso() {
  return (
    <>
      <div className="proceso-title">
        <h2>¿Cómo es el proceso?</h2>
      </div>
      <div className="card">
        <div className="number">1</div>
        <div className="step">Califica**</div>
        <div className="desc">
          Te evaluamos a ti y tu inmueble, en 5 días tendrás tu aprobación
        </div>
      </div>
      <div className="card">
        <div className="number">2</div>
        <div className="step">Compra</div>
        <div className="desc">
          Asegura tu inversión en la Fiduciaria y compramos de contado
        </div>
      </div>
      <div className="card">
        <div className="number">3</div>
        <div className="step">Disfruta tu casa</div>
        <div className="desc">
          Vive tu casa mientras pagas el costo financiero de nuestro porcentaje
        </div>
      </div>
      <div className="card">
        <div className="number">4</div>
        <div className="step">Compra tu casa o retírate con tus ahorros</div>
        <div className="desc">
          En cualquier momento y a tu ritmo puedes{" "}
          <span className="orange-text">comprar</span> ó{" "}
          <span className="orange-text">retirarte</span> con tu inversión
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default Proceso;
