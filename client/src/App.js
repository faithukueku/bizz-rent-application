import { Link, useRoutes } from "react-router-dom";
import { useState ,useEffect} from "react";

import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AuthenticatedNav from "./components/AuthenticatedNav";
function App() {
  const [isAuthenticated,setIsAuthenticated] = useState("")
  const [token,setToken] = useState("")
  useEffect(()=>{
    let token = localStorage.getItem("token")
    console.log(token)
    if(token) {
      setIsAuthenticated(true)
      setToken(token)
    }
  },[])



  return (
   <>
      <main>
        {
 isAuthenticated ? (
  <AuthenticatedNav/>
) : 
(
  <Navbar/>
)
        }
     
       
        <Routes token={token} isAuthenticated={isAuthenticated}/>
      </main>
    </>
  );
}

export default App;
