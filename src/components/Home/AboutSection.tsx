import * as React from "react";
import Me from "../../res/me.jpg";
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
        <h1>About Me</h1>
        <p>
          Hi! My name is Patrick, but most people call me Ricky. I'm a 19 year
          old computer science student located in Jacksonville, FL, currently
          attending the University of North Florida.
        </p>
        <p>
          I've been interested in computers for as long as I can remember, and
          I've been captivated by the puzzle-like quality of programming since
          my early teens. I love making websites, games, experiments, and
          everything in between. Now I'm looking to help solve puzzles in the
          real world.
        </p>
        <p></p>
      </div>
      <img className="selfie" alt="A picture of me" src={Me} height="400px" />
    </div>
  );
};

export default AboutSection;
