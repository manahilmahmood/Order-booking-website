import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import Navbar from "../navigation/Navbar"; 
import Footer from "../components/Footer";// path might change based on your structure

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Navbar />

      <main className="p-4">
        <Outlet />
      </main>
     <Footer/>
    </div>
  );
};

export default AdminLayout;
