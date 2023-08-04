import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {routes} from "./commons/routes";

function App() {
  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;
