import Home from "../pages/Home";
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }

 
];

export default mainRoutes;
