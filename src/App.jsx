import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';


function App() {
  return (
    <div className="bg-wine">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;