import React from "react";
import { features } from "../../data/features";
import "./Features.scss";

const Features = () => (
  <div className="features">
    <p className="title">Features</p>
    <p className="subtitle">
      Some of the features and advantages that we provide for those of you who
      store data in this Data Warehouse.
    </p>
    <div className="items">
      {features.map(({ description, image, label, color }, index) => (
        <div className="wrapper" key={index}>
          <div className="feature" style={{ backgroundColor: color }}></div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
