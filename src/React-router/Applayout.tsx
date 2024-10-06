import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Privacypolicy from "./pages/Privacypolicy";

export default function Applayout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path="services" element={<Services />} />
          <Route path="privacy" element={<Privacypolicy />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
