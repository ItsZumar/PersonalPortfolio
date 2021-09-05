import React from "react";
import "./Card.css";
import location from "../../Icons/placeholder.svg";
import email from "../../Icons/mail.svg";
import phone from "../../Icons/telephone.svg";

function Card() {
  return (
    <div className="cardCon">
      <div className="card">
        <div className="iconCon">
          <img src={location} alt="#" className="icons" />
        </div>
        <div className="detailCon">
          <span className="cardHeading">Adress</span>
          <span className="cardDetail">Rawalpindi, PK</span>
        </div>
      </div>
      <div className="card">
        <div className="iconCon">
          <img src={email} alt="#" className="icons" />
        </div>
        <div className="detailCon">
          <span className="cardHeading">Email</span>
          <span className="cardDetail">zumarsaeed17@gmail.com</span>
        </div>
      </div>
      <div className="card">
        <div className="iconCon">
          <img src={phone} alt="#" className="icons" />
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
