import React, { useRef, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './Property.css';
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import PropertyVector1 from './assets/PropertyVector1.svg';
import PropertyVector2 from './assets/PropertyVector2.png';
import PropertyVector3 from './assets/PropertyVector3.svg';
import PropertyVector4 from './assets/PropertyVector4.svg';
import BlueCircle1 from './assets/blueCircle1.png'
import BlueCircle2 from './assets/blueCircle2.png'
import Propertyimage from './assets/propertyimage.png';
import FullCircle from './assets/fullCircle.png'
import HeartIcon from './assets/heartIcon.png';
import Smallimage1 from './assets/smallimage1.png';
import Smallimage2 from './assets/smallimage2.png';
import Smallimage3 from './assets/smallimage3.png';
import Smallimage4 from './assets/smallimage4.png';
import Smallimage5 from './assets/smallimage5.png';
import Smallimage6 from './assets/smallimage6.png';
import Smallimage7 from './assets/smallimage7.png';
import YellowHelp from './assets/yellowHelp.png';
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
import HalfCircle from './assets/halfCircle.png'
import KayleyHall from './assets/KayleyHall.png'
import GeogiaBankLogo from './assets/georgiaBankLogo.png';
import TbcBankLogo from './assets/tbcBankLogo.png';
import FirstLine from './assets/firstLine.png';
import SecondLine from './assets/secondLine.png';
import ThirdLine from './assets/thirdLine.png';
import TourquoiseEllipse from './assets/tourquoiseEllipse.png';
import BlueEllipse from './assets/blueEllipse.png';
import YellowEllipse from './assets/yellowEllipse.png';
import GrayEllipse from './assets/grayEllipse.png';
import Info from './assets/info.png';
import LightBulb from './assets/lightBulb.png';
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
            <img src={PropertyVector4} alt="property-vector-4" className="vector-4" />
		</>
	);
}


function AgentMenu ({agentIsShown, setAgentIsShown}) {
    const agentRef = useRef()
  
    const closeAgent = e => {
      if(agentRef.current === e.target) {
        setAgentIsShown(false)
      }
    }

    return <>{agentIsShown ? ( 
        <div className='popup' ref={agentRef} onClick={closeAgent}>
            <div className='popup-inner' >
                <div className='agent-menu' >
                    <div className='agent-header'>
                        <img src={KayleyHall} className='agent-avatar' />
                        <div className='agent-info'>
                            <div className='agent-name'> Kayley Hall</div>
                            <a className='profile' href='#'>view profile</a>
                        </div>
                    </div>
                    <form action="contact-agent-form" method="post" className='agent-form'>
                        <input type='text' id='name' className='user-name' placeholder='Name' />
                        <input type='text' id='phone' className='user-phone' placeholder='Phone' />
                        <input type='email' id='mail' className='user-email' placeholder='Email' />
                        <textarea id='msg' className='user-message' placeholder='Hello, I am intered in...'></textarea>
                    </form>
                    <button class='agent-button-menu'>
                        Contact Agent
                        <img src={ContactImage} alt='agent' />
                    </button>
                </div>
            </div>
      </div>
      ): null}
    </>
  };

function Map() {
    return (
        <GoogleMap
        defalutZoom={8}
        defalutCenter={{lat:44.465396, lng:39.719735}}
        />
    )
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map))


// slider
const PrettoSlider = styled(Slider)({
    color: '#65C0CF',
    width: 419,
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        backgroundColor: '#C4C4C4',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
        },
        '&:before': {
        display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#65C0CF',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
        transform: 'rotate(45deg)',
        },
    },
});


