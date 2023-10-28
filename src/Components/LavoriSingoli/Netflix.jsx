import React, { useState } from "react";
import netflix from "../../Assets/netflix.png";

const Netflix = ({ darkMode }) => {
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
        <img className="progettoImg" src={netflix} alt="netflix" id="immagineBox" />
        <div className={`text ${darkMode ? "dark-mode-testo-bianco" : ""} `}>Bootstrap Netflix</div>
        <div className={`banner demo ${darkMode ? "dark-mode-testo-bianco" : ""}`}>DEMO</div>
        <div className="buttonsBox">
          <a
            className={`demoButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            }`}
            href="https://bootstrap-netflix-clone.vercel.app/"
          >
            Demo
          </a>
          <a
            className={`codeButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            }`}
            href="https://github.com/Perryno/Bootstrap-Netflix-clone"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
