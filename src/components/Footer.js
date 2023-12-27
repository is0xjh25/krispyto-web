// components/Footer.js

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquarePhone} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import Favicon from 'images/is0-favicon.png';
import './styles.css';

const Footer = ({ className }) => {

  return (
    <div className={`footer-container ${className}`}>
      <div className='footer-block' id='footer-block-repo'>
        <div className='footer-block-sub'>
          <h1>GitHub Repo </h1>
        </div>
        <div className='footer-block-sub'>
          <div className='footer-block-sub-sub'>
            <h3> >> <a href="https://github.com/is0xjh25/krispyto-web" target="_blank" rel="noopener noreferrer">krispyto-web</a></h3>
          </div>
          <div className='footer-block-sub-sub'>
            <h3> >> <a href="https://github.com/is0xjh25/krispyto-server" target="_blank" rel="noopener noreferrer"> krispyto-server</a></h3>
          </div>
        </div>
      </div>
      <div className='footer-block' id='footer-block-favicon' style={{'flex': 1}}>
        <div id='footer-favicon'>
          <a href="https://is0xjh25.github.io" target="_blank" rel="noopener noreferrer"><img id='footer-favicon-image' src={Favicon} alt="is0-favicon"/></a>
        </div>
      </div>
      <div className='footer-block'>
        <div className='footer-block-sub'>
          <div className='footer-block-sub-sub'>
            <h3><FontAwesomeIcon icon={faEnvelope} className="fa-icon"/><a href="mailto:is0.jimhsiao@gmail.com">Email ME</a></h3>
          </div>
          <div className='footer-block-sub-sub'>
            <h3><FontAwesomeIcon icon={faSquarePhone} className="fa-icon"/><a href="https://www.linkedin.com/in/jim-hsiao/" target="_blank" rel="noopener noreferrer">+61415863535</a></h3>
          </div>
        </div>
        <div className='footer-block-sub'>
          <div className='footer-block-sub-sub'>
            <h3><FontAwesomeIcon icon={faLinkedin} className="fa-icon"/><a href="https://www.linkedin.com/in/jim-hsiao/" target="_blank" rel="noopener noreferrer">Yun-Chi Hsiao</a></h3>
          </div>
          <div className='footer-block-sub-sub'>
            <h3><FontAwesomeIcon icon={faSquareGithub} className="fa-icon"/><a href="https://github.com/is0xjh25" target="_blank" rel="noopener noreferrer">is0xjh25</a></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;