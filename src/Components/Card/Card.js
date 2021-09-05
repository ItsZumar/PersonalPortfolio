import React from "react";
import "./Card.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

function Card() {
  return (
    <div className="cardCon">
      <div className="card">
        <div className="iconCon1">
          <MdLocationOn className="icons" />
        </div>
        <div className="detailCon">
          <span className="cardHeading">Adress</span>
          <span className="cardDetail">Rawalpindi, PK</span>
        </div>
      </div>
      <div className="card">
        <div className="iconCon2">
          <AiFillMail className="icons" />
        </div>
        <div className="detailCon">
          <span className="cardHeading">Email</span>
          <span className="cardDetail">zumarsaeed17@gmail.com</span>
        </div>
      </div>
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
  );
}

export default Card;
