import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
//landing page
const Home = () => {
  return (
    <div className="landing-container  row justify-content-center">
      <Navbar />
      <div className="content-landing col-md-6 order-sm-1">
        <h1>Bizz rent</h1>
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
            <div className="btn custom">
              <Link to="/signUp">Get started</Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="landing-image col-md-5 order--2">
        {/* <img src={Image}>
          
          </img>  */}
      </div>
    </div>
  );
};

export default Home;
