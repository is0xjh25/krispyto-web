// components/TickerWidget.js

import React from 'react';
import { useScript } from 'utilities/Utilities';

const TickerWidget = ({id}) => {
  
  useScript('https://widgets.coingecko.com/coingecko-coin-ticker-widget.js');

  return (
    <div id="ticker">
      <coingecko-coin-ticker-widget coin-id={id.toLowerCase()} currency="usd" locale="en" vce-ready></coingecko-coin-ticker-widget>
    </div>
  );
};

export default TickerWidget;