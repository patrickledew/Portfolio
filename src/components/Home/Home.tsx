import * as React from "react";

import "./home.scss";

import { motion } from "framer-motion";

import JaxImg from "../res/jax.jpg";
import AboutSection from "./AboutSection";
import InterestsSection from "./InterestsSection/InterestsSection";
import Navigation from "../shared/Navigation";
import Intro from "../shared/Intro";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <motion.div
      className="page home"
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ bounce: false, ease: "anticipate", duration: 1.2 }}
    >
      <div className="content">
        <Intro
          title="Patrick LeDew"
          sub="A computer science student in Jacksonville, Florida interested in programming and web development"
        />
        <AboutSection />
        <InterestsSection />
      </div>
    </motion.div>
  );
};

export default Home;
