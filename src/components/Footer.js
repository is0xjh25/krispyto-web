// components/Navbar.js

import React from "react";

const Footer = ({ className }) => {
  const navbarStyle = {
    height: '10vh',
    width: '100%',
    backgroundColor: '#444', // You can change the background color
    position: 'fixed',
    bottom: 0,
    zIndex: 1000, // Adjust the z-index as needed
    // Add more styles as needed
  };

  return (
    <div className={className} style={navbarStyle}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;