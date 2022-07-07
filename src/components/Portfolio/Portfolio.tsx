import React, { useState } from "react";
import Intro from "../shared/Intro";
import "./portfolio.scss";
import SeisThumbnail from "../../res/seis-game-thumbnail.png";
import BigThumbnail from "../../res/big-thumbnail-home.png";
import SaturnThumbnail from "../../res/saturn-thumbnail.png";
import VitoThumbnail from "../../res/vito-thumbnail.png";
import { motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

const Portfolio: React.FC = () => {
  return (
    <motion.div
      className="page portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ bounce: false, ease: "linear", duration: 0.2 }}
    >
      <div className="content">
        <Intro
          title="Portfolio"
          sub="A list of all the websites, projects, and fun stuff I've made over the years."
        />

        <div className="section projects">
          <div className="section-content">
            <h1>Websites</h1>
          </div>
          <div className="project-container">
            <ProjectInfo thumbnail={VitoThumbnail}>
              <h2>
                <a href="https://www.vitovitals.org/" target={"_blank"}>
                  Vito <i className="fa-solid fa-link"></i>
                </a>
              </h2>

              <p>
                Vito is an app developed by UNF students designed to provide
                early detection of stress caused by illness using biometric
                data.
              </p>
              <p>
                To help this effort, I volunteered to lead the development of a
                website to promote and inform users about the project.
              </p>

              <div className="tech-list">
                <strong>Technologies Used:</strong>
                <ul>
                  <li>
                    <strong>Typescript</strong>
                  </li>
                  <li>
                    <strong>React</strong>
                  </li>
                  <li>
                    <strong>NodeJS</strong>
                  </li>

                  <li>
                    <strong>CSS</strong>
                  </li>
                </ul>
              </div>
            </ProjectInfo>
            <ProjectInfo thumbnail={SeisThumbnail} reversed>
              <h2>
                <a href="https://seis-client.vercel.app/" target={"_blank"}>
                  Seis <i className="fa-solid fa-link"></i>
                </a>
              </h2>

              <p>
                Seis is a simple and fun card-matching game I developed to allow
                friends to join lobbies and play their favorite card game
                together, online, anytime.
              </p>
              <p>
                Building this was a months-long endeavor, and required me to
                challenge myself in both backend and frontend work.
              </p>
              <p>
                The frontend is made in React, with Material UI being used for
                the landing page/lobby menu and the game UI itself being styled
                with custom CSS.
              </p>
              <p>
                The backend is written in Typescript and uses a combination of
                Express and Socket.io in order to achieve persistent real-time
                communication with the game server.
              </p>
              <div className="tech-list">
                <strong>Technologies Used:</strong>
                <ul>
                  <li>
                    <strong>Typescript</strong>
                  </li>
                  <li>
                    <strong>React</strong>
                  </li>
                  <li>
                    <strong>NodeJS</strong>
                  </li>
                  <li>
                    <strong>Material UI</strong>
                  </li>
                  <li>
                    <strong>Express</strong>
                  </li>
                  <li>
                    <strong>Socket.io</strong>
                  </li>

                  <li>
                    <strong>CSS</strong>
                  </li>
                </ul>
              </div>
            </ProjectInfo>
            <ProjectInfo thumbnail={BigThumbnail}>
              <h2>
                <a href="https://www.bigentertainmentyt.com" target={"_blank"}>
                  BIG Entertainment <i className="fa-solid fa-link"></i>
                </a>
              </h2>

              <p>
                This is a website I created for a group of content creators in
                Battle Creek, Michigan. This challenged me not only in
                code-writing, but in my ability to come up with a design and
                iterate based on client feedback.
              </p>
              <p>
                The frontend is made using React and Bootstrap, and is served by
                an Express backend.
              </p>
              <div className="tech-list">
                <strong>Technologies Used:</strong>
                <ul>
                  <li>
                    <strong>Javascript</strong>
                  </li>
                  <li>
                    <strong>React</strong>
                  </li>
                  <li>
                    <strong>NodeJS</strong>
                  </li>
                  <li>
                    <strong>Bootstrap 4</strong>
                  </li>
                  <li>
                    <strong>Express</strong>
                  </li>
                  <li>
                    <strong>CSS</strong>
                  </li>
                </ul>
              </div>
            </ProjectInfo>
            <ProjectInfo thumbnail={SaturnThumbnail} reversed>
              <h2>
                <a href="http://www.saturn9944.com" target={"_blank"}>
                  SATURN Robotics Club <i className="fa-solid fa-link"></i>
                </a>
              </h2>

              <p>
                In high school, I participated in the{" "}
                <a
                  href="https://www.firstinspires.org/robotics/ftc"
                  target="_blank"
                >
                  FIRST Tech Challenge
                </a>
                , an international robotics competition for middle and high
                school students. During my time on the team I was responsible
                for helping program our robot, document our progress over the
                season, and lead the development of our team's website.
              </p>
              <p>
                The first iteration of the website served as a tool to help
                students learn and experiment with web development. Although I'd
                already tinkered with HTML and CSS, this was the first time I
                was exposed to frameworks like React and Bootstrap. (Our team
                even experimented with a login system using MongoDB, but that's
                been long since removed.)
              </p>
              <p>
                Shortly before I graduated the team, I rebuilt the entire
                website from the ground up to be more responsive, polished, and
                informative.
              </p>
              <div className="tech-list">
                <strong>Technologies Used:</strong>
                <ul>
                  <li>
                    <strong>React</strong>
                  </li>
                  <li>
                    <strong>NodeJS</strong>
                  </li>
                  <li>
                    <strong>Bootstrap 4</strong>
                  </li>
                  <li>
                    <strong>Express</strong>
                  </li>
                  <li>
                    <strong>CSS</strong>
                  </li>
                </ul>
              </div>
            </ProjectInfo>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
