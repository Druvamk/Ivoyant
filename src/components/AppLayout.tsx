import Sidebar from "./pages/sidebar/Sidebar";
import Home from "./home/Home";
import Default from "./pages/DashboardPages/Default";
import Analytics from "./pages/DashboardPages/Analytics";
import Statistics from "./pages/Widges/Statistics";
import Data from "./pages/Widges/Data";
import Charts from "./pages/Widges/charts/Charts";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function AppLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route path="default" element={<Default />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="charts" element={<Charts />} />
          <Route path="data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
