import React from "react";
import Jump from 'react-reveal/Jump';
import img from "../assets/aleena2.jpeg"

const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about">
        <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2 about-img">
            <img
              src={img}
              alt="About pic"
            />
          </div>
          <div className="col-12 col-lg-10 about-content">
            <h1>About <span>me</span></h1>
            <p>
              Hello! I'm Aleena Faisal, a certified Frontend Developer with a
              passion for crafting elegant and functional web applications. I
              thrive on solving complex problems and turning ideas into reality
              through clean, efficient code. With 1 year of experience in the
              field, I've had the privilege of working on a diverse range of
              projects, honing my skills and staying at the forefront of web
              development trends. I'm committed to staying up-to-date with the
              latest technologies and best practices in web development,
              ensuring that my projects benefit from the most current
              advancements.. My goal is to create synergy and deliver outstanding
              results.
              <br></br> 
            </p>
          </div>
        </div>
      </div>
      </div>
      </Jump>
    </>
  );
};

export default About;
