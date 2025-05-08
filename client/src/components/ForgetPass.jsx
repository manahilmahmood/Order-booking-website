import React from 'react';
import logimg from '../assets/images/login.png';
import {Link} from 'react-router-dom';


function ForgetPass() {
  return (
    <div className="bg-slate-50  flex justify-center items-center min-h-screen">
      <div className="flex w-4/6 h-auto my-10 mb-14 border rounded-2xl overflow-hidden shadow-lg">
       {/* left side */}
        <div className="w-2/4 h[9rem] relative">
          <img src={logimg} alt="login" className="w-full h-full object-cover" />
        </div>
        
        {/* Right Form Section */}
        <div className="w-2/4 px-10 py-5 flex flex-col items-center"> 
        <h1 className="text-green-500 font-bold text-[1.8rem]">
  Forgot Password
</h1>



          <form className=" py-8 w-full max-w-sm space-y-4">
           
            {/* Email Field */}
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-800">Email <span className="text-red-500">*</span></label>
                <span className="text-green-500 text-sm cursor-pointer">Use Phone Instead</span>
              </div>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-bold text-lg transition-all duration-300"
            >
              Get OTP
            </button>
          </form>

          {/* Sign Up Link */}
          <Link to = "/Login">
          <p className=" text-sm text-green-500 cursor-pointer font-semibold">Back To Sign In
          </p></Link>

        </div>
      </div>
    </div>
  );
}





export default ForgetPass