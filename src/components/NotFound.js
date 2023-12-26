// components/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Logo from 'images/krispyto-logo.png';
import './styles.css';

const NotFound = (className) => {
  return (
    <div className={`not-found-container ${className}`}>
      <div className="not-found-block" id='not-found-block-logo'>
          <img id='not-found-block-logo-img' src={Logo} alt="krispyto-logo"/>
      </div>
      <div className="not-found-block" style={{'flex-direction': 'column'}}>
        <div className="not-found-block-sub">
          <h1>Not Found</h1>
        </div>
        <div className="not-found-block-sub" style={{'align-items': 'flex-start'}}>
          <h3>code: 404</h3>
        </div>
        <div className="not-found-block-sub">
        <button id="not-found-button">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} id="not-found-fa-icon"/>Go Home
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;