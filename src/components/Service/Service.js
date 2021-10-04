import React from 'react';
import './Service.css'
const Service = (props) => {
  const { name, img, time, price, des } = props.service;
  return (
    <div class="col-md-3 mb-5">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body mb-2">
          <h2 class="text-warning mt-3 pb-4 fw-bolder">${price}<small className='fw-normal'>/Month</small></h2>
          <p class="text-muted"><i class="far fa-clock"></i> {time}</p>
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{des.substring(0, 190)}</p>
          <button className='btn btn-warning d-block w-100'><i class="fa fa-calendar"></i> Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;