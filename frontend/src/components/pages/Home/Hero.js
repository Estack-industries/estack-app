import React from 'react'
import './Hero.css'
import landingHome from './pictures/house.png'
import { FiSearch } from "react-icons/fi";
import Ellipse from './pictures/ellipse.png'
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
      <img className="ellipse1" src={Ellipse} alt="Ellipse"/>
    </div>
  )
}

export default Hero
