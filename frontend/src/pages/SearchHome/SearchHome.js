import React, { useRef, useCallback } from 'react';
import { Icon } from '@iconify/react'
import { googleMap, useLoadScript, Marker, InfoWindow, GoogleMap } from '@react-google-maps/api'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList,  ComboboxOption, } from '@reach/combobox'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '@reach/combobox/styles.css'
import Slider from 'react-slick'
import Card from 'react-bootstrap/card'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SearchHome.css';


import Frame1 from './assets/Frame1.png'
import Frame2 from './assets/Frame2.png'
import Frame3 from './assets/Frame3.png'
import Frame4 from './assets/Frame4.png'
import Frame5 from './assets/Frame5.png'
import Frame6 from './assets/Frame6.png'
import Frame7 from './assets/Frame7.png'
import Bed from './assets/bed.PNG';
import Bath from './assets/bath.png';
import Sun from './assets/sun.PNG';
import Navbar from '../../components/Navbar/Navbar';
import NavBackground from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';



const libraries = ["places"]
const mapContainerStyle = {
    width: '1109px',
    height: '549px',
    border: '6px solid #0193FD',
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
        <div className="map">
            <div className="google-map">
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



function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => 33.9535, lng: () => -118.3390 },
        radius: 100 * 1000,
      },
    });

    return ( 
        <div className='search-input'>
            <Combobox
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions()

                    try {
                        const results = await getGeocode({address});
                        const {lat, lng} = await getLatLng(results[0])
                        panTo({lat, lng});
                    } catch(error) {
                        console.log("error!");
                    }


                    console.log(address)
                }} 
            >
                <ComboboxInput className='search-input'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    disabled={!ready}
                    placeholder="Enter an address, or ZIP code"
                />
                <ComboboxPopover>
                    {status === "Ok" && data.map(({id, description}) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxPopover>
            </Combobox>
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
}


const location = {
	address: '1001 Stadium Dr, Inglewood, California',
	lat: 33.9535,
	lng: -118.3390,
};




const SearchHome = () => {

    const mapRef = useRef();

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat,lng});
        mapRef.current.setZoom(14)
    },[])

    return (
    <div>
        <Navbar />
        <NavBackground />
        <div className="search-bar-container">
            <div className='map-search-container'>
                <Search panTo={panTo} />
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
                    <option>More</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                    <option value=''>$100,000-$200,000</option>
                </select>
            </form>
        </div>
        
        <div className='home-search-map'>
            <Map />
        </div>

        <div className='search-filter-container'>
        <button className='search-filters'>All</button>
        <button className='search-filters'>Home for you</button>
        <button className='search-filters'>Closest to you</button>
        <button className='search-filters'>Newest</button>

            
        </div>
        <div className='slider'>
            <Slider {...sliderSettings}     
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}>
                <div>
                <Card className='carousel-card'>
                            <Card.Img  src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
            <div className='homes-around-you-header'>
                Homes Around You
            </div>
            <div className='slider'>
            <Slider {...sliderSettings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            >
                <div>
                <Card className='carousel-card'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame1} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame2} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame3} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame4} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame5} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame6} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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
                <Card className='carousel-card'>
                            <Card.Img src={Frame7} />
                            <Card.Body>
                                <Card.Header>
                                <div className='carousel-listing-location'>
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

export default SearchHome