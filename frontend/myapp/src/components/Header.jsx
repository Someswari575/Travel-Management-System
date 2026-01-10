import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const loc = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container container-800">
        <Link className="navbar-brand" to="/">ANNAPURNA TRAVELS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className={`nav-link ${loc.pathname === '/' ? 'active' : ''}`} to="/">Home</Link></li>
            <li className="nav-item"><Link className={`nav-link ${loc.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link></li>
            <li className="nav-item"><Link className={`nav-link ${loc.pathname === '/book' ? 'active' : ''}`} to="/book">Book</Link></li>
            <li className="nav-item"><Link className={`nav-link ${loc.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link></li>
          </ul>
          <div className="ms-3 d-none d-lg-block text-white">
            <small>Call: 8143777874 | 9985063087</small>
          </div>
        </div>
      </div>
    </nav>
  );
}
