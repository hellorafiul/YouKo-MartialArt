import React from 'react';
import './About.css'
import aboutImg from '../../images/about.png'
import signature from '../../images/signature.png'
import { Link } from "react-router-dom";
import HomePageService from './../HomepageService/HomePageService';
const About = () => {
  return (
    <>
      <div id="about" className=' text-center pb-5'>
        <h1 className='pt-5 text-light'>Who We Are!</h1>
        <p className='pt-2 text-light lead'>Rise Together. Achieve As One.</p>
      </div>
      <div className='container my-5'>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-fluid p-5" src={aboutImg} alt="" />
          </div>
          <div className="col-md-6 about-right">
            <img className="img-fluid p-5" src={signature} alt="" />
            <h2 className="ps-0 ms-0 text-left">ABOUT YouKo WORKOUT</h2>
            <h3>THERESA WEBB</h3>
            <p>Fight School has specialized in Street Workout since 1986</p>
            <p>We teach Street Workout because we love it — not because we want to make money on you. Unlike other Street Workout schools, we do not require you to sign long term contracts. You just pay one low monthly fee for your Street Workout classes.</p>
            <Link className='link' to="#">READ MORE </Link>
          </div>
        </div>
      </div>
      <HomePageService></HomePageService>
    </>
  );
};

export default About;