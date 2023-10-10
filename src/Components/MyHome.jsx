import React from "react";

import laptopImg from "../Assets/laptop.png";
import HomeContacts from "./HomeComponents/HomeContacts";

function MyHome() {
  return (
    <div>
      <div id="home" className="row">
        <div className="leftHome col-sm-6">
          <h1 id="name">
            <div>Andrea</div>
            <div className="ms-4 ">Caforio</div>
          </h1>
          <h2 className="role">Junior Full Stack Developer</h2>
        </div>
        <div className="rightHome col-sm-6">
          <img src={laptopImg} alt="laptop" />
        </div>
      </div>
      <HomeContacts />
    </div>
  );
}

export default MyHome;
