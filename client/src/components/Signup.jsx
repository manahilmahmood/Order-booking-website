import React, { useState } from 'react';
import logimg from '../assets/images/login.png';
import { Link } from 'react-router-dom';
import { postWithoutToken } from "../api/fetch";
import { endPoint } from "../utli/url";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = {
        name,
        email,
        password,
      };

      const res = await postWithoutToken(endPoint.register, data); 
      console.log(res, "signup");

      localStorage.setItem("token", res.accesstoken);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-50 flex justify-center items-center min-h-screen">
      <div className="flex w-4/6 h-auto my-8 mb-14 border rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Side */}
        <div className="w-2/4 relative">
          <img src={logimg} alt="login" className="w-full h-full object-cover" />
        </div>

        {/* Right Section */}
        <div className="w-2/4 p-10 flex flex-col justify-center items-center">
          <h1 className="text-green-500 font-bold text-[1.8rem]">Sign Up</h1>

          <div className="w-full max-w-sm space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-800">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-800">
                  Email <span className="text-red-500">*</span>
                </label>
                <span className="text-green-500 text-sm cursor-pointer">Use Phone Instead</span>
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-800">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Button */}
            <button
              onClick={handleRegister}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-bold text-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </div>

          <Link to="/Login">
            <p className="mt-5 text-sm">
              Already have an account? <span className="text-green-500 cursor-pointer font-semibold">Sign In</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
