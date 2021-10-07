import React from 'react'
import './thirdSection.css'
import SectionLine from './pictures/sectionLine.png'
import Agent from './pictures/agent.png'
import Details from './pictures/details.gif'
import Deal from './pictures/deal.gif'
import Listing1 from './pictures/listing1.png'
import Listing2 from './pictures/listing2.png'
import Listing3 from './pictures/listing3.png'
import Rating1 from './pictures/rating1.png'
import Rating2 from './pictures/rating2.png'
import Rating3 from './pictures/rating3.png'
import Star from './pictures/star.png'
import {
    WHY_CHOOSE_FIRST,
    WHY_CHOOSE_SECOND,
    WHY_CHOOSE_THIRD,
    LISTING_ADDRESS,
    LISTING_PRICE,
    RATING_TEXT_ONE,
    RATING_TEXT_TWO,
} from './strings/en.js';
import { WhyCard } from './WhyCard/WhyCard';
import { ListingCard } from './ListingCard/ListingCard'
import { RatingCard } from './RatingCard/RatingCard'

function thirdSection() {
    return (
        <div className="sectionContainer">
            <div>
                <div className="textDividerContainer">
                    <img className="sectionLine" src={SectionLine} alt="Section Line"></img>
                    <p className="mainText">Why choose us?</p>
                    <img className="sectionLine" src={SectionLine} alt="Section Line"></img>
                </div>
                <div className="firstSectionContainer">
                    <WhyCard text={WHY_CHOOSE_FIRST} src={Agent}/>
                    <WhyCard text={WHY_CHOOSE_SECOND} src={Details}/>
                    <WhyCard text={WHY_CHOOSE_THIRD} src={Deal}/>
                </div>
            </div>
            <div className="section">
                <div className="textDividerContainer">
                    <img className="sectionLine" src={SectionLine} alt="Section Line"></img>
                    <p className="mainText">Top Listings</p>
                    <img className="sectionLine" src={SectionLine} alt="Section Line"></img>
                </div>
                <div className="secondSectionContainer">
                    <ListingCard 
                        src={Listing1}
                        address={LISTING_ADDRESS} 
                        price={LISTING_PRICE}
                        status="New"
                        bedCount = "4"
                        bathCount = "2"
                        floorCount = "2"
                    />
                    <ListingCard 
                        src={Listing2}
                        address={LISTING_ADDRESS} 
                        price={LISTING_PRICE}
                        status="New"
                        bedCount = "4"
                        bathCount = "2"
                        floorCount = "2"
                    />
                    <ListingCard 
                        src={Listing3}
                        address={LISTING_ADDRESS} 
                        price={LISTING_PRICE}
                        status="New"
                        bedCount = "4"
                        bathCount = "2"
                        floorCount = "2"
                    />
                </div>
            </div>
            <div className="section">
                <p className="mainText">What people say about us</p>
                <div className="thirdSectionContainer">
                    <RatingCard src={Rating1} name="Bob" text={RATING_TEXT_ONE}/>
                    <RatingCard src={Rating2} name="Laura" text={RATING_TEXT_TWO}/>
                    <RatingCard src={Rating3} name="Tim" text={RATING_TEXT_ONE}/>
                </div>
            </div>
        </div>
    )
}

export default thirdSection
