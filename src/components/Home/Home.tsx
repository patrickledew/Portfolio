import React from "react";

import "./Home.scss";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ bounce: false, ease: "easeOut", duration: 0.2 }}
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
