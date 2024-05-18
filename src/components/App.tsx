import "./App.scss";
import { useState } from "react";
import Home from "./Home";
import { FaFish } from "react-icons/fa";
import BoidsComponent from "./BoidsComponent";
const App = () => {
  const [boidsEnabled, setBoidsEnabled] = useState(true);

  return (
    <div>
      <a
        className={`toggle-boids ${boidsEnabled ? "" : "disabled"}`}
        onClick={() => setBoidsEnabled(!boidsEnabled)}
      >
        <FaFish size="50" />
      </a>
      <BoidsComponent enabled={boidsEnabled} />
      <div id="page-container">
        <Home />
      </div>
    </div>
  );
};
export default App;
