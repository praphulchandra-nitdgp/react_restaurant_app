import React from 'react';
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <NavLink to="/">Fork Frenzy</NavLink>
        </div>
        <div className="follow">
            <h1>Follow Us</h1>
            <ul className="links">
                <li><a href="https://www.facebook.com/profile.php?id=100011406948979"><FacebookIcon /></a></li>
                <li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
                <li><a href="#"><TwitterIcon /></a></li>
            </ul>
        </div>
        <p className="copyright">©Since 2024, By G.Praphul Chandra</p>
      </div>
    </footer>
  );
};

export default Footer;