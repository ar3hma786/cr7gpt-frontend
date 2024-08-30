import React from 'react';
import { FiMenu, FiEdit } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    'Tailwind CSS Layout',
    'CR7GPT Entity Model',
    'ChatGPT Clone Model',
    'CR7GPT Clone Setup',
    'Hibernate NullPointerException Fix',
    'CR7GPT Entity Models',
    'Fix Mobile Layout Issues',
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-[#5f2025] text-white h-screen p-5 shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out flex flex-col justify-between`}
    >
      <div>
        <div className="flex justify-between mb-8">
          <FiMenu
            className="text-[#01a54e] text-xl cursor-pointer"
            onClick={toggleSidebar}
          />
          <FiEdit className="text-[#01a54e] text-xl cursor-pointer" />
        </div>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block bg-[#5f2025] text-white px-4 py-2 rounded-lg hover:bg-[#901b23] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-auto">
        <button className="bg-[#FFAD60] text-white px-4 py-2 rounded-lg hover:bg-[#5f2025] w-full">
          Add Team Workspace
        </button>
        <p className="mt-2 text-sm text-white">Collaborate on a Team plan</p>
      </div>
    </div>
  );
};

export default Sidebar;
