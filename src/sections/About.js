import React from "react";
import "./About.css";
import aboutContent from "../DummyData/About";
import illutration from "../Image/girl-ill.png";
import Card from "../Components/Card/Card";

function About() {
  return (
    <>
      <div className="about">
        <div className="aboutContent">
          <h1 className="heading">{aboutContent}</h1>
          <p className="paragraph">
            I’m a software engineer from Rawalpindi, PK. I’m also a FrontEnd
            Developer & I make elegantly professional Web designs.
          </p>
          <button className="contactBtn">Contact Us</button>
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
