import React from "react";
import netflix from "../Assets/netflix.png";
function Lavori() {
  return (
    <div>
      <div>Ecco alcuni dei miei progetti:</div>
      <div className="progetti">
        <div className="netflixBox box">
          <img src={netflix} alt="netflix" />
        </div>
        <div>lavoro</div>
        <div>e lavoro</div>
      </div>
    </div>
  );
}

export default Lavori;
