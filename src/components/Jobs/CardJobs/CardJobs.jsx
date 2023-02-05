import React from "react";
import "./cardJobs.scss";

const CardJobs = ({ title, description, link }) => {
  return (
    <div className="card_job">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link}>Aplica acá</a>
    </div>
  );
};

export default CardJobs;
