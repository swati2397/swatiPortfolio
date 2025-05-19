// import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';
import Education from "./components/Education";
import Skills from "./components/Skills";
import VideoBackground from "./components/VideoBackground";


function App() {
  console.log("Education Component Rendered!");
  return (
    <>
      <VideoBackground/>
      <Header />
      <Hero />
      <Education/>
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
