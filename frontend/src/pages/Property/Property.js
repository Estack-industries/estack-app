import React, { useState } from 'react';
import './Property.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import PropertyVector1 from './assets/PropertyVector1.svg';
import PropertyVector2 from './assets/PropertyVector2.png';
import PropertyVector3 from './assets/PropertyVector3.svg';
import PropertyVector4 from './assets/PropertyVector4.svg';
import Propertyimage from './assets/propertyimage.png';
import Smallimage1 from './assets/smallimage1.png';
import Smallimage2 from './assets/smallimage2.png';
import Smallimage3 from './assets/smallimage3.png';
import Smallimage4 from './assets/smallimage4.png';
import Smallimage5 from './assets/smallimage5.png';
import Smallimage6 from './assets/smallimage6.png';
import Smallimage7 from './assets/smallimage7.png';
import Address from './assets/address.png';
import Price from './assets/price.png';
import Bed from './assets/bed.PNG';
import Bathroom from './assets/bath.png';
import Sun from './assets/sun.PNG';
import Garage from './assets/garage.PNG';
import Calendar from './assets/calendar.png';
import TourImage from './assets/tourImage.png';
import ContactImage from './assets/contactImage.png';
import LenderImage from './assets/lenderImage.png';
import GeogiaBankLogo from './assets/georgiaBankLogo.png';
import TbcBankLogo from './assets/tbcBankLogo.png';
import FirstLine from './assets/firstLine.png';
import SecondLine from './assets/secondLine.png';
import ThirdLine from './assets/thirdLine.png';
import TourquoiseEllipse from './assets/tourquoiseEllipse.png';
import BlueEllipse from './assets/blueEllipse.png';
import YellowEllipse from './assets/yellowEllipse.png';
import GrayEllipse from './assets/grayEllipse.png'
import AreaMap from './assets/map.png';
import BlueLine from './assets/blueLine.png';
import Similar1 from './assets/similar1.png';
import Similar2 from './assets/similar2.png';
import Similar3 from './assets/similar3.png';
import Similar4 from './assets/similar4.png';

import Footer from '../../components/Footer/Footer';


function NavBar() {
    return (
        <div className="navbar-container">
            <img
                src={EStackLogo}
                alt="estack-logo"
                className="estack-logo"
                onClick={() => console.log('clicked')}
            />
            <div className="navbar-options">
                <a className="navbar-option white-color open-sans" href="#">
                    Buy
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    Sell
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    Rent
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    About Us
                </a>
            </div>
            <img
                src={DefaultUserIcon}
                alt="default-user-icon"
                className="user-icon"
                onClick={() => console.log('clicked')}
            />
        </div>
    
    );
};

function Background() {
	return (
		<>
        	<img src={PropertyVector1} alt="property-vector-1" className="vector-1" />
        	<img src={PropertyVector2} alt="property-vector-2" className="vector-2" />
			<img src={PropertyVector3} alt="property-vector-3" className="vector-3" />
            {/* <img src={PropertyVector4} alt="property-vector-4" className="vector-4" /> */}

			{/* <img
				src={AboutMainImage}
				alt="about-main-image"
				className="main-image"
			/> */}
		</>
	);
}



