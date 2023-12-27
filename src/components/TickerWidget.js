// components/TickerWidget.js

import React from 'react';

const TickerWidget = ({id}) => {
  return (
    <div id="ticker">
      <coingecko-coin-ticker-widget coin-id={id.toLowerCase()} currency="usd" locale="en" vce-ready></coingecko-coin-ticker-widget>
    </div>
  );
};

export default TickerWidget;