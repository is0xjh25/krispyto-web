// components/Navbar.js

import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ className }) => {
  
  const navigate = useNavigate();
  
  const navbarStyle = {
    height: '10vh',
    width: '100%',
    backgroundColor: '#333', // You can change the background color
    position: 'fixed',
    top: 0,
    zIndex: 1000, // Adjust the z-index as needed
  };

  return (
    <div className={className} style={navbarStyle}>
      <h1>NAVBAR</h1>
      <button onClick={()=>navigate('/dashboard', { replace: true })}>
        DASH
      </button>
      <button onClick={()=>navigate('/favourite', { replace: true })}>
        FAV
      </button>
      <button onClick={()=>navigate('/crypto', { replace: true })}>
        CRY
      </button>
    </div>
  );
};

export default Navbar;