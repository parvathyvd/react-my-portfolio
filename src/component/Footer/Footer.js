import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__copyright">
        <small>
          &copy;{date} All Rights Reserved. Developed by{" "}
          <a className="text-white" href="https://github.com/parvathyvd">
            Parvathy Vazhoor
          </a>
        </small>
        <br />
        <small>
          604-358-3962 |{" "}
          <a className="text-white" href="mailto">
            parvathyvd@gmail.com
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
