import "./App.css";
import Header from "./Components/Header/Header";

import About from "./sections/About";
import Skill from "./sections/Skill";

function App() {
  return (
    <div className="App">
      <div className="AboutSec">
        <div>
          <Header />
        </div>
        <div>
          <About />
          <Skill />
        </div>
      </div>
    </div>
  );
}

export default App;
