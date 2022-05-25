import { useState } from 'react'
import logo from './res/logo.svg'
import './App.scss'


import SlidingNavbar from './components/SlidingNavbar';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/*<SlidingNavbar />*/}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
