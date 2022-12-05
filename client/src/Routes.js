import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"

// import Products from "./pages/Products";
// import Product from "./pages/Product";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      {/* <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route> */}
    </BaseRoutes>
  );
}
