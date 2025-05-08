import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import PublicLayout from "../layout/PublicLayout";


// Public pages
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import Login from "../components/Login";
import Signup from "../components/Signup";
import FlatSale from "../pages/FlatSale";
import DailyDeals from "../pages/DailyDeals";
import ForgetPass from "../components/ForgetPass";
import Faq from '../pages/support/Faq';
import Return from '../pages/support/Return';
import Delivery from '../pages/support/Delivery';
import Contact from '../pages/support/Contact';
import AboutUs from '../pages/legal/AboutUs';
import Cookies from '../pages/legal/Cookies';
import Privacy from '../pages/legal/Privacy';
import Term from '../pages/legal/Term';
import ExplorFood from "../pages/ExplorFood";
import AccountInfo from "../components/AccountInfo";

// Dashboard pages
import Dashboard from "../pages/Dashboard";


const MainStack = () => {
  return (
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} /> {/* ✅ FIXED: Root path */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/FlatSale" element={<FlatSale />} />
        <Route path="/DailyDeals" element={<DailyDeals />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Return" element={<Return />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Term" element={<Term />} />
        <Route path="/ExplorFood" element={<ExplorFood />} />
        <Route path="/accountinfo" element={<AccountInfo />} />

        
      </Route>


      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  );
};

export default MainStack;
