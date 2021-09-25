import React from 'react'
import './Hero.css'
import landingHome from './pictures/image 30.png'
import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <div className="sectionWrapper">
      <div className="content">
        <div>
          <p id="registerText">You can register for free!</p>
          <div className="searchBar">
            <p id="searchText">Search bar</p>
            <p id="searchIcon"><FiSearch /></p>
          </div>
        </div>
        <img id="homeImage" src={landingHome} alt="Home page home" />
      </div>
    </div>
  )
}

export default Hero
