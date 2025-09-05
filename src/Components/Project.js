import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "../App.css";
import portImage from "./image.png";
import portImage1 from "./monkey.jpg";
import portImage2 from "./tic.jpg";
import portImage3 from "./Currency.jpg";
function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="project" style={{ height: "100px", width: "100px", marginLeft: "67px" }}>
      <h3 className="container" style={{ marginLeft: "130px" }}>
        Projects
      </h3>
      <div className="container" style={{ height: "300px", width: "1000px", display: "flex", justifyContent: "space-evenly" }}>
        <div className="card" data-aos="fade-up" style={{ width: "18rem", height: "350px", marginTop: "50px", backgroundColor: "rgb(2, 2, 34)", color: "white", borderRadius: "1%", perspective: "500px" }}>
          <img id="img1" src={portImage} style={{ height: "140px" }} className="card-img-top" alt="Portfolio" />
          <div className="card-body">
            <h5 className="card-title" data-aos="fade-right">Portfolio Website</h5>
            <p className="card-text">
              Responsive HTML/CSS Layout for Portfolio, HTML5, CSS3.
              My First Portfolio website.
            </p>
            <a href="https://github.com/OMAAN-JALLANI?tab=repositories" className="btn btn-primary" data-aos="fade-left" style={{ background: "linear-gradient(25deg, #7A0BC0, #87CEEB)", border: "none", borderRadius: "30px", boxShadow: "0 0 20px rgba(135, 206, 235, 0.7), 0 0 50px rgba(5, 77, 145, 0.5)" }}>
              To GitHub
            </a>
          </div>
        </div>
        <div className="card" data-aos="fade-up" style={{ width: "18rem", height: "350px", marginTop: "50px", backgroundColor: "rgb(2, 2, 34)", color: "white", borderRadius: "1%" }}>
          <img id="img2" src={portImage1} style={{ height: "140px" }} className="card-img-top" alt="News Monkey" />
          <div className="card-body">
            <h5 className="card-title" data-aos="fade-right">News Monkey</h5>
            <p className="card-text">
              Responsive HTML/CSS, JavaScript Layout for News-Monkey.
              Show almost   8 type of news
            </p>
            <a href="https://github.com/OMAAN-JALLANI?tab=repositories" className="btn btn-primary" data-aos="fade-left" style={{ background: "linear-gradient(25deg, #7A0BC0, #87CEEB)", border: "none", borderRadius: "30px", boxShadow: "0 0 20px rgba(135, 206, 235, 0.7), 0 0 50px rgba(5, 77, 145, 0.5)" }}>
              To GitHub
            </a>
          </div>
        </div>

      </div>

      <div className="container" style={{ height: "300px", width: "1000px", display: "flex", justifyContent: "space-evenly" }}>
        
        <div className="card" data-aos="fade-up" style={{ width: "18rem", height: "350px", marginTop: "130px", backgroundColor: "rgb(2, 2, 34)", color: "white", borderRadius: "1%" }}>
          <img id="img3" src={portImage2} style={{ height: "140px" }} className="card-img-top" alt="Tic-Tac-Toe" />
          <div className="card-body">
            <h5 className="card-title" data-aos="fade-right">Tic-Tac-Toe Game</h5>
            <p className="card-text">
              Responsive HTML/CSS, JavaScript layout for the game.
              My first React web-based game.
            </p>
            <a href="https://omaan-jallani.github.io/Rock-paper-scissor-game/" className="btn btn-primary" data-aos="fade-left" style={{ background: "linear-gradient(25deg, #7A0BC0, #87CEEB)", border: "none", borderRadius: "30px", boxShadow: "0 0 20px rgba(135, 206, 235, 0.7), 0 0 50px rgba(5, 77, 145, 0.5)" }}>
              Preview
            </a>
          </div>
        </div>

        <div className="card" data-aos="fade-up" style={{ width: "18rem", height: "350px", marginTop: "130px", backgroundColor: "rgb(2, 2, 34)", color: "white", borderRadius: "1%" }}>
          <img id="img4" src={portImage3} style={{ height: "140px" }} className="card-img-top" alt="Textutils" />
          <div className="card-body">
            <h5 className="card-title" data-aos="fade-right">CurrencyX</h5>
            <p className="card-text">
              Responsive HTML/CSS, JavaScript layout for CurrencyX.
              Convert accurate Currency of 159 C
            </p>
            <a href="https://omaan-jallani.github.io/Currency-Converter/" className="btn btn-primary" data-aos="fade-left" style={{ background: "linear-gradient(25deg, #7A0BC0, #87CEEB)", border: "none", borderRadius: "30px", boxShadow: "0 0 20px rgba(135, 206, 235, 0.7), 0 0 50px rgba(5, 77, 145, 0.5)" }}>
              Preview
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
