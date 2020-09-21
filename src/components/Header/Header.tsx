import React from "react";
import { deepPurple } from "../../constants/colors";
import { ArrowRight, Logo } from "../../svgs/Svgs";
import "./Header.scss";

const links = ["about", "help", "features", "signup"];

const Header = () => (
  <header>
    <div className="left">
      <Logo size={50} />
      {links.map((link, index) => (
        <p className="link" key={index}>
          {link}
        </p>
      ))}
    </div>
    <button className="btn-header">
      request demo <ArrowRight size={20} color={deepPurple} />
    </button>
  </header>
);

export default Header;
