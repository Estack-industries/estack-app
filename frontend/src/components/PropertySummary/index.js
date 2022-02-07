import styles from './index.module.css';
import {moneyFormat} from '../../lib/utils';

import houseBeds from './assets/house-beds.svg';
import houseBaths from './assets/house-baths.svg'
import houseSqfts from './assets/house-sqfts.svg';

const HomeStatistics = function({text, icon, alt}) {
	if (!text) return <></>;
	return (
		<p>
			<img src={icon} alt={alt}/>
			{text}
		</p>
	)
}
/**
 * Generates a small summary of a property that includes beds, baths, sqft, price, and a link to the property page.
 * @param {object} prop The property object
 * @param {object} prop.homeData Data about the home.
 * @param {string} prop.homeData.id The id of the home. This links to the property page.
 * @param {string} prop.homeData.image An image of the home.
 * @param {string} prop.homeData.address The address of the home.
 * @param {number} prop.homeData.price The price of the home.
 * @param {number} prop.homeData.beds The number of beds in the home.
 * @param {number} prop.homeData.baths The number of baths in the home.
 * @param {number} prop.homeData.sqft The square footage of the home.
 * @param {boolean} prop.homeData.new Whether or not the home is new.
 * @returns {JSX.Element} A small summary of a property.
 * @example
 *	const homeData = {
 *		id: 'home-id-1',
 *		image: 'www.example.com/image.png',
 *		address: '123 Main Street',
 *		price: 1000000,
 *		beds: 3,
 *		baths: 2,
 *		sqft: 1000,
 *		new: true
 *	};
 *
 *	return <PropertySummary homeData={homeData}/>
 */
const PropertySummary = ({homeData}) => {
	const {id, address, image, price, new: newTag, beds, baths, sqft} = homeData;
	return (
		<a className={styles.favoritedHome} href={'/property' + (id ? '/' + id : '')}>
			<div className={styles.imageContainer}>
				{image && <img src={image} alt={'home at ' + address}/>}
			</div>
			<p className={styles.homeAddress}>{address ?? 'Error fetching addresses'}</p>
			<p className={styles.homePrice}>{price ? moneyFormat(price) : 'Error fetching price'}</p>
			{newTag && <p className={styles.newTag}>New</p>}
			<div className={styles.stats}>
				<HomeStatistics text={beds} icon={houseBeds} alt='Number of beds'/>
				<HomeStatistics text={baths} icon={houseBaths} alt='Number of baths'/>
				<HomeStatistics text={sqft} icon={houseSqfts} alt='Square footage'/>
			</div>
		</a>
	)
}

export default PropertySummary;