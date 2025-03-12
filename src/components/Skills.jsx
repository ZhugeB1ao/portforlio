import { useState, useEffect } from "react";

import "../assets/style/skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const response = await fetch(
      "https://67cfe5b9823da0212a83baed.mockapi.io/skills"
    );
    const data = await response.json();
    setSkills(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div id="skills">
      <section id="skills-section">
        <h1>Skills</h1>
        <ul className="skills-container">
          {skills.map((skill) =>
            skill.type === "frontEndDevelopment" ? (
              <li key={skill.id} className="front-end-development skill">
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            ) : (
              <li key={skill.id} className="programming-language skill">
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};

export default Skills;
