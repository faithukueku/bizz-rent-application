import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/BizzRen.png"
import { useNavigate } from 'react-router-dom';


const AuthenticatedNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
const logout = async(e)=>{
 
  localStorage.removeItem("token")
  navigate("/signUp")
  window.location.reload();

}
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Company Logo" height="50" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listings">
               view properties
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn custom1 custom" onClick={logout}>
                Logout
              </button>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AuthenticatedNav;
