import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/philrice-cert" element={<App />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;