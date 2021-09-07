import React from "react";
import "./Contact.css";
import contactImg from "../../Image/contactImg.png";

const heading = `<Contact />`;

function Contact() {
  return (
    <div className="contactContainer" id="contactSec5">
      <h1 className="contactHeading">{heading}</h1>
      <div className="contactStyle"></div>
      <div className="contactContent">
        <div className="inputFields">
          <input placeholder="Name*" className="nameField" required />
          <input placeholder="Email*" className="emailField" required />
          <textarea placeholder="Message*" className="msgField" required />
        </div>
        <img src={contactImg} alt="#" className="contactImg" />
      </div>
      <button className="contactBtn">SEND ME</button>
    </div>
  );
}

export default Contact;
