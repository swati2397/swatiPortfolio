<<<<<<< HEAD
import { useState } from "react";
import "../styles/header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <img src="/src/assets/images/logo.png" alt="logo" />

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero">Home</a></li>
          <li><a href="#education-section">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
=======
import { useState } from "react";
import "../styles/header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <img src="/src/assets/images/logo.png" alt="logo" />

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero">Home</a></li>
          <li><a href="#education-section">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
>>>>>>> 38801625133ffe4fd4aa246278d75126d4843249
