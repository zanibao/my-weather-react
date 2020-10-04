import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Amsterdam</h1>
      <ul>
        <li>Sunday 14:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
          <span className="temperature">13°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <FontAwesomeIcon icon={faWind} className="fasWind" /> Wind =
              37km/h
            </li>
            <li>
              <FontAwesomeIcon icon={faTint} className="fasHumidity" /> Humidity
              = 74%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
