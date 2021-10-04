import React, { useEffect, useState } from 'react';
import HomeSingleService from './../HomeSingleService/HomeSingleService';
import './HomePageService.css'
const HomePageService = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('./homepageData.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className='row homepage-service'>
      <h2>OUR PROGRAMS</h2>
      {
        services.map(service => <HomeSingleService key={service.id} service={service}></HomeSingleService>)
      }
    </div>
  );
};

export default HomePageService;