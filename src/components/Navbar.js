// components/Navbar.js

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSnackbar } from 'notistack';
import { findCrypto } from 'api/api';
import Logo from 'images/krispyto-logo.png';
import './styles.css';

const Navbar = ({ onSearch, className }) => {

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery === '') {
      enqueueSnackbar("There is nothing to search!", { variant: 'warning' });
    } else {
      let ok
      findCrypto(searchQuery)
      .then((result) => {
        ok = result.ok;
        return result.body;
      })
      .then((data) => {
        if (ok) {
          const { name, symbol } = data;
          navigate(`/crypto/${name}-${symbol}`);
          enqueueSnackbar(`${name}-${symbol} is found`, { variant: 'success' });
        } else {
          enqueueSnackbar(data.error, { variant: 'error' });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        enqueueSnackbar(error, { variant: 'error' });
      });
    }
  };

  return (
    <div className={`navbar-container ${className}`}>
      <div className='navbar-block' id='navbar-block-nav'>
        <div className='navbar-block' id='navbar-block-logo'>
          <img id='navbar-block-logo-img' src={Logo} alt="krispyto-logo"/>
        </div>
        <div className='navbar-block' id='navbar-block-search-bar'>
          <input id="search-input" type="text" placeholder="Find crypto" value={searchQuery} onChange={handleInputChange} />
          <button id="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className='navbar-block' id='navbar-block-buttons'>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} className="navbar-fa-icon"/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;