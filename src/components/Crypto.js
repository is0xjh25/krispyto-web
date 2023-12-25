// components/Crypto.js

import React from 'react';

const Crypto = () => {
  const cryptoStyle = {
    backgroundColor: 'yellow',
    minHeight: '100vh', // Ensure the component takes at least the full viewport height
    padding: '20px', // Add padding for better visibility
  };

  return (
    <div style={cryptoStyle}>
      <h1>Crypto</h1>
    </div>
  );
};

export default Crypto;