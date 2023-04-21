import React, { useState } from "react"
import Spinner from "../components/Spinner"
import { useNavigate } from 'react-router-dom';

import "../styles/auth.css"
import { login,signup } from "../services/service"

export default function (props) {
  const [authMode, setAuthMode] = useState("signin")
  const navigate = useNavigate();


const [loading,setLoading] = useState(false)
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const [formData,setFormData] = useState({
    fullName:"",
    password:"",
    email:"",
    phoneNumber:""
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  const {email,password,phoneNumber,fullName} = formData

    if(authMode === "signin") {
      setLoading(true)
      const data = await login(email,password)
      if(data.status === "ok"){
        localStorage.setItem("token",data.user)
        setLoading(false)


        // navigate to user property dashboard
        navigate(`/dashboard`);
        window.location.reload();
      }
else{
  alert(data.msg)
    setLoading(false)
  
}
      
      // activate loading state
    }
    else {
      setLoading(true)
      const data = await signup(fullName,email,password,phoneNumber)
      if(data.status === "ok"){
        alert("sign up successfully")
        setAuthMode(authMode === "signin" ? "signup" : "signin")
        setLoading(false)
      }
      else{
        alert("an error occured")
        setLoading(false)
      }
    }

    console.log(formData); // This will log the current form data state to the console
  };


  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
       
        <form className="Auth-form" 
        
        onSubmit={handleSubmit}
        
        >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                required
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-pr">
                Submit
              </button>
            </div>
          
          </div>
          <Spinner loading={loading}/>
        </form>
     
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form"
      onSubmit={handleSubmit}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="fullName"
                onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              required
              name="email"
                onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              required
              name="password"
                onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="phone number"
        
              name="phoneNumber"
                onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-pr">
              Submit
            </button>
          </div>
        
        </div>
      <Spinner loading={loading}/>
      </form>
    </div>
  )
}