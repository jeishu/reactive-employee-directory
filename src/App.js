import React from "react";
import './scss/App.scss';
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import Wrapper from "./components/Wrapper/Wrapper.js"
// import EmployeeData from "./components/EmployeeData/EmployeeData.js";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Main/>
      </Wrapper>
    </div>
  );
}

export default App;
