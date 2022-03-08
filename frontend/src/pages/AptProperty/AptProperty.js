import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import PropertySummary from '../../components/PropertySummary';
import './AptProperty.css';

import Navbar from '../../components/Navbar/Navbar';
import NavBackground from '../../components/NavBackground';
import HeartIcon from './assets/heartIcon.png';
import YellowHelp from './assets/yellowHelp.png';
import ContactImage from './assets/contactImage.png';
import TourImage from './assets/tourImage.png';
import KayleyHall from './assets/KayleyHall.png';
import Affordable from './assets/affordable.png';
import QuietNeighbors from './assets/quiet-neighbors.png';
import EasyToMaintain from './assets/easy-to-maintain.png';
import RepairsResolved from './assets/repairs-resolved.png';
import FeltSafe from './assets/felt-safe.png';
import KidsFriendly from './assets/kids-friendly.png';
import NaturalLight from './assets/natural-light.png'
import SimilarApt1 from './assets/temp/similarApt1.png'
import SimilarApt2 from './assets/temp/similarApt2.png'
import SimilarApt3 from './assets/temp/similarApt3.png'


import BlueLine from'./assets/blueLine.png';

import Footer from '../../components/Footer/Footer';

import { FetchMainProperty, FetchSimilarProperties } from './dataFetching';
import { moneyFormat } from '../../lib/utils';




const mapContainerStyle = {
    width: '709px',
    height: '528px',
}
const center = {
    lat: 33.9535,
	lng: -118.3390,
}



function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBo7kfRFsqKcS1OHupln94oNfBY7RJJS5Q"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    if (!isLoaded) return <></>
    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            defalutZoom={8}
            defalutCenter={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
        />
    )
}


const ShowMore = ({ children }) => {
    const text = children;
    const [showMore, setShowMore] = useState(true);
    const toggleShowmore = () => {
      setShowMore(!showMore);
    };
    return (
      <p>
        {showMore ? text.slice(0, 104) : text}
        <span onClick={toggleShowmore} className="show-or-hide">
          {showMore ? "...Show More" : " Show Less"}
        </span>
      </p>
    );
  };

const AptProperty = (props) => {
    const [propertyData, setPropertyData] = useState({});
    const [similarProperties, setSimilarProperties] = useState([]);
    const [primaryImage, setPrimaryImage] = useState(0);

    useState(() => {
        FetchMainProperty(props.match.params.id).then(data => {
            setPropertyData(data)
            FetchSimilarProperties(data).then(data => {
                setSimilarProperties(data);
            });
        })
    }, [])

    return (
        <div>
            <Navbar />
            <NavBackground />
            {propertyData.images && propertyData.images.length > 0 &&
                <div className='property-image'>
                    <img
                        className='main-apt-image'
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
            <div className='apt-info-box'>
                <div className='info-box-row'>
                    <div className='apt-info-col-1'>
                        <div className='apt-address'>
                            <p>{propertyData.street}</p>
                            <p>{propertyData.city}, {propertyData.state}</p>
                        </div>
                        <div className='apt-info-header'>
                            Description
                        </div>
                        <div className='apt-info-description'>
                            <ShowMore>  
                                The 1 level Apartment that has a modern design,
                                has a large pool and a garage that fits up to
                                four cars 
                            </ShowMore>
                        </div>
                    </div>
                    <div className='apt-info-col-2'>
                        <div className='breakdown'>
                            <p>Rent</p>
                            <p>Deposit</p>
                            <p>Rooms</p>
                            <p>Bathrooms</p>
                        </div>
                        <div className='breakdown-numbers'>
                        <p>{moneyFormat(propertyData.Rent)}</p>
                        <p>{moneyFormat(propertyData.Deposit)}</p>
                        <p>{propertyData.numBedrooms}</p>
                        <p>{propertyData.numBathrooms}</p>
                        </div>
                    </div>
                    <div className='apt-info-col-3'>
                        <div className='features'>
                        Balcony
                        </div>
                        <div className='features'>
                        Laundry
                        </div>
                        <div className='features'>
                        Air Conditioning
                        </div>
                    </div>
                </div>
            </div>
            <div className='mid-info-container'>
                <div className='apt-agent-menu' >
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
                    <div className='agent-button-container'>
                        <button class='apt-contact-button'>
                            Send message
                            <img src={ContactImage} alt='agent' />
                        </button>
                        <button className="apt-tour-button">
                            Request a Tour
                            <img src={TourImage} alt='tour' />
                        </button>
                    </div>
                </div>
                <div className='apt-property-map'>     
                   <Map />
                </div>
            </div>
            <a className='apt-apply-button' href='/banking'>
                    Apply
            </a>
            <div className='reviews-ratings-container'>
                <div className='reviews-ratings-col-1'>
                    <div className='apt-rating'>
                        <p className='overall-rating-number'>{propertyData.Rating}</p>
                        <div className='apt-rating-sub'>
                            <span className='overall-rating-text'>Excellent</span>
                            <h6>1 review</h6>
                        </div>
                    </div>
                    <div className='rating-overall-star'>
                            <span className='apt-overall-star checked'>★</span><span className='apt-overall-star checked'>★</span><span className='apt-overall-star checked'>★</span><span className='apt-overall-star checked'>★</span><span className='apt-overall-star checked'>★</span>
                        </div>
                </div>
                <div className='reviews-ratings-col-2'>
                    <div className='ratings-breakdown'>
                        <p>Agent Rating</p>
                        <p>Landlord Rating</p>
                        <p>Location Rating</p>
                    </div>
                    <div className='rating-breakdown-stars'>
                        <div className='agent-rating-stars'>
                            <span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star'>★</span>
                        </div>
                        <div className='landlord-rating-stars'>
                            <span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span>
                        </div>
                        <div className='location-rating-stars'>
                            <span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span><span className='apt-star checked'>★</span>
                        </div>
                    </div>

                </div>
                <div className='reviews-ratings-col-3'>
                    <div className='perks-container'>
                        <div className='perk'>
                            <img src={Affordable} alt='affordable' />
                            <p>Affordable</p>
                        </div>
                        <div className='perk'>
                            <img src={QuietNeighbors} alt='quiet-neighbors' />
                            Quiet Neighbors
                        </div>
                        <div className='perk'>
                            <img src={EasyToMaintain} alt='easy-to-maintain' />
                            Easy To Maintain
                        </div>
                        <div className='perk'>
                            <img src={RepairsResolved} alt='repairs-resolved' />
                            Repairs Resolved
                        </div>
                        <div className='perk'>
                            <img src={FeltSafe} alt='felt-safe' />
                            Felt Save
                        </div>
                        <div className='perk'>
                            <img src={KidsFriendly} alt='kids-friendly' />
                            Kids Friendly
                        </div>
                        <div className='perk'>
                            <img src={NaturalLight} alt='natural-light' />
                            Natural Light
                        </div>
                        </div>
                </div>


            </div>
            <div className='similar-listings-conatiner'>
                <div className='similar-listings-header'>
                    <img src={BlueLine} alt='blue-dash' />
                    Similar Listings
                </div>
                <div className='apt-similar-links'>
                    <div className='apt-city-vibes'>
                        <img src={SimilarApt1} alt='similar-appartment1' />
                        City Vibes
                    </div>
                    <div className='apt-low-cost'>
                        <img src={SimilarApt2} alt='similar-appartment2' />
                        Low Cost
                    </div>
                    <div className='apt-most-popular'>
                        <img src={SimilarApt3} alt='similar-appartment3' />
                        Most Popular
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default AptProperty;