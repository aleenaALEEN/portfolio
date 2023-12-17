import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/AleenaFaisal-Cv.pdf";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div>
      <div className="conainer-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer!",
                    "Frontend ReactJs Developer!",
                    "Frontend Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-cv"
                href={Resume}
                download="AleenaFaisal.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
