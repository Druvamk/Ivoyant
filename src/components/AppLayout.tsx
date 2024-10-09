import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Sidebar from "./pages/sidebar/Sidebar";
import Home from "./home/Home";

export default function AppLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}
