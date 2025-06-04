import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {useState, useEffect} from "react";
import "../assets/style/navBar.css";

const NavBar = ({
                    activeSection,
                    handleNavClick,
                    bannerRef,
                    skillsRef,
                    projectsRef,
                    contactRef,
                }) => {
    const [activeLink, setActiveLink] = useState("banner");

    useEffect(() => {
        setActiveLink(activeSection);
        console.log("Active link updated to:", activeSection);
    }, [activeSection]);

    return (
        <nav>
            <div id="nav-container">
                <div className="nav-container-1">
                    <img src={logo} alt="This is a logo" className="nav-logo"/>
                </div>

                <div className="nav-container-2">
                    <ul className="nav-container-2-ul-1">
                        <li className={activeLink === "banner" ? "active" : ""}>
                            <button onClick={() => handleNavClick(bannerRef, "banner")}>
                                Home
                            </button>
                        </li>
                        <li className={activeLink === "skills" ? "active" : ""}>
                            <button onClick={() => handleNavClick(skillsRef, "skills")}>
                                Skills
                            </button>
                        </li>
                        <li className={activeLink === "projects" ? "active" : ""}>
                            <button onClick={() => handleNavClick(projectsRef, "projects")}>
                                Projects
                            </button>
                        </li>
                        <li className={activeLink === "contact" ? "active" : ""}>
                            <button onClick={() => handleNavClick(contactRef, "contact")}>
                                Contact
                            </button>
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


