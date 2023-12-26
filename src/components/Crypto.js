// components/Crypto.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSnackbar } from 'notistack';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import MarqueeWidget from 'components/MarqueeWidget';
import TickerWidget from 'components/TickerWidget';
import ConverterWidget from 'components/ConverterWidget';
import ChartWidget from 'components/ChartWidget';
import { setCookie, getCookie } from 'utilities/Utilities';

import './styles.css';

const Crypto = (className) => {
  
  const { crypto } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  useEffect(() => {
    const [cryptoName, cryptoSymbol] = crypto.split('-');
    setName(cryptoName);
    setSymbol(cryptoSymbol);

    const button = document.getElementById('crypto-block-favicon');
    let favoriteNames = getCookie('cryptoFavoriteNames');
    let favoriteSymbols = getCookie('cryptoFavoriteSymbols');
    favoriteSymbols = favoriteSymbols ? JSON.parse(favoriteSymbols) : [];
    const isFavorited = favoriteSymbols.includes(cryptoSymbol);
    button.style.color = isFavorited ? 'var(--primary-color)' : 'var(--secondary-color)';
  }, [crypto]);

  const toggleFavorite = (cryptoName, cryptoSymbol) => {
    const button = document.getElementById('crypto-block-favicon');
  
    let favoriteNames = getCookie('cryptoFavoriteNames');
    let favoriteSymbols = getCookie('cryptoFavoriteSymbols');
    favoriteNames = favoriteNames ? JSON.parse(favoriteNames) : [];
    favoriteSymbols = favoriteSymbols ? JSON.parse(favoriteSymbols) : [];
  
    const isFavorited = favoriteSymbols.includes(cryptoSymbol);
  
    if (isFavorited) {
      const symbolIndex = favoriteSymbols.indexOf(cryptoSymbol);
      if (symbolIndex !== -1) {
        favoriteSymbols.splice(symbolIndex, 1);
        favoriteNames.splice(symbolIndex, 1);
        button.style.color = 'var(--secondary-color)'
        enqueueSnackbar("Remove from favourite!", { variant: 'info' });
      }
    } else {
      favoriteSymbols.push(cryptoSymbol);
      favoriteNames.push(cryptoName);
      button.style.color = 'var(--primary-color)'
      enqueueSnackbar("Add to favourite!", { variant: 'info' });
    }
  
    setCookie('cryptoFavoriteNames', JSON.stringify(favoriteNames), 30);
    setCookie('cryptoFavoriteSymbols', JSON.stringify(favoriteSymbols), 30);
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className={`crypto-container ${className}`}>
          <div className='crypto-block' id='crypto-block-title'>
            <div className='crypto-block' id='crypto-block-button'>
              <button id='crypto-fav-button' onClick={() => toggleFavorite(name, symbol)}><FontAwesomeIcon icon={faStar} id='crypto-block-favicon'/></button>
            </div>
            <div className='crypto-block' id='crypto-block-subtitle'>
              <h1> watching: {name} - {symbol}</h1>
            </div>
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