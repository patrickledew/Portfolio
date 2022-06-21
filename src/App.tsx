import "./App.scss";

import Home from "./components/Home/Home";
import DotsAndLinesBackground from "./components/DotsAndLinesBackground";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      {/* <DotsAndLinesBackground /> */}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
