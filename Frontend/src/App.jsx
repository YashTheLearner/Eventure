import React, { useState } from 'react';
import { Navbar } from './Components/Navbar.jsx';
import OutletWrapper from "./Components/OutletWrapper"; // Import the new wrapper component
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar.jsx';

function App() {
  const [isActive, setIsActive] = useState(true); // State to handle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to handle sidebar visibility

  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <OutletWrapper isActive={isActive} /> {/* Use the wrapper component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> {/* Pass the state and setter as props */}
    </>
  );
}

export default App;
