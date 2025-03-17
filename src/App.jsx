import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar.jsx";
import Banner from "./components/Banner.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("banner");

  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { ref: bannerRef, name: "Banner" },
    { ref: skillsRef, name: "Skills" },
    { ref: projectsRef, name: "Projects" },
    { ref: contactRef, name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      for (let section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section.name;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="App">
      <NavBar activeSection={activeSection} />

      <section ref={bannerRef}>
        <Banner />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
