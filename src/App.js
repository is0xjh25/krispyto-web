// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Dashboard from 'components/Dashboard';
import Favourite from 'components/Favourite';
import Crypto from 'components/Crypto';
import NotFound from 'components/NotFound'; 

const App = () => (
  <React.Fragment>
    
    <Router>
      <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path='/favourite'element={<Favourite />}/>
        <Route exact path='/crypto'element={<Crypto />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

      <footer>
        <Footer />
      </footer>
    </Router>
  </React.Fragment>
);

export default App;