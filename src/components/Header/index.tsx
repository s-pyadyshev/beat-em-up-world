import React from "react";
import { NavLink } from "react-router-dom";
import Dronami from "../../assets/img/dronami.png";
import PunchPedia from "../../assets/img/punchpedia.png";
import "./style.scss";

const Header = () => (
  <header className="header">
    <div className="header__inner">
      <NavLink
        to="/"
        exact
        className="header__link"
        activeClassName="is-active"
      >
        Home
      </NavLink>
      <NavLink to="/about" className="header__link" activeClassName="is-active">
        About
      </NavLink>
      <NavLink to="/links" className="header__link" activeClassName="is-active">
        Links
      </NavLink>
      <div className="header__link">
        <a
          href="http://www.dronami.com"
          target="_blank"
          rel="noopener noreferrer"
          className="dronami-logo"
        >
          <img src={Dronami} alt="DRONAMI" width="640" height="128" />
        </a>
      </div>
      <div className="header__link">
        <a
          href="http://www.punchpedia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="punchpedia-logo"
        >
          <img src={PunchPedia} alt="PunchPedia" width="260" height="260" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
