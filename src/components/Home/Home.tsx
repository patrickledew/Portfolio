import * as React from "react";

import "./home.scss";

import JaxImg from "../res/jax.jpg";
import AboutSection from "./AboutSection";
import InterestsSection from "./InterestsSection/InterestsSection";
import Navigation from "../shared/Navigation";
import Intro from "../shared/Intro";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="page home">
      <div className="content">
        <Intro
          title="Patrick LeDew"
          sub="A computer science student in Jacksonville, Florida interested in programming and web development"
        />
        <AboutSection />
        <InterestsSection />
      </div>
    </div>
  );
};

export default Home;