const Property = () =>  {
    return (
        <div>
            <Background />
            <NavBar />
            <div className='property-image'>
                <img
                    className='main-image'
                    src={Propertyimage}
                    alt="property-image-1"
                />
            </div>

            <div className='heart-icon'>

            </div>

            <div className='tiny-images-container'>
                <div className="photo-container">
                    <img src={Smallimage1} alt="small-property-1" />
                </div>
                <div className="photo-container">
                    <img src={Smallimage2} alt="small-property-2" />
                </div>
                <div className="photo-container">
                    <img src={Smallimage3} alt="small-property-3" />
                </div>
                <div className="photo-container">
                    <img src={Smallimage4} alt="small-property-4" />
                </div>
                <div className="photo-container">
                    <img src={Smallimage5} alt="small-property-5" />
                </div>
                <div className="photo-container">
                    <img src={Smallimage6} alt="small-property-6" />
                </div>
                <div className="photo-container">
                    <img src={Smallimage7} alt="small-property-7" />
                </div>
            </div>

            <div className='help-button'>

            </div>

            <div className='property-information-container'>
                <div className='information-top'>
                    <div className='address'>
                        <img src={Address} alt='property-address' />
                    </div>
                    <div className='price'>
                        <img src={Price} alt='property-price' />
                    </div>
                </div>

                <div className='information-bottom'>

                    <div className='bedrooms'>
                        <img src={Bed} alt='bed-image' />
                        <div className='info-number'>1</div>
                    </div>
                    <div className='bathrooms'>
                        <img src={Bathroom} alt='sink-image' />
                        <div className='info-number'>2</div>
                    </div>
                    <div className='sun'>
                        <img src={Sun} alt='sun-image' />
                        <div className='info-number'>2</div>

                    </div>
                    <div className='garage'>
                        <img src={Garage} alt='garage-image' />
                        <div className='info-number'>1</div>

                    </div>
                    <div className='calendar'>
                        <img src={Calendar} alt='calendar-image' />
                        <div className='info-number'>2007</div>
                    </div>
                </div>

            </div>

            <div className='button-layout'>
                <button class="blue-button">
                    Request a Tour
                    <img src={TourImage} alt='tour-image' />
                </button>
                <button class="blue-button">
                    Contact Agent
                    <img src={ContactImage} alt='contact-image' />
                </button>
                <button class="blue-button">
                    Find Lender
                    <img src={LenderImage} alt='lender-image' />
                </button>
            </div>

            <div className='description-lenders-container'>
                <div className='description-column'>
                    <div className='description-container'>
                        <div className='description-header'>
                            Description
                        </div>
                        <div className='description-info'>
                        <p>At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione</p>
                        
                        <p>Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.</p>
                        </div>
                    </div>
                    <button className='buy-button'>
                        Buy the Property
                    </button>
                </div>

                <div className='best-lenders-container'>

                    <div className='best-lenders-header'>
                        The Best Lenders
                    </div>
                    <img className='georgia-bank' src={GeogiaBankLogo} alt='georgia-bank-logo' />
                    Bank of Georgia
                    <img className='tbc-bank' src={TbcBankLogo} alt='tbc-bank-logo' />
                    TBC Bank
                </div>
            </div>

            <div className='payment-calculator-container'>
                <div className='payment-calculator-header'>
                    Payment Calculator
                </div>
                <div className='amount-per-month'>
                    $2689 per month
                </div>
                <div className='cost-breakdown-colors'>
                <img src={FirstLine} className='first-line' />
                    <img src={SecondLine} className='second-line' />
                    <img src={ThirdLine} className='third-line' />
                </div>
                <div className='colors-legend'>
                    <div className='principle-interest'>
                        <img src={TourquoiseEllipse} className='tourquoise-ellipse' />
                        principle and Interstate 
                        $1550
                    </div>
                    <div className='Homeowners-Insurance'>
                        <img src={BlueEllipse} className='blue-ellipse' />
                        Homeowner's Insurance
                        $150
                    </div>
                    <div className='Property Taxes' >
                        <img src={YellowEllipse} className='yellow-ellipse' />
                        Property Taxes
                        $895
                    </div>
                    

                </div>
                <div className='amount-details'>
                    <div className='down-payment'>
                        <div className='down-payment-header'>
                            Down Payment
                        </div>
                        <div className='down-payment-amount'>
                            20% ($105,000)
                        </div>
                    </div>
                    <div className='home-price'>
                        <div className='home-price-header'>
                            Home Price
                        </div>
                        <div className='home-price-amount'>
                            $535,000
                        </div>
                    </div>
                    <div className='loan-details'>
                        <div className='loan-details-header'>
                            Loan Details
                        </div>
                        <div className='loan-details-amount'>
                            30 yr 2.5%
                        </div>
                    </div>
                    <div className='extra'>
                        <img src={GrayEllipse} className='gray-ellipse' />
                        <img src={GrayEllipse} className='gray-ellipse' />
                        <img src={GrayEllipse} className='gray-ellipse' />
                    </div>
                </div>

            </div>

            <div className='map'>
                <img src={AreaMap} />
            </div>

            <div className='similar-listings-conatiner'>
                <div className='similar-listings-header'>
                    <img src={BlueLine} />
                    Similar Listings
                </div>
                <div className='similar-listings'>
                    <div className='listing-1'>
                        <img src={Similar1} />
                        <div className='listing-location'>
                            Ventura st. 2892, St louis
                        </div>
                        <div className='listing-price'>
                            $600,000
                            <div className='new-listing'>
                            New
                            </div>
                        </div>
                        
                        <div className='listing-info'>
                            <div className='bedrooms'>
                                <img src={Bed} alt='bed-image' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink-image' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun-image' />
                                <div className='info-number'>2</div>
                            </div>
                        </div>
                    </div>
                    <div className='listing-2'>
                        <img src={Similar2} />
                        <div className='listing-location'>
                            Ventura st. 2892, St louis
                        </div>
                        <div className='listing-price'>
                            $600,000
                            <div className='new-listing'>
                                New
                            </div>
                        </div>
                        <div className='listing-info'>
                            <div className='bedrooms'>
                                <img src={Bed} alt='bed-image' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink-image' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun-image' />
                                <div className='info-number'>2</div>
                            </div>
                        </div>
                    </div>
                    <div className='listing-3'>
                        <img src={Similar3} />
                        <div className='listing-location'>
                            Ventura st. 2892, St louis
                        </div>
                        <div className='listing-price'>
                            $600,000
                            <div className='new-listing'>
                            New
                            </div>
                        </div>
                        <div className='listing-info'>
                            <div className='bedrooms'>
                                <img src={Bed} alt='bed-image' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink-image' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun-image' />
                                <div className='info-number'>2</div>
                            </div>
                        </div>
                    </div>
                    <div className='listing-4'>
                        <img src={Similar4} />
                        <div className='listing-location'>
                            Ventura st. 2892, St louis
                        </div>
                        <div className='listing-price'>
                            $600,000
                            <div className='new-listing'>
                            New
                            </div>
                        </div>
                        
                        <div className='listing-info'>
                            <div className='bedrooms'>
                                <img src={Bed} alt='bed-image' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink-image' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun-image' />
                                <div className='info-number'>2</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer/>
        </div>  
    );
};

export default Property;