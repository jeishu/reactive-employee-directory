import React, { Component } from "react";
import './scss/App.scss';
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import Card from "./components/Card/Card.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
