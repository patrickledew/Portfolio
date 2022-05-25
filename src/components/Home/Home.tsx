import * as React from "react";

import "./Home.scss";

import JaxImg from "../res/jax.jpg";
import AboutSection from "./AboutSection";
import InterestsSection from "./InterestsSection";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  
  return (
    <div className="page home">
      <div className="content">
        <div className="section intro">
          <div className="hero">
            <h1>Patrick LeDew</h1>
            <h2 className="text-muted">
              A computer science student in Jacksonville, Florida interested in programming and web development
            </h2>
          </div>
          <div className="icons">
            <div>
              <a
                href="https://www.linkedin.com/in/patrick-ledew/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-5x fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/patrickledew"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-5x fa-github-square"></i>
              </a>
            </div>
          </div>
        </div>
        <AboutSection />
        <InterestsSection />
      </div>
    </div>
  );
};

export default Home;
