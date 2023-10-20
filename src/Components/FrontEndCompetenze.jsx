import { React, useState, useCallback } from "react";

import { FaSass, FaBootstrap } from "react-icons/fa";

import { BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoRedux, BiLogoCss3 } from "react-icons/bi";

function FrontEndCompetenze() {
  const [frontIsHovering, setFrontIsHovering] = useState(false);

  const [whichIsHovering, setWhichIsHovering] = useState(null);

  const handleMouseOver = () => {
    setFrontIsHovering(true);
  };

  const handleMouseOut = () => {
    setFrontIsHovering(false);
  };

  const handleHovering = (logoName) => {
    setWhichIsHovering(logoName);
  };

  const mouseOver = useCallback((logoName) => {
    handleHovering(logoName);
    handleMouseOver();
  }, []);

  const hideOrNot = (logoName) => {
    if (whichIsHovering === logoName) {
      return "show";
    } else {
      return "hide";
    }
  };
  return (
    <div className="frontendBlock">
      <div className="allCompetenze">
        <div className="leMieComp">Le mie competenze:</div>
        <div
          className={`frontEndSkills box
        ${frontIsHovering ? "expanded" : "notExpanded"} `}
        >
          <div className="typeContainer">
            <div className="skillsType">Frontend:</div>
            <div className="skillsContainer">
              <div className="iconSpan">
                <BiLogoHtml5
                  id="html5"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("HTML5")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />

                <span className={hideOrNot("HTML5")}>HTML5</span>
              </div>

              <div className="iconSpan">
                <BiLogoCss3
                  id="css"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("CSS")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("CSS")}>CSS</span>
              </div>
              <div className="iconSpan">
                <BiLogoJavascript
                  id="js"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("Javascript")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("Javascript")}>JavaScript</span>
              </div>
              <div className="iconSpan">
                <BiLogoReact
                  id="react"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("React")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("React")}>React</span>
              </div>
              <div className="iconSpan">
                <BiLogoRedux
                  id="redux"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("Redux")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("Redux")}>Redux</span>
              </div>

              <div className="iconSpan">
                <FaBootstrap
                  id="bootstrap"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("Bootstrap")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("Bootstrap")}>Bootstrap</span>
              </div>
              <div className="iconSpan">
                <FaSass
                  id="sass"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("SASS")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("SASS")}>SASS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontEndCompetenze;