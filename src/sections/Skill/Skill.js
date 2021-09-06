import React from "react";
import "./Skill.css";
import diagram from "../../Image/skillDiagram.png";
import SkillCards from "../../Components/SkillCards/SkillCards";

const heading = "<Skills / Tools and Technology />";

function Skill() {
  return (
    <div className="skills">
      <h1 className="SkillHeading">{heading}</h1>
      <div className="style"></div>
      <div className="diagramContainer">
        <img src={diagram} alt="#" className="diagram" />
      </div>
      <div className="diagramExplanation">
        <p className="detail">
          Constantly continues to learn new technologies and keeping up-to-date
          with the freshest trends.
        </p>
        <p className="detail">
          Mobile-first, responsive design layout for all devices is a top
          priority.
        </p>
        <p className="detail">
          Developing fast web applications for seamless user interaction.
        </p>
      </div>
      <SkillCards />
    </div>
  );
}

export default Skill;
