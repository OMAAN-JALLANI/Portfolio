import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import back2 from "./CV.jpg";
import "../App.css"; // Import CSS correctly

function Navbar() {
  const elementRef = useRef(null);

  useEffect(() => {
    AOS.init();
    const typed = new Typed(elementRef.current, {
      strings: [
        "Frontend Developer",
        "with JavaScript",
        "and React.js",
        "with 1 Year of experience",
      ],
      typeSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(2, 2, 34)", minHeight: "100vh" }}>
      {/* 3D Iframe 
      <iframe
        src="https://skybox.blockadelabs.com/e/b469a7b17b8fd5835914a518a9e0457e"
        width="100%"
        height="700"
        style={{ border: "10px solid black", display: "fixed", position: "",margin: "20px auto" }}
        allowFullScreen
        title="3D Experience"
      ></iframe>*/}
      <main className="main">
        <section className="firstSection" data-aos="fade-up">
          <div className="section-left" data-aos="fade-right">
            <span className="name hover-text">Hello, I'm Omaan,</span>
            <div>
              <b>
                <span ref={elementRef} id="element" className="hover-text"></span>
              </b>
            </div>
            <div
              className="content hover-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Former Front-end Developer with React.js, seeking competent
              development skills with a focus on Collaboration, Communication,
              and Passion.
            </div>
            <a href={back2} download>
              <button className="hover-button">Download CV</button>
            </a>
          </div>

          <div className="section-right" data-aos="fade-left">
            <div className="outer-circle hover-circle">
              <div className="inner-circle"></div>
              <div className="center-circle"></div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default Navbar;
