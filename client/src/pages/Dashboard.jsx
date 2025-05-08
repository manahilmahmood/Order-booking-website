import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6 space-y-5">
        <div className="bg-red-100 text-red-600 p-3 rounded">
          Reminder! Dummy data will be reset in every 30 minutes.
        </div>

        <h2 className="text-2xl font-bold text-green-600">Good Morning!</h2>
        <p className="text-xl font-medium">Kiran Khan</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-green-500 text-white p-4 rounded shadow">
            <i class="fa-solid fa-dollar-sign text-center font-md border-[10px]  rounded-full w-12 h-12 p-1"></i> Total Earnings
          </div>
          <div className="bg-red-500 text-white p-4 rounded shadow">
            <i class="fa-solid fa-box text-center font-md border-[10px]  rounded-full w-12 h-12 p-1"></i> Total Orders
          </div>
          <div className="bg-purple-500 text-white p-4 rounded shadow">
            <i class="fa-solid fa-users text-center font-md border-[10px]  rounded-full w-12 h-12 p-1"></i> Total Customers
          </div>
          <div className="bg-blue-500 text-white p-4 rounded shadow">
            <i class="fa-solid fa-clipboard text-center font-md border-[10px]  rounded-full w-12 h-12 p-1 mr-1"></i>Total Products
          </div>
        </div>

        {/* Order Statistics */}
        <h3 className="text-xl font-semibold mt-6">Order Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-box text-center font-md text-red-500 border-red-200 border-[10px]  rounded-full w-12 h-12 p-1"></i> Total Orders
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-hourglass-end text-center font-md  text-yellow-300 border-yellow-200 border-[10px]  rounded-full w-12 h-12 p-1"></i> Pending
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-box text-center font-md text-green-500 border-green-200 border-[10px]  rounded-full w-12 h-12 p-1"></i> Confirmed
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-truck text-center font-md  text-blue-500 border-blue-200 border-[10px]  rounded-full w-12 h-12 p-1"></i> Ongoing
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-box text-center font-md  text-purple-500 border-purple-200 border-[10px]  rounded-full w-12 h-12 p-1"></i> Delivered
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-truck text-center font-md  text-red-500 border-red-200 border-[10px]  rounded-full w-12 h-12 p-1"></i> Canceled
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-rotate-left text-center font-md  text-blue-500 border-blue-200 border-[10px]  rounded-full w-12 h-12 p-1"></i> Returned
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <i class="fa-solid fa-box text-center font-md  text-red-500 border-red-200 border-[10px]  rounded-full w-12 h-12 p-1"></i>Rejected
          </div>
        </div>

        {/* Sales & Order Summary */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 h-auto">
          {/* Sales Summary */}
          <div className="bg-white rounded shadow border w-full md:w-1/2 h-28 flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-md font-semibold">Sales Summary</h3>
              <input placeholder='search date' className="border p-1 w-[8rem] rounded-md" />
            </div>
            <div className="p-4 flex flex-row gap-2 overflow-y-auto">
              <p className="text-gray-500">Total Sales</p> 
              <p className="text-gray-500">Avg Sale Per Day</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded shadow border w-full md:w-1/2 h-72 flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-md font-semibold">Order Summary</h3>
              <input placeholder='search date' className="border p-1 w-[8rem] rounded-md" />
            </div>
            <div className="p-4 flex flex-col gap-3 overflow-y-auto">
              <p className="text-black">Delivered (%)</p>
              <hr />
              <p className="text-black">Canceled (%)</p>
              <hr />
              <p className="text-black">Returned (%)</p>
              <hr />
              <p className="text-black">Rejected (%)</p>
            </div>
          </div>
        </div>

        {/* NEW: Customer Status & Top Customer */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 h-auto">
          {/* Customer Status */}
          <div className="bg-white rounded shadow border w-full md:w-1/2 h-28 flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-md font-semibold">Customer Status</h3>
              <input placeholder='search date' className="border p-1 w-[8rem] rounded-md" />
            </div>
            <div className="p-4 text-gray-400 italic">
            
            </div>
          </div>

          {/* Top Customer */}
          <div className="bg-white rounded shadow border w-full md:w-1/2 h-80 flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-md font-semibold">Top Customer</h3>
           </div>
            <div className="p-4 text-gray-400 italic">
            
            </div>
          </div>
        </div>

        <div className="flex mt-4 h-auto">
  {/* Top Product */}
  <div className="bg-white rounded shadow border w-full h-28 mb-5">
    <div className="flex justify-between items-center border-b p-4">
      <h3 className="text-md font-semibold">Top Product</h3>
    </div>
    <div className="p-4 text-gray-400 italic">
      {/* Content goes here */}
    </div>
  </div>
</div>

            
</div>
</div>
          
  );
}
