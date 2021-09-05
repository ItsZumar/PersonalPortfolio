import React from "react";
import "./Card.css";
import cardData from "../../DummyData/card";

function Card() {
  return (
    <div className="cardCon">
      {cardData.map((el) => (
        <div className="card">
          <div className="iconCon">
            <img src={el.icon} alt="#" className="icons" />
          </div>
          <div className="detailCon">
            <span className="cardHeading">{el.heading}</span>
            <span className="cardDetail">{el.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
