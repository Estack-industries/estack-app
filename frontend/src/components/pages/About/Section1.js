import React from 'react';
import './Section1.css';
import { SECTION1_TITLE, SECTION1_PARAGRAPH } from './strings/en.js';
import Rectangle287 from './assets/Rectangle 287.png';
import lf20_RQZAm1 from './assets/lf20_RQZAm1.png';

function Section1() {
  return (
    <div className='section1-container'>
      {/* Why Section */}
      <div className='why-grid'>
        <div className='why-info'>
          <h2>{SECTION1_TITLE}</h2>
          <p>{SECTION1_PARAGRAPH}</p>
        </div>
        <img className='why-image' src={Rectangle287} alt='rectangle'></img>
      </div>
      {/* Divider */}
      <div className='divider-grid'>
        <img className='divider-image' src={lf20_RQZAm1} alt='rectangle'></img>
        <div className='divider'></div>
      </div>
    </div>
  )
}

export default Section1