import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import MainContent from './MainContent';

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Disable scrolling on the body when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="bg-white h-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex flex-col transition-all duration-300 ${
          isOpen ? 'ml-64 w-[calc(100%-16rem)]' : 'ml-0 w-full'
        }`}
      >
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        
        {/* Main content */}
        <div className="flex-grow overflow-auto">
          {/* Pass isOpen to HomeComponent */}
          <MainContent isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
