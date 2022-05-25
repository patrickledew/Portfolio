import { useRef, useState } from "react";
import Reveal from "./Reveal";

interface InterestsSectionState {
  interest1: JSX.Element;
  interest2: JSX.Element;
  interest3: JSX.Element;
}

const InterestsSection: React.FC = () => {
  let [state, setState] = useState<InterestsSectionState>({
    interest1: (
      <>
        <a onClick={() => expandInterest1(1)}>Computers</a>
      </>
    ),
    interest2: <>Music</>,
    interest3: <>Photography</>,
    interest4: <></>,
  });

  let computersRef: React.RefObject<HTMLLIElement> =
    useRef<HTMLLIElement>(null);

  function expandInterest1(stage: number) {
    switch (stage) {
      case 1:
        setState({
          ...state,
          interest1: (
            <>
              <a onClick={() => expandInterest1(2)}>Programming</a> Computers
            </>
          ),
        });
        break;
      case 2:
        setState({
          ...state,
          interest1: (
            <>
              Programming <del>Computers</del> in{" "}
              <a onClick={() => expandInterest1(8)}>Javascript</a>
            </>
          ),
        });
        break;
      case 8:
        setState({
          ...state,
          interest1: (
            <>
              <a onClick={() => expandInterest1(9)}>Programming</a>{" "}
              <del>Computers</del> in Javascript using modern frameworks like
              NodeJS, Express, and React
            </>
          ),
        });
        break;
      case 9:
        setState({
          ...state,
          interest1: (
            <>
              <del>Programming Computers</del>{" "}
              <a onClick={() => expandInterest1(10)}>Building websites</a> in
              Javascript using modern frameworks like NodeJS, Express, and React
            </>
          ),
        });
        break;
      case 10:
        setState({
          ...state,
          interest1: (
            <>
              <del>Programming Computers</del> Building websites like{" "}
              <a onClick={() => expandInterest1(11)}>this one</a> in Javascript
              using modern frameworks like NodeJS, Express, and React
            </>
          ),
        });
        break;
      case 11:
        setState({
          ...state,
          interest1: (
            <>
              <del>Programming Computers</del> Building websites like this one{" "}
              <a onClick={() => expandInterest1(12)}>and others</a> in
              Javascript using modern frameworks like NodeJS, Express, and React
            </>
          ),
        });
        break;
      case 12:
        setState({
          ...state,
          interest1: (
            <>
              <del>Programming Computers</del> Building websites like this one{" "}
              <a onClick={() => expandInterest1(13)}>and others</a> in
              Javascript using modern frameworks like NodeJS, Express, and
              React, like{" "}
              <a href="https://saturn9944.com/" target="_blank">
                this one I did for my robotics team in high school
              </a>
            </>
          ),
        });
        break;
      case 13:
        setState({
          ...state,
          interest1: (
            <>
              <del>Programming Computers</del> Building websites like this one{" "}
              <a onClick={() => expandInterest1(14)}>and others</a> in
              Javascript using modern frameworks like NodeJS, Express, and
              React, like{" "}
              <a href="https://saturn9944.com/" target="_blank">
                this one
              </a>{" "}
              I did for my robotics team in high school, or{" "}
              <a href="https://www.bigentertainmentyt.com/" target="_blank">
                this one I built for a customer as a freelance job
              </a>
            </>
          ),
        });
        break;
      case 14:
        setState({
          ...state,
          interest1: (
            <>
              <del>Programming Computers</del> Building websites like this one
              and others <a></a> in Javascript using modern frameworks like
              NodeJS, Express, and React, like{" "}
              <a href="https://saturn9944.com/" target="_blank">
                this one
              </a>{" "}
              I did for my robotics team in high school, or{" "}
              <a href="https://www.bigentertainmentyt.com/" target="_blank">
                this one
              </a>{" "}
              I built for a customer as a freelance job, or{" "}
              <a href="https://seis-client.herokuapp.com/" target="_blank">
                this
              </a>{" "}
              multiplayer card <a onClick={() => expandInterest1(15)}>game</a>
            </>
          ),
        });
        break;
      case 15:
        setState({
          ...state,
          interest1: (
            <>
              <del>Programming Computers</del> Building websites like this one
              and others in Javascript using modern frameworks like NodeJS,
              Express, and React, like{" "}
              <a href="https://saturn9944.com/" target="_blank">
                this one
              </a>{" "}
              I did for my robotics team in high school, or{" "}
              <a href="https://www.bigentertainmentyt.com/" target="_blank">
                this one
              </a>{" "}
              I built for a customer as a freelance job, or{" "}
              <a href="https://seis-client.herokuapp.com/" target="_blank">
                this
              </a>{" "}
              multiplayer card game which uses{" "}
              <a onClick={() => expandInterest1(16)}>
                websockets for real-time communication
              </a>
            </>
          ),
        });
        break;
    }
  }

  return (
    <div className="section interests">
      <div className="section-content move">
        <h1>I like...</h1>
        <ul>
          <h2>
            <li>{state.interest1}</li>
          </h2>
          <h2>
            <li>{state.interest2}</li>
          </h2>
          <h2>
            <li>{state.interest3}</li>
          </h2>
        </ul>
      </div>
    </div>
  );
};

export default InterestsSection;
