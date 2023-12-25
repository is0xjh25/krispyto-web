// components/Dashboard.js

import React from 'react';

const Dashboard = () => {
  const dashboardStyle = {
    backgroundColor: 'blue',
    minHeight: '100vh', // Ensure the component takes at least the full viewport height
    padding: '20px', // Add padding for better visibility
  };

  return (
    <div style={dashboardStyle}>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;