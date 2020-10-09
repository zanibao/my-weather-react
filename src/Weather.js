import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <h1>Amsterdam</h1>
          <p span className="lighter">
            Sunday 14:00
          </p>
        </div>
        <div className="col-4">
          <span className="temperature">13</span>
          <span className="units">°C</span>
        </div>
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
          <p span className="description">
            Cloudy
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="wind">
            <FontAwesomeIcon icon={faWind} className="fasWind" /> Wind = 37km/h
          </p>
        </div>
        <div className="col-4">
          <p className="humidity">
            <FontAwesomeIcon icon={faTint} className="fasHumidity" /> Humidity =
            74%
          </p>
        </div>
        <div className="col-4">
          <p className="highlow">H: 15° / L: 10°</p>
        </div>
      </div>
    </div>
  );
}
