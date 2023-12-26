// components/Crypto.js

import React from 'react';
import { useParams } from 'react-router-dom';

const Crypto = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Crypto: {name}</h1>
    </div>
  );
};

export default Crypto;