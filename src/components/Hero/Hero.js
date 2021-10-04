import React from 'react';
import './Hero.css'
const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id='hero' className='pt-5'>
        <div className='container align-items-center pb-5'>
          <h1 className='pt-5 mt-5'><span>WELCOME TO <span className='text-warning'>YouKo!</span></span> <br />
            KARATE & MARTIAL
            ARTS SCHOOL</h1>

          <p>We are here to give you all the information you need to start your martial arts and combat sports journey!<br />
            Way of Martial Arts is run by a small group of martial arts enthusiasts.

            We have years of experience in various martial arts and combat sports, working with children, amateurs, and professionals.</p>
          <button className='btn btn-warning rounded-pill mb-5 px-5'>Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Hero;