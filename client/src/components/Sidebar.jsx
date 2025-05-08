// components/Sidebar.jsx
import React from 'react';
import {
  FaTachometerAlt,
  FaCashRegister,
  FaBell,
  FaUsers,
  FaShoppingCart,
  FaUser,
  FaInbox,
  FaBoxOpen,
  FaUserTie,
  FaUserFriends,
  FaBriefcase,
  FaFileInvoiceDollar,
  FaChartLine
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen overflow-y-auto fixed top-0 left-0">
      <div className="p-5 text-green-600 font-extrabold text-2xl border-b">🛒 StoreKing</div>

      <nav className="p-4 space-y-4 text-gray-700 text-sm">
        <div className="flex items-center gap-2 p-2 bg-green-100 rounded font-semibold text-green-600">
          <FaTachometerAlt /> Dashboard
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">POS & Orders</p>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaCashRegister /> POS
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaInbox /> POS Orders
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaBoxOpen /> Online Orders
          </div>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Communications</p>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaBell /> Push Notifications
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaUser /> Subscribers
          </div>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Users</p>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaUserTie /> Delivery Boys
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaUserFriends /> Customers
          </div>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">EMPLOYEES</p>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaBriefcase /> Employees
          </div>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">ACCOUNTS</p>
          <div className="flex items-center gap-2 p-2 hover:bg-green-50 rounded cursor-pointer">
            <FaFileInvoiceDollar /> Transactions
          </div>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">REPORTS</p>
          <div className="flex items-center gap-2 p-2 bg-green-50 text-green-600 rounded cursor-pointer font-medium">
            <FaChartLine /> Sales Report
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
