import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Sunday 14:00",
      temperature: Math.round(response.data.main.temp),
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      tempmax: Math.round(response.data.main.temp_max),
      tempmin: Math.round(response.data.main.temp_min),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-4">
            <h1>{weatherData.city}</h1>
            <p>{weatherData.date}</p>
          </div>
          <div className="col-4">
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">°C | °F</span>
          </div>
          <div className="col-4">
            <img src={weatherData.icon} alt={weatherData.description} />
            <p className="text-capitalize">{weatherData.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p className="wind">
              <FontAwesomeIcon icon={faWind} className="fasWind" /> Wind ={" "}
              {weatherData.wind}
              km/h
            </p>
          </div>
          <div className="col-4">
            <p className="humidity">
              <FontAwesomeIcon icon={faTint} className="fasHumidity" /> Humidity
              = {weatherData.humidity}%
            </p>
          </div>
          <div className="col-4">
            <p className="highlow">
              <FontAwesomeIcon
                icon={faTemperatureHigh}
                className="fasTemperatureHigh"
              />{" "}
              H: {weatherData.tempmax}° /{" "}
              <FontAwesomeIcon
                icon={faTemperatureLow}
                className="fasTemperatureLow"
              />{" "}
              L: {weatherData.tempmin}°
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `0503e41c953380663dd93b4d5f81edfb`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
