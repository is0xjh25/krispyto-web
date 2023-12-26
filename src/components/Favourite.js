// components/Favourite.js

import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';


const Favourite = () => {

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div>
          <h1>Favourite</h1>
        </div>
      </main> 
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Favourite;