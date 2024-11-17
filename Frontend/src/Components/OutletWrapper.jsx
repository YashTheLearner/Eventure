import React from 'react';
import { Outlet } from 'react-router-dom';

const OutletWrapper = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return <Outlet context={{toggleSideBar }} />;
};

export default OutletWrapper;