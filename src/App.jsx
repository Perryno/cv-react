import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MyNav from "./Components/MyNav";
import MyHome from "./Components/MyHome";

import React, { useState, useEffect } from "react";

import FrontEndCompetenze from "./Components/FrontEndCompetenze";
import BackEndCompetenze from "./Components/BackEndCompetenze";
import Lavori from "./Components/Lavori";
import Certificazioni from "./Components/Certificazioni";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <MyNav />
      <button className="mt-5" onClick={toggleDarkMode}>
        {darkMode ? "Disattiva Dark Mode" : "Attiva Dark Mode"}
      </button>

      <div className="appTop">
        <div className="noNav container">
          <MyHome />
          <div className="row">
            <div className="col-xl-6 mb-5">
              <FrontEndCompetenze />
              <BackEndCompetenze />
            </div>

            <div className="col-xl-6 mb-5">
              <div className="mieiProgetti">Certificazioni:</div>
              <Certificazioni />
            </div>
          </div>
        </div>
      </div>
      <div className="appBot">
        {" "}
        <div className="container">
          {" "}
          <Lavori />
        </div>
      </div>
    </div>
  );
}

export default App;
