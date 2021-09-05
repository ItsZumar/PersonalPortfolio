import React from "react";
import Html from "../../Image/Html.png";
import css from "../../Image/css.png";
import js from "../../Image/js.png";
import firebase from "../../Image/firebase.png";
import github from "../../Image/github.png";
import react from "../../Image/react.png";
import postgresql from "../../Image/postgresql.png";
import "./SkillCard.css";

function SkillCards() {
  return (
    <div className="cardContainer">
      <div className="skillCard">
        <img src={Html} alt="#" className="img" />
        <span className="tag">HTML</span>
      </div>
      <div className="skillCard">
        <img src={css} alt="#" className="img" />
        <span className="tag">CSS</span>
      </div>
      <div className="skillCard">
        <img src={js} alt="#" className="img" />
        <span className="tag">Javascript</span>
      </div>
      <div className="skillCard">
        <img src={react} alt="#" className="img" />
        <span className="tag">ReactJS</span>
      </div>
      <div className="skillCard">
        <img src={firebase} alt="#" className="img" />
        <span className="tag">Firebase</span>
      </div>
      <div className="skillCard">
        <img src={github} alt="#" className="img" />
        <span className="tag">Github</span>
      </div>
      <div className="skillCard">
        <img src={postgresql} alt="#" className="img" />
        <span className="tag">Postgresql</span>
      </div>
    </div>
  );
}

export default SkillCards;
