import React, { useState } from "react";
import "./FAQ.scss";
function FAQ() {
  const [opened, setOpened] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const toggle = (position) => {
    console.log("holaa");
    let newArr = [...opened];
    newArr[position] = !newArr[position];
    setOpened(newArr);
  };
  return (
    <>
      <div className="faq-title">
        <h2>Lee preguntas que otros han tenido. Quizás puedan ayudarte</h2>
      </div>
      <div className="faq-wrapper">
        <div className="faq-item" onClick={() => toggle(0)}>
          <div className="faq-q">
            <h3>¿Quién es el dueño del apartamento?</h3>
            <div className={opened[0] ? "rotado" : ""}>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  fill="#102740"
                />
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  stroke="#1C406A"
                />
              </svg>
            </div>
          </div>
          <div className={opened[0] ? "faq-a opened" : "faq-a"}>
            El dueño del apartamento es un fideicomiso de Acción Fiduciaria.
            Como en un proyecto de preventa tu dinero y participación están
            asegurados en el encargo fiduciario
          </div>
        </div>
        <div className="faq-item" onClick={() => toggle(1)}>
          <div className="faq-q">
            <h3>¿Cuánto dura el contrato?</h3>
            <div className={opened[1] ? "rotado" : ""}>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  fill="#102740"
                />
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  stroke="#1C406A"
                />
              </svg>
            </div>
          </div>
          <div className={opened[1] ? "faq-a opened" : "faq-a"}>
            Firmas un contrato por 5 años. Sin embargo, puedes retirarte en
            cualquier momento. Nosotros venderemos el apartamento y te
            devolverémos el equivalente a tu participación acumulada en el
            apartamento menos un costo de reposicionamiento. La venta del
            apartamento puede tardar un par de meses.
          </div>
        </div>
        <div className="faq-item" onClick={() => toggle(2)}>
          <div className="faq-q">
            <h3>¿En qué momento puedo terminar de comprar mi casa?</h3>
            <div className={opened[2] ? "rotado" : ""}>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  fill="#102740"
                />
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  stroke="#1C406A"
                />
              </svg>
            </div>
          </div>
          <div className={opened[2] ? "faq-a opened" : "faq-a"}>
            En el momento que quieras durante tu arriendo de 5 años. Nuestro
            actualizará el precio de la participación restante una vez cada año
            de acuerdo a una fórmula previamente acordada. Nosotros no cambiamos
            el precio incluso si el valor de mercado del apartamento sube más.
          </div>
        </div>
        <div className="faq-item" onClick={() => toggle(3)}>
          <div className="faq-q">
            <h3>¿Qué apartamentos son elegibles?</h3>
            <div className={opened[3] ? "rotado" : ""}>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  fill="#102740"
                />
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  stroke="#1C406A"
                />
              </svg>
            </div>
          </div>
          <div className={opened[3] ? "faq-a opened" : "faq-a"}>
            Nuestro te permite comparar casi cualquier apartamento que cumpla
            con los siguientes requisitos: - Que esté dentro del presupuesto que
            aprobamos - Ubicado en Bogotá - Menos de 30 años de construido
            Compra tranquilo con tu agente inmobiliario de confianza. Si
            necesitas alguien que te ayude, te podemos poner en contacto con uno
            de nuestros aliados. Una vez encuentres el hogar de tus sueños,
            nosotros lo compraremos por ti. Así de fácil!
          </div>
        </div>
        <div className="faq-item" onClick={() => toggle(4)}>
          <div className="faq-q">
            <h3>¿Qué pasa si quiero vender mi inmueble?</h3>
            <div className={opened[4] ? "rotado" : ""}>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  fill="#102740"
                />
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  stroke="#1C406A"
                />
              </svg>
            </div>
          </div>
          <div className={opened[4] ? "faq-a opened" : "faq-a"}>
            ¡No hay problema! Cuando quieras puedes vender por encima del precio
            pactado el inmueble y ganarte la diferencia. Nosotros nos encargamos
            de todo el proceso de liquidación del fondo y del proceso de compra
            si la nueva persona quiere financiarse con nosotros.
          </div>
        </div>
        <div className="faq-item" onClick={() => toggle(5)}>
          <div className="faq-q">
            <h3>
              ¿Quién asume los costos de inspección, registro, notariado,
              impuestos, y mantenimiento?
            </h3>
            <div className={opened[5] ? "rotado" : ""}>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  fill="#102740"
                />
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  stroke="#1C406A"
                />
              </svg>
            </div>
          </div>
          <div className={opened[5] ? "faq-a opened" : "faq-a"}>
            Los costos de compra están incluidos en nuestra tarifa de
            estructuración. Los gastos del inmueble una vez vives en él los
            compartimos de acuerdo a los porcentajes de propiedad.
          </div>
        </div>
        <div className="faq-item" onClick={() => toggle(6)}>
          <div className="faq-q">
            <h3>¿Cuál es el negocio de Nuestro?</h3>
            <div className={opened[6] ? "rotado" : ""}>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  fill="#102740"
                />
                <path
                  d="M5.18068e-07 1.57399L1.18638 0.499999L6.5 5.3444L11.8136 0.5L13 1.57399L6.5 7.5L5.18068e-07 1.57399Z"
                  stroke="#1C406A"
                />
              </svg>
            </div>
          </div>
          <div className={opened[6] ? "faq-a opened" : "faq-a"}>
            Nosotros ganamos del pago de la renta del apartamento, la
            apreciación del inmueble y de una comisión cuando compras el
            inmueble. En Nuestro estamos en tu mismo equipo, solo ganamos cuando
            tú ganas.
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default FAQ;
