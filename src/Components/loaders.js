import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "../App.css";

const LoaderBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="load" style={{ height: "599px", width: "1112px" }}>
      <h3 style={{ marginLeft: "200px", marginTop: "764px" }}>Technologies:</h3>

      
      <div className="htmla" data-aos="fade-right">
        <div className="html1">HTML <sub>(99%)</sub></div>
        <div className="loader-bar1">
          <div className="loader-bar-fill" id="loader-color" style={{ width: "100%", backgroundColor: "rgb(2, 2, 34)" }} />
        </div>
      </div>

      
      <div className="htmlb" data-aos="fade-left">
        <div className="html2">CSS & Bootstrap <sub>(95%)</sub></div>
        <div className="loader-bar1">
          <div className="loader-bar-fill" id="loader-color" style={{ width: "95%", backgroundColor: "rgb(2, 2, 34)" }} />
        </div>
      </div>

      
      <div className="htmlc" data-aos="fade-right">
        <div className="html3">JavaScript & TypeScript <sub>(75%)</sub></div>
        <div className="loader-bar1">
          <div className="loader-bar-fill" id="loader-color" style={{ width: "75%", backgroundColor: "rgb(2, 2, 34)" }} />
        </div>
      </div>

     
      <div className="htmle" data-aos="fade-left">
        <div className="html5">UI Designer <sub>(80%)</sub></div>
        <div className="loader-bar1">
          <div className="loader-bar-fill" id="loader-color" style={{ width: "80%", backgroundColor: "rgb(2, 2, 34)" }} />
        </div>
      </div>

      {/* React.js */}
      <div className="htmld" data-aos="fade-right">
        <div className="html4">React.js <sub>(65%)</sub></div>
        <div className="loader-bar1">
          <div className="loader-bar-fill" id="loader-color" style={{ width: "65%", backgroundColor: "rgb(2, 2, 34)" }} />
        </div>
      </div>
    </div>
  );
};

export default LoaderBar;
