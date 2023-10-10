import React from "react";
import netflix from "../Assets/netflix.png";
function Lavori() {
  return (
    <div>
      <div>Ecco alcuni dei miei progetti:</div>
      <div>
        <div className="progetti row">
          <div className="imgBox netflixBox col-sm-12 col-md-6">
            <div className="overlay">
              <img className="progettoImg" src={netflix} alt="netflix" id="immagineBox" />
              <div className="text">Testo</div>
            </div>
          </div>

          {
            ////////////////////////////////
          }
        </div>
      </div>

      {
        //----------------------
      }
    </div>
  );
}

export default Lavori;
