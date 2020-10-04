import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [lastSearch, setLastSearch] = useState("");

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    setLastSearch(props.city);
  }

  if (loaded && props.city === lastSearch) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row card-text" id="forecast">
            <WeatherForecastPreview data={forecast.list[0]} />
            <WeatherForecastPreview data={forecast.list[1]} />
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />
            <WeatherForecastPreview data={forecast.list[4]} />
            <WeatherForecastPreview data={forecast.list[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `0503e41c953380663dd93b4d5f81edfb`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
