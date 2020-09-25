import React from "react";
import { deepPurple } from "../../constants/colors";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Logo,
  Message,
  Twitter,
} from "../../svgs/Svgs";
import "./Footer.scss";

const about = ["Profile", "Features", "Careers", "DW News"];
const help = ["Support", "Sign up", "Guide", "Reports", "Q&A"];

const icons = [
  <Facebook size={12} color="white" />,
  <Twitter size={24} color="white" />,
  <Instagram size={20} color="white" />,
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <div>
        <p className="footer-title">Try for free!</p>
        <p className="footer-subtitle">
          Get limited 1 week free. Try our features!
        </p>
      </div>
      <div className="buttons">
        <button className="btn-banner">Learn more</button>
        <button className="btn-header">
          request demo <ArrowRight size={20} color={deepPurple} />
        </button>
      </div>
    </div>
    <div className="footer-middle">
      <div className="section">
        <div className="logo">
          <Logo size={30} />
          <p className="logo-text">DataWarehouse</p>
        </div>
        <p className="footer-label">
          Warehouse Society, 234 Bahagia Ave Street PRBW 29281
        </p>
        <p className="footer-label">info@warehouse.project</p>
        <p className="footer-label">1-232-3434 (Main)</p>
      </div>
      <div className="footer-links">
        <div className="section">
          <p className="footer-label" style={{ marginBottom: 30 }}>
            About
          </p>
          {about.map((link, index) => (
            <a href="#icon" key={index} className="footer-label">
              {link}
            </a>
          ))}
        </div>
        <div className="section">
          <p className="footer-label" style={{ marginBottom: 30 }}>
            Help
          </p>
          {help.map((link, index) => (
            <a href="#icon" className="footer-label" key={index}>
              {link}
            </a>
          ))}
        </div>
        <div className="section" style={{ marginRight: 0 }}>
          <p className="footer-label" style={{ marginBottom: 30 }}>
            Social Media
          </p>
          <div className="icons">
            {icons.map((icon, index) => (
              <div key={index} className="icon">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="footer-section">
      <div>
        <p className="footer-label">
          © Datawarehouse™, 2020. All rights reserved.
        </p>
        <p className="footer-label">Company Registration Number: 21479524.</p>
      </div>
      <div className="icon">
        <Message size={24} />
      </div>
    </div>
  </footer>
);

export default Footer;
