import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useState, useEffect } from "react";
import "../assets/style/navBar.css";

const NavBar = ({ activeSection }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(activeSection.toLowerCase());
  }, [activeSection]);

  return (
    <nav>
      <div id="nav-container">
        <div className="nav-container-1">
          <img src={logo} alt="This is a logo" className="nav-logo" />
        </div>

        <div className="nav-container-2">
          <ul className="nav-container-2-ul-1">
            <li className={activeLink === "banner" ? "active" : ""}>
              <a href="#banner">Home</a>
            </li>
            <li className={activeLink === "skills" ? "active" : ""}>
              <a href="#skills">Skills</a>
            </li>
            <li className={activeLink === "projects" ? "active" : ""}>
              <a href="#projects">Projects</a>
            </li>
            <li className={activeLink === "contact" ? "active" : ""}>  
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ul className="nav-container-2-ul-2">
            <li>
              <img
                src={navIcon1}
                alt="This is a nav icon 1"
                className="nav-icon-1"
              />
            </li>
            <li>
              <img
                src={navIcon2}
                alt="This is a nav icon 2"
                className="nav-icon-2"
              />
            </li>
            <li>
              <img
                src={navIcon3}
                alt="This is a nav icon 3"
                className="nav-icon-3"
              />
            </li>
          </ul>

          <button className="nav-container-2-connect-btn">Let's Connect</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


