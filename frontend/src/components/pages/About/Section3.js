import React from 'react';
import './Section3.css';
import {
  SECTION3_HEADER,
  SECTION3_PARAGRAPH,
} from './strings/en.js';
import Image45 from './assets/image 45.png';

function Section3() {
  return (
    <div className='section3-container'>
      <h1 className='options-header'>{SECTION3_HEADER}</h1>
      <div className='options-wrapper'>
        <h2 className='options-paragraph'>{SECTION3_PARAGRAPH}</h2>
        <div className='options-searchbar'></div>
      </div>
    </div>
  )
}

export default Section3