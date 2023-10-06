import React from "react";

import { FaCss3Alt, FaSass, FaBootstrap } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { useState } from "react";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoRedux
} from "react-icons/bi";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useCallback } from "react";

function Competenze() {
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

  return (
    <div>
      <div className="allCompetenze">
        <div>Le mie competenze:</div>
        <div className={`frontEndSkills box ${frontIsHovering ? "expanded" : ""}`}>
          <div className="typeContainer">
            <div className="skillsType">Frontend:</div>
            <div className="skillsContainer">
              <BiLogoHtml5
                id="html5"
                className="skillIcon"
                onMouseOver={() => mouseOver("HTML5")}
                onMouseOut={() => {
                  handleMouseOut();
                  handleHovering(null);
                }}
              />

              <FaCss3Alt
                id="css"
                className="skillIcon"
                onMouseOver={() => mouseOver("CSS")}
                onMouseOut={() => {
                  handleMouseOut();
                  handleHovering(null);
                }}
              />
              <BiLogoJavascript
                id="js"
                className="skillIcon"
                onMouseOver={() => mouseOver("Javascript")}
                onMouseOut={() => {
                  handleMouseOut();
                  handleHovering(null);
                }}
              />
              <BiLogoReact
                id="react"
                className="skillIcon"
                onMouseOver={() => mouseOver("React")}
                onMouseOut={() => {
                  handleMouseOut();
                  handleHovering(null);
                }}
              />
              <BiLogoRedux
                id="redux"
                className="skillIcon"
                onMouseOver={() => mouseOver("Redux")}
                onMouseOut={() => {
                  handleMouseOut();
                  handleHovering(null);
                }}
              />
              <FaBootstrap
                id="bootstrap"
                className="skillIcon"
                onMouseOver={() => mouseOver("Bootstrap")}
                onMouseOut={() => {
                  handleMouseOut();
                  handleHovering(null);
                }}
              />
              <FaSass
                id="sass"
                className="skillIcon"
                onMouseOver={() => mouseOver("SASS")}
                onMouseOut={() => {
                  handleMouseOut();
                  handleHovering(null);
                }}
              />
            </div>
          </div>
          {frontIsHovering ? <div>{whichIsHovering}</div> : ""}
        </div>
        <div className="backEndSkills box">
          <div className="skillsType">Backend:</div>
          <div className="skillsContainer">
            <BiLogoTypescript />
            <BiLogoJava />
            <BiLogoSpringBoot />
            <BiLogoPostgresql />
          </div>
        </div>
        <div className="altro box">
          <div className="skillsType"> Altro:</div>
          <div className="skillsContainer">
            {" "}
            <BsGit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competenze;
