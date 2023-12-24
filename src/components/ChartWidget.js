// components/ChartWidget.js

import React from 'react';
import useScript from 'utilities/useScript';

const ChartWidget = () => {
  
  useScript('https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js');
  return (
    <div>
      <coingecko-coin-compare-chart-widget  coin-ids="bitcoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
    </div>
  );
};

export default ChartWidget;