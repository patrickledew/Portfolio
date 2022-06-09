import React, { useState } from "react";
import Intro from "../shared/Intro";
import "./portfolio.scss";
import SeisThumbnail from "../../res/seis-game-thumbnail.png";
import { motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

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
          <div className="section-content">
            <h1>Projects</h1>
            <p>(A list of projects)</p>
          </div>
          <div className="project-container">
            <ProjectInfo thumbnail={SeisThumbnail}>
              <h2>Seis</h2>
              <p>
                Seis is a simple and fun card-matching game I developed to allow
                friends to join lobbies and play their favorite card game
                together, online, anytime.
              </p>
              <p></p>
              <a href="https://seis-client.herokuapp.com/" target="_blank">
                Link
              </a>
            </ProjectInfo>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
