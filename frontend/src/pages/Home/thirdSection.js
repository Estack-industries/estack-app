import React from 'react';

import './thirdSection.css';
import SectionLine from './pictures/sectionLine.png';
import Agent from './pictures/agent.png';
import Details from './pictures/details.gif';
import Deal from './pictures/deal.gif';
import Listing1 from './pictures/listing1.png';
import Listing2 from './pictures/listing2.png';
import Listing3 from './pictures/listing3.png';
import Rating1 from './pictures/rating1.png';
import Rating2 from './pictures/rating2.png';
import Rating3 from './pictures/rating3.png';
import ChatIcon from './pictures/chatIcon.png';
import {
	WHY_CHOOSE_FIRST,
	WHY_CHOOSE_SECOND,
	WHY_CHOOSE_THIRD,
	LISTING_ADDRESS,
	LISTING_PRICE,
	RATING_TEXT_ONE,
	RATING_TEXT_TWO,
	WHAT_PEOPLE_SAY,
} from './constants/en.js';
import { WhyCard } from './WhyCard/WhyCard';
import { ListingCard } from './ListingCard/ListingCard';
import { RatingCard } from './RatingCard/RatingCard';
import { SectionGrid } from '../../components/SectionGrid/SectionGrid';

function thirdSection() {
	return (
		<div className="sectionContainer">
			<div lassName="sectionContainer-firstSection">
				<div className="textDividerContainer">
					<img
						className="sectionLine"
						src={SectionLine}
						alt="Section Line"
					></img>
					<p className="mainText">Why choose us?</p>
					<img
						className="sectionLine"
						src={SectionLine}
						alt="Section Line"
					></img>
				</div>
				<SectionGrid>
					<WhyCard text={WHY_CHOOSE_FIRST} src={Agent} />
					<WhyCard text={WHY_CHOOSE_SECOND} src={Details} />
					<WhyCard text={WHY_CHOOSE_THIRD} src={Deal} />
				</SectionGrid>
			</div>
			<div className="sectionContainer-section">
				<div className="textDividerContainer">
					<img
						className="sectionLine"
						src={SectionLine}
						alt="Section Line"
					></img>
					<p className="mainText">Top Listings</p>
					<img
						className="sectionLine"
						src={SectionLine}
						alt="Section Line"
					></img>
					<img className="chatIcon" src={ChatIcon} alt="Chat Icon" />
				</div>
				<SectionGrid>
					<ListingCard
						to="/property"
						src={Listing1}
						address={LISTING_ADDRESS}
						price={LISTING_PRICE}
						status="New"
						bedCount="4"
						bathCount="2"
						floorCount="2"
					/>
					<ListingCard
						to="/property"
						src={Listing2}
						address={LISTING_ADDRESS}
						price={LISTING_PRICE}
						status="New"
						bedCount="4"
						bathCount="2"
						floorCount="2"
					/>
					<ListingCard
						to="/property"
						src={Listing3}
						address={LISTING_ADDRESS}
						price={LISTING_PRICE}
						status="New"
						bedCount="4"
						bathCount="2"
						floorCount="2"
					/>
				</SectionGrid>
			</div>
			<div className="section">
				<p className="mainText">{WHAT_PEOPLE_SAY}</p>
				<SectionGrid>
					<RatingCard
						src={Rating1}
						name="Bob"
						text={RATING_TEXT_ONE}
					/>
					<RatingCard
						src={Rating2}
						name="Laura"
						text={RATING_TEXT_TWO}
					/>
					<RatingCard
						src={Rating3}
						name="Tim"
						text={RATING_TEXT_ONE}
					/>
				</SectionGrid>
			</div>
		</div>
	);
}

export default thirdSection;
