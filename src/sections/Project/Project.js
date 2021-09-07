import React from "react";
import "./Project.css";
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
        </div>
        <div className="ProjectTodoApp workingProject">
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
