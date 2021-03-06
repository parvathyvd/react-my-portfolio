import React from "react";
import CV from "../../assets/Parvathy-Vazhoor.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#portfolio" className="btn btn-primary">
        Portfolio
      </a>
    </div>
  );
};

export default CTA;
