// components/ConverterWidget.js

import React from 'react';

const ConverterWidget = ({id}) => {
  return (
    <div id="converter">
      <coingecko-coin-converter-widget  coin-id={id.toLowerCase()} currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>
    </div>
  );
};

export default ConverterWidget;