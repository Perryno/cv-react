import React from "react";
import netflix from "../Assets/netflix.png";
import estremo from "../Assets/estremo copertina.png";
import weather from "../Assets/Weather.png";

function Lavori() {
  return (
    <div>
      <div className="mieiProgetti">Ecco alcuni dei miei progetti:</div>
      <div>
        <div className="progetti row">
          <div href="www.google.com" className="imgBox netflixBox col-sm-12 col-md-6 flex-grow-1">
            <div className="overlay">
              <img className="progettoImg" src={estremo} alt="estremo" id="immagineBox" />
              <div className="text">ESTREMO GAMING</div>
              <div className="banner video ">VIDEO</div>
              <div className="buttonsBox">
                <a className="videoButton progettoButton" href="https://www.youtube.com/watch?v=8iMSYNh2aog">
                  Video
                </a>
                <a className="codeButton progettoButton" href="https://github.com/Perryno/estremo-frontend/tree/master">
                  Code
                </a>
              </div>
            </div>
          </div>

          <a href="www.google.com" className="imgBox netflixBox col-sm-12 col-md-6 flex-grow-1">
            <div className="overlay">
              <img className="progettoImg" src={netflix} alt="netflix" id="immagineBox" />
              <div className="text">Bootstrap Netflix</div>
              <div className="banner demo">DEMO</div>
              <div className="buttonsBox">
                <a className="demoButton progettoButton" href="https://bootstrap-netflix-clone.vercel.app/">
                  Demo
                </a>
                <a className="codeButton progettoButton" href="https://github.com/Perryno/Bootstrap-Netflix-clone">
                  Code
                </a>
              </div>
            </div>
          </a>

          <a href="www.google.com" className="imgBox netflixBox col-sm-12 col-md-6 flex-grow-1">
            <div className="overlay">
              <img className="progettoImg" src={weather} alt="weather app" id="immagineBox" />
              <div className="text">Weather App</div>
              <div className="banner demo">DEMO</div>
              <div className="buttonsBox">
                <a className="demoButton progettoButton" href="https://meteo-react-liart.vercel.app/">
                  Demo
                </a>
                <a className="codeButton progettoButton" href="https://github.com/Perryno/meteo-react">
                  Code
                </a>
              </div>
            </div>
          </a>

          <a href="www.google.com" className="imgBox netflixBox col-sm-12 col-md-6 flex-grow-1">
            <div className="overlay">
              <img className="progettoImg" src={netflix} alt="ios calculator" id="immagineBox" />
              <div className="text">iOS Calculator</div>
              <div className="banner demo">DEMO</div>
            </div>
          </a>

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
