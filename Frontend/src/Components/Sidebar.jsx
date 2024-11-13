import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // To handle navigation

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(isSidebarOpen);

  // Sync sidebar state with isSidebarOpen prop
  useEffect(() => {
    setIsOpen(isSidebarOpen); // Open or close sidebar based on isSidebarOpen
  }, [isSidebarOpen]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsSidebarOpen(!isOpen); // Toggle the isSidebarOpen state in the parent component
  };

  return (
    <div
      className={` fixed top-0 bottom-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen transition-transform duration-1000 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center rounded-md justify-between">
          <img src="static/img/eventure.png" className="h-[30px]" alt="Eventure Logo" />
          <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold" onClick={toggleSidebar}>X</h1>
          <i className="bi bi-x cursor-pointer" onClick={toggleSidebar}></i>
        </div>
        <hr className="my-2 text-gray-600" />

        <div>
          <Link to="/profile">
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-person-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">Profile</span>
            </div>
          </Link>

          <Link to="/myevents">
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">My events</span>
            </div>
          </Link>

          <Link to="/dashboard">
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-grid"></i>
              <span className="text-[15px] ml-4 text-gray-200">Dashboard</span>
            </div>
          </Link>

          <hr className="my-4 text-gray-600" />

          
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600" onClick={()=>{
              localStorage.removeItem('token'); // Remove token from localStorage
    setIsAuthenticated(false);
    setIsOpen(false);
    }}>
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
