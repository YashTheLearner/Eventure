import React from 'react';
import { Outlet } from 'react-router-dom';

const OutletWrapper = ({ isActive }) => {
  return <Outlet context={{ isActive }} />;
};

export default OutletWrapper;
