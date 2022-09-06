import React from "react";
import "./Footer.scss";
import nuestroLogo from "../../assets/nuestro-footer.png";
import emailOutline from "../../assets/email-outline.png";
import whatsapp from "../../assets/whatsapp-logo-footer.png";
function Footer() {
  return (
    <>
      <p className="little-addend">
        {" "}
        * Bono falabella Colombia por COP $500.000 redimible al cierre de compra
        del inmueble. Promoción valida hasta Diciembre 31 de 2022 <br />
        ** Las propuestas comerciales, no representa una cotización ni
        compromiso de financiamiento, está sujeto a aprobación y consulta en
        centrales de riesgos
      </p>
      <footer>
        <div className="footer-img">
          <img src={nuestroLogo} alt="" />
        </div>
        <div className="footer-data">
          <div className="footer-item">
            <div className="img">
              <img src={emailOutline} alt="" />
            </div>

            <a href="mailto:hola@nuestro.casa">hola@nuestro.casa</a>
          </div>
          <div className="footer-item">
            <div className="img">
              <img src={whatsapp} alt="" />
            </div>
            <a href="https://api.whatsapp.com/send?phone=573152559261">
              +57 (315) 255-9261
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
