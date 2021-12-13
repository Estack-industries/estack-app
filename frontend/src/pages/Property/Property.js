import React, { useState } from 'react';
import './Property.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import PropertyVector1 from './assets/PropertyVector1.svg';
import PropertyVector2 from './assets/PropertyVector2.png';
import PropertyVector3 from './assets/PropertyVector3.svg';
import PropertyVector4 from './assets/PropertyVector4.svg';
import propertyimage from './assets/propertyimage.png'
import smallimage1 from './assets/smallimage1.png'
import smallimage2 from './assets/smallimage2.png'
import smallimage3 from './assets/smallimage3.png'
import smallimage4 from './assets/smallimage4.png'
import smallimage5 from './assets/smallimage5.png'
import smallimage6 from './assets/smallimage6.png'
import smallimage7 from './assets/smallimage7.png'
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

            <div className='property-information'>

            </div>

            <div className='button-layout'>
                <button class="button">Request a Tour</button>
                <button class="button">Contact Agent</button>
                <button class="button">Find Lender</button>
            </div>
            


            <Footer/>
        </div>  
    );
};

export default Property;