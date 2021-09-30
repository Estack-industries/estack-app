import React from 'react';
import './Section2.css';
import {
  SECTION2_TITLE,
  SECTION2_CARD1,
  SECTION2_CARD2,
  SECTION2_CARD3,
} from './strings/en.js';
import Rectangle288 from './assets/Rectangle 288.png';
import Rectangle289 from './assets/Rectangle 289.png';
import Rectangle290 from './assets/Rectangle 290.png';

function Section2() {
  return (
    <div className='section2-container'>
      {/* How Section */}
      <div className='how-wrapper'>
        <h1 className='how-title'>{SECTION2_TITLE}</h1>
        <div className='how-grid'>
          <div className='how-card'>
            <img className='how-card-image' src={Rectangle288} alt='rectangle'></img>
            <h2>{SECTION2_CARD1}</h2>
          </div>
          <div className='how-card'>
            <img className='how-card-image' src={Rectangle289} alt='rectangle'></img>
            <h2>{SECTION2_CARD2}</h2>
          </div>
          <div className='how-card'>
            <img className='how-card-image' src={Rectangle290} alt='rectangle'></img>
            <h2>{SECTION2_CARD3}</h2>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className='divider-grid'>
        <div></div>
        <div className='divider'></div>
      </div>
    </div>
  )
}

export default Section2