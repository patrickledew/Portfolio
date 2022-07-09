import * as React from "react";
import Me from "../../res/me.jpg";
import "./aboutSection.scss";
const AboutSection: React.FC = () => {
  let [text, setText] = React.useState("");
  React.useEffect(() => {
    const fetchAndSet = async () => {
      setText(
        await (
          await fetch(
            "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text"
          )
        ).text()
      );
    };

    fetchAndSet();
  }, []);
  return (
    <div className="section about">
      <div className="section-content move">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi! My name is Patrick, but most people call me Ricky. I'm a
            computer science student located in Jacksonville, FL, currently
            attending the University of North Florida.
          </p>
          <p>
            I've been interested in computers for as long as I can remember, and
            I've been captivated by the puzzle-like nature of programming since
            my early teens. I love making websites, games, experiments, and
            everything in between.
          </p>
          <p></p>
        </div>
        <div className="selfie">
          <img alt="A picture of me" src={Me} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
