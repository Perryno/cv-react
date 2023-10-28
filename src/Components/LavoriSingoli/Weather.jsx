import React, { useState } from "react";
import weather from "../../Assets/Weather.png";

const Weather = ({ darkMode }) => {
  const [buttonsEnabled, setButtonsEnabled] = useState(false);

  const enableButtonsWithDelay = () => {
    // Abilita i bottoni dopo un ritardo di 10ms
    setTimeout(() => {
      setButtonsEnabled(true);
    }, 10);
  };

  const disableButtons = () => {
    setButtonsEnabled(false); // Disabilita i bottoni
  };
  return (
    <div className="imgBox" onMouseEnter={enableButtonsWithDelay} onMouseLeave={disableButtons}>
      <div className="overlay">
        <img className="progettoImg" src={weather} alt="weather app" id="immagineBox" />
        <div className={`text ${darkMode ? "dark-mode-testo-bianco" : ""}`}>Weather App</div>
        <div className={`banner demo ${darkMode ? "dark-mode-testo-bianco" : ""}`}>DEMO</div>
        <div className="buttonsBox">
          <a
            className={`demoButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            }`}
            href="https://meteo-react-liart.vercel.app/"
          >
            Demo
          </a>
          <a
            className={`codeButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            } `}
            href="https://github.com/Perryno/meteo-react"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Weather;
