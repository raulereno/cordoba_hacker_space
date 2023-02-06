import React, { useEffect, useState } from "react";
import CardJobs from "./CardJobs/CardJobs";
import "./jobs.scss";
import { getJobs } from "../../services/sendEmails.service";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const callGet = async () => {
    const response = await getJobs();
    console.log(response);
    setJobs(response);
  };
  useEffect(() => {
    callGet();
  }, []);

  return (
    <div id="container_jobs">
      <h2>HUB DE EMPRESAS QUE BUSCAN ESPECIALISTAS EN SEGURIDAD</h2>
      <h3>APLICA EN LAS SIGUIENTES BÚSQUEDAS</h3>
      <div id="jobs">
        {jobs &&
          jobs.map((job, i) => {
            return (
              <CardJobs
                key={i}
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
