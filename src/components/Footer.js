import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import { BsLinkedin, BsGithub, BsFacebook ,BsPinterest,BsTwitter} from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer className="footer py-3 d-flex flex-column justify-content-center align-items-center" id="contact">
        <h5 className="py-2">
          Contact with
        </h5>
        <div className="pb-3">
        <a href="https://www.linkedin.com/in/aleena-faisal-49b187272/">
          <BsLinkedin color="blue" size={30} className="ms-2" />
          </a>
          <a href="https://github.com/aleenaALEEN">
          <BsGithub color="black" size={30} className="ms-2" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085901190154">
          <BsFacebook color="red" size={30} className="ms-2" />
          </a>
          <a href="https://www.pinterest.com/aleenafaisal439/">
          <BsPinterest color="purple" size={30} className="ms-2" />
          </a>
          <a href="https://twitter.com/FaisalAlee32601">
          <BsTwitter color="orange" size={30} className="ms-2" />
          </a>
        </div>
        <Tada>
          <h4 className="text-center">Made with 😍 AleenaFaisal &copy; 2023</h4>
        </Tada>
        <div></div>
      </footer>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#f29f67", borderRadius: "80px" }}
      />
    </>
  );
};

export default Footer;
