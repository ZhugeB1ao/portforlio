import { useState, useEffect } from "react";
import githubI from "../assets/img/github-icon.svg";
import vercelI from "../assets/img/vercel-icon.svg";
import "../assets/style/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const fetchProjects = async () => {
    const response = await fetch(
      "https://67cfe5b9823da0212a83baed.mockapi.io/projects"
    );
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section>
      <h1>Projects</h1>
      <ul className="projects-container">
        {projects.map((project) => (
          <li
            className="project"
            key={project.id}
            onMouseOver={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <img
              className="project-image"
              src={project.image}
              alt={`This is an image of ${project.title} project`}
            />
            {hoveredProjectId === project.id && (
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a className="project-git-link" href={project.github_link}>
                    <img src={githubI} alt="GitHub" />
                  </a>
                  <a
                    className="project-vercel-link"
                    href={project.vercel_deploy_link}
                  >
                    <img src={vercelI} alt="Vercel" />
                  </a>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
