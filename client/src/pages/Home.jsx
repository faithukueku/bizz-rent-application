import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
//landing page
const Home = () => {
  return (
    <div className="landing-container  row justify-content-center">
      <div className="content-landing col-md-6 order-sm-1">
        
        <p>
          {" "}
        Renting made easy
        </p>
        <div className="features">
          <p>
            {" "}
           Rent , lease a shop or outlet easily 
          </p>
        </div>
        <div className="login">
          <div className="contain-btn">
            <div className="btn custom1 custom">
              <Link to="/signUp">Get started</Link>{" "}
            </div>
            <div className="btn custom2 custom">
              <Link to="/listings">View Properties</Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="landing-image col-md-5 order--2">
      </div>
    </div>
  );
};

export default Home;
