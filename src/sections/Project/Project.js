import React from "react";
import "./Project.css";
import view from "../../Icons/view.svg";
import github from "../../Icons/github.svg";
const heading = `<Project />`;

function Project() {
  return (
    <div className="projectContainer" id="projectSec3">
      <h1 className="projectHeading">{heading}</h1>
      <div className="projectStyle"></div>
      <div className="Projects">
        <div className="ProjectEcommerce workingProject">
          <h1 className="eCommerceHeading">E-Commerce</h1>
          <p className="eCommerceDetail">
            E-Commerce Website is a project that is designed with Material-ui.
          </p>
          <div className="buttons">
            <button className="btnLinks">
              <a href="https://e-commerce12.netlify.app/">
                <img src={view} alt="#" className="btnIcon" />
              </a>
            </button>
            <button className="btnLinks">
              <a href="https://github.com/ItsZumar/eCommerce">
                <img src={github} alt="#" className="btnIcon" />
              </a>
            </button>
          </div>
        </div>
        <div className="ProjectTodoApp workingProject">
          <h1 className="eCommerceHeading">Todo App</h1>
          <p className="eCommerceDetail">
            Todo App Website is a project that is designed with Material-ui.
          </p>
          <div className="buttons">
            <button className="btnLinks">
              <a href="https://e-commerce12.netlify.app/">
                <img src={view} alt="#" className="btnIcon" />
              </a>
            </button>
            <button className="btnLinks">
              <a href="https://github.com/ItsZumar/eCommerce">
                <img src={github} alt="#" className="btnIcon" />
              </a>
            </button>
          </div>
        </div>
        <div className="ProjectPortfolio workingProject">
          <h1 className="eCommerceHeading">Portfolio Practice</h1>
          <p className="eCommerceDetail">
            Portfolio Website is a project that is designed with Material-ui.
          </p>
          <div className="buttons">
            <button className="btnLinks">
              <a href="https://zumarsaeed17.netlify.app/">
                <img src={view} alt="#" className="btnIcon" />
              </a>
            </button>
            <button className="btnLinks">
              <a href="https://github.com/ItsZumar/portfolioPractice">
                <img src={github} alt="#" className="btnIcon" />
              </a>
            </button>
          </div>
        </div>
        <div className="ProjectCalculator workingProject">
          <h1 className="eCommerceHeading">Calculator Practice</h1>
          <p className="eCommerceDetail">
            Calculator is a project that is designed with HTML, CSS and React.
          </p>
          <div className="buttons">
            <button className="btnLinks">
              <a href="https://zumarsaeed17.netlify.app/">
                <img src={view} alt="#" className="btnIcon" />
              </a>
            </button>
            <button className="btnLinks">
              <a href="https://github.com/ItsZumar/Calculator-React">
                <img src={github} alt="#" className="btnIcon" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
