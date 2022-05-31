import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDribbbleSquare } from "react-icons/ai";
import { AiFillCodepenCircle } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/parvathyvd" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://codepen.io/parvathyvd" target="_blank" rel="noreferrer">
        <AiFillCodepenCircle />
      </a>
      <a
        href="https://www.frontendmentor.io/profile/parvathyvd"
        target="_blank"
        rel="noreferrer"
      >
        <SiFrontendmentor />
      </a>
      <a
        href="https://www.linkedin.com/in/parvathy-vazhoor/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocial;
