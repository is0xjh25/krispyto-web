// components/TickerWidget.js

import React from 'react';
import useScript from 'utilities/useScript';

const TickerWidget = () => {
  
  useScript('https://widgets.coingecko.com/coingecko-coin-ticker-widget.js');

  return (
    <div>
      <coingecko-coin-ticker-widget coin-id="bitcoin" currency="usd" locale="en" vce-ready></coingecko-coin-ticker-widget>
    </div>
  );
};

export default TickerWidget;