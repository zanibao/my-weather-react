import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <h3>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </h3>
    );
  } else {
    let apiKey = `0503e41c953380663dd93b4d5f81edfb`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature);

    return <p>Loading temperature for {props.city}...</p>;
  }
}
