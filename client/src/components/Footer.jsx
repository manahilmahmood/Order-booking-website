import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../pages/support/Faq';
import Return from '../pages/support/Return';
import Delivery from '../pages/support/Delivery';
import Contact from '../pages/support/Contact';
import About from '../pages/legal/AboutUs';
import Cookies from '../pages/legal/Cookies';
import Privacy from '../pages/legal/Privacy';
import Term from '../pages/legal/Term';



function Footer() {
  return (
    <footer className="bg-[#181831] text-white w-full pt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Logo & Subscribe */}
        <div>
          <img
            className="w-24 mb-4"
            src="https://demo.storeking.xyz/images/required/theme-footer-logo.png"
            alt="StoreKing"
          />
          <p className="mb-3">Subscribe to our newsletter</p>
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-full px-4 py-2 w-full pr-28 text-black"
            />
            <button className="absolute top-1 right-1 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-1.5 text-sm">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 text-xl">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/Faq" className="hover:text-green-500">FAQ</Link></li>
            <li><Link to="/Return" className="hover:text-green-500">Return & Exchange</Link></li>
            <li><Link to="/Delivery" className="hover:text-green-500">Delivery</Link></li>
            <li><Link to="/Contact" className="hover:text-green-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/AboutUs" className="hover:text-green-500">About Us</Link></li>
            <li><Link to="/Cookies" className="hover:text-green-500">Cookies Policy</Link></li>
            <li><Link to="/Term" className="hover:text-green-500">Terms & Conditions</Link></li>
            <li><Link to="/Privacy" className="hover:text-green-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <i className="fa-solid fa-location-dot mr-2"></i>
              House: 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216
            </li>
            <li>
              <i className="fa-solid fa-envelope mr-2"></i>
              info@inilabs.net
            </li>
            <li>
              <i className="fa-solid fa-phone-volume mr-2"></i>
              +8801333384628
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 py-4">
        © StoreKing by iNiLabs 2024, All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
