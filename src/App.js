import React from "react";
import './scss/App.scss';
import Main from "./components/Main/Main.js";
import Wrapper from "./components/Wrapper/Wrapper.js"

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Main/>
      </Wrapper>
    </div>
  );
}

export default App;
