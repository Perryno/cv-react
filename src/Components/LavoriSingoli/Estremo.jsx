import React, { useState } from "react";
import estremo from "../../Assets/estremo copertina.png";

const Estremo = ({ darkMode }) => {
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
        <img className="progettoImg" src={estremo} alt="estremo" id="immagineBox" />
        <div className={`text ${darkMode ? "dark-mode-testo-bianco" : ""}`}>ESTREMO GAMING</div>
        <div className={`banner video ${darkMode ? "dark-mode-testo-bianco" : ""}`}>VIDEO</div>
        <div className="buttonsBox">
          <a
            className={`videoButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            }`}
            href="https://www.youtube.com/watch?v=8iMSYNh2aog"
          >
            Video
          </a>
          <a
            className={`codeButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            }`}
            href="https://github.com/Perryno/estremo-frontend/tree/master"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Estremo;
