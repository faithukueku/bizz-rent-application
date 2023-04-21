import React from "react";
import { useNavigate } from 'react-router-dom';
//Landing page navbar
import logo from "../assets/images/BizzRen.png"
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
  <img style={{height:"70px"}}src={logo} onClick={()=> navigate(`/`)}/>
    </div>
  );
};

export default Navbar;
