import React from 'react'
import './thirdSection.css'
import Agent from './pictures/agent.png'
import Details from './pictures/details.png'
import Deal from './pictures/deal.png'
import Listing1 from './pictures/listing1.png'
import Listing2 from './pictures/listing2.png'
import Listing3 from './pictures/listing3.png'
import Rating1 from './pictures/rating1.png'
import Rating2 from './pictures/rating2.png'
import Rating3 from './pictures/rating3.png'

function thirdSection() {
    return (
        <div className="sectionContainer">
            <div>
                <p className="mainText">Why choose us?</p>
                <div className="firstSectionContainer">
                    <div className="chooseBox">
                        <p className="boxImg"><img src={Agent} alt="Agent Pic" /></p>
                        <p className="boxText">
                            You’ll be in direct contact with the landlord/agent and he’ll help you sort out any doubts that you may have
                        </p>
                    </div>
                    <div className="chooseBox">
                        <p className="boxImg"><img src={Details} alt="Details Pic" /></p>
                        <p className="boxText">
                        We give you the details and every requirement that is needed for you to buy, rent or sell
                        </p>
                    </div>
                    <div className="chooseBox">
                        <p className="boxImg"><img src={Deal} alt="Deal Pic" /></p>
                        <p className="boxText">
                            We help you close the deal of your dream home
                        </p>
                    </div>
                </div>
            </div>
            <div className="section">
                <p className="mainText">Top Listings</p>
                <div className="secondSectionContainer">
                    <div className="listingBox">
                        <p className="listingImg"><img src={Listing1} alt="First Listing" /></p>
                        <p className="listingTitle">
                            Ventura St. 3892, St Louis
                        </p>
                        <p className="listingPrice">
                            600.000$ | Status                      
                        </p>
                        <div className="listingInfo">
                            <ul className="listingInfoText">
                                4
                            </ul>
                            <ul className="listingInfoText">
                                2
                            </ul>
                            <ul className="listingInfoText">
                                2
                            </ul>
                        </div>
                    </div>
                    <div className="listingBox">
                        <p className="listingImg"><img src={Listing2} alt="Second Listing" /></p>
                        <p className="listingTitle">
                            Ventura St. 3892, St Louis                        
                        </p>
                        <p className="listingPrice">
                            600.000$ | Status                      
                        </p>
                        <div className="listingInfo">
                            <ul className="listingInfoText">
                                4
                            </ul>
                            <ul className="listingInfoText">
                                2
                            </ul>
                            <ul className="listingInfoText">
                                2
                            </ul>
                        </div>
                    </div>
                    <div className="listingBox">
                        <p className="listingImg"><img src={Listing3} alt="Third Listing" /></p>
                        <p className="listingTitle">
                            Ventura St. 3892, St Louis
                        </p>
                        <p className="listingPrice">
                            600.000$ | Status                      
                        </p>
                        <div className="listingInfo">
                            <ul className="listingInfoText">
                                4
                            </ul>
                            <ul className="listingInfoText">
                                2
                            </ul>
                            <ul className="listingInfoText">
                                2
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <p className="mainText">What people say about us</p>
                <div className="secondSectionContainer">
                    <div className="ratingBox">
                        <div className="firstColumn">
                            <img src={Rating1} alt="First Rating Pic"></img>
                            <p>Bob</p>
                        </div>
                        <div className="secondColumn">
                            “This page helped me find my dream home”
                        </div>
                    </div>
                    <div className="ratingBox">
                        
                    </div>
                    <div className="ratingBox">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default thirdSection
