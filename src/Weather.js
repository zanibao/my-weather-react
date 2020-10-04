import React, { useState } from "react";
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
          13°C
        </div>
        <div className="col-6">
          <ul>
            <li>
              <FontAwesomeIcon icon={faWind} className="fas" /> 37km/h
            </li>
            <li>
              <FontAwesomeIcon icon={faTint} className="fas" /> 74%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}