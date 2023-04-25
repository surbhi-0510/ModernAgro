import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbarDiv">
      <div>
        <Link to="/" className="links">बेसिक कैलकुलेटर</Link>
        {/* <Link to="/" className="links">कैलकुलेटर</Link> */}
      </div>
      <div>
        <Link to="/profit-loss" className="links">लाभ/हानि कैलक्यूलेटर</Link>
      </div>
      <div>
        <Link to="/unit-conversion" className="links">यूनिट रूपांतरण कैलक्यूलेटर</Link>
      </div>
    </div>
  );
};

export default NavBar;
