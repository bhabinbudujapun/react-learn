import "./App.css";
import Experiences from "./components/Experiences";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experiences />
    </>
  );
}

export default App;
