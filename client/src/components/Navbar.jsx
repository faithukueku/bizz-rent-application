import React from "react";
import { Link } from "react-router-dom";
//Landing page navbar
import logo from "../assets/images/Bizz.png"
const Navbar = () => {
  return (
    <div className="nav">
      <h3 className="nav-header"><img style={{height:"70px"}}src={logo}/></h3>
    </div>
  );
};

export default Navbar;
