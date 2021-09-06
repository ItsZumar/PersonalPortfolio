import React from "react";
import "./Footer.css";
import githubLink from "../../Image/githubLink.png";
import instaLink from "../../Image/instaLink.png";
import twitterLink from "../../Image/twitterLink.png";

function Footer() {
  return (
    <>
      <div className="footerLine"></div>
      <div className="footer">
        <div className="footerDetail">
          <h1 className="developer">Design & Developed by Zumar Saeed.</h1>
          <h1 className="copyRight">Copyright © 2019. All rights reserved</h1>
        </div>
        <div className="footerLinks">
          <img src={githubLink} alt="#" className="githubLink" />
          <img src={instaLink} alt="#" className="instaLink" />
          <img src={twitterLink} alt="#" />
        </div>
      </div>
    </>
  );
}

export default Footer;
