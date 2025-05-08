import React from "react";
import { Link } from "react-router-dom";

const AccountDropdown = ({
  userName = "Kiron Khan",
  phone = "+8801275333453",
}) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; 
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: "fas fa-th-large",
      to: "/dashboard",
    },
    {
      label: "Order History",
      icon: "fas fa-lock",
      to: "/orderhistory",
    },
    {
      label: "Account Info",
      icon: "fas fa-user",
      to: "/accountinfo",
    },
    {
      label: "Change Password",
      icon: "fas fa-key",
      to: "/change-password",
    },
    {
      label: "Address",
      icon: "fas fa-map-marker-alt",
      to: "/address",
    },
    {
      label: "Logout",
      icon: "fas fa-sign-out-alt",
      action: "logout",
    },
  ];

  return (
    <div className="absolute top-8 right-1 mt-2 w-[12rem] bg-white border border-zinc-300 rounded-md shadow-md py-3 px-2">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-5 border-b pb-4">
        <img
          src="https://demo.storeking.xyz/images/required/profile.png"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-md">{userName}</p>
          <p className="text-sm text-gray-500">{phone}</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4 text-sm text-gray-700">
        {menuItems.map((item) =>
          item.action === "logout" ? (
            <button
              key={item.label}
              onClick={handleLogout}
              className="flex items-center gap-2 hover:text-green-600 w-full text-left"
            >
              <i className={`${item.icon} w-4 text-gray-400`}></i>
              <span>{item.label}</span>
            </button>
          ) : (
            <Link
              to={item.to}
              key={item.label}
              className="flex items-center gap-2 hover:text-green-600"
            >
              <i className={`${item.icon} w-4 text-gray-400`}></i>
              <span>{item.label}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default AccountDropdown;
