import React, { useState } from "react";
import weather from "../../Assets/Weather.png";

const Weather = () => {
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
        <div className="text">Weather App</div>
        <div className="banner demo">DEMO</div>
        <div className="buttonsBox">
          <a
            className={`demoButton progettoButton ${buttonsEnabled ? "" : "disabled"}`}
            href="https://meteo-react-liart.vercel.app/"
          >
            Demo
          </a>
          <a
            className={`codeButton progettoButton ${buttonsEnabled ? "" : "disabled"}`}
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
