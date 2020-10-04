import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <form className="row" id="search-form">
      <div className="form-row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Enter a city..."
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
          <button className="current-button" type="submit" value="Current">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="fas" />
          </button>
        </div>
      </div>
    </form>
  );
}
