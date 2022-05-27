import * as React from "react";

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
      <div className="section-content move ">
        <h1>About Me</h1>
        <p>Ayooooo how ya doing its ya boi</p>
      </div>
    </div>
  );
};

export default AboutSection;
