import React, { useState } from "react";
import axios from "axios";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  const [city, setCity] = useState(props.city);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  let apiKey = `0503e41c953380663dd93b4d5f81edfb`;
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function handleSubmit(event) {
    event.preventDefault();

    axios.get(url).then(showWeather);
  }

  function updatePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function updatePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(updatePosition);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form className="row" id="search-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              onChange={updateCity}
              className="form-control"
              autofocus="on"
              autocomplete="off"
              id="city-input"
            />
          </div>
          <div className="col-1">
            <input type="submit" value="Search" className="search-button" />
          </div>

          <div className="col-1">
            <button
              className="current-button"
              type="submit"
              value="Current"
              onClick={getLocation}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="fas" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-6">
            <h1 id="city">{weather.city}</h1>
            <ul>
              <li className="date"></li>
              <li id="description">{weather.description}</li>
              <li id="temperature">{Math.round(weather.temperature)}°C</li>
              <li id="wind">Wind: {Math.round(weather.wind)}km/h</li>
              <li id="humidity">Humidity: {weather.humidity}%</li>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
            </ul>
          </div>
        </div>
        <Forecast city={weather.city} />
      </div>
    );
  } else {
    return form;
  }
}
