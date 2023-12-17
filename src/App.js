import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
