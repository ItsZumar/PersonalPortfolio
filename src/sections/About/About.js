import React from "react";
import "./About.css";
import illutration from "../../Image/girl-ill.png";
import Card from "../../Components/Card/Card";
import { useSpring, animated } from "react-spring";

const aboutContent = `<Hi there! I’m Zumar. />`;

function About() {
  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -500 },
    delay: 150,
  });

  return (
    <>
      <div className="about" id="aboutSec1">
        <div className="aboutContent">
          <animated.div style={props}>
            <div style={props}>
              <h1 className="heading">{aboutContent}</h1>
            </div>
          </animated.div>
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
