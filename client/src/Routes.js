import { Route, Routes as BaseRoutes,Navigate } from "react-router-dom";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp"
import Listings from "./pages/Listings"
import ListingsItem from "./pages/ListingsItem";
import Dashboard from "./pages/Dashboard";
export default function Routes({isAuthenticated}) {
  console.log(isAuthenticated)
  return (
    <BaseRoutes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={    isAuthenticated ? (
           <Navigate to="/dashboard" replace />
          ) : 
          (
           <SignUp/>
          )   } />

      {/**protected routes */}
      <Route path="/listings">
        <Route index 
         element={
            <Listings/>
        }
        />
        <Route path=":listId"    element={
          isAuthenticated ? (
            <ListingsItem/>
          ) : 
          (
            <Navigate to="/signUp" replace />
          )
        }/>
      </Route>

      <Route path="/dashboard"    element={
          isAuthenticated ? (
            <Dashboard/>
          ) : 
          (
            <Navigate to="/signUp" replace />
          )
        }/>

    </BaseRoutes>
  );
}
