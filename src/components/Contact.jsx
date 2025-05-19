<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import "../styles/contact.css";

function Contact() {

  const contactRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);


  return (
    <section id="contact">
      <div className="contact-info" ref={contactRef}>
      <a className="line zigzag" href="#">📍 : <span>Pune, Maharashtra</span></a>
      <a className="line" href="swatikale8181@gmail.com">📧 : <span>swatikale8181@gmail.com</span></a>
      <a className="line zigzag" href="+918208168181">📞 : <span>+918208168181</span></a>
      <a className="line" href="https://drive.google.com/file/d/17uoY5ZXVSWbpKqsBXwiFpdPy9XUia_OQ/view?usp=sharing">🏆 : <span>https://drive.google.com/drive/my-drive</span></a>        {/* courses certificates add  */}
    </div>

    <h2 className="contact-heading" ref={headingRef}>Contact</h2>

    {/* <span className="my-info">We’d love to hear from you! Whether you have a question, a business inquiry, or just want to say hello, feel free to reach out. <br/>
    Let’s connect and create something amazing together! 🚀</span> */}

    </section>

  );
}

export default Contact;
=======
import React, { useEffect, useRef } from "react";
import "../styles/contact.css";

function Contact() {

  const contactRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);


  return (
    <section id="contact">
      <div className="contact-info" ref={contactRef}>
      <a className="line zigzag" href="#">📍 : <span>Pune, Maharashtra</span></a>
      <a className="line" href="swatikale8181@gmail.com">📧 : <span>swatikale8181@gmail.com</span></a>
      <a className="line zigzag" href="+918208168181">📞 : <span>+918208168181</span></a>
      <a className="line" href="https://drive.google.com/file/d/17uoY5ZXVSWbpKqsBXwiFpdPy9XUia_OQ/view?usp=sharing">🏆 : <span>https://drive.google.com/drive/my-drive</span></a>        {/* courses certificates add  */}
    </div>

    <h2 className="contact-heading" ref={headingRef}>Contact</h2>

    {/* <span className="my-info">We’d love to hear from you! Whether you have a question, a business inquiry, or just want to say hello, feel free to reach out. <br/>
    Let’s connect and create something amazing together! 🚀</span> */}

    </section>

  );
}

export default Contact;
>>>>>>> 38801625133ffe4fd4aa246278d75126d4843249
