import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/rock-paper.png";
import IMG2 from "../../assets/crowd-funding.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/todo.png";
import IMG5 from "../../assets/job-filter.png";
import IMG6 from "../../assets/rest-api.png";
import IMG7 from "../../assets/space.png";
import IMG8 from "../../assets/brikers.png";
import IMG9 from "../../assets/rwd.png";
import IMG10 from "../../assets/rst.png";
import IMG11 from "../../assets/yp.png";
import IMG12 from "../../assets/f4l.png";
import IMG13 from "../../assets/gd.png";
import IMG14 from "../../assets/nexter.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "React Rock paper scissor game",
      github:
        "https://github.com/parvathyvd/react-rock-paper-scissor-frontendmentor",
      demo: "https://react-js-rock-paper-scissor.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "React Crowd Funding Webpage",
      github: "https://github.com/parvathyvd/react-crowdfunding",
      demo: "https://react-crowdfunding.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "React Calculator with toggling themes",
      github: "https://github.com/parvathyvd/react-calculator-theme-toggle",
      demo: "https://react-calculator-theme-toggle.netlify.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "React Todo app with filter",
      github: "https://github.com/parvathyvd/React-todo-filter-context",
      demo: "https://react-app-todo-filter.netlify.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "React job filtering",
      github: "https://github.com/parvathyvd/React-Job-listings-with-filtering",
      demo: "https://react-js-job-filtering.netlify.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "React Rest API Countries",
      github: "https://github.com/parvathyvd/React-Rest-API-Countries",
      demo: "https://react-js-rest-countries-api.netlify.app/",
    },
    {
      id: 7,
      image: IMG7,
      title: "React Space Tourism Website",
      github: "https://github.com/parvathyvd/React-space-tourism-website",
      demo: "https://react-space-tourism-frontendmentor.netlify.app/",
    },
    {
      id: 8,
      image: IMG8,
      title: "Brikers Website",
      demo: "https://www.brikers.com/",
    },
    {
      id: 9,
      image: IMG9,
      title: "RealWordPressDevelopement Website",
      demo: "https://realwordpressdevelopment.com/",
    },
    {
      id: 10,
      image: IMG10,
      title: "RST Website",
      demo: "https://rstinstruments.com/",
    },
    {
      id: 11,
      image: IMG11,
      title: "Life Canada",
      demo: "https://lifecanada.org/",
    },
    {
      id: 12,
      image: IMG13,
      title: "Gd Website",
      demo: "https://www.globaldisciples.ca/",
    },
    {
      id: 13,
      image: IMG12,
      title: "Foundation for living",
      demo: "https://foundations4living.ca/",
    },
    {
      id: 14,
      image: IMG14,
      title: "Nexter",
      demo: "https://realwordpressdevelopment.com/grid-project/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((dat, index) => {
          return (
            <article
              className="portfolio__item animation"
              key={index}
              data-aos="zoom-in"
            >
              <div className="portfolio__item-image">
                <img src={dat.image} alt={dat.title} />
              </div>
              <h3>{dat.title}</h3>
              <div className="portfolio__item-cta">
                {dat.github && (
                  <a
                    href={dat.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                <a
                  href={dat.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
