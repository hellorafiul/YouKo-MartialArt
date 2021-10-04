import React from 'react';
import './Ceo.css'
import { Link } from "react-router-dom";
import ceoImg from '../../images/ceo.png'
import ceosig from '../../images/signature.png'


const Ceo = () => {
  return (
    <>
      <div id="ceo" className='text-center  pt-5 align-items-center'>
        <h1 className='text-light pt-5'>Have Faith!</h1>
        <p className='text-light lead'>Self Confidence Is The Most Important Things, No Matter Where You Are!</p>
      </div>
      <div className='container mt-5'>
        <div className="row align-items-center">
          <div className="col-md-6 align-items-end">
            <img className="img-fluid ceo" src={ceoImg} alt="" />
          </div>
          <div className="col-md-6 ceo-right pb-5">
            <img className="img-fluid p-5" src={ceosig} alt="" />
            <h2 className="ps-0 ms-0 text-left">About The CEO</h2>
            <h3>Mark Lawrence</h3>
            <p>Owner & CEO at YouKo since 1986</p>
            <p>Mark is a Thai businessman who grew up the ranks of the business world fast. In just a decade or so, he found himself working in the US and soon ended up on Wall Street as a hedge fund manager. To his clients and business partners, he is a guru with accounts, but to others he is the most powerful man in Asian martial arts.</p>

            <p>With a history in business, this man may not be amazing in the ring, but he has been instrumental in the success of fighting championships like ONE Championship, an international martial arts promotion outfit that was founded in 2011.</p>
            <p>
              Chatri has driven this venture into glory, with a passion for martial arts and a knowledge of business. While he chomps at the Wall Street bit, he keeps the martial arts world alive with his ventures and investment – with people dubbing him ‘the most powerful man in Asian martial arts’.</p>
            <Link className='link' to="#">READ MORE </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ceo;