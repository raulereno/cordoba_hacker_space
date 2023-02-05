import React from "react";
import "./location.scss";
import Map from "./Map/Map";

const Location = () => {
  return (
    <div id="container_location">
      <div>
        <h2>UBICACIÓN</h2>
        <h4>Ciudad Empresaria</h4>

        <p>
          <strong>Dirección:</strong>Avenida La Voz del Interior 7000, X5008
          HLD, Córdoba.
        </p>
        <p>
          <strong>Edificio: </strong>Miragolf - Primer Piso
        </p>
        <p>
          <strong>Email:</strong>info@cordobahackerspace.org
        </p>
      </div>
      <div id="container_map">
        <Map />
      </div>
    </div>
  );
};

export default Location;
