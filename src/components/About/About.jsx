import React from "react";
import "./about.scss";
const About = () => {
  return (
    <section id="container_about">
      <div id="about">
        <h2>ACERCA DE NOSOTROS</h2>
        <p>
          Primer HackerSpace en Córdoba, Argentina. Talleres, charlas, proyectos
          abiertos, CTFs y mucho más.
        </p>
        <p>
          Los primeros pasos del hackerspace estan acompañados por Antonella
          DeCaroDelgado, Carlos Garay, Joaquin Rodríguez Varela, Fernando
          Patrito y Marcos Oviedo
        </p>

        <ul>
          <li>
            <span>
              Seguinos en
              <a
                target="_blank"
                href="https://www.instagram.com/cordobahackerspace/"
              >
                Instagram
              </a>
            </span>
          </li>
          <li>
            <span>
              Seguinos en
              <a target="_blank" href="https://twitter.com/cbahackerspace">
                Twitter
              </a>
            </span>
          </li>
          <li>
            <span>
              Conectate a nuestro slack
              <a
                target="_blank"
                href="https://join.slack.com/t/cordobahackerspace/shared_invite/zt-1omuhwvdv-iRaYFt20CdV~VDO8Rlzi8A"
              >
                Cordobahackerspace
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div id="goal">
        <h3>QUÉ OBJETIVOS PERSEGUIMOS?</h3>
        <p>
          Nosotros creemos que un hackerspace es una fuente de educación y
          colaboración dentro de la seguridad informatica, contribuyendo al
          desarrollo de esta área de conocimiento. Las actividades del
          hackerspace se realizan con un espíritu de compartir información y de
          diseminar el conocimiento. Esto permite que el campo de la Seguridad
          Informática crezca, se desarrolle y continúe su camino hacia la
          excelencia del conocimiento.
        </p>
        <ul>
          <li>Aprender de expertos en Seguridad Informática</li>
          <li>Conectar y conocer la comunidad infosec local</li>
          <li>Participar de diferentes eventos!</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
