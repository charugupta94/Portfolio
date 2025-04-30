import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="skills" className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
          <Skills />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="certifications" className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
          <Certifications />
        </section>
        <section id="education" className="py-16">
          <Education />
        </section>
        <section id="contact" className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;