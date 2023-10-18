import React from "react";
import Epicode from "../Assets/certificazioneEPICODE.svg";
import Pekit from "../Assets/immaginePekit.jpg";
import pdfPekit from "../Assets/CertificazionePEKITEXPERT.pdf";
function Certificazioni() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 certificazione-box">
        <a href={pdfPekit} download="CertificazionePEKITEXPERT.pdf">
          <img className="certificazione-image s" src={Pekit} alt="Certificazione Pekit" />
        </a>
      </div>
      <div className="col-sm-12 col-md-6 certificazione-box">
        <a href={Epicode} download="CertificazioneEpicode.svg">
          <img className="certificazione-image a" src={Epicode} alt="Certificazione EPICODE" />
        </a>
      </div>
    </div>
  );
}

export default Certificazioni;
