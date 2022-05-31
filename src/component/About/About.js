import React from "react";
import "./About.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>skills</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Worked as</h5>
              <small>Web Developer</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>
            {" "}
            I am a web developer specializing in Front end development. skillsd
            with all stages of the development cycle for dynamic web projects.
            Well-versed in numerous programming languages including HTML, CSS,
            Bootstrap, PHP(Codeigniter) and Vanila Javascript(Jquery,React).
            Strong background in Wordpress web development and design.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:parvathyvd@gmail.com"
            className="btn btn-primary"
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
