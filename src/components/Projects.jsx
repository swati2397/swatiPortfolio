<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import "../styles/projects.css";

const projectData =  [
  // { id: 1, title: "Portfolio Website", description: "A personal portfolio site", status: "Completed" },
  { id: 2, title: "Netflix Clone", description: "A Clone of of Netflix App", status: "Completed"},
  { id: 3, title: "Cafe Website", description: "Aroma Cafe", status: "Completed"},
  { id: 4, title: "Hotel Management", description: "A Five star Hotel Website", status: "Completed" },
  // { id: 5, title: "Chat Application", description: "A real-time messaging app", status: "Completed" },
  // { id: 6, title: "Blog Platform", description: "A content publishing platform", status: "Pending" }
];
  
function Projects() {

  const projectRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("slide-in");
            }, index * 200);
          } else {
            entry.target.classList.remove("slide-in"); // Remove class to re-trigger animation
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

    return (
      <section id="projects">
      <div className="project-container">
      <h2 className="project-heading" ref={(el) => (projectRef.current[0] = el)}>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div key={project.id} className="project-card" ref={(el) => (projectRef.current[index + 1] = el)}>
            <div className="neon-border"></div>
            <a href="https://github.com/swati2397"><h3 className="project-title">{project.title}</h3></a>
            <p className="project-description">{project.description}</p>
            <span className={`status ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
    </section>
    );
  };

export default Projects;
=======
import React, { useEffect, useRef } from "react";
import "../styles/projects.css";

const projectData =  [
  // { id: 1, title: "Portfolio Website", description: "A personal portfolio site", status: "Completed" },
  { id: 2, title: "Netflix Clone", description: "A Clone of of Netflix App", status: "Completed"},
  { id: 3, title: "Cafe Website", description: "Aroma Cafe", status: "Completed"},
  { id: 4, title: "Hotel Management", description: "A Five star Hotel Website", status: "Completed" },
  // { id: 5, title: "Chat Application", description: "A real-time messaging app", status: "Completed" },
  // { id: 6, title: "Blog Platform", description: "A content publishing platform", status: "Pending" }
];
  
function Projects() {

  const projectRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("slide-in");
            }, index * 200);
          } else {
            entry.target.classList.remove("slide-in"); // Remove class to re-trigger animation
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

    return (
      <section id="projects">
      <div className="project-container">
      <h2 className="project-heading" ref={(el) => (projectRef.current[0] = el)}>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div key={project.id} className="project-card" ref={(el) => (projectRef.current[index + 1] = el)}>
            <div className="neon-border"></div>
            <a href="https://github.com/swati2397"><h3 className="project-title">{project.title}</h3></a>
            <p className="project-description">{project.description}</p>
            <span className={`status ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
    </section>
    );
  };

export default Projects;
>>>>>>> 38801625133ffe4fd4aa246278d75126d4843249
