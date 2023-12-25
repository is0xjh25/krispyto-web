// components/MarqueeWidget.js

import React from 'react';
import { useScript } from 'utilities/Utilities';

const MarqueeWidget = () => {
  
  useScript('https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js');
  return (
    <div>
      <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
    </div>
  );
};

export default MarqueeWidget;