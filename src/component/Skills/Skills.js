import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What skills I have</h5>
      <h2>My skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Languages</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>HTML5</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage html">&nbsp;</span>
              </div>
            </article>
            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>CSS3</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage css">&nbsp;</span>
              </div>
            </article>
            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>Bootstrap</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage bootstrap">&nbsp;</span>
              </div>
            </article>
            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>JS</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage js">&nbsp;</span>
              </div>
            </article>
            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>PHP</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage php">&nbsp;</span>
              </div>
            </article>
            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>React</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage react">&nbsp;</span>
              </div>
            </article>

            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>WordPress</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage wordpress">&nbsp;</span>
              </div>
            </article>
            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>CodeIgniter</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage codeigniter">&nbsp;</span>
              </div>
            </article>

            <article className="skills__details">
              <div className="tech">
                <BsPatchCheckFill className="exp__icon" />
                <h4>MySQL</h4>
              </div>
              <div className="fill-container">
                <span className="fill-percentage mysql">&nbsp;</span>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__tools">
          <h3>Tools</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />
              <div className="fill-container">
                <h4>Npm, Webpack</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>Lucidchart</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>Asana</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>Git, Github</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>VSC, Phpstorm</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>Mailchimp</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>Google Search Console</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>Godaddy, Hostgator</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />

              <div className="fill-container">
                <h4>Flywheel</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="exp__icon" />
              <div className="fill-container">
                <h4>Mailchimp</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
