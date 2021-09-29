import React from 'react'
import './Hero.css'
import landingHome from './pictures/house.png'
import { FiSearch } from "react-icons/fi";
import Ellipse from './pictures/ellipse.png'
import { WaveBG } from '../../WaveBG/WaveBG'

function Hero() {
  return (
    <div className="sectionWrapper">
      <WaveBG src={landingHome} position="end">
        <div className="content">
          <p id="registerText">You can register for free!</p>
          <div className="searchBar">
            <p id="searchText">Search bar</p>
            <p id="searchIcon"><FiSearch /></p>
          </div>
        </div>
      </WaveBG>
      <div className="content">
      </div>
      <img className="ellipse1" src={Ellipse} alt="Ellipse" />
    </div>
  )
}

export default Hero
