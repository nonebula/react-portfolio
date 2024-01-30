import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
// import { DisplayProject } from "./components/DisplayProject/DisplayProject";
import { Projects } from "./components/Projects/Projects";
// import { Testimonials } from "./components/Testimonials/Testimonials";
import { Contact } from "./components/Contact/Contact";


function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    {/* <DisplayProject />*/}
    {/* <Testimonials /> */}
    <Contact />
  </div>;
}

export default App
