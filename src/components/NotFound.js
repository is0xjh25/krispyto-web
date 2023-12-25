// components/NotFound.js

import React from 'react';

const Favourite = () => {
  const favouriteStyle = {
    backgroundColor: 'yellow',
    minHeight: '100vh', // Ensure the component takes at least the full viewport height
    padding: '20px', // Add padding for better visibility
  };

  return (
    <div style={favouriteStyle}>
      <h1>Favourite</h1>
    </div>
  );
};

export default Favourite;