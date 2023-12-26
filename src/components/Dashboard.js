// components/Dashboard.js

import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Dashboard = () => {

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div>
          <h1>Dashboard</h1>
        </div>
      </main> 
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;