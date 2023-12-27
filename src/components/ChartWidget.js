// components/ChartWidget.js

import React from 'react';

const ChartWidget = ({id}) => {
  return (
    <div id='chart'>
      <coingecko-coin-compare-chart-widget  coin-ids={id.toLowerCase()} currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
    </div>
  );
};

export default ChartWidget;