import React from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Achievements from './components/achievements/Achievements';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <div>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Skills />
         <Achievements/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App
