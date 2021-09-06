import React from "react";
import "./Education.css";

const heading = "<Education />";

function Education() {
  return (
    <div className="educationContainer">
      <h1 className="educationHeading">{heading}</h1>
      <div className="educationStyle"></div>
      <div className="educationContent">
        <div className="educationDetail">
          <div className="styling">
            <p className="educationInfoSchool">
              <span className="year">2015-2017</span>
              <span className="InstitueName"> Oxford Model School</span>
              <span>I passed my 9th and matriculation in 2017.</span>
            </p>
            <p className="educationInfoCllg">
              <span className="year">2017-2019</span>
              <span className="InstitueName">
                Post Graduate College Rawlpindi
              </span>
              <span>
                I did FSc From Post Graduate College from Rawlpindi in 2019.
              </span>
            </p>
            <p className="educationInfoUni">
              <span className="year">2019-TillNow</span>
              <span className="InstitueName"> Rawlpindi Women University</span>
              <span>
                Now I am doing Bachelors in Computer Sciences from Rawalpindi
                Women University.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
