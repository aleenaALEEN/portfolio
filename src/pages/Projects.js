import React from "react";
import img1 from "../assets/Coffeshop.PNG";
import img2 from "../assets/calculator.PNG"
import img3 from "../assets/todo.PNG"
import img4 from "../assets/weather.PNG"
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
            <div className="col-12 col-md-3 col-lg-3 py-4 py-lg-0">
              <div className="card pb-3 rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend App</span>
                  <img src={img1} alt="Project1 pic" />
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
            {/* ------------------calculator------------- */}
            <div className="col-12 col-md-3 col-lg-3 py-4 py-lg-0">
              <div className="card pb-3 rounded">
                <div className="card-image">
                  <span className="card-notify-badge">calculator App</span>
                  <img src={img2} alt="Project2 pic" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">ReactJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase pb-2">
                      Calculator ReactJs App
                    </h5>
                  </div>
                  <span className="p-1">
                    <a href="https://github.com/aleenaALEEN/calculator" className="ad-btn">
                      View Code
                    </a>
                  </span>
                  <span className="p-1">
                    <a href="https://aleenaaleen.github.io/calculator/" className="ad-btn">
                      Live Demo
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* -----------------Todo-App----------------- */}
            <div className="col-12 col-md-3 col-lg-3 py-4 py-lg-0">
              <div className="card pb-3 rounded">
                <div className="card-image border">
                  <span className="card-notify-badge">Todo-List App</span>
                  <img src={img3} alt="Project2 pic" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">ReactJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase pb-2">
                      Todo-List ReactJs App
                    </h5>
                  </div>
                  <span className="p-1">
                    <a href="https://github.com/aleenaALEEN/todoApp" className="ad-btn">
                      View Code
                    </a>
                  </span>
                  <span className="p-1">
                    <a href="https://aleenaaleen.github.io/todoApp/" className="ad-btn">
                      Live Demo
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* --------------weather------------ */}
            <div className="col-12 col-md-3 col-lg-3 py-4 py-lg-0">
              <div className="card pb-3 rounded">
                <div className="card-image border">
                  <span className="card-notify-badge">weather App</span>
                  <img src={img4} alt="Project2 pic" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">ReactJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase pb-2">
                      weather ReactJs App
                    </h5>
                  </div>
                  <span className="p-1">
                    <a href="https://github.com/aleenaALEEN/weatherApp" className="ad-btn">
                      View Code
                    </a>
                  </span>
                  <span className="p-1">
                    <a href="https://aleenaaleen.github.io/weatherApp/" className="ad-btn">
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
