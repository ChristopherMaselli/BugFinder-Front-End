import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/layout/Header";
import About from "./Components/Pages/About";
import MainSidebar from "./Components/layout/MainSidebar";
import SubSidebar from "./Components/layout/SubSidebar";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="blah">
      <MainSidebar />
      <SubSidebar />
      <div className="c">The Other Something</div>
    </div>
  );
}

export default App;
