import React from 'react';

import Info from './Info/Info';
import Amenities from './Amenities/Amenities';
import ImageAttachment from './ImageAttachment/ImageAttachment';
import Worth from './Worth/Worth';
import Description from './Description/Description';
import Footer from '../../components/Footer/Footer';

const Rent = () => {
	return (
		<div>
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
