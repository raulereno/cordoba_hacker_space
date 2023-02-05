import React, { useState } from "react";
import CardJobs from "./CardJobs/CardJobs";
import "./jobs.scss";

const initialJobs = [
  {
    id: 1,
    title: "FARADAY",
    description: "Dev, Support, Pentest and Research",
    link: "https://faradaysec.zohorecruit.com/jobs/Careers",
  },
  {
    id: 2,
    title: "ONAPSIS",
    description: "Devops, QA, Test, SAP and Research",
    link: "https://grnh.se/d39ea1802",
  },
  {
    id: 3,
    title: "NARANJA",
    description: "Devops, Appsec and Networking",
    link: "https://naranja.hiringroom.com/jobs",
  },
  {
    id: 4,
    title: "PUNTO NET SOLUCIONES",
    description: "Pentest and Appsec",
    link: "rrhh@puntonetsoluciones.com.ar",
  },
  {
    id: 5,
    title: "MONI",
    description: "Android dev and Security",
    link: "rrhh@moni.com.ar",
  },
  {
    id: 6,
    title: "GALICIA",
    description: "Bank Security",
    link: "https://career19.sapsf.com/sfcareer/jobreqcareerpvt?jobId=463&company=bancodegal&st=9DF2AED347CDA8BD91CB229510D860E9522F7C56",
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <div id="container_jobs">
      <h2>HUB DE EMPRESAS QUE BUSCAN ESPECIALISTAS EN SEGURIDAD</h2>
      <h3>APLICA EN LAS SIGUIENTES BÚSQUEDAS</h3>
      <div id="jobs">
        {jobs.map((job) => {
          return (
            <CardJobs
              key={job.id}
              title={job.title}
              description={job.description}
              link={job.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
