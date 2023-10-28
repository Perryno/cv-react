import React from "react";

import Estremo from "./LavoriSingoli/Estremo";
import Netflix from "./LavoriSingoli/Netflix";
import Weather from "./LavoriSingoli/Weather";
import Quiz from "./LavoriSingoli/Quiz";

function Lavori({ darkMode }) {
  return (
    <div>
      <div className={`mieiProgetti ${darkMode ? "dark-mode-testo" : ""}`}>Alcuni dei miei progetti:</div>
      <div>
        <div className="progetti row">
          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Estremo darkMode={darkMode} />
          </div>

          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Weather darkMode={darkMode} />
          </div>

          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Netflix darkMode={darkMode} />
          </div>

          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Quiz darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lavori;
