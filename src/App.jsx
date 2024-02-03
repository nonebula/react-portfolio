import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
// import { ProjectsCore } from "./components/DisplayProject/ProjectsCore";
// import { ProjectRow } from "./components/DisplayProject/ProjectsCore";
// import { Testimonials } from "./components/Testimonials/Testimonials";
import { Contact } from "./components/Contact/Contact";


function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    {/* <ProjectsCore />
    <ProjectRow /> */}
    {/* <Testimonials /> */}
    <Contact />
  </div>;
}

export default App
