import React from "react";
import img1 from "../assets/mern-app.PNG";
import img2 from "../assets/Coffeshop.PNG";
import img3 from "../assets/next-app.PNG";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project py-5" id="projects">
        <h2 className="mt-3 mb-1 text-center">
          Top <span>Recent Projects</span>
        </h2>
        <hr />
        <p className="pb-3 text-center pb-5">
          Here are my top recent project with live links and source code.
        </p>
        <div className="row" id="ads">
          <Spin>
            <div className="col-12 col-md-6 col-lg-6 py-4 py-lg-0">
              <div className="card pb-3 rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MernStack App</span>
                  <img src={img1} alt="Project1 pic" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">NodeJs</span>
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">ExpressJs</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase pb-2">
                      Ecommerce Shopping App
                    </h5>
                  </div>
                  <span className="p-1">
                    <a
                      href="https://github.com/aleenaALEEN/Amazona"
                      className="ad-btn"
                    >
                      View Code
                    </a>
                  </span>
                  <span className="p-1">
                    <a
                      href="https://lingerie-millipede.cyclic.app/"
                      className="ad-btn"
                    >
                      Live Demo
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 py-4 py-lg-0">
              <div className="card pb-3 rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend App</span>
                  <img src={img2} alt="Project1 pic" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">Tailwind Css</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase pb-2">
                      Coffeshop ReactJs App
                    </h5>
                  </div>
                  <span className="p-1">
                    <a href="https://github.com/aleenaALEEN/coffeshop" className="ad-btn">
                      View Code
                    </a>
                  </span>
                  <span className="p-1">
                    <a href="https://aleenaaleen.github.io/coffeshop/" className="ad-btn">
                      Live Demo
                    </a>
                  </span>
                </div>
              </div>
            </div>
         
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
