import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/stats">Stats</Link>
    </div>
  );
}

export default Header;