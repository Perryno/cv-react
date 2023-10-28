import React from "react";
import cvGrafico from "../Assets/cv/CV - Andrea Caforio.pdf";
import cvEuropass from "../Assets/cv/CV - Andrea Caforio EP.pdf";
function MyNav({ darkMode }) {
  return (
    <div id="myNav" className="row cvDownloader ">
      <a
        href={cvGrafico}
        download="CV - Andrea Caforio.pdf"
        className={`col-6 cvGrafico ${darkMode ? "dark-mode-cvGrafico" : ""}`}
      >
        CV grafico
      </a>

      <a href={cvEuropass} download="CV - Andrea Caforio EP.pdf" className="col-6 cvEuropass">
        CV Europass
      </a>
    </div>
  );
}

export default MyNav;
