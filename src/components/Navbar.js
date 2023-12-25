// components/Navbar.js

import React, { useState }from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHouse, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Logo from 'images/krispyto-logo.png';
import './styles.css';

const Navbar = ({ onSearch, className }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
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
        <FontAwesomeIcon icon={faHouse} className="navbar-fa-icon"/>
        {/* <Link to="/favourite">
          <FontAwesomeIcon icon={faStar} className="navbar-fa-icon"/>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;