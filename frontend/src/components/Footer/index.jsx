import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="marginAuto">
        <p>© 2023 Your Company. All rights reserved.</p>
        <a
          href="https://www.linkedin.com/in/prachi-mirkute-53a984152/"
          target="_blank"
        >
          <FaLinkedin className="aLSVG" />
        </a>

        <a href="https://github.com/Prachimirkute" target="_blank">
          <FaGithub className="aGSVG" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
