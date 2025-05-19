<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
import "../styles/skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Git", level: 70 },
];

const Skills = () => {
  const [progressValues, setProgressValues] = useState(
    skills.map(() => 0) // Initialize all progress values to 0
  );
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills.forEach((skill, index) => {
            let currentProgress = 0;
            const interval = setInterval(() => {
              setProgressValues((prevValues) => {
                const newValues = [...prevValues];
                if (newValues[index] < skill.level) {
                  newValues[index] += 1; // Increment progress gradually
                }
                return newValues;
              });

              currentProgress += 1;
              if (currentProgress >= skill.level) {
                clearInterval(interval);
              }
            }, 20); // Controls the speed of animation (slower)
          });
        } else {
          // Reset progress when leaving the viewport
          setProgressValues(skills.map(() => 0));
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div id="skills" className="skills-container" ref={skillRef}>
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-wrapper">
            <span className="skill-percentage">{progressValues[index]}%</span>
            <div
              className="progress-circle"
              style={{
                "--progress": `${progressValues[index]}%`,
              }}
            >
              <div className="inner-circle">
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

=======
import React, { useEffect, useState, useRef } from "react";
import "../styles/skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Git", level: 70 },
];

const Skills = () => {
  const [progressValues, setProgressValues] = useState(
    skills.map(() => 0) // Initialize all progress values to 0
  );
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills.forEach((skill, index) => {
            let currentProgress = 0;
            const interval = setInterval(() => {
              setProgressValues((prevValues) => {
                const newValues = [...prevValues];
                if (newValues[index] < skill.level) {
                  newValues[index] += 1; // Increment progress gradually
                }
                return newValues;
              });

              currentProgress += 1;
              if (currentProgress >= skill.level) {
                clearInterval(interval);
              }
            }, 20); // Controls the speed of animation (slower)
          });
        } else {
          // Reset progress when leaving the viewport
          setProgressValues(skills.map(() => 0));
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div id="skills" className="skills-container" ref={skillRef}>
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-wrapper">
            <span className="skill-percentage">{progressValues[index]}%</span>
            <div
              className="progress-circle"
              style={{
                "--progress": `${progressValues[index]}%`,
              }}
            >
              <div className="inner-circle">
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

>>>>>>> 38801625133ffe4fd4aa246278d75126d4843249
export default Skills;