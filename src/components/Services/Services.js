import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './../Service/Service';
import Ceo from './../Ceo/Ceo';
const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('./Data.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div id="services">
      <div className='text-center pb-5 pt-5 text-light container'>
        <h2>OUR PROGRAMS</h2>
        <p>Our mission is to help our students become more successful in life through their practice, knowledge, and discipline of the Martial Arts. We strive to create a learning environment that allows each student to develop both their physical ability and their character.

          Our instructors teach using methods of encouragement and positive reinforcement, helping students become more disciplined and self-confident inside and outside the Dojang. Instructors at Iron Fist are carefully selected so that we may provide the highest quality educational experience for our students. <br /><br /> Our team of instructors are not only experienced martial artists, but admirable role-models who create strong friendships with students and their families. Of the many principles we teach, or main focus is respect. Our students are taught to always be respectful and polite both inside and outside the Dojang.</p>
      </div>

      <div className='row homepage-service'>
        {
          services.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;