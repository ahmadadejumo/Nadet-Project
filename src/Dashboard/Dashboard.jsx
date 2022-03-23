import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import DashboardHome from "./Home";
import DashboardProucts from "./Products";

const Home = () => {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!open);
  };

  return (
    <div className="bg-[#EEEEF4]">
      <div className="flex">
        {!open && <Sidebar />}
        <div className="flex-[6]">
          <Navbar click={handleClick} />
          <Routes>
            <Route path="dashboard-home" element={<DashboardHome />} />
            <Route path="my-products" element={<DashboardProucts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;