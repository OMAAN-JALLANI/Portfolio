import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1s animation duration
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError("Please enter a valid message");
      return;
    }

    const templateParams = {
      from_name: name,
      city,
      message,
      age,
    };

    emailjs
      .send("service_3wyr4o7", "template_t4n5g19", templateParams, "xzBpQi5U68rp562Lu")
      .then((response) => {
        console.log("Email sent successfully!");
        setName("");
        setCity("");
        setMessage("");
        setAge("");
        setSent(true);
        setError(null);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Error sending email. Please try again.");
      });
  };

  return (
    <div>
      <div className="container" style={{ padding: "0" }}>
        <h3 style={{ marginLeft: "170px", marginTop: "25px" }} data-aos="fade-">
          Contact Me :
        </h3>

        <div className="inputer" style={{ marginLeft: "150px" }} data-aos="fade-up">
          <input
            type="text"
            className="inputer-name"
            id="typer"
            placeholder="Enter Your Name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="city" style={{ marginLeft: "150px" }} data-aos="fade-">
          <input
            type="text"
            className="inputer-city"
            id="typer"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className="inputer-age"
            id="typer"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="inputer" style={{ marginLeft: "150px" }} data-aos="fade-down">
          <input
            type="text"
            className="inputer-discription"
            id="typer"
            placeholder="Type Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {error && (
          <p style={{ color: "red", width: "500px", height: "50px", marginTop: "20px" }} data-aos="fade-right">
            <i>{error}</i>
          </p>
        )}

        <button className="new" onClick={handleSubmit} data-aos="zoom-in">
          Submit
        </button>

        {sent && <p data-aos="fade-">Email sent successfully!</p>}
      </div>
    </div>
  );
}

export default Contact;
