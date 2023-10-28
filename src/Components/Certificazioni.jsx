import React from "react";
import Epicode from "../Assets/certificazioneEPICODE.svg";
import Pekit from "../Assets/immaginePekit.jpg";
import pdfPekit from "../Assets/CertificazionePEKITEXPERT.pdf";

function Certificazioni({ darkMode }) {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 certificazione-box EPICODE">
        <div className="certificazione-image sfondoEpicode">
          <img src={Epicode} alt="Certificazione EPICODE" />
          <div className={` descrizione-certificazione descrizioneEpicode ${darkMode ? "dark-mode-testo-bianco" : ""}`}>
            <div>Corso Full-Stack Developer della durata di 6 mesi, per un totale di 950 ore formative.</div>
            <a href={Epicode} download="Certificazione EPICODE.svg">
              Download
            </a>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-6 certificazione-box ">
        <div className="certificazione-image sfondoPekit">
          <img src={Pekit} alt="Certificazione Pekit" />
          <div className={` descrizione-certificazione descrizionePekit  ${darkMode ? "dark-mode-testo-bianco" : ""}`}>
            <div>
              {" "}
              Corso di informatica Pekit Expert della durata di 300 ore erogato dalla Fondazione Sviluppo Europa.
            </div>
            <a href={pdfPekit} download="Certificazione PEKIT EXPERT.pdf">
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificazioni;
