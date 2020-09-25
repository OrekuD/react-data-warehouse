import React from "react";
import { features } from "../../data/features";
import { ArrowRight } from "../../svgs/Svgs";
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
          <div className="feature" style={{ backgroundColor: color }}>
            <img
              src={image}
              alt={label}
              style={{ marginTop: index === 0 ? 20 : 0 }}
            />
            <div className="content">
              <div>
                <p className="label">{label}</p>
                <p className="description">{description}</p>
              </div>
              <button className="learn-more">
                Learn more
                <ArrowRight size={18} color="#9C69E2" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
