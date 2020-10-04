import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Footer from "./Footer";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="weather-app">
      <div className="container">
        <Search city="Amsterdam" />
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
