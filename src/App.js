import React from 'react';
import TickerWidget from 'components/TickerWidget';
import ConverterWidget from 'components/ConverterWidget';
import ChartWidget from 'components/ChartWidget';
import MarqueeWidget from 'components/MarqueeWidget';

const App = () => (
  <div>
    <div style={{ width: '300px', height: '200px', border: '1px solid #ccc', padding: '10px' }}>
      <TickerWidget />
    </div>
    <div style={{ width: '300px', height: '200px', border: '1px solid #ccc', padding: '10px' }}>
      <ConverterWidget />
    </div>
    <div style={{ width: '300px', height: '200px', border: '1px solid #ccc', padding: '10px' }}>
      <ChartWidget />
    </div>
    <div style={{ width: '300px', height: '200px', border: '1px solid #ccc', padding: '10px' }}>
      <MarqueeWidget />
    </div>
  </div>
);

export default App;
