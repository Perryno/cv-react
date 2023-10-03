import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaSass, FaBootstrap } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoRedux
} from "react-icons/bi";
function Competenze() {
  return (
    <div>
      <div>Le mie competenze:</div>
      <div>
        <AiFillHtml5 />
        <FaCss3Alt />
        <BiLogoJavascript />
        <BiLogoReact />
        <BiLogoRedux />
        <FaBootstrap />
        <FaSass />
        <BiLogoTypescript />
        <BiLogoJava />
        <BiLogoSpringBoot />
        <BiLogoPostgresql />
        <BsGit />
      </div>
    </div>
  );
}

export default Competenze;
