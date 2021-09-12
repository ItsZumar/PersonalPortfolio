import React from "react";
import "./Card.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

function Card() {
  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: 10000 },
    delay: 350,
  });
  return (
    <div className="cardCon">
      <animated.div style={props}>
        <div style={props}>
          <div className="card">
            <div className="iconCon1">
              <MdLocationOn className="icons" />
            </div>
            <div className="detailCon">
              <span className="cardHeading">Adress</span>
              <span className="cardDetail">Rawalpindi, PK</span>
            </div>
          </div>
        </div>
      </animated.div>
      <animated.div style={props}>
        <div style={props}>
          <div className="card">
            <div className="iconCon2">
              <AiFillMail className="icons" />
            </div>
            <div className="detailCon">
              <span className="cardHeading">Email</span>
              <span className="cardDetail">zumarsaeed17@gmail.com</span>
            </div>
          </div>
        </div>
      </animated.div>
      <animated.div style={props}>
        <div style={props}>
          <div className="card">
            <div className="iconCon3">
              <FaPhoneAlt className="icons" />
            </div>
            <div className="detailCon">
              <span className="cardHeading">Phone Number</span>
              <span className="cardDetail">0888-676677</span>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Card;
