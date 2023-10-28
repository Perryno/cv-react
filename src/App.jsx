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

  useEffect(() => {
    // Controlla le preferenze dell'utente all'inizio
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDarkMode);

    // Aggiungi un listener per monitorare i cambiamenti delle preferenze
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const darkModeListener = (e) => setDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", darkModeListener);

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      darkModeMediaQuery.removeEventListener("change", darkModeListener);
    };
  }, []);

  useEffect(() => {
    // Aggiorna il tema del sito quando la modalità cambia
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <MyNav darkMode={darkMode} />

      <div className={`appTop ${darkMode ? "noWallpaper" : ""}`}>
        <div className="noNav container">
          <MyHome darkMode={darkMode} />
          <div className="row">
            <div className="col-xl-6 mb-5">
              <FrontEndCompetenze darkMode={darkMode} />
              <BackEndCompetenze darkMode={darkMode} />
            </div>

            <div className="col-xl-6 mb-5">
              <div className={`mieiProgetti ${darkMode ? "dark-mode-testo" : ""}`}>Certificazioni:</div>
              <Certificazioni darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>
      <div className={`appBot ${darkMode ? "noWallpaper" : ""}`}>
        {" "}
        <div className="container">
          {" "}
          <Lavori darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
