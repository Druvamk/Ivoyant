import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Sidebar from "./pages/sidebar/Sidebar";
import Home from "./home/Home";
import Default from "./pages/DashboardPages/Default";
import Analytics from "./pages/DashboardPages/Analytics";
import Invoices from "./pages/DashboardPages/Invoices";

export default function AppLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route path="default" element={<Default />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
