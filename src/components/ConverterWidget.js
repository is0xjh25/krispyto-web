// components/ConverterWidget.js

import React from 'react';
import useScript from 'utilities/useScript';

const ConverterWidget = () => {
  
  useScript('https://widgets.coingecko.com/coingecko-coin-converter-widget.js');

  return (
    <div>
      <coingecko-coin-converter-widget  coin-id="bitcoin" currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>
    </div>
  );
};

export default ConverterWidget;