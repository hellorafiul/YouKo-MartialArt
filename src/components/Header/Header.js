import React from 'react';
import './Header.css'
import logo from '../../images/logo-workout.png'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/* Nav Section */}
      <nav className="navbar navbar-expand-lg navbar-dark font-primary bg-dark">
        <div className="container container-fluid">
          <a className="navbar-brand" href="/home"><img src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="youKo collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">Service</Link>
              </li>
              <button className='btn btn-warning ms-md-4 px-md-4'><Link className="text-dark text-decoration-none" to="/contact">Contact</Link></button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;