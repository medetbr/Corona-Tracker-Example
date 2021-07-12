import React from "react";

import "./CSS/Card.css";

import CountUp from "react-countup";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
      return (
          <div className="d-flex justify-content-center">
              <h3> Loading...</h3>
             </div>
      )
      
      
  }

  return (
      <div className="row row-cols-1 row-cols-md-4  justify-content-center g-4">
          <div className="col">
      <div className="card infected">
        <div className="card-body">
          <h4 className="card-title text-muted">Infected</h4>
          <h3 className="card-title ">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={1.5}
              separator=","
            />
          </h3>

          <p className="card-text">
            <small className="text-muted">
              {new Date(lastUpdate).toDateString()}
            </small>
          </p>
        </div>
          </div>
          
          </div>
          <div className="col">
      <div className="card recoverd">
        <div className="card-body">
          <h4 className="card-title text-muted">Recoverd</h4>
          <h3 className="card-title ">
            <CountUp
              start={0}
              end={recovered.value}
              duration={1.5}
              separator=","
            />
          </h3>

          <p className="card-text">
            <small className="text-muted">
              {new Date(lastUpdate).toDateString()}
            </small>
          </p>
        </div>
          </div>
          
          </div>
          <div className="col">
      <div className="card deaths">
        <div className="card-body">
          <h4 className="card-title text-muted">Deaths</h4>
          <h3 className="card-title ">
            <CountUp
              start={0}
              end={deaths.value}
              duration={1.5}
              separator=","
            />
          </h3>

          <p className="card-text">
            <small className="text-muted">
              {new Date(lastUpdate).toDateString()}
            </small>
          </p>
        </div>
          </div>
          
          </div>
          </div>
          
  );
};
export default Cards;
