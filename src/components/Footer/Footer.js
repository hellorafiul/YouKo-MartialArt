import React from 'react';
import './Footer.css';
import apple from '../../images/App Store Badge.png';
import google from '../../images/Google Play Badge.png';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container footer-area">
        <div className="row d-flex justify-content-between align-items-start py-5">
          <div className="col-md-7 footer-menu align-items-end">
            <div>
              <Link to="#">Download Now</Link>
              <Link to="#">License</Link>
            </div>
            <div className="footer-menu py-2">
              <Link to="/home">Home</Link>
              <Link to="/service">Service</Link>
              <Link to="/about">About</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Careers</Link>
              <Link to="#">Help</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-social d-md-block d-none">
              <a href="/facebook"><i className="fab fa-facebook"></i></a>
              <a href="/twitter"><i className="fab fa-twitter"></i></a>
              <a href="/linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="/insta"><i className="fab fa-instagram"></i></a>
              <a href="/youtube"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="pt-4 d-md-block d-none">&copy; 2021 YouKo, Inc. All rights reserved</p>
          </div>
          <div className="col-md-4 d-lg-grid justify-content-end footer-right mt-4 mt-sm-0">
            <p className="text-white">Get the App</p>
            <a href="#"><img src={apple} className="d-block pb-3" alt="" /></a>
            <a href="#"><img src={google} alt="" /></a>
          </div>
          <div className="footer-social d-md-none pt-4">
            <a href="/facebook"><i className="fab fa-facebook"></i></a>
            <a href="/twitter"><i className="fab fa-twitter"></i></a>
            <a href="/linkedin"><i className="fab fa-linkedin-in"></i></a>
            <a href="/instagram"><i className="fab fa-instagram"></i></a>
            <a href="/youtube"><i className="fab fa-youtube"></i></a>
          </div>
          <p className="d-md-none pt-4 text-white">&copy; 2021 YouKo, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;