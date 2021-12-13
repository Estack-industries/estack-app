import React, { useState } from 'react';
import './Property.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import PropertyVector1 from './assets/PropertyVector1.svg';
import PropertyVector2 from './assets/PropertyVector2.png';
import PropertyVector3 from './assets/PropertyVector3.svg';
import PropertyVector4 from './assets/PropertyVector4.svg';
import propertyimage from './assets/propertyimage.png';
import smallimage1 from './assets/smallimage1.png';
import smallimage2 from './assets/smallimage2.png';
import smallimage3 from './assets/smallimage3.png';
import smallimage4 from './assets/smallimage4.png';
import smallimage5 from './assets/smallimage5.png';
import smallimage6 from './assets/smallimage6.png';
import smallimage7 from './assets/smallimage7.png';
import address from './assets/address.png'
import price from './assets/price.png'
import bed from './assets/bed.PNG';
import bathroom from './assets/bath.png'
import sun from './assets/sun.PNG'
import garage from './assets/garage.PNG'
import calendar from './assets/calendar.png'
import tourImage from './assets/tourImage.png'
import contactImage from './assets/contactImage.png'
import lenderImage from './assets/lenderImage.png'

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
        	{/* <img src={PropertyVector2} alt="property-vector-2" className="vector-2" /> */}
			{/* <img src={PropertyVector3} alt="property-vector-3" className="vector-3" /> */}
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
                    src={propertyimage}
                    alt="property-image-1"
                />
            </div>

            <div className='heart-icon'>

            </div>

            <div className='tiny-images-container'>
                <div className="photo-container">
                    <img src={smallimage1} alt="small-property-1" />
                </div>
                <div className="photo-container">
                    <img src={smallimage2} alt="small-property-2" />
                </div>
                <div className="photo-container">
                    <img src={smallimage3} alt="small-property-3" />
                </div>
                <div className="photo-container">
                    <img src={smallimage4} alt="small-property-4" />
                </div>
                <div className="photo-container">
                    <img src={smallimage5} alt="small-property-5" />
                </div>
                <div className="photo-container">
                    <img src={smallimage6} alt="small-property-6" />
                </div>
                <div className="photo-container">
                    <img src={smallimage7} alt="small-property-7" />
                </div>
            </div>

            <div className='help-button'>

            </div>

            <div className='property-information-container'>
                <div className='information-top'>
                    <div className='address'>
                        <img src={address} alt='property-address' />
                    </div>
                    <div className='price'>
                        <img src={price} alt='property-price' />
                    </div>
                </div>

                <div className='information-bottom'>

                    <div className='bedrooms'>
                        <img src={bed} alt='bed-image' />
                        <div className='info-number'>1</div>
                    </div>
                    <div className='bathrooms'>
                        <img src={bathroom} alt='sink-image' />
                        <div className='info-number'>2</div>
                    </div>
                    <div className='sun'>
                        <img src={sun} alt='sun-image' />
                        <div className='info-number'>2</div>

                    </div>
                    <div className='garage'>
                        <img src={garage} alt='garage-image' />
                        <div className='info-number'>1</div>

                    </div>
                    <div className='calendar'>
                        <img src={calendar} alt='calendar-image' />
                        <div className='info-number'>2007</div>
                    </div>
                </div>

            </div>

            <div className='button-layout'>
                <button class="blue-button">
                    Request a Tour
                    <img src={tourImage} alt='tour-image' className="tour-image" />
                </button>
                <button class="blue-button">
                    Contact Agent
                    <img src={contactImage} alt='contact-image' />
                </button>
                <button class="blue-button">
                    Find Lender
                    <img src={lenderImage} alt='lender-image' />
                </button>
            </div>

            <div className='description-container'>
                <div className='description-header'>
                    Description
                </div>
                <div className='description-info'>
                At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione
                
                Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.
                </div>
            </div>

            <button className='buy-button'>
                Buy the Property
            </button>

            <div className='payment-calculator-container'>

            </div>
            


            <Footer/>
        </div>  
    );
};

export default Property;