import { useState } from 'react';
import Navbar from "./Components/Navbar";
import HeroSection from './Components/HeroSection';
import ServiceSection from './Components/ServiceSection';
import AboutSection from './Components/AboutSection';
import ExperienceSection from './Components/ExperienceSection';
import ProjectSection from './Components/ProjectSection';
import FooterSection from './Components/FooterSection';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </>
  )
}

export default App
