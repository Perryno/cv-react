import React from "react";

import laptopImg from "../Assets/laptop.png";
import HomeContacts from "./HomeComponents/HomeContacts";

function MyHome() {
  return (
    <div>
      <div id="home" className="row mb-4">
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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia ab temporibus vitae autem recusandae
            deserunt quas, officia enim error dolores inventore asperiores officiis nisi sequi illo labore. Temporibus,
            aspernatur!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quibusdam fugiat
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHome;
