import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import Location from "./components/Location/Location";
import Partner from "./components/Partner/Partner";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Jobs />
      <Location />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
