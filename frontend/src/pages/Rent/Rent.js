import React from 'react';
import navbarImage from './navbar-image.webp';

import NavBackground from '../../components/NavBackground';
import Info from './Info/Info';
import Amenities from './Amenities/Amenities';
import ImageAttachment from './ImageAttachment/ImageAttachment';
import Worth from './Worth/Worth';
import Description from './Description/Description';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Rent = () => {
	return (
		<div>
			<Navbar />
			<NavBackground src={[{src: navbarImage, width: 60, left: 40}]} opacity={0.4}/>
			<h1
				className='page-header'
				style={{marginBottom: '5em', marginTop: '3em'}}
			>
				Rent Property
			</h1>
			<Info />
			<Amenities />
			<ImageAttachment />
			<Worth />
			<Description />
			<Footer />
		</div>
	);
};

export default Rent;
