import React from 'react'
import './secondSection.css'
import Mission from './pictures/mission.png'
import Sell from './pictures/sell.png'
import Rent from './pictures/rent.png'
import Buy from './pictures/buy.png'

function secondSection() {
    return (
        <div>
            <div className="missionContainer">
                <p className="missionText">The Agency’s mission is to modernize and progress the experience 
                    of buying and selling real estate by cultivating a spirit of collaboration, 
                    innovation, and integrity. 
                </p>
                <p className="missionPic"><img src={Mission} alt="Mission Pic" /></p>
            </div>
            <div className="SRBContainer">
                <img className="sellRentBuyimg" src={Sell} alt="Sell"/>
                <img className="sellRentBuyimg" src={Rent} alt="Rent"/>
                <img className="sellRentBuyimg" src={Buy} alt="Buy"/>
            </div>
        </div>
    )
}

export default secondSection
