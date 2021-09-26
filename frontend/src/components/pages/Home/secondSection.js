import React from 'react'
import { Link } from 'react-router-dom';
import './secondSection.css'
import Mission from './pictures/mission.png'
import Sell from './pictures/sell.png'
import Rent from './pictures/rent.png'
import Buy from './pictures/buy.png'

function secondSection() {
    return (
        <div className="secondSection">
            <div className="missionContainer">
                <p className="missionText">The Agency’s mission is to modernize and progress the experience 
                    of buying and selling real estate by cultivating a spirit of collaboration, 
                    innovation, and integrity. 
                </p>
                <p className="missionPic"><img src={Mission} alt="Mission Pic" /></p>
            </div>
            <div className="SRBContainer">
                <Link to='/sell'>
                    <img className="sellRentBuyimg" src={Sell} alt="Sell"/>
                </Link>
                <Link to='/rent'>
                    <img className="sellRentBuyimg" src={Rent} alt="Rent"/>
                </Link>
                <Link to='/buy'>
                    <img className="sellRentBuyimg" src={Buy} alt="Buy"/>
                </Link>
            </div>
        </div>
    )
}

export default secondSection
