import React, { useEffect, useRef } from "react";
// import "./Education.css";
import "../styles/education.css"


const Education = () => {
  const educationRef = useRef([]);

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

    educationRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education-section">
    <div className="education-section">
      {/* Left Side (Image) */}
      <div className="image-container" ref={(el) => (educationRef.current[0] = el)}>
      <div className="hexagon-glow"></div> {/* Glow effect */}
        <img src="/src/assets/images/swati.png" alt="Education" />
      </div>

      {/* Right Side (Text) */}
      <div className="text-container" ref={(el) => (educationRef.current[1] = el)}>
        <h2>Education ➡️ </h2>
        <br />
        <h3>Degree : Bachelor of Science In Computer Science</h3>
        <p>Passing Year : 2020</p>
        <p>My Resume : <a href="/src/assets/images/Resume.pdf" target="blank_">Resume</a></p>
        <br />
        <p>I have completed my degree in Computer Science and have worked on some frontend projects, gaining hands-on experience in modern web technologies. Additionally, I have collaborated on various tasks based on project requirements, enhancing my problem-solving and development skills.</p>
      </div>
    </div>
    </section>
  );
};

export default Education;
