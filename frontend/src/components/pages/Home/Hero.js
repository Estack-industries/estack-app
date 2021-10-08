import React from 'react'
import './Hero.css'
import { FiSearch } from "react-icons/fi";
import Ellipse from './pictures/ellipse.png'
import SearchBar from '../../SearchBar/SearchBar'

function Hero() {
  return (
    <div class="hero-wrapper">
      <p class="registerText">You can register for free!</p>
      <SearchBar />
      {/* <div className="searchBar">
        <p id="searchText">Search bar</p>
        <p id="searchIcon"><FiSearch /></p>
      </div> */}
    </div>
  )
}

export default Hero
