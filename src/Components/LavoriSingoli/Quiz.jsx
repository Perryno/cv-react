import React, { useState } from "react";
import quiz from "../../Assets/quiz-screen.png";

const Quiz = ({ darkMode }) => {
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
        <img className="progettoImg" src={quiz} alt="Quiz EPICODE" id="immagineBox" />
        <div className={`text ${darkMode ? "dark-mode-testo-bianco" : ""}`}>Quiz EPICODE</div>
        <div className={`banner demo ${darkMode ? "dark-mode-testo-bianco" : ""}`}>DEMO</div>
        <div className="buttonsBox">
          <a
            className={`demoButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            }`}
            href="https://quiz-epicode.vercel.app/"
          >
            Demo
          </a>
          <a
            className={`codeButton progettoButton ${buttonsEnabled ? "" : "disabled"} ${
              darkMode ? "dark-mode-testo-bianco" : ""
            }`}
            href="https://github.com/Perryno/quiz-EPICODE"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
