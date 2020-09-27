import React from "react";
import "./Banner.scss";
import Image from "../../assets/images/banner.png";

const Banner = () => (
  <div className="banner">
    <div className="content">
      <p className="title">Store your data with us.</p>
      <p className="subtitle">
        Data Warehouse is a data storage area that has been tested for security,
        so you can store your data here safely but not be afraid of being stolen
        by others.
      </p>
      <button className="btn-banner">Learn more</button>
    </div>
    <div className="image">
      <img src={Image} alt="Banner" />
    </div>
  </div>
);

export default Banner;
