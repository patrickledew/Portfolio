import Navigation from "./Navigation";
import "./intro.scss";

interface IntroProps {
  title: string;
  sub: string;
}

const Intro: React.FC<IntroProps> = (props: IntroProps) => {
  return (
    <div className="section intro">
      <div className="hero">
        <h1>{props.title}</h1>
        <h2 className="text-muted">{props.sub}</h2>
      </div>
      <Navigation />
    </div>
  );
};

export default Intro;
