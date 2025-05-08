import React, { useState } from 'react';
import logimg from '../assets/images/login.png';
import { postWithoutToken } from "../api/fetch";
import { endPoint } from "../utli/url";
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    try {
      const data = {
        email,
        password,
      };
      console.log("Sending data:", data);

      const res = await postWithoutToken(endPoint.login, data);
      console.log("API Response:", res);



      localStorage.setItem("token", res.accesstoken);

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-50 flex justify-center items-center min-h-screen">
      <div className="flex w-4/6 h-auto my-8 border rounded-2xl overflow-hidden shadow-lg">
        {/* left side */}
        <div className="w-2/4 relative">
          <img src={logimg} alt="login" className="w-full h-full object-cover" />
        </div>

        {/* Right Form Section */}
        <div className="w-2/4 p-10 flex flex-col justify-center items-center">
          <h1 className="text-green-500 font-bold text-[1.8rem]">Sign In</h1>
          <p className="text-md text-gray-700 mb-6">Sign in to continue shopping</p>

            {/* Email Field */}
            <div className="w-full mb-4">
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-800">
                  Email <span className="text-red-500">*</span>
                </label>
                <span className="text-green-500 text-xs cursor-pointer">Use Phone Instead</span>
              </div>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-1 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="w-full mb-4">
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-800">
                  Password <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                type="password"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/ForgetPass">
                <span className="ml-[14rem] text-green-500 text-xs cursor-pointer">
                  Forgot Password
                </span>
              </Link>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>

            {/* Submit Button */}
            <button 
               onClick={() => handleLogin()}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-bold text-lg transition-all duration-300"
            >
              Sign In
            </button>

          {/* Sign Up Link */}
          <Link to="/Signup">
            <p className="mt-5 text-sm">
              Don’t have an account?{' '}
              <span className="text-green-500 cursor-pointer font-semibold">Sign Up</span>
            </p>
          </Link>

          {/* Quick Demo Buttons */}
          <div className="mt-6 text-center">
            <p className="text-base font-medium mb-3">For quick demo login click below</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white w-[9rem] py-2 px-4 rounded"
                
              >
                Admin
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white w-[9rem] py-2 px-4 rounded"

              >
                Customer
              </button>
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white w-[9rem] py-2 px-4 rounded"  
              >
                Manager
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white w-[9rem] py-2 px-4 rounded"
              >
                POS Operator
              </button>
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white w-[9rem] py-2 px-4 rounded"
              >
                Delivery Boy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;
