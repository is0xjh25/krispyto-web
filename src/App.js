// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import Favourite from 'components/Favourite';
import Crypto from 'components/Crypto';
import NotFound from 'components/NotFound';
import 'App.css'; 

const App = () => (
  <>
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/favourite" element={<Favourite />} />
        <Route exact path="/crypto/:name" element={<Crypto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;