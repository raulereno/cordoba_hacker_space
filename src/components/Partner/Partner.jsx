import React from "react";
import "./partner.scss";

const Partner = () => {
  return (
    <div id="container_partner">
      <h2>SPONSORS</h2>
      <h4>
        ¿Te interesa ser un sponsor? Más detalles <a href="">aquí</a>
      </h4>

      <div id="partner">
        <div>
          <a
            href="https://www.faradaysec.com/"
            target="_blank"
            className="partner-box partner-box-5"
          >
            <img src="src/assets/partner-5.png" alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.artssec.com/"
            target="_blank"
            className="partner-box partner-box-3"
          >
            <img src="src/assets/partner-3.png" alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.patagoniasecurity.com/"
            target="_blank"
            className="partner-box partner-box-9"
          >
            <img src="src/assets/partner-9.png" alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.naranja.com/"
            target="_blank"
            className="partner-box partner-box-8"
          >
            <img src="src/assets/partner-8.png" alt="" />
          </a>
        </div>
        <div>
          <a
            href="http://www.fundacionsadosky.org.ar/"
            target="_blank"
            className="partner-box partner-box-7"
          >
            {" "}
            <img src="src/assets/partner-7.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
