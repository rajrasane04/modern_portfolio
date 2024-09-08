// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-red-100 py-6 mt-6 ml-6 mr-6 rounded-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-900 pl-6 ">
          Your Name
        </div>

        <nav>
          <ul className="flex space-x-8 text-gray-600 pr-8">            
            <li className="hover:text-pink-500 transition">
              <Link to='/projects'>
              Projects
              </Link>
            </li>

            <li className="hover:text-pink-500 transition">
              <Link to='/about'>
              About
              </Link>
            </li>
            
            <li className="hover:text-pink-500 transition">
              <Link to='/contact'>
              Contact
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
