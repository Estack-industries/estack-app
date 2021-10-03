import React from 'react';
import './Section2.css';
import { SECTION2_TITLE, SECTION2_PARAGRAPH } from './strings/en.js';
import Rectangle287 from './assets/Rectangle 287.png';
import lf20_RQZAm1 from './assets/lf20_RQZAm1.png';

function Section2() {
  return (
    <div className='section2-container'>
      {/* Why Section */}
      <div className='why-grid'>
        <div className='why-info'>
          <h2>{SECTION2_TITLE}</h2>
          <p>{SECTION2_PARAGRAPH}</p>
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

export default Section2