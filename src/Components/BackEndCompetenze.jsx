import { React, useState, useCallback } from "react";

import { BiLogoTypescript, BiLogoPostgresql, BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";

function BackEndCompetenze({ darkMode }) {
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
    <div>
      <div className="allCompetenze">
        <div
          className={`backEndSkills box
          ${frontIsHovering ? "expanded" : "notExpanded"} `}
        >
          <div className="typeContainer">
            <div className={`skillsType backend ${darkMode ? "dark-mode-testo" : ""}`}>
              Backend<span className="skillsSpan">&nbsp;skills</span>:
            </div>
            <div className="skillsContainer">
              <div className={`iconSpan ${darkMode ? "dark-span" : ""}`}>
                <BiLogoJava
                  id="java"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("Java")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("Java")}>Java</span>
              </div>

              <div className={`iconSpan ${darkMode ? "dark-span" : ""}`}>
                <BiLogoTypescript
                  id="typescript"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("Typescript")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />

                <span className={hideOrNot("Typescript")}>Typescript</span>
              </div>

              <div className={`iconSpan ${darkMode ? "dark-span" : ""}`}>
                <BiLogoSpringBoot
                  id="spring"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("Spring")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("Spring")}>Spring</span>
              </div>
              <div className={`iconSpan ${darkMode ? "dark-span" : ""}`}>
                <BiLogoPostgresql
                  id="postgresql"
                  className="skillIcon"
                  onMouseOver={() => mouseOver("PostgreSQL")}
                  onMouseOut={() => {
                    handleMouseOut();
                    handleHovering(null);
                  }}
                />
                <span className={hideOrNot("PostgreSQL")}>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackEndCompetenze;
