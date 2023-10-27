import React from "react";

import laptopImg from "../Assets/laptop.png";
import HomeContacts from "./HomeComponents/HomeContacts";

function MyHome() {
  return (
    <div>
      <div id="home" className="row mb-5">
        <div className="leftHome col-sm-6">
          <div className="mb-4">
            <h1 id="name">
              <div>Andrea</div>
              <div className="ms-4 ">Caforio</div>
            </h1>
            <h2 className="role">Junior Full Stack Developer</h2>
          </div>
          <HomeContacts />
        </div>
        <div className="rightHome col-sm-6 flex-column">
          <img src={laptopImg} alt="laptop" />
          <div className="descrizioneMia">
            Mi chiamo Andrea Caforio, ho 21 anni e sono nato a Vigevano, la città della piazza Ducale. Sin da piccolo ho
            avuto la passione per l'informatica e i suoi device, sconfinando spesso in primitivi e improbabili
            hackeraggi (facevo il root per il telefono android e il jailbreak per l' iPhone... ). Con i soldi ricevuti
            per il mio diciottesimo compleanno ho assemblato il mio primo computer e programmare, adesso, è la mia
            passione, da trasformare nel mio nuovo futuro lavorativo!
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHome;
