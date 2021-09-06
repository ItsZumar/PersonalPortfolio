import "./App.css";
import Header from "./Components/Header/Header";
import About from "./sections/About/About";
import Education from "./sections/Education/Education";
import Project from "./sections/Project/Project";
import Skill from "./sections/Skill/Skill";

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
          <Project />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
