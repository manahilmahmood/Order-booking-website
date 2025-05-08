import React, { useState } from 'react';
import FlagDropdown from './FlagDropdown';
import AccountDropdown from './AccountDropdown';


function AdminHeader() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const dropdown = () => {
    setShow(!show);
  };
  const dropdown2 = () => {
    setShow2(!show2);
  };
  return (
    <div className= "sticky top-0 z-50 bg-white py-4 flex justify-between border-b items-center w-full">
    
    <div className='w-36 px-4'> 
    <img  src="https://demo.storeking.xyz/images/required/theme-logo.png"/>
    </div>
  
   {/*Search Bar*/}
    <div className="flex mr-10 py-[3px] bg-slate-50 rounded-3xl border w-[29rem] h-[2.5rem]">
    <i class="fa-solid fa-magnifying-glass self-center text-base text-gray-600 px-5"></i>
      <input className="bg-transparent outline-none border-none w-  text-black text-base color= black" placeholder='Search...'/>
    </div>
     {/* Drop down language */}
    <div className="flex justify-between w-80 mr-8">
    <button
            onClick={dropdown}
            className="relative  text-sm cursor-pointer text-black capitalize font-l "
          >
    {show && <FlagDropdown />}
    <i class="fa-solid fa-flag-usa mr-2 bg-blue-500 py-1 px-1  rounded-full text-red-600 text-m"></i>
    English
    <i class="fa-solid fa-angle-down text-sm ml-2 text-zinc-800 "></i>
    </button>
    {/* favrt & account */}
    <p><i class="fa-regular fa-heart mr-2 bg-green-500 py-1 px-1  rounded-full text-white text-xs"></i> Favrouit</p>
      {/* Account */}
    
    <button
    onClick={dropdown2}
    className="relative text-sm cursor-pointer text-black capitalize font-l flex items-center"
    >
    {show2 && <AccountDropdown />}
      <i className="fa-solid fa-user mr-2 bg-green-500 py-1 px-1 rounded-full text-white text-xs"></i>
      Account
      <i class="fa-solid fa-angle-down text-sm ml-2 text-zinc-800 "></i>
    </button>

    </div>
  </div>
  )
}

export default AdminHeader


