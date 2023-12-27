// components/MarqueeWidget.js

import React from 'react';

const MarqueeWidget = () => {
  return (
    <div id="marquee">
      <coingecko-coin-price-marquee-widget coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
    </div>
  );
};

export default MarqueeWidget;