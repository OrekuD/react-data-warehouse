import React from "react";
import "./About.scss";
import Image from "../../assets/images/about.png";

const About = () => (
  <div className="about">
    <img src={Image} alt="About us" />
    <div className="content">
      <p className="title">We are a high-level data storage bank</p>
      <p className="subtitle">
        The place to store various data that you can access at any time through
        the internet and where you can carry it. This very flexible storage area
        has a high level of security. To enter into your own data you must enter
        the password that you created when you registered in this Data
        Warehouse.
      </p>
    </div>
  </div>
);

export default About;
