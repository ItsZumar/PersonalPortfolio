import React from "react";
import "./Project.css";
const heading = `<Project />`;

function Project() {
  return (
    <div className="projectContainer">
      <h1 className="projectHeading">{heading}</h1>
      <div className="projectStyle"></div>
      <div className="Projects">
        <div className="ProjectEcommerce">
          <h1 className="eCommerceHeading">E-Commerce</h1>
          <p className="eCommerceDetail">
            E-Commerce Website is a project that is designed with Material-ui.
          </p>
        </div>
        <div className="ProjectTodoApp">
          <h1 className="eCommerceHeading">Todo App</h1>
          <p className="eCommerceDetail">
            Todo App Website is a project that is designed with Material-ui.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
