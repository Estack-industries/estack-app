import React, { useRef, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './Property.css';
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles';
import PropertySummary from '../../components/PropertySummary';

import HeartIcon from './assets/heartIcon.png';
import YellowHelp from './assets/yellowHelp.png';
import Bed from './assets/bed.png';
import Bathroom from './assets/bath.png';
import Sun from './assets/sun.png';
import Garage from './assets/garage.png';
import Calendar from './assets/calendar.png';
import TourImage from './assets/tourImage.png';
import ContactImage from './assets/contactImage.png';
import LenderImage from './assets/lenderImage.png';
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
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import NavBackground from '../../components/NavBackground';
import { FetchMainProperty } from './dataFetching';

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


const Property = (props) =>  {
    const [agentIsShown, setAgentIsShown] = useState(false)
    const [tourIsShown, setTourIsShown] = useState(false)
    const [downPaymetIsShown, setDownPaymentIsShown] = useState(false)
    const [propertyData, setPropertyData] = useState({});
    const [primaryImage, setPrimaryImage] = useState(0);

    const openAgent = () => {
        setAgentIsShown(prev => !prev)
    }

    useState(() => {
        FetchMainProperty(props.match.params.id).then(data => {
            setPropertyData(data)
        })
    }, [])


    if (Object.keys(propertyData).length === 0) return (
        <div>
            <Navbar />
            <NavBackground />
        </div>
    )
    return (
        <div>
            <Navbar />
            <NavBackground />
            {/* main image */}
            {propertyData.images && propertyData.images.length > 0 &&
                <div className='property-image'>
                    <img
                        className='main-image'
                        src={propertyData.images[primaryImage]}
                        alt={'property preview ' + (primaryImage + 1)}
                    />
                    <div className='image-nav'>
                        {propertyData.images.map((image, index) => (
                            <div
                                key={index}
                                className={index === primaryImage ? 'active-image-nav' : ''}
                                onClick={() => setPrimaryImage(index)}
                            />
                        ))}
                    </div>
                </div>
            }
            {/* like button */}
            <button className='heart-icon'>
                <img src={HeartIcon} />
            </button>
            {/* tiny images under main image */}
            <div className='tiny-images-container'>
                {propertyData.images && propertyData.images.map((image, index) => (
                    <div className="photo-container" key={index}>
                        <img
                            src={image}
                            alt={"property preview " + (index + 1)}
                            onClick={() => setPrimaryImage(index)}
                        />
                    </div>
                ))}
            </div>
            {/* yellow help button */}
            <button className='help-button'>
                <img className='yellow-help' src={YellowHelp} />
            </button>
            {/* information on big image */}
            <div className='property-information-container'>
                <div className='information-top'>
                    <div className='address'>
                        <p>27 Grand Street Brooklyn, New York</p>
                    </div>
                    <div className='price'>
                        <p>$500,000.00</p>
                    </div>
                </div>
                <div className='information-bottom'>
                    <div className='bedrooms'>
                        <img src={Bed} alt='bed-image' />
                        <div className='info-number'>{propertyData.numBedrooms}</div>
                    </div>
                    <div className='bathrooms'>
                        <img src={Bathroom} alt='sink-image' />
                        <div className='info-number'>{propertyData.numBathrooms}</div>
                    </div>
                    <div className='sun'>
                        <img src={Sun} alt='sun-image' />
                        <div className='info-number'>{propertyData.squareft}</div>

                    </div>
                    <div className='garage'>
                        <img src={Garage} alt='garage-image' />
                        <div className='info-number'>{propertyData.cars}</div>

                    </div>
                    <div className='calendar'>
                        <img src={Calendar} alt='calendar-image' />
                        <div className='info-number'>{propertyData.yearBuilt}</div>
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
                <button className="lender-button" to="/Banking" >
                    Find Lender
                    <img src={LenderImage} alt='lender' />
                </button>
            </div>
            <div className='description-lenders-container'>
                <div className='description-column'>
                    {/* description box */}
                    <div className='description-container'>
                        <div className='description-header'>
                            Description
                        </div>
                        <div className='description-info'>
                        <p>{propertyData.description}</p>
                        
                        <p>Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.</p>
                        </div>
                    </div>
                    {/* buy the property button */}
                    <a className='buy-button' href='/banking'>
                        Buy the Property
                    </a>
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
                    {propertyData.similarProperties?.map((listing, index) => (
                        <PropertySummary homeData={listing} key={index} />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>  
    );
};

export default Property;