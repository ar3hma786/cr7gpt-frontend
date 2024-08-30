import React from 'react';
import { FiMenu, FiEdit } from 'react-icons/fi';

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full text-white p-4 flex justify-between items-center z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-64' : 'translate-x-0'
      }`}
    >   
      {!isOpen && (
        <button
          className="text-[#01a54e] p-2"
          onClick={toggleSidebar}
        >
          <FiMenu className="text-xl" />
        </button>
      )}
      {!isOpen && (
        <FiEdit className="text-[#01a54e] text-xl cursor-pointer mx-3" />
      )}
      <div className="text-xl">CR7GPT</div>
      <div className={`flex space-x-2 ${isOpen ? 'ml-0' : 'ml-auto'}`}>
        <button className="bg-[#5f2025] text-white px-3 py-1 rounded-full text-lg">
          Login
        </button>
        <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
