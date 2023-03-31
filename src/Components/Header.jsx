import React from 'react';

function Header() {
  return (

    <header className="site-header business-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/"><img src="images/logo.svg" alt="" /></a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link custom-btn" href="/implementation-partners" aria-current="page"> 
              <span>Implementation Partners</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-btn" href="#" aria-current="page"> 
              <span>Blog</span>
               </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header