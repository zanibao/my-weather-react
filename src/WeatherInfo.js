import React from "react";

import FormattedDate from "./FormattedDate";

import "./WeatherInfo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h1>{props.data.city}</h1>

          <FormattedDate date={props.data.date} />
        </div>
        <div className="col-4">
          <span className="temperature">{props.data.temperature}</span>
          <span className="units">°C | °F</span>
        </div>
        <div className="col-4">
          <img src={props.data.icon} alt={props.data.description} />
          <p className="text-capitalize">{props.data.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="wind">
            <FontAwesomeIcon icon={faWind} className="fasWind" /> Wind ={" "}
            {props.data.wind}
            km/h
          </p>
        </div>
        <div className="col-4">
          <p className="humidity">
            <FontAwesomeIcon icon={faTint} className="fasHumidity" /> Humidity ={" "}
            {props.data.humidity}%
          </p>
        </div>
        <div className="col-4">
          <p className="highlow">
            <FontAwesomeIcon
              icon={faTemperatureHigh}
              className="fasTemperatureHigh"
            />{" "}
            H: {props.data.tempmax}° /{" "}
            <FontAwesomeIcon
              icon={faTemperatureLow}
              className="fasTemperatureLow"
            />{" "}
            L: {props.data.tempmin}°
          </p>
        </div>
      </div>
    </div>
  );
}