const Property = () =>  {
    const [agentIsShown, setAgentIsShown] = useState(false)
    const [tourIsShown, setTourIsShown] = useState(false)
    const [downPaymetIsShown, setDownPaymentIsShown] = useState(false)

    const openAgent = () => {
        setAgentIsShown(prev => !prev)
    }

    return (
        <div>
            <Background />
            <NavBar />
            <div className='blue-circle1'>
                <img src={BlueCircle1} />
            </div>
            {/* main image */}
            <div className='property-image'>
                <img
                    className='main-image'
                    src={Propertyimage}
                    alt="property-image-1"
                />
            </div>
            <div className='blue-circle2'>
                <img src={BlueCircle2} />
            </div>
            <div className='full-circle'>
                <img src={FullCircle} />
            </div>
            {/* like button */}
            <button className='heart-icon'>
                <img src={HeartIcon} />
            </button>
            {/* tiny images under main image */}
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
            {/* yellow help button */}
            <button className='help-button'>
                <img className='yellow-help' src={YellowHelp} />
            </button>
            {/* information on big image */}
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
            {/* three blue buttons */}
            <div className='button-layout'>
                <div className='tour-dropdown' onMouseEnter={() => setTourIsShown(true)} onClick={() => setTourIsShown(false)}>
                    <button className="tour-button">
                        Request a Tour
                        <img src={TourImage} alt='tour' />
                    </button>
                    {/* hidden request a tour menu */}
                    {tourIsShown && (
                    <div className='tour-menu'>
                        <div className='tour-header'>
                            Request a Tour
                        </div>
                    <form action="request-tour-form" method="post" className='tour-form'>
                    <div className='top-form'>
                        <div className='tour-date'>
                            <label for='appointment'>When</label>
                            <input type='date' id='appointment' className='appointment' />
                        </div>
                        <div className='tour-time'>
                            <label for='appointment-time'>What Time</label>
                            <input type='time' id='appointment-time' className='appointment' />
                        </div>
                    </div>
                    <div className='bottom-form'>
                        <label for='name' className='label'>First Name & Last Name</label>
                        <input type='text' id='name' className='tour-name' />
                        <label for='email' className='label'>Email</label>     
                        <input type='email' id='mail' className='tour-email' />
                    </div>
                </form>
                <button class='tour-button-menu'>
                    Request a Tour
                    <img src={TourImage} alt='agent' />
                </button>
                </div>
                )}
                </div>

                <div className='agent-dropdown' onClick={openAgent} >
                    <button id='agent-button' className="agent-button">
                        Contact Agent
                        <img src={ContactImage} alt='agent' />
                    </button>
                    {/* hidden contact agent form */}
                </div>
                <AgentMenu agentIsShown={agentIsShown} setAgentIsShown={setAgentIsShown} />
                {/* <Link className="lender-button" to="/Banking" >
                    Find Lender
                    <img src={LenderImage} alt='lender' />
                </Link> */}
            </div>
            <div className='half-circle'>
                <img src={HalfCircle} />
            </div>
            <div className='description-lenders-container'>
                <div className='description-column'>
                    {/* description box */}
                    <div className='description-container'>
                        <div className='description-header'>
                            Description
                        </div>
                        <div className='description-info'>
                        <p>At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione</p>
                        
                        <p>Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.</p>
                        </div>
                    </div>
                    {/* buy the property button */}
                    <button className='buy-button'>
                        Buy the Property
                    </button>
                </div>
                {/* best lenders box */}
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
            {/* Payment calculator box */}
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
                    <div className='color-left'>
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
                    </div>
                    <div className='color-right'>
                        
                        <div className='Property Taxes' >
                            <img src={YellowEllipse} className='yellow-ellipse' />
                            Property Taxes
                            $895
                        </div>
                    </div>
                </div>
                <div className='amount-details'>
                    <div className='down-payment-dropdown' onMouseEnter={() => setDownPaymentIsShown(true)}>
                        <button className='down-payment-button'>
                            Down Payment
                        </button>
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
            {/* down payment hidden menu */}
            { downPaymetIsShown && (
            <div className='down-payment-menu'>
                <div className='down-payment-calculator-header'>
                  <div className='down-payment-title'>Down Payment</div>
                  <button className='close-button' onClick={() => setDownPaymentIsShown(false)} >&times;</button>
                </div>
                <div className='down-payment-sub-title'>
                    <div className='cash'>Cash</div>
                    <button className='info-button'>
                        <img src={Info} />
                    </button>
                </div>
                <div className='amounts'>
                    <input type='text' id='amount' className='loan-amount-money' placeholder='$150,000' />
                    <input type='text' id='amount' className='loan-amount-percent' placeholder='20%' />
                </div>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={50}
                    className='slider'
                />
                <div className='buy-now-title'>
                    Want to Buy Now?
                </div>
                    <button className='buy-now-button'>Buy</button>
                <div className='amount-breakdown'>
                    <div className='cash-container'>
                        <div className='total-cash-text'>Cash</div>
                        <div className='total-cash-number'>$105,00.00</div>
                    </div>
                    <div className='initial-down-container'>
                        <div className='initial-down-text'>Down Payment</div>
                        <div className='initial-down-number'>$15,000.00</div>
                    </div>
                    <div className='total-down-container'>
                        <div className='total-down-text'>Total Down</div>
                        <div className='total-down-number'>$15,000 (20%)</div>
                    </div>
                </div>
                <div className='down-payment-footer'>
                    <div className='down-payment-text'>
                        Down payment assistacne programs may loewr the up-front cost of buying. 
                        <a className='learn-more-link' href="#"> Learn More.</a>
                    </div>
                    <img src={LightBulb} alt='light-bulb-img' />
                </div>
            </div>
            )}
            {/* map */}
            <div className='map'>
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBo7kfRFsqKcS1OHupln94oNfBY7RJJS5Q`}
                loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%`, width: `100%` }} />}
                />
            </div>
            {/* similar listing cards */}
            <div className='similar-listings-conatiner'>
                <div className='similar-listings-header'>
                    <img src={BlueLine} alt='blue-dash' />
                    Similar Listings
                </div>
                <div className='similar-listings'>
                    <div className='listing-1'>
                        <img src={Similar1} alt='listing-1' />
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
                                <img src={Bed} alt='bed' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun' />
                                <div className='info-number'>2</div>
                            </div>
                        </div>
                    </div>
                    <div className='listing-2'>
                        <img src={Similar2} alt='listing-2' />
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
                                <img src={Bed} alt='bed' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun' />
                                <div className='info-number'>2</div>
                            </div>
                        </div>
                    </div>
                    <div className='listing-3'>
                        <img src={Similar3} alt='listing-3' />
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
                                <img src={Bed} alt='bed' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun' />
                                <div className='info-number'>2</div>
                            </div>
                        </div>
                    </div>
                    <div className='listing-4'>
                        <img src={Similar4} alt='listing-4' />
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
                                <img src={Bed} alt='bed' />
                                <div className='info-number'>4</div>
                            </div>
                            <div className='bathrooms'>
                                <img src={Bathroom} alt='sink' />
                                <div className='info-number'>2</div>
                            </div>
                            <div className='sun'>
                                <img src={Sun} alt='sun' />
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