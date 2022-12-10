import { Link, useRoutes } from "react-router-dom";


import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
function App() {
  return (
   <>
      <main>
        <Navbar/>
        <Routes />
      </main>
    </>
  );
}

export default App;
