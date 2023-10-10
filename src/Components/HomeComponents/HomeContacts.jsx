import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function HomeContacts() {
  return (
    <div className="homeContacts">
      <div className="mb-1">
        <div className="preContact d-inline">
          {" "}
          <BsFillTelephoneFill className="text-success" id="telephoneIcon" /> Tel:&nbsp;
          <a className="linkColor" href="tel:4381159134">
            3481159134
          </a>
        </div>{" "}
      </div>
      <div className="mb-1">
        {" "}
        <div className="preContact d-inline">
          <MdOutlineEmail id="emailIcon" />
          Email:
        </div>{" "}
        <a className="linkColor" href="mailto:andreacaforio74@gmail.com">
          andreacaforio74@gmail.com
        </a>
      </div>
      <div className="homeLinks">
        <a href="https://www.linkedin.com/in/andrea-caforio-8072a0247/">
          <BiLogoLinkedin className="hoverLink linkedinHover" />
        </a>
        <a href="https://github.com/Perryno">
          <AiFillGithub className="hoverLink" />
        </a>
      </div>
    </div>
  );
}

export default HomeContacts;
