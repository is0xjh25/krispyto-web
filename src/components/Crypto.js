// components/Crypto.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import MarqueeWidget from 'components/MarqueeWidget';
import TickerWidget from 'components/TickerWidget';
import ConverterWidget from 'components/ConverterWidget';
import ChartWidget from 'components/ChartWidget';

import './styles.css';

const Crypto = (className) => {
  
  const { crypto } = useParams();
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  useEffect(() => {
    const [cryptoName, cryptoSymbol] = crypto.split('-');
    setName(cryptoName);
    setSymbol(cryptoSymbol);
  }, [crypto]);

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className={`crypto-container ${className}`}>
          <div className='crypto-block' id='crypto-block-title'>
            <h1> watching: {name} - {symbol}</h1>
          </div>
          <div className='crypto-block' id='crypto-block-marquee'>
            <MarqueeWidget/>
          </div>
          <div className='crypto-block'  id='crypto-block-sub'>
            <div className='crypto-block'  id='crypto-block-sub-sub'>
              <div className='crypto-block' id='crypto-block-ticker'>
                <TickerWidget id={name}/> 
              </div>
              <div className='crypto-block' id='crypto-block-converter'>
                <ConverterWidget id={name}/> 
              </div>
            </div>
            <div className='crypto-block' id='crypto-block-chart'>
              <ChartWidget id={name}/> 
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Crypto;