import React from "react";
import { Link } from "react-router-dom";
//Landing page navbar
import logo from "../assets/images/BizzRen.png"
const Navbar = () => {
  return (
    <div className="navigation">
  <img style={{height:"70px"}}src={logo}/>
    </div>
  );
};

export default Navbar;
