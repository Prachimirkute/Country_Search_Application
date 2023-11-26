// AboutMe.js
import React from "react";
import "./style.css";

const AboutMe = () => {
  return (
    <div className="About" style="height: auto;">
      <div
        className="card shadow text-center"
        style="max-width: 517px;margin-left: auto;margin-right: auto;background-color: #00bcd41f;"
      >
        <div className="card-body">
          <div className="container text-center">
            <h3>About Me</h3>
            <p>
              Hi there! I'm Prachi Mirkute, a passionate developer who loves
              building awesome web applications.
            </p>
            <h6>
              {" "}
              I can be reached at the following Email id:
              <span style="color:blue;">prachimirkute27@gmail.com</span>
            </h6>
            <h6>
              feel free to connect with me on any of the following platform
            </h6>
            <div style="text-align: center;">
              <a
                href="https://github.com/Prachimirkute"
                target="_blank"
                className="btn"
              ></a>
              <a
                href="https://www.linkedin.com/in/prachi-mirkute-53a984152/"
                target="_blank"
                className="btn"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
