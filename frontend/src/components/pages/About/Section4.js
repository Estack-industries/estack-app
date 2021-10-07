import React from 'react';
import './Section4.css';
import {
  SECTION4_HEADER,
  SECTION4_PARAGRAPH,
  SECTION4_SEARCH,
} from './strings/en.js';
import { MdSearch } from 'react-icons/md';

function Section4() {
  return (
    <div className='section4-container'>
      <h1 className='options-header'>{SECTION4_HEADER}</h1>
      <div className='options-wrapper'>
        <h2 className='options-paragraph'>{SECTION4_PARAGRAPH}</h2>
        <div className='options-search-wrapper'>
          <input className="options-searchBar" type="text" placeholder={SECTION4_SEARCH} />
          <button className="options-searchButton" type="submit">
            <MdSearch size={40} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section4