import React from 'react';
import { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0); // Update isSticky based on scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener
    };
  }, []);

  return (

    <header className={`site-header business-header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg" data-aos="fade-up">
          <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></NavLink>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link custom-btn" to="/implementation-partners" aria-current="page"> 
              <span>Implementation Partners</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-btn" to="/blogs" aria-current="page"> 
              <span>Blog</span>
               </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header