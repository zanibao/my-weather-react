import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Search />
          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
}
