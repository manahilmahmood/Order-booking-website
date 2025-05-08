import React, { useState } from "react";
import NestedMenu from "./NestedMenu";
import { NavLink } from 'react-router-dom';
import { navbar } from '../utli/tailwind/style';

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
    
        <div className="flex items-center space-x-8">
          <div className="relative bg-black rounded-md border w-48 h-10 px-2 text-white flex items-center justify-between cursor-pointer">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setMenu(!menu)}
            >
              <i className="fa-solid fa-bars mr-2"></i>
              <span>Browser Category</span>
              <i className="fa-solid fa-angle-down text-sm ml-2"></i>
            </button>
            {menu && (
              <div className="absolute top-1 left-0 z-10">
                <NestedMenu />
              </div>
            )}
          </div>

          {/* Navbar Options */}
          <ul className="flex space-x-6 items-center">
            <li>
            <NavLink to="/Home" className={navbar.navLink}>Home</NavLink>
            </li>

            <li>
            <NavLink to="/Offers" className={navbar.navLink}>Offers</NavLink>
            </li>

            <li>
            <NavLink to="/DailyDeals" className={navbar.navLink}>Daily Deals</NavLink>
            </li>
            <li>
            <NavLink to="/FlatSale" className={navbar.navLink}>Flash Sale</NavLink>
            </li>
          </ul>
        </div>

  

        <div className="flex items-center space-x-8">
          
          <div className="text-blue-400 flex items-center space-x-2">
            <i className="fa-solid fa-phone"></i>
            <a href="#">+8801333384628</a>
          </div>

          <button className="flex items-center bg-green-500 rounded-md border shadow-2xl shadow-emerald-300 w-32 h-10 text-white justify-center">
            <i className="fa-solid fa-bag-shopping pr-2"></i>
            <p>My Cart (0)</p>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
