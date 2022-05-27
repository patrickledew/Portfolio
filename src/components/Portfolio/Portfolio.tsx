import React from "react";
import Intro from "../shared/Intro";
import "./portfolio.scss";

import { motion } from "framer-motion";
const Portfolio: React.FC = () => {
  return (
    <motion.div
      className="page portfolio"
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ bounce: false, ease: "anticipate", duration: 1.2 }}
    >
      <div className="content">
        <Intro
          title="Portfolio"
          sub="A list of all the websites, projects, and fun stuff I've made over the years."
        />
        <div className="section projects">
          <div className="section-content move ">
            <h1>Projects</h1>
            <p>(A list of projects)</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
