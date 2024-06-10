import "./App.css";
import Experiences from "./components/Experiences";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Collab from "./components/Collab";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experiences />
      <Projects />
      <Collab />
      <Footer />
    </>
  );
}

export default App;
