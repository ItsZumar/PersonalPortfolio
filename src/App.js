import "./App.css";
import Header from "./Components/Header/Header";

import About from "./sections/About";

function App() {
  return (
    <div className="App">
      <div className="AboutSec">
        <div>
          <Header />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
