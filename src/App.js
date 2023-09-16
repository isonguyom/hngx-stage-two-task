import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="hngx-stage-two-task">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
