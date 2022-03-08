import React from 'react';
import Slider from 'react-slick'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import Card from 'react-bootstrap/card'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SearchApt.css';


import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';

import Clouds from './assets/aptClouds.png'
import SearchAptVector1 from './assets/SearchAptVector1.svg'
// import SearchHomeVector3 from './assets/SearchHomeVector3.svg'
// import SearchHomeVector4 from './assets/SearchHomeVector4.svg'
import Background1 from './assets/aptBackground1.png'
import Background2 from './assets/aptBackground2.png'
import Frame1 from './assets/Frame1.png'
import Frame2 from './assets/Frame2.png'
import Frame3 from './assets/Frame3.png'
import Frame4 from './assets/Frame4.png'
import Frame5 from './assets/Frame5.png'
import Frame6 from './assets/Frame6.png'
import Frame7 from './assets/Frame7.png'
import Frame8 from './assets/Frame8.png'
import Frame9 from './assets/Frame9.png'
import Frame10 from './assets/Frame10.png'
import Frame11 from './assets/Frame11.png'
import Frame12 from './assets/Frame12.png'
import Frame13 from './assets/Frame13.png'
import Frame14 from './assets/Frame14.png'
import Frame15 from './assets/Frame15.png'
import Frame16 from './assets/Frame16.png'


import Bed from './assets/bed.PNG';
import Bath from './assets/bath.png';
import Sun from './assets/sun.PNG';

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
            <img src={Clouds} alt="clouds" className='clouds' />
      		<img src={SearchAptVector1} alt="search-home-vector-1" className="vector-1" />
            {/* <img src={SearchHomeVector3} alt="search-home-vector-3" className="vector-3" /> */}
            {/* <img src={SearchHomeVector4} alt="search-home-vector-4" className="vector-4" /> */}
            <img src={Background1} alt='background-1' className='background-1'/>
            <img src={Background2} alt='background-2' className='background-2'/>

		</>
	);
}



const LocationPin = () => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
    </div>
)
  
const Map = ({ location, zoomLevel }) => (
<div className="map">
    <div className="google-map">
    <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
    >
        <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
        />
    </GoogleMapReact>
    </div>
</div>
)

function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? ">" : "<";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }


const sliderSettings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    draggable:true,
}


const location = {
	address: '1001 Stadium Dr, Inglewood, California',
	lat: 33.9535,
	lng: -118.3390,
};

const SearchApt = () => {
    return (
    <div>
        <NavBar/>
        <Background />
        <div className="search-bar-container">
            <div className='map-search-container'>
                <input
                    className='map-search-info'
                    type="text"
                    placeholder="Enter an address, or ZIP code"
                />
                <button className='map-search-button'>search</button>
            </div>
            <form>
                <select className='search-category'>
                    <option>Price</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                </select>
            </form>
            <form>
                <select className='search-category'>
                    <option>Beds & Baths</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                </select>
            </form>
            <form>
                <select className='search-category'>
                    <option>Home Type</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                </select>
            </form>
            <form>
                <select className='search-category'>
                    <option>How Long</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                </select>
            </form>
        </div>

        <div className='apt-search-map'>
            <Map location={location} zoomLevel={17} />
        </div>

        <div className='search-filter-container'>
        <button className='search-filters'>All</button>
        <button className='search-filters'>Apartments for you</button>
        <button className='search-filters'>Closest to you</button>
        <button className='search-filters'>Newest</button>

            
        </div>
        <div className='slider'>
            <Slider {...sliderSettings}     
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame8} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
            </Slider>
        </div>
        <div className='homes-around-you-container'>
            <div className='apartments-near-you-header'>
                Apartments Near You
            </div>
            <div className='slider'>
            <Slider {...sliderSettings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            >
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame8} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame9} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame10} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
            </Slider>
        </div>
        <div className='slider'>
            <Slider {...sliderSettings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            >
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
            </Slider>
        </div>
        <div className='slider'>
            <Slider {...sliderSettings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            >
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='apt-carousel-listing-location'>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='apt-carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer>
                                    <div className='bedrooms'>
                                        <img src={Bed} alt='bed'/>
                                        <div className='info-number'> 4</div>
                                    </div>
                                        <div className='bathrooms'>
                                        <img src={Bath} alt='bath'/>
                                    <div className='info-number'>2</div>
                                    </div>
                                    <div className='space'>
                                        <img src={Sun} alt='sun'/>
                                        <div className='info-number'>2</div>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                </div>
            </Slider>
        </div>
        </div>


        <Footer />
    </div>
    )
}

export default SearchApt