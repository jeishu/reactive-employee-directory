import './scss/App.scss';
import Navbar from "./components/Navbar/Navbar.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
