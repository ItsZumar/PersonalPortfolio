import React from "react";
import "./About.css";
import illutration from "../../Image/girl-ill.png";
import Card from "../../Components/Card/Card";

const aboutContent = `<Hi there! I’m Zumar. />`;

function About() {
  return (
    <>
      <div className="about" id="aboutSec1">
        <div className="aboutContent">
          <h1 data-text={aboutContent} className="heading">
            {aboutContent}
          </h1>
          <p className="paragraph">
            I’m a software engineer from Rawalpindi, PK. I’m also a FrontEnd
            Developer & I make elegantly professional Web designs.
          </p>
          <button className="contactBtn">
            <a href="#contactSec5" className="contactLink">
              Contact Us
            </a>
          </button>
        </div>

        <div className="aboutImg">
          <img src={illutration} alt="#" className="illustration" />
        </div>
      </div>
      <div className="container">
        <Card />
      </div>
    </>
  );
}

export default About;
