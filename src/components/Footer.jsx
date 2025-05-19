<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import icons
import "../styles/footer.css";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
     <footer className={`footer ${isVisible ? "animate" : ""}`} ref={footerRef}>
      <div className="footer-left">
        {/* <h2 className="footer-title">Immerge Portfolio</h2> */}
        <p className="footer-text">
        Elevating my online presence with a modern and professional portfolio. Let's build something amazing together. a well-crafted portfolio can showcase my skills, highlight my achievements, and open doors to new opportunities.
        </p>
      </div>

      {/* Navbar */}
      <nav className="footer-nav">
        {/* <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div> */}
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#education-section">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="social-icons">
          <a href="https://github.com/swati2397" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/swati-kale-bb7736338/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
          <a href="https://wa.me/918208168181" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <hr />
        <p>© 2025 Swati Kale. All Rights Reserved.</p>
      </div>


    </footer>
  );
}

export default Footer;
=======
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import icons
import "../styles/footer.css";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
     <footer className={`footer ${isVisible ? "animate" : ""}`} ref={footerRef}>
      <div className="footer-left">
        {/* <h2 className="footer-title">Immerge Portfolio</h2> */}
        <p className="footer-text">
        Elevating my online presence with a modern and professional portfolio. Let's build something amazing together. a well-crafted portfolio can showcase my skills, highlight my achievements, and open doors to new opportunities.
        </p>
      </div>

      {/* Navbar */}
      <nav className="footer-nav">
        {/* <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div> */}
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#education-section">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="social-icons">
          <a href="https://github.com/swati2397" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/swati-kale-bb7736338/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
          <a href="https://wa.me/918208168181" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <hr />
        <p>© 2025 Swati Kale. All Rights Reserved.</p>
      </div>


    </footer>
  );
}

export default Footer;
>>>>>>> 38801625133ffe4fd4aa246278d75126d4843249
