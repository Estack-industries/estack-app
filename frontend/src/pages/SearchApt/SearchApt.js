import React, { useState, useRef, useCallback } from 'react';
import { Icon } from '@iconify/react'
import { googleMap, useLoadScript, Marker, InfoWindow, GoogleMap } from '@react-google-maps/api'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList,  ComboboxOption, } from '@reach/combobox'
import locationIcon from '@iconify/icons-mdi/map-marker'
import Slider from 'react-slick'

import Card from 'react-bootstrap/card'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SearchApt.css';


import Navbar from '../../components/Navbar/Navbar';
import NavBackground from '../../components/NavBackground';

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



const LocationPin = () => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
    </div>
)
  
const libraries = ["places"]
const mapContainerStyle = {
    width: '80%',
    height: '549px',
    border: '6px solid #34E718',
    borderRadius: '15px'
}
const center = {
    lat: 33.9535,
	lng: -118.3390,
}


function Map () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "",
        libraries
    })
    const [markers, setmMarkers] = useState([]);
    const [selected, setSelected] = useState(null)

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
      }, [],);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat,lng});
        mapRef.current.setZoom(14)
    },[])
    

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";

    return(
        <div>
            <div className="apt-google-map">
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle} 
                    zoom={8} 
                    center={center}
                    onLoad={onMapLoad}
                >
                    {markers.map((marker) => (
                        <Marker
                            key={marker.time.toISOString()}
                            position={{ lat: marker.lat, lng: marker.lng}}
                            onClick={() => {setSelected(marker)}}
                        />
                    ))}
                    {selected ? (<InfoWindow>
                        
                    </InfoWindow>) : null}
                </GoogleMap>
            </div>
        </div>
    )

}


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
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
}


const location = {
	address: '1001 Stadium Dr, Inglewood, California',
	lat: 33.9535,
	lng: -118.3390,
};

const SearchApt = () => {
    return (
    <div>
        <Navbar/>
        <NavBackground />
        <div className="apt-search-bar-container">
            <div className='apt-map-search-container'>
                <input
                    className='search-input'
                    type="text"
                    placeholder="Enter an address, or ZIP code"
                />
                <button className='apt-map-search-button'>search</button>
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

        <div className='apt-search-filter-container'>
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
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'> 
                <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame8} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
            </Slider>
        </div>
        <div className='apts-around-you-container'>
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
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame8} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame9} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame10} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
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
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
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
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
                        </Card>
                </div>
                <div>
                <Card className='apt-carousel-card'>
                    <a className='card-link' href='/apartmentproperty/example'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header className='search-carousel-listing-location'>
                                <div>
                                    Ventura st. 2892, St louis
                                </div>
                                </Card.Header>
                                <Card.Text>
                            <div className='carousel-listing-price'>
                                $600,000
                                <div className='new-listing'>
                                New
                                </div>
                            </div>
                                </Card.Text>
                                <Card.Footer className='carousel-footer'>
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
                            </a>
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