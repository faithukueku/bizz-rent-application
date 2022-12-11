import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Listings from "./pages/Listings"
import ListingsItem from "./pages/ListingsItem";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/listings">
        <Route index element={<Listings/>} />
        <Route path=":listId" element={<ListingsItem/>} />
      </Route>
    </BaseRoutes>
  );
}
