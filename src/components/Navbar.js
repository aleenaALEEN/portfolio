import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fw-bold py-3">
        <div className="container d-flex justify-content-between ">
          <div>
            <Fade left>
              <div className="navbar-brand fs-1" href="#">
                Portfolio
              </div>
            </Fade>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white">
              <FaBars />
            </span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <Fade right>
              <ul className="navbar-nav font-weight-bold d-flex justify-content-between fs-5">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={100}
                      offset={-100}
                    >
                      Home
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={100}
                      offset={-100}
                    >
                      About
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={100}
                      offset={-100}
                    >
                      Skills
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={100}
                      offset={-100}
                    >
                      Projects
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={100}
                      offset={-100}
                    >
                      Contact
                    </Link>
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
