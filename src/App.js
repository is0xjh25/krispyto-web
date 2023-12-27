// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useScript } from 'utilities/Utilities';
import Dashboard from 'components/Dashboard';
import Crypto from 'components/Crypto';
import NotFound from 'components/NotFound';
import 'App.css'; 

const App = () => {

  useScript('https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js');
  useScript('https://widgets.coingecko.com/coingecko-coin-converter-widget.js');
  useScript('https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js');
  useScript('https://widgets.coingecko.com/coingecko-coin-ticker-widget.js');

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/crypto/:crypto" element={<Crypto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;