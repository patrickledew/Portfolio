import "./App.scss";
import { useState } from "react";
import { FaFish } from "react-icons/fa";
import BoidsComponent from "./BoidsComponent";
import { Outlet } from "@tanstack/react-router";
import "material-icons/iconfont/material-icons.css";

const App = () => {
  const [boidsEnabled, setBoidsEnabled] = useState(true);

  return (
    <div id="main">
      <a
        className={`toggle-boids ${boidsEnabled ? "" : "disabled"}`}
        onClick={() => setBoidsEnabled(!boidsEnabled)}
      >
        <FaFish size="50" />
      </a>
      <BoidsComponent enabled={boidsEnabled} />
      <div id="page-container">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
