import { useRef, useState } from "react";
import "./interestsSection.scss";
import MusicInterest from "./MusicInterest";
import ProgrammingInterest from "./ProgrammingInterest";
const InterestsSection: React.FC = () => {
  return (
    <div className="section interests">
      <div className="section-content move">
        <h1>I like...</h1>
        <ul>
          <h2>
            <li>
              <ProgrammingInterest />
            </li>
          </h2>
          <h2>
            <li>
              <MusicInterest />
            </li>
          </h2>
        </ul>
      </div>
    </div>
  );
};

export default InterestsSection;
