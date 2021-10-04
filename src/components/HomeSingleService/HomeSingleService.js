import React from 'react';
import './HomeSingleService.css'
import { Link } from "react-router-dom";
const HomeSingleService = (props) => {
  const { name, img, time, price, des } = props.service;
  return (
    <div class="col-md-3 mb-5">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{des.substring(0, 150)}... <Link className='link' to="/service">See Details</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleService;