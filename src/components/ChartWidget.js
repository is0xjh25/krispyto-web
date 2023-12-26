// components/ChartWidget.js

import React from 'react';
import { useScript } from 'utilities/Utilities';

const ChartWidget = ({id}) => {
  console.log(id)
  useScript('https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js');
  return (
    <div id='chart'>
      <coingecko-coin-compare-chart-widget  coin-ids={id.toLowerCase()} currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
    </div>
  );
};

export default ChartWidget;