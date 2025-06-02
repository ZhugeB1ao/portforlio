import {useState, useEffect} from "react";
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava} from 'react-icons/fa';
import {SiTailwindcss, SiC, SiCplusplus, SiSass} from 'react-icons/si';
import "../assets/style/skills.css";

const Skills = () => {
    // const [skills, setSkills] = useState([]);
    //
    // const fetchSkills = async () => {
    //   const response = await fetch(
    //     "https://67cfe5b9823da0212a83baed.mockapi.io/skills"
    //   );
    //   const data = await response.json();
    //   setSkills(data);
    // };
    //
    // useEffect(() => {
    //   fetchSkills();
    // }, []);

    const skills = [
        {icon: <FaHtml5 color="#e34c26"/>, name: 'HTML5'},
        {icon: <FaCss3Alt color="#264de4"/>, name: 'CSS3'},
        {icon: <FaJsSquare color="#f0db4f"/>, name: 'JavaScript'},
        {icon: <FaReact color="#61dbfb"/>, name: 'React'},
        {icon: <SiTailwindcss color="#38BDF8"/>, name: 'TailwindCSS'},
        {icon: <FaPython color="#3776AB"/>, name: 'Python'},
        {icon: <FaJava color="#007396"/>, name: 'Java'},
        {icon: <SiC color="#A8B9CC"/>, name: 'C'},
        {icon: <SiCplusplus color="#00599C"/>, name: 'C++'},
        {icon: <SiSass color="#cd6799"/>, name: 'Sass'},
    ];

    return (
        <div id="skills">
            <section id="skills-section">
                <h1>Skills</h1>
                <div className="skills-container">
                    {skills.map((item, index) => (
                        <div className="skills-item" key={index}>{item.icon}</div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
