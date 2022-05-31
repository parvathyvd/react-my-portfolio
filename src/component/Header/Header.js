import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Header = ({ theme, setTheme }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Front End Developer", "WordPress Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  const onThemeClickHandler = (theme) => {
    setTheme(theme);
    console.log(theme);
  };
  return (
    <header>
      <div className="container header__container">
        <div className="theme-wrapper">
          <span className="text-vertical">theme</span>
          <input
            type="radio"
            name="theme"
            id="theme"
            checked={theme === "theme"}
            onChange={() => onThemeClickHandler("theme")}
          />
          <input
            type="radio"
            name="theme"
            id="theme1"
            checked={theme === "theme1"}
            onChange={() => onThemeClickHandler("theme1")}
          />
        </div>
        <h5>Hello I'm</h5>
        <h1>Parvathy Vazhoor</h1>
        <h4 className="text-primary">
          <span ref={el}></span>
        </h4>
        <CTA />
        <HeaderSocial />
        <a href="#portfolio" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
