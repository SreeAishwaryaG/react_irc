import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className='footer'>
        <div className='footerhead1'>
          <h1>Know About Us</h1>
          <ul className='list1'>
            <Link to='/about'style={{ textDecoration:'none',color:"violet"}}>
            <li>Who are we?</li>
            </Link>
            <Link to='/terms'style={{ textDecoration:'none',color:"violet"}}>
            <li>Terms of Service</li>
            </Link>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footerhead1'>
          <h1>Categories</h1>
          <ul className='list2'>
            <li>Board Games</li>
            <li>Arts and Crafts</li>
            <li>Puzzles</li>
            <li>Toy Cars, Vehicles</li>
          </ul>
        </div>
        <div className='footerhead1'>
          <h1>Connect With Us</h1>
          <div className='icons-container'>
            <a href='https://in.pinterest.com/'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://in.pinterest.com/'><FontAwesomeIcon icon={faPinterest} /></a>
            <a href='https://www.twitter.com/'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
