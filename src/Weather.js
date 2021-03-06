import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Loader from 'react-loader-spinner';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      tempmax: Math.round(response.data.main.temp_max),
      tempmin: Math.round(response.data.main.temp_min),
    });
  }

  function search() {
    const apiKey = `0503e41c953380663dd93b4d5f81edfb`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updatePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0503e41c953380663dd93b4d5f81edfb&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(updatePosition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather">
          <form className="row" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-large">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                  autoComplete="off"
                  id="city-input"
                  onChange={handleCityChange}
                />
              </div>

              <div className="col">
                <button className="search-button" type="submit" value="Search">
                  <FontAwesomeIcon icon={faSearch} className="fas" />
                </button>
              </div>

              <div className="col">
                <button
                  className="current-button"
                  type="submit"
                  value="Current"
                  onClick={getLocation}
                >
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="fas" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
         type="ThreeDots"
         color="#18b1a7"
         height={100}
         width={100}
         timeout={3000} 
         />
    );
  }
}
