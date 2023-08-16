import React, { useState , useEffect } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  
    
  

  
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="assets/icoess-logo.png" alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/service" className='nav-services' onClick={() => setShowMediaIcons(false)}>Services</NavLink>
              <ul className="nav-services-container">
                <li>
                <NavLink to="/webd"  onClick={() => setShowMediaIcons(false)}>Web Development</NavLink>
                </li>
                <li>
                <NavLink to="/webd"  onClick={() => setShowMediaIcons(false)}>App Development</NavLink>
                </li>
                <li>
                <NavLink to="/webd"  onClick={() => setShowMediaIcons(false)}>Staffing</NavLink>
                </li>
                <li>
                <NavLink to="/webd"  onClick={() => setShowMediaIcons(false)}>WebDevelopment</NavLink>
                </li>
                <li>
                <NavLink to="/webd"  onClick={() => setShowMediaIcons(false)}>WebDevelopment</NavLink>
                </li>
                <li>
                <NavLink to="/webd"  onClick={() => setShowMediaIcons(false)}>WebDevelopment</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={() => setShowMediaIcons(false)}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/career" onClick={() => setShowMediaIcons(false)}>Career</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={() => setShowMediaIcons(false)}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowMediaIcons(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com"
                target="_icoess">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jagdishk_7/"
                target="_icoess">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_icoess">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;