import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillCodepenCircle } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { useState } from "react";

const HeaderSocial = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header__socials">
      <a
        href="https://github.com/parvathyvd"
        rel="noreferrer"
        target="_blank"
        title="Github"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.frontendmentor.io/profile/parvathyvd"
        target="_blank"
        rel="noreferrer"
        title="Frontend Mentor"
      >
        <SiFrontendmentor />
      </a>
      <a
        href="https://www.linkedin.com/in/parvathy-vazhoor/"
        target="_blank"
        rel="noreferrer"
        title="Linkedin"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocial;
