import React from "react";
import Intro from "../shared/Intro";
import "./portfolio.scss";

const Portfolio: React.FC = () => {
  return (
    <div className="page portfolio">
      <div className="content">
        <Intro
          title="Portfolio"
          sub="A list of all the websites, projects, and fun stuff I've made over the years."
        />
      </div>
    </div>
  );
};

export default Portfolio;
