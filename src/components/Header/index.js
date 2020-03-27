import React from 'react';
import { Link } from "react-router-dom";
import Dronami from "../../assets/img/dronami.png";
import PunchPedia from "../../assets/img/punchpedia.png";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__link">
        <Link to="/about">About</Link>
      </div>
      <div className="header__link">
        <Link to="/stats">Stats</Link>
      </div>
      <div className="header__link">
        <a href="http://www.dronami.com" target="_blank" rel="noopener noreferrer" className="dronami-logo">
          <img src={Dronami} alt="DRONAMI" width="640" height="128"></img>
        </a>
      </div>
      <div className="header__link">
        <a href="http://www.punchpedia.com" target="_blank" rel="noopener noreferrer" className="punchpedia-logo">
          <img src={PunchPedia} alt="PunchPedia" width="260" height="260"></img>
        </a>
      </div>
    </header>
  );
}

export default Header;