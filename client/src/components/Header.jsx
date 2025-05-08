import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlagDropdown from './FlagDropdown';
import AccountDropdown from './AccountDropdown';

function Header() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [token, setToken] = useState(null);

  const dropdown = () => setShow(!show);
  const dropdown2 = () => setShow2(!show2);

  // Get token from localStorage
  useEffect(() => {
    const accToken = localStorage.getItem("token");
    setToken(accToken);
  }, []); // only once on mount

  return (
    <div className="sticky top-0 z-50 bg-white py-4 flex justify-between border-b items-center w-full">
      
      {/* Logo */}
      <div className="w-36 px-4">
        <img src="https://demo.storeking.xyz/images/required/theme-logo.png" alt="logo" />
      </div>

      {/* Search Bar */}
      <div className="flex mr-10 py-[3px] bg-slate-50 rounded-3xl border w-[29rem] h-[2.5rem]">
        <i className="fa-solid fa-magnifying-glass self-center text-base text-gray-600 px-5"></i>
        <input
          className="bg-transparent outline-none border-none text-black text-base w-full"
          placeholder="Search..."
        />
      </div>

      {/* Right Section */}
      <div className="flex justify-between w-80 mr-8">
        {/* Language Dropdown */}
        <button
          onClick={dropdown}
          className="relative text-sm cursor-pointer text-black capitalize font-l"
        >
          {show && <FlagDropdown />}
          <i className="fa-solid fa-flag-usa mr-2 bg-blue-500 py-1 px-1 rounded-full text-red-600 text-m"></i>
          English
          <i className="fa-solid fa-angle-down text-sm ml-2 text-zinc-800"></i>
        </button>

        {/* Favorite */}
        <p>
          <i className="fa-regular fa-heart mr-2 bg-green-500 py-1 px-1 rounded-full text-white text-xs"></i>
          Favourite
        </p>

        {/* Account Section */}
        {token ? (
          <button
            onClick={dropdown2}
            className="relative text-sm cursor-pointer text-black capitalize font-l flex items-center"
          >
            {show2 && <AccountDropdown />}
            <i className="fa-solid fa-user mr-2 bg-green-500 py-1 px-1 rounded-full text-white text-xs"></i>
            Account
            <i className="fa-solid fa-angle-down text-sm ml-2 text-zinc-800"></i>
          </button>
        ) : (
          <Link
            to="/login"
            className="text-sm cursor-pointer text-black capitalize font-l flex items-center"
          >
            <i className="fa-regular fa-user mr-2 bg-green-500 py-1 px-2 rounded-full text-white text-sm"></i>
            Account
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
