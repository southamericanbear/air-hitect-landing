import "./styles/App.css";
import Navbar from "./parts/Navbar";
import Home from "./parts/Home";
import AboutUs from "./parts/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
