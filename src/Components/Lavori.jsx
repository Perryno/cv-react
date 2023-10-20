import React from "react";

import Estremo from "./LavoriSingoli/Estremo";
import Netflix from "./LavoriSingoli/Netflix";
import Weather from "./LavoriSingoli/Weather";
import Quiz from "./LavoriSingoli/Quiz";

function Lavori() {
  return (
    <div>
      <div className="mieiProgetti">Alcuni dei miei progetti:</div>
      <div>
        <div className="progetti row">
          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Estremo />
          </div>
          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Netflix />
          </div>

          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Weather />
          </div>
          <div className="col-sm-12 col-md-6 flex-grow-1">
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lavori;
