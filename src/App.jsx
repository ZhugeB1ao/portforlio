import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar.jsx";
import Banner from "./components/Banner.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import backGround from "./assets/img/banner-bg.png";

function App() {
  const [activeSection, setActiveSection] = useState("banner");

  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const currentRef = useRef("");

  const sections = [
    { ref: bannerRef, name: "banner" },
    { ref: skillsRef, name: "skills" },
    { ref: projectsRef, name: "projects" },
    { ref: contactRef, name: "contact" },
  ];

  const scrollToSection = (ref) => {
    // console.log("scrollToSection called for", ref.current);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (ref, sectionName) => {
    // console.log("handleNavClick called for", ref.current);
    scrollToSection(ref);
    setActiveSection(sectionName);
  };

  useEffect(() => {
    const appContent = document.getElementById("content");
    const handleScroll = () => {
      console.log("scrolling");
    
      let current = "";

      for (let section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = section.name;
            break;
          }
        }
      }

      if (current && current !== currentRef.current) {
        currentRef.current = current;
        setActiveSection(current);
        console.log("Active section changed to:", current);
      }
    };

    appContent.addEventListener("scroll", handleScroll, { passive: true });
    return () => appContent.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="App"
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
    >
      <div
        id="blur-background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          zIndex: 0,
        }}
      ></div>

      <div
        id="content"
        style={{
          position: "relative",
          zIndex: 2,
          overflowY: "scroll",
          height: "100vh",
        }}
      >
        <NavBar
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          bannerRef={bannerRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />

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
    </div>
  );
}

export default App;
