import React from "react";
import Header from "../components/Header";
import Navbar from "../navigation/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet /> {/* This replaces <MainStack />'s role */}
      <Footer />
    </>
  );
};

export default PublicLayout;
