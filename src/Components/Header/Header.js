import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Image/logo.png";

import menuIcon from "../../Icons/menu.svg";
import crossIcon from "../../Icons/close.svg";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header">
      <img src={logo} alt="#" className="logo" />
      <nav className="nav">
        {(toggle || screenWidth > 800) && (
          <ul className="list">
            <li className="listItem">About</li>
            <li className="listItem">Skills</li>
            <li className="listItem">Projects</li>
            <li className="listItem">Education</li>
            <li className="listItem">Contact Us</li>
          </ul>
        )}

        <button className="btn" onClick={handleToggle}>
          <img
            src={toggle ? crossIcon : menuIcon}
            alt="#"
            className={toggle ? "crossIcon" : "menuIcon"}
          />
        </button>
      </nav>
    </div>
  );
}

export default Header;
