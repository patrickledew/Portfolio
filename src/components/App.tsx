import "./App.scss";
import { useState } from "react";
import { FaFish } from "react-icons/fa";
import BoidsComponent from "./BoidsComponent";
import { Outlet } from "@tanstack/react-router";
import "material-icons/iconfont/material-icons.css";
import { useMediaQuery } from "usehooks-ts";
import { Footer } from "./Footer";

const App = () => {
  const [boidsEnabled, setBoidsEnabled] = useState(true);
  const mobile = useMediaQuery("(max-width: 1050px)");

  return (
    <div id="main">
    {!mobile &&
      <a
        className={`toggle-boids ${boidsEnabled ? "" : "disabled"}`}
        onClick={() => setBoidsEnabled(!boidsEnabled)}
      >
        <FaFish size="50" />
      </a>
    }
      <BoidsComponent enabled={!mobile && boidsEnabled} />
      <div id="page-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default App;
